# IsDomainBoundaryElement

The `IsDomainBoundaryElement` method checks if a specific element is a domain boundary element in the mesh.

## Interface

```fortran
INTERFACE
  MODULE FUNCTION obj_isDomainBoundaryElement(obj, globalElement, islocal) &
    & RESULT(ans)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: globalElement
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: islocal
    LOGICAL(LGT) :: ans
  END FUNCTION obj_isDomainBoundaryElement
END INTERFACE
```

## Syntax

```fortran
RESULT = mesh%IsDomainBoundaryElement(globalElement, [islocal])
```

## Parameters

| Parameter       | Type                   | Intent          | Description                                                 |
| --------------- | ---------------------- | --------------- | ----------------------------------------------------------- |
| `obj`           | `CLASS(AbstractMesh_)` | `IN`            | The mesh object                                             |
| `globalElement` | `INTEGER(I4B)`         | `IN`            | Global or local element number to check                     |
| `islocal`       | `LOGICAL(LGT)`         | `IN` (optional) | If true, globalElement is treated as a local element number |

## Return Value

| Type           | Description                                      |
| -------------- | ------------------------------------------------ |
| `LOGICAL(LGT)` | True if the element is a domain boundary element |

## Description

`IsDomainBoundaryElement` determines whether a specified element is a domain boundary element in the mesh. A domain boundary element is a boundary element that lies on the boundary of the computational domain, as opposed to an internal boundary between subdomains.

## Implementation Details

The method:

1. Converts the global element number to a local element number if necessary
2. Checks if the element type is DOMAIN_BOUNDARY_ELEMENT

## Example Usage

```fortran
TYPE(Mesh_) :: mesh
INTEGER(I4B) :: elemNum
LOGICAL(LGT) :: isDomainBoundary

! Initialize mesh, elemNum...

! Check if an element is on the domain boundary
isDomainBoundary = mesh%IsDomainBoundaryElement(elemNum)

IF (isDomainBoundary) THEN
  PRINT *, "Element", elemNum, "is on the domain boundary"
ELSE
  PRINT *, "Element", elemNum, "is not on the domain boundary"
END IF
```
