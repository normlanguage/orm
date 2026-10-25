# orm Skill

Use this skill to work with Norm module `orm` version 5. Use only declarations listed below.

## `orm`

Source: `Basic.norm`

### `Basic`

```norm
annotation Basic implements FieldTarget, FunctionTarget, RuntimeRetention
```

#### `fetch`

```norm
FetchType fetch
```

Type: `FetchType`

#### `optional`

```norm
Boolean optional
```

Type: `Boolean`

#### `Basic`

```norm
Basic(FetchType? fetch, Boolean? optional)
```

Parameters:

- `fetch`: `FetchType?`
- `optional`: `Boolean?`

## `orm`

Source: `CascadeType.norm`

### `CascadeType`

```norm
enum CascadeType
```

#### `ALL`

```norm
ALL
```

#### `DETACH`

```norm
DETACH
```

#### `MERGE`

```norm
MERGE
```

#### `PERSIST`

```norm
PERSIST
```

#### `REFRESH`

```norm
REFRESH
```

#### `REMOVE`

```norm
REMOVE
```

## `orm`

Source: `Column.norm`

### `Column`

```norm
annotation Column implements FieldTarget, FunctionTarget, RuntimeRetention
```

#### `columnDefinition`

```norm
String columnDefinition
```

Type: `String`

#### `insertable`

```norm
Boolean insertable
```

Type: `Boolean`

#### `length`

```norm
Integer length
```

Type: `Integer`

#### `name`

```norm
String name
```

Type: `String`

#### `nullable`

```norm
Boolean nullable
```

Type: `Boolean`

#### `precision`

```norm
Integer precision
```

Type: `Integer`

#### `scale`

```norm
Integer scale
```

Type: `Integer`

#### `table`

```norm
String table
```

Type: `String`

#### `unique`

```norm
Boolean unique
```

Type: `Boolean`

#### `updatable`

```norm
Boolean updatable
```

Type: `Boolean`

#### `Column`

```norm
Column(String? columnDefinition, Boolean? insertable, Integer? length, String? name, Boolean? nullable, Integer? precision, Integer? scale, String? table, Boolean? unique, Boolean? updatable)
```

Parameters:

- `columnDefinition`: `String?`
- `insertable`: `Boolean?`
- `length`: `Integer?`
- `name`: `String?`
- `nullable`: `Boolean?`
- `precision`: `Integer?`
- `scale`: `Integer?`
- `table`: `String?`
- `unique`: `Boolean?`
- `updatable`: `Boolean?`

## `orm`

Source: `Embeddable.norm`

### `Embeddable`

```norm
annotation Embeddable implements TypeTarget, RuntimeRetention
```

## `orm`

Source: `Embedded.norm`

### `Embedded`

```norm
annotation Embedded implements FieldTarget, FunctionTarget, RuntimeRetention
```

## `orm`

Source: `Entity.norm`

### `Entity`

```norm
annotation Entity implements TypeTarget, RuntimeRetention
```

#### `name`

```norm
String name
```

Type: `String`

#### `Entity`

```norm
Entity(String? name)
```

Parameters:

- `name`: `String?`

## `orm`

Source: `EntityManager.norm`

### `EntityManager`

```norm
interface EntityManager extends AutoCloseable
```

#### `clear`

```norm
Void clear()
```

Returns: `Void`

#### `close`

```norm
Void close()
```

Returns: `Void`

#### `contains`

```norm
Boolean contains(Any? arg0)
```

Parameters:

- `arg0`: `Any?`

Returns: `Boolean`

#### `createQuery`

```norm
TypedQuery<T>? createQuery<T>(String? arg0, Class<T>? arg1)
```

Type parameters:

- `T`

Parameters:

- `arg0`: `String?`
- `arg1`: `Class<T>?`

Returns: `TypedQuery<T>?`

#### `detach`

```norm
Void detach(Any? arg0)
```

Parameters:

- `arg0`: `Any?`

Returns: `Void`

#### `find`

```norm
T? find<T>(Class<T>? arg0, Any? arg1)
```

Type parameters:

- `T`

Parameters:

- `arg0`: `Class<T>?`
- `arg1`: `Any?`

Returns: `T?`

#### `flush`

```norm
Void flush()
```

Returns: `Void`

#### `isOpen`

```norm
Boolean isOpen()
```

Returns: `Boolean`

#### `merge`

```norm
T? merge<T>(T? arg0)
```

Type parameters:

- `T`

Parameters:

- `arg0`: `T?`

Returns: `T?`

#### `persist`

```norm
Void persist(Any? arg0)
```

Parameters:

- `arg0`: `Any?`

