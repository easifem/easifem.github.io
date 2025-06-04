# GetOrder

The `GetOrder` method retrieves the polynomial order of elements in the mesh or of a specific element. The element order determines the degree of interpolation functions used in finite element analysis.

## Interface

```fortran
INTERFACE
  MODULE FUNCTION GetOrder1(obj) RESULT(ans)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    INTEGER(I4B) :: ans
  END FUNCTION GetOrder1
END INTERFACE

INTERFACE
  MODULE FUNCTION GetOrder2(obj, globalElement, islocal) RESULT(ans)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: globalElement
    !! global or local element number
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: islocal
    !! if true then global element is local element
    INTEGER(I4B) :: ans
  END FUNCTION GetOrder2
END INTERFACE
```

## Syntax

```fortran
! Get the order of elements in the mesh
meshOrder = mesh%GetOrder()

! Get the order of a specific element
elemOrder = mesh%GetOrder(globalElement, [islocal])
```

## Parameters

| Parameter       | Type                   | Intent          | Description                                                 |
| --------------- | ---------------------- | --------------- | ----------------------------------------------------------- |
| `obj`           | `CLASS(AbstractMesh_)` | `IN`            | The mesh object                                             |
| `globalElement` | `INTEGER(I4B)`         | `IN`            | Global or local element number                              |
| `islocal`       | `LOGICAL(LGT)`         | `IN` (optional) | If true, globalElement is treated as a local element number |

## Return Value

| Type           | Description                        |
| -------------- | ---------------------------------- |
| `INTEGER(I4B)` | Polynomial order of the element(s) |

## Description

`GetOrder` returns the polynomial order of elements in the mesh or of a specific element. The element order is crucial for finite element analysis as it determines the degree of interpolation functions used.

The method has two versions:

1. Get the order of elements in the mesh (note: this version is currently flagged as work-in-progress)
2. Get the order of a specific element

Higher-order elements (order > 1) have additional nodes and can represent curved geometries and higher-degree solutions.

## Example Usage

```fortran
TYPE(Mesh_) :: mesh
INTEGER(I4B) :: elemNum, elemOrder

! Initialize mesh, elemNum...

! Get the order of a specific element
elemOrder = mesh%GetOrder(elemNum)

IF (elemOrder > 1) THEN
PRINT*, "Element", elemNum, "is a higher-order element (order", elemOrder, ")"
ELSE
  PRINT *, "Element", elemNum, "is a linear element"
END IF
```
