# ORM

[English](README.md) | [简体中文](README.zh-CN.md)

`orm@2` is Norm ORM's public persistence API, including entity mapping, common associations, managed storage, field-reference queries, and pagination. `Repository<E, I>` obtains the current transaction store through `RepositoryContext` and derives the entity type from `E`. The current JVM provider executes through Jakarta Persistence 3.2. A standalone example is in `examples/basic`.