Returns: `Void`

#### `remove`

```norm
Void remove(Any? arg0)
```

Parameters:

- `arg0`: `Any?`

Returns: `Void`

## `orm`

Source: `EnumType.norm`

### `EnumType`

```norm
enum EnumType
```

#### `ORDINAL`

```norm
ORDINAL
```

#### `STRING`

```norm
STRING
```

## `orm`

Source: `Enumerated.norm`

### `Enumerated`

```norm
annotation Enumerated implements FieldTarget, FunctionTarget, RuntimeRetention
```

#### `value`

```norm
EnumType value
```

Type: `EnumType`

#### `Enumerated`

```norm
Enumerated(EnumType? value)
```

Parameters:

- `value`: `EnumType?`

## `orm`

Source: `FetchType.norm`

### `FetchType`

```norm
enum FetchType
```

#### `EAGER`

```norm
EAGER
```

#### `LAZY`

```norm
LAZY
```

## `orm`

Source: `GeneratedValue.norm`

### `GeneratedValue`

```norm
annotation GeneratedValue implements FieldTarget, FunctionTarget, RuntimeRetention
```

#### `generator`

```norm
String generator
```

Type: `String`

#### `strategy`

```norm
GenerationType strategy
```

Type: `GenerationType`

#### `GeneratedValue`

```norm
GeneratedValue(String? generator, GenerationType? strategy)
```

Parameters:

- `generator`: `String?`
- `strategy`: `GenerationType?`

## `orm`

Source: `GenerationType.norm`

### `GenerationType`

```norm
enum GenerationType
```

#### `AUTO`

```norm
AUTO
```

#### `IDENTITY`

```norm
IDENTITY
```

#### `SEQUENCE`

```norm
SEQUENCE
```

#### `TABLE`

```norm
TABLE
```

#### `UUID`

```norm
UUID
```

## `orm`

Source: `Id.norm`

### `Id`

```norm
annotation Id implements FieldTarget, FunctionTarget, RuntimeRetention, IdentityField
```

## `orm`

Source: `JavaArrays.norm`

### `JavaCascadeTypeArray`

```norm
class JavaCascadeTypeArray
```

#### `JavaCascadeTypeArray`

```norm
JavaCascadeTypeArray(JavaCascadeTypeArrayBindingToken token)
```

Parameters:

- `token`: `JavaCascadeTypeArrayBindingToken`

#### `size`

```norm
Integer size()
```

Returns: `Integer`

#### `get`

```norm
CascadeType? get(Integer index)
```

Parameters:

- `index`: `Integer`

Returns: `CascadeType?`

#### `set`

```norm
Void set(Integer index, CascadeType? value)
```

Parameters:

- `index`: `Integer`
- `value`: `CascadeType?`

Returns: `Void`

### `javaCascadeTypeArrayNew`

```norm
JavaCascadeTypeArray javaCascadeTypeArrayNew(Integer size)
```

Parameters:

- `size`: `Integer`

Returns: `JavaCascadeTypeArray`

## `orm`

Source: `JoinColumn.norm`

### `JoinColumn`

```norm
annotation JoinColumn implements FieldTarget, FunctionTarget, RuntimeRetention, RepeatableAnnotation
```

#### `columnDefinition`

```norm
String columnDefinition
```

Type: `String`

#### `insertable`

```norm
Boolean insertable
```

Type: `Boolean`

#### `name`

```norm
String name
```

Type: `String`

#### `nullable`

```norm
Boolean nullable
```

Type: `Boolean`

#### `referencedColumnName`

```norm
String referencedColumnName
```

Type: `String`

#### `table`

```norm
String table
```

Type: `String`

#### `unique`

```norm
Boolean unique
```

Type: `Boolean`

#### `updatable`

```norm
Boolean updatable
```

Type: `Boolean`

#### `JoinColumn`

```norm
JoinColumn(String? columnDefinition, Boolean? insertable, String? name, Boolean? nullable, String? referencedColumnName, String? table, Boolean? unique, Boolean? updatable)
```

Parameters:

- `columnDefinition`: `String?`
- `insertable`: `Boolean?`
- `name`: `String?`
- `nullable`: `Boolean?`
- `referencedColumnName`: `String?`
- `table`: `String?`
- `unique`: `Boolean?`
- `updatable`: `Boolean?`

## `orm`

Source: `ManyToMany.norm`

### `ManyToMany`

```norm
annotation ManyToMany implements FieldTarget, FunctionTarget, RuntimeRetention
```

#### `cascade`

```norm
List<CascadeType> cascade
```

Type: `List<CascadeType>`

