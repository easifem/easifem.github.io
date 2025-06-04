# IsElementPresent

The `IsElementPresent` method checks if a specific element number exists in the mesh.

## Interface

```fortran
INTERFACE
  MODULE FUNCTION isElementPresent(obj, globalElement, islocal) &
    RESULT(ans)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: globalElement
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: islocal
    LOGICAL(LGT) :: ans
  END FUNCTION isElementPresent
END INTERFACE
```

## Syntax

```fortran
RESULT = mesh%IsElementPresent(globalElement, [islocal])
```

## Parameters

| Parameter       | Type                   | Intent          | Description                                                 |
| --------------- | ---------------------- | --------------- | ----------------------------------------------------------- |
| `obj`           | `CLASS(AbstractMesh_)` | `IN`            | The mesh object                                             |
| `globalElement` | `INTEGER(I4B)`         | `IN`            | Global or local element number to check                     |
| `islocal`       | `LOGICAL(LGT)`         | `IN` (optional) | If true, globalElement is treated as a local element number |

## Return Value

| Type           | Description                                |
| -------------- | ------------------------------------------ |
| `LOGICAL(LGT)` | True if the element is present in the mesh |

## Description

`IsElementPresent` determines whether a specified element number exists in the mesh. It returns a logical value indicating whether the element is present.

## Implementation Details

The method checks:

- If the element is being treated as local, it verifies it's within the valid range of local elements
- If the element is global, it checks if it's within the valid range of global elements and has a valid local mapping

## Example Usage

```fortran
TYPE(Mesh_) :: mesh
INTEGER(I4B) :: elemNum
LOGICAL(LGT) :: isPresent

! Initialize mesh, elemNum...

! Check if an element exists
isPresent = mesh%IsElementPresent(elemNum)

IF (isPresent) THEN
  PRINT *, "Element", elemNum, "exists in the mesh"
ELSE
  PRINT *, "Element", elemNum, "does not exist in the mesh"
END IF
```
