# IsBoundaryElement

The `IsBoundaryElement` method checks if a specific element is a boundary element in the mesh.

## Interface

```fortran
INTERFACE
  MODULE FUNCTION isBoundaryElement(obj, globalElement, islocal) &
    & RESULT(ans)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: globalElement
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: islocal
    LOGICAL(LGT) :: ans
  END FUNCTION isBoundaryElement
END INTERFACE
```

## Syntax

```fortran
RESULT = mesh%IsBoundaryElement(globalElement, [islocal])
```

## Parameters

| Parameter       | Type                   | Intent          | Description                                                 |
| --------------- | ---------------------- | --------------- | ----------------------------------------------------------- |
| `obj`           | `CLASS(AbstractMesh_)` | `IN`            | The mesh object                                             |
| `globalElement` | `INTEGER(I4B)`         | `IN`            | Global or local element number to check                     |
| `islocal`       | `LOGICAL(LGT)`         | `IN` (optional) | If true, globalElement is treated as a local element number |

## Return Value

| Type           | Description                               |
| -------------- | ----------------------------------------- |
| `LOGICAL(LGT)` | True if the element is a boundary element |

## Description

`IsBoundaryElement` determines whether a specified element is a boundary element in the mesh. A boundary element is an element that has at least one face (in 3D) or edge (in 2D) on the boundary of the domain, or equivalently, an element that contains at least one boundary node.

## Implementation Details

The method:

1. Converts the global element number to a local element number if necessary
2. Checks the boundary status from the element data

## Example Usage

```fortran
TYPE(Mesh_) :: mesh
INTEGER(I4B) :: elemNum
LOGICAL(LGT) :: isBoundary

! Initialize mesh, elemNum...

! Check if an element is on the boundary
isBoundary = mesh%IsBoundaryElement(elemNum)

IF (isBoundary) THEN
  PRINT *, "Element", elemNum, "is on the boundary"
ELSE
  PRINT *, "Element", elemNum, "is an internal element"
END IF
```
