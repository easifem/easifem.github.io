# GetTotalEntities

The `GetTotalEntities` method retrieves the total count of different entity types (vertices, edges, faces, cells) either for a specific element or for the entire mesh. This information is crucial for many mesh operations and finite element calculations.

## Interface

```fortran
INTERFACE
  MODULE FUNCTION GetTotalEntities1(obj, globalElement, islocal) &
    RESULT(ans)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: globalElement
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: islocal
    INTEGER(I4B) :: ans(4)
  END FUNCTION GetTotalEntities1
END INTERFACE

INTERFACE
  MODULE FUNCTION GetTotalEntities2(obj) &
    RESULT(ans)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    INTEGER(I4B) :: ans(4)
  END FUNCTION GetTotalEntities2
END INTERFACE
```

## Syntax

```fortran
! Get entity counts for a specific element
entityCounts = mesh%GetTotalEntities(globalElement, [islocal])

! Get entity counts for the entire mesh
meshEntityCounts = mesh%GetTotalEntities()
```

## Parameters

| Parameter       | Type                   | Intent          | Description                                                 |
| --------------- | ---------------------- | --------------- | ----------------------------------------------------------- |
| `obj`           | `CLASS(AbstractMesh_)` | `IN`            | The mesh object                                             |
| `globalElement` | `INTEGER(I4B)`         | `IN`            | Global or local element number                              |
| `islocal`       | `LOGICAL(LGT)`         | `IN` (optional) | If true, globalElement is treated as a local element number |

## Return Value

| Version          | Type              | Description                                                    |
| ---------------- | ----------------- | -------------------------------------------------------------- |
| Element-specific | `INTEGER(I4B)(4)` | [# of vertices, # of edges, # of faces, # of cells (always 1)] |
| Mesh-wide        | `INTEGER(I4B)(4)` | [total nodes, total edges, total faces, total elements]        |

## Description

`GetTotalEntities` provides information about the number of entities in the mesh or in a specific element. It has two versions:

1. Element-specific version returns an array where:
   - ans(1) = Total number of nodes (vertices) in the element
   - ans(2) = Total number of edges in the element
   - ans(3) = Total number of faces in the element
   - ans(4) = 1 (representing the element itself as a cell)

2. Mesh-wide version returns an array where:
   - ans(1) = Total number of nodes in the mesh
   - ans(2) = Total number of edges in the mesh
   - ans(3) = Total number of faces in the mesh
   - ans(4) = Total number of elements (cells) in the mesh

This information is essential for many mesh operations, including entity numbering, connectivity establishment, and finite element calculations.

## Example Usage

```fortran
TYPE(Mesh_) :: mesh
INTEGER(I4B) :: elemNum
INTEGER(I4B) :: elemEntities(4), meshEntities(4)

! Initialize mesh, elemNum...

! Get entity counts for a specific element
elemEntities = mesh%GetTotalEntities(elemNum)
PRINT*, "Element has", elemEntities(1), "vertices,", elemEntities(2), "edges, and", &
  elemEntities(3), "faces"

! Get entity counts for the entire mesh
meshEntities = mesh%GetTotalEntities()
PRINT *, "Mesh has", meshEntities(1), "nodes,", meshEntities(2), "edges,", &
  meshEntities(3), "faces, and", meshEntities(4), "elements"
```
