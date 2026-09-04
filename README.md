# ORM

`orm@2` 是 Norm ORM 的公共持久化面，包含实体映射、常用关联、托管存储、字段引用查询与分页。`Repository<E, I>` 通过 `RepositoryContext` 获取当前事务存储并从 `E` 推导实体类型。当前 JVM Provider 通过 Jakarta Persistence 3.2 执行。独立使用示例位于 `examples/basic`。
