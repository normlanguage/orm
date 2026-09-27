# ORM samples

[English](README.md) | [简体中文](README.zh-CN.md)

[The account sample](orm/example/Main.norm) maps an `Account` entity to H2. A repository saves the account, finds it by ID, and updates its name inside transactions. The local HTTP routes expose those three operations only so [the verifier](verify.mjs) can exercise the real database from another process.

From the repository root, start the sample:

```sh
norm run samples/orm/example/Main.norm
```

After the server prints `Micronaut: http://127.0.0.1:18775`, run this in another terminal with Node.js 24 or newer:

```sh
node samples/verify.mjs
```

Expected output: `created / alice / updated / alice-2`. The verifier checks that the first read returns `alice`, a separate read after the update returns `alice-2`, and unknown IDs return HTTP 404. You can run it again while the server stays up. The database is in memory and is discarded when you stop the server with Ctrl+C.