#### `fetch`

```norm
FetchType fetch
```

Type: `FetchType`

#### `mappedBy`

```norm
String mappedBy
```

Type: `String`

#### `targetEntity`

```norm
Class<?> targetEntity
```

Type: `Class<?>`

#### `ManyToMany`

```norm
ManyToMany(List<CascadeType>? cascade, FetchType? fetch, String? mappedBy, Class<?>? targetEntity)
```

Parameters:

- `cascade`: `List<CascadeType>?`
- `fetch`: `FetchType?`
- `mappedBy`: `String?`
- `targetEntity`: `Class<?>?`

## `orm`

Source: `ManyToOne.norm`

### `ManyToOne`

```norm
annotation ManyToOne implements FieldTarget, FunctionTarget, RuntimeRetention
```

#### `cascade`

```norm
List<CascadeType> cascade
```

Type: `List<CascadeType>`

#### `fetch`

```norm
FetchType fetch
```

Type: `FetchType`

#### `optional`

```norm
Boolean optional
```

Type: `Boolean`

#### `targetEntity`

```norm
Class<?> targetEntity
```

Type: `Class<?>`

#### `ManyToOne`

```norm
ManyToOne(List<CascadeType>? cascade, FetchType? fetch, Boolean? optional, Class<?>? targetEntity)
```

Parameters:

- `cascade`: `List<CascadeType>?`
- `fetch`: `FetchType?`
- `optional`: `Boolean?`
- `targetEntity`: `Class<?>?`

## `orm`

Source: `MapsId.norm`

### `MapsId`

```norm
annotation MapsId implements FieldTarget, FunctionTarget, RuntimeRetention
```

#### `value`

```norm
String value
```

Type: `String`

#### `MapsId`

```norm
MapsId(String? value)
```

Parameters:

- `value`: `String?`

## `orm`

Source: `OneToMany.norm`

### `OneToMany`

```norm
annotation OneToMany implements FieldTarget, FunctionTarget, RuntimeRetention
```

#### `cascade`

```norm
List<CascadeType> cascade
```

Type: `List<CascadeType>`

#### `fetch`

```norm
FetchType fetch
```

Type: `FetchType`

#### `mappedBy`

```norm
String mappedBy
```

Type: `String`

#### `orphanRemoval`

```norm
Boolean orphanRemoval
```

Type: `Boolean`

#### `targetEntity`

```norm
Class<?> targetEntity
```

Type: `Class<?>`

#### `OneToMany`

```norm
OneToMany(List<CascadeType>? cascade, FetchType? fetch, String? mappedBy, Boolean? orphanRemoval, Class<?>? targetEntity)
```

Parameters:

- `cascade`: `List<CascadeType>?`
- `fetch`: `FetchType?`
- `mappedBy`: `String?`
- `orphanRemoval`: `Boolean?`
- `targetEntity`: `Class<?>?`

## `orm`

Source: `OneToOne.norm`

### `OneToOne`

```norm
annotation OneToOne implements FieldTarget, FunctionTarget, RuntimeRetention
```

#### `cascade`

```norm
List<CascadeType> cascade
```

Type: `List<CascadeType>`

#### `fetch`

```norm
FetchType fetch
```

Type: `FetchType`

#### `mappedBy`

```norm
String mappedBy
```

Type: `String`

#### `optional`

```norm
Boolean optional
```

Type: `Boolean`

#### `orphanRemoval`

```norm
Boolean orphanRemoval
```

Type: `Boolean`

#### `targetEntity`

```norm
Class<?> targetEntity
```

Type: `Class<?>`

#### `OneToOne`

```norm
OneToOne(List<CascadeType>? cascade, FetchType? fetch, String? mappedBy, Boolean? optional, Boolean? orphanRemoval, Class<?>? targetEntity)
```

Parameters:

- `cascade`: `List<CascadeType>?`
- `fetch`: `FetchType?`
- `mappedBy`: `String?`
- `optional`: `Boolean?`
- `orphanRemoval`: `Boolean?`
- `targetEntity`: `Class<?>?`

## `orm`

Source: `OrderBy.norm`

### `OrderBy`

```norm
annotation OrderBy implements FieldTarget, FunctionTarget, RuntimeRetention
```

#### `value`

```norm
String value
```

Type: `String`

#### `OrderBy`

```norm
OrderBy(String? value)
```

Parameters:

- `value`: `String?`

## `orm`

Source: `PersistenceContext.norm`

### `PersistenceContext`

```norm
annotation PersistenceContext implements TypeTarget, FieldTarget, FunctionTarget, RuntimeRetention, RepeatableAnnotation
```

