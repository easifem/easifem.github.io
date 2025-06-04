# GetElemTopologyIndx

The `GetElemTopologyIndx` method returns the topology index of a specific element in the mesh. The topology index is a numerical identifier for the element shape (1 for point, 2 for line, 3 for triangle, etc.).

## Interface

```fortran
INTERFACE
  MODULE FUNCTION GetElemTopologyIndx(obj, globalElement, islocal) &
    RESULT(ans)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: globalElement
    !! global or local element number
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: islocal
    !! if true then global element is local element
    INTEGER(I4B) :: ans
  END FUNCTION GetElemTopologyIndx
END INTERFACE
```

## Syntax

```fortran
topoIndex = mesh%GetElemTopologyIndx(globalElement, [islocal])
```

## Parameters

| Parameter       | Type                   | Intent          | Description                                                 |
| --------------- | ---------------------- | --------------- | ----------------------------------------------------------- |
| `obj`           | `CLASS(AbstractMesh_)` | `IN`            | The mesh object                                             |
| `globalElement` | `INTEGER(I4B)`         | `IN`            | Global or local element number                              |
| `islocal`       | `LOGICAL(LGT)`         | `IN` (optional) | If true, globalElement is treated as a local element number |

## Return Value

| Type           | Description                             |
| -------------- | --------------------------------------- |
| `INTEGER(I4B)` | Topology index of the specified element |

## Description

`GetElemTopologyIndx` returns the topology index for a specified element. The topology index is a numerical identifier that corresponds to specific element shapes:

1. Point
2. Line
3. Triangle
4. Quadrilateral
5. Tetrahedron
6. Hexahedron
7. Prism
8. Pyramid

This index is useful for algorithms that need to handle different element types differently.

## Example Usage

```fortran
TYPE(Mesh_) :: mesh
INTEGER(I4B) :: elemNum, topoIndex

! Initialize mesh, elemNum...

! Get the topology index of the element
topoIndex = mesh%GetElemTopologyIndx(elemNum)

! Process based on topology index
SELECT CASE (topoIndex)
CASE (1)
  PRINT *, "Element is a point"
CASE (2)
  PRINT *, "Element is a line"
CASE (3)
  PRINT *, "Element is a triangle"
CASE (4)
  PRINT *, "Element is a quadrilateral"
CASE (5)
  PRINT *, "Element is a tetrahedron"
CASE (6)
  PRINT *, "Element is a hexahedron"
CASE (7)
  PRINT *, "Element is a prism"
CASE (8)
  PRINT *, "Element is a pyramid"
END SELECT
```
