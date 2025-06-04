# GetBoundingEntity

The `GetBoundingEntity` method retrieves the bounding entity numbers of the mesh. Bounding entities are higher-dimensional geometric entities that contain or bound the current mesh.

## Interface

```fortran
INTERFACE
  MODULE FUNCTION GetBoundingEntity(obj) RESULT(ans)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    INTEGER(I4B), ALLOCATABLE :: ans(:)
  END FUNCTION GetBoundingEntity
END INTERFACE
```

## Syntax

```fortran
boundingEntities = mesh%GetBoundingEntity()
```

## Parameters

| Parameter | Type                   | Intent | Description     |
| --------- | ---------------------- | ------ | --------------- |
| `obj`     | `CLASS(AbstractMesh_)` | `IN`   | The mesh object |

## Return Value

| Type                           | Description                      |
| ------------------------------ | -------------------------------- |
| `INTEGER(I4B), ALLOCATABLE(:)` | Array of bounding entity numbers |

## Description

`GetBoundingEntity` returns an array containing the entity numbers of geometric entities that bound or contain the current mesh. These bounding entities are typically higher-dimensional geometric objects in the model hierarchy.

For example:

- For a mesh representing a surface, the bounding entities might be the volumes that share this surface
- For a mesh representing a curve, the bounding entities might be the surfaces that share this curve

If no bounding entities are defined, the method returns an empty array.

This information is useful for understanding the geometric context of the mesh and for operations that involve neighboring domains.

## Implementation Note

The method description in the class table states "Returns the nodal coordinates," but the actual implementation returns bounding entity numbers. The documentation here follows the implementation.

## Example Usage

```fortran
TYPE(Mesh_) :: mesh
INTEGER(I4B), ALLOCATABLE :: boundingEntities(:)

! Initialize mesh...

! Get the bounding entities
boundingEntities = mesh%GetBoundingEntity()

! Check if there are any bounding entities
IF (SIZE(boundingEntities) > 0) THEN
  PRINT *, "Mesh is bounded by", SIZE(boundingEntities), "entities:"
  PRINT *, boundingEntities
ELSE
  PRINT *, "Mesh has no defined bounding entities"
END IF
```
