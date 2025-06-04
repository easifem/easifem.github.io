# IsElementActive

The `IsElementActive` method checks if a specific element is active in the mesh.

## Interface

```fortran
INTERFACE
  MODULE FUNCTION isElementActive(obj, globalElement, islocal) &
    RESULT(ans)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: globalElement
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: islocal
    LOGICAL(LGT) :: ans
  END FUNCTION isElementActive
END INTERFACE
```

## Syntax

```fortran
RESULT = mesh%IsElementActive(globalElement, [islocal])
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
| `LOGICAL(LGT)` | True if the element is active in the mesh |

## Description

`IsElementActive` determines whether a specified element is active in the mesh. Elements can be deactivated during adaptive mesh refinement or in multi-mesh simulations.

## Implementation Details

The method:

1. Converts the global element number to a local element number if necessary
2. Checks the active status from the element data

## Example Usage

```fortran
TYPE(Mesh_) :: mesh
INTEGER(I4B) :: elemNum
LOGICAL(LGT) :: isActive

! Initialize mesh, elemNum...

! Check if an element is active
isActive = mesh%IsElementActive(elemNum)

IF (isActive) THEN
  PRINT *, "Element", elemNum, "is active"
ELSE
  PRINT *, "Element", elemNum, "is inactive"
END IF
```
