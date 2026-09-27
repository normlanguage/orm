# ORM

[English](README.md) | [简体中文](README.zh-CN.md)

`orm@3` is Norm ORM's public persistence API, including entity mapping, common associations, managed storage, field-reference queries, and pagination. `Repository<E, I>` obtains the current transaction store through `RepositoryContext` and derives the entity type from `E`. The current JVM provider executes through Jakarta Persistence 3.2. The [samples](samples/README.md) exercise save, find, and update against H2.
