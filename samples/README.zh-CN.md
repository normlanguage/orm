# ORM 示例

[English](README.md) | [简体中文](README.zh-CN.md)

[账户示例](orm/example/Main.norm)把 `Account` 实体映射到 H2。仓库在事务中保存账户、按 ID 查询并更新名称。本地 HTTP 路由仅用于让[验证脚本](verify.mjs)从另一个进程实际操作数据库。

在仓库根目录启动示例：

```sh
norm run samples/orm/example/Main.norm
```

服务打印 `Micronaut: http://127.0.0.1:18775` 后，在另一终端使用 Node.js 24 或更新版本运行：

```sh
node samples/verify.mjs
```

预期输出：`created / alice / updated / alice-2`。验证脚本检查首次查询返回 `alice`，更新后另一次查询返回 `alice-2`，不存在的 ID 返回 HTTP 404。服务继续运行时可以重复执行。数据库仅存于内存中；按 Ctrl+C 停止服务后数据随之清除。