#### `name`

```norm
String name
```

Type: `String`

#### `unitName`

```norm
String unitName
```

Type: `String`

#### `PersistenceContext`

```norm
PersistenceContext(String? name, String? unitName)
```

Parameters:

- `name`: `String?`
- `unitName`: `String?`

## `orm`

Source: `Query.norm`

### `Query`

```norm
interface Query
```

## `orm`

Source: `Repository.norm`

### `Repository`

```norm
class Repository<E, I>
```

Type parameters:

- `E`
- `I`

#### `Repository`

```norm
Repository(RepositoryContext context)
```

Parameters:

- `context`: `RepositoryContext`

#### `save`

```norm
E save(E entity)
```

Parameters:

- `entity`: `E`

Returns: `E`

#### `update`

```norm
E update(E entity)
```

Parameters:

- `entity`: `E`

Returns: `E`

#### `find`

```norm
E? find(I id)
```

Parameters:

- `id`: `I`

Returns: `E?`

#### `delete`

```norm
Void delete(E entity)
```

Parameters:

- `entity`: `E`

Returns: `Void`

#### `attached`

```norm
Boolean attached(E entity)
```

Parameters:

- `entity`: `E`

Returns: `Boolean`

#### `flush`

```norm
Void flush()
```

Returns: `Void`

#### `clear`

```norm
Void clear()
```

Returns: `Void`

#### `findAll`

```norm
List<E?>? findAll()
```

Returns: `List<E?>?`

#### `findWhere`

```norm
List<E?>? findWhere<V>(Field<E, V> field, V value)
```

Type parameters:

- `V`

Parameters:

- `field`: `Field<E, V>`
- `value`: `V`

Returns: `List<E?>?`

#### `findFirstWhere`

```norm
E? findFirstWhere<V>(Field<E, V> field, V value)
```

Type parameters:

- `V`

Parameters:

- `field`: `Field<E, V>`
- `value`: `V`

Returns: `E?`

#### `findWhereOrdered`

```norm
List<E?>? findWhereOrdered<V, O>(Field<E, V> field, V value, Field<E, O> order, Boolean ascending)
```

Type parameters:

- `V`
- `O`

Parameters:

- `field`: `Field<E, V>`
- `value`: `V`
- `order`: `Field<E, O>`
- `ascending`: `Boolean`

Returns: `List<E?>?`

#### `page`

```norm
List<E?>? page(Integer offset, Integer limit)
```

Parameters:

- `offset`: `Integer`
- `limit`: `Integer`

Returns: `List<E?>?`

#### `count`

```norm
Long count()
```

Returns: `Long`

## `orm`

Source: `RepositoryContext.norm`

### `RepositoryContext`

```norm
interface RepositoryContext
```

#### `store`

```norm
EntityManager store()
```

Returns: `EntityManager`

## `orm`

Source: `Table.norm`

### `Table`

```norm
annotation Table implements TypeTarget, RuntimeRetention
```

#### `catalog`

```norm
String catalog
```

Type: `String`

#### `name`

```norm
String name
```

Type: `String`

#### `schema`

```norm
String schema
```

Type: `String`

#### `Table`

```norm
Table(String? catalog, String? name, String? schema)
```

Parameters:

- `catalog`: `String?`
- `name`: `String?`
- `schema`: `String?`

## `orm`

Source: `Transient.norm`

### `Transient`

```norm
annotation Transient implements FieldTarget, FunctionTarget, RuntimeRetention
```

## `orm`

Source: `TypedQuery.norm`

### `TypedQuery`

```norm
interface TypedQuery<X> extends Query
```

Type parameters:

- `X`

#### `getResultList`

```norm
JavaList<X>? getResultList()
```

Returns: `JavaList<X>?`

#### `getSingleResultOrNull`

```norm
X? getSingleResultOrNull()
```

Returns: `X?`

#### `setFirstResult`

```norm
TypedQuery<X>? setFirstResult(Integer arg0)
```

Parameters:

- `arg0`: `Integer`

Returns: `TypedQuery<X>?`

#### `setMaxResults`

```norm
TypedQuery<X>? setMaxResults(Integer arg0)
```

Parameters:

- `arg0`: `Integer`

Returns: `TypedQuery<X>?`

#### `setParameter`

```norm
TypedQuery<X>? setParameter(String? arg0, Any? arg1)
```

Parameters:

- `arg0`: `String?`
- `arg1`: `Any?`

Returns: `TypedQuery<X>?`

## `orm`

Source: `Version.norm`

### `Version`

```norm
annotation Version implements FieldTarget, FunctionTarget, RuntimeRetention
```

