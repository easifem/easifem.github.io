# GetGlobalElemShapeData

The `GetGlobalElemShapeData` method computes the global element shape function data (including shape functions, their derivatives, and related information) for a specified element. This method takes the local element shape function data and transforms it to the global coordinate system using the nodal coordinates provided in `xij`.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE GetGlobalElemShapeData(obj, globalElement, elemsd, &
                                           xij, geoElemsd, islocal)
    CLASS(FEDOF_), INTENT(INOUT) :: obj
    !! Abstract finite element
    INTEGER(I4B), INTENT(IN) :: globalElement
    !! shape function data
    TYPE(ElemshapeData_), INTENT(INOUT) :: elemsd
    !! global element shape data
    REAL(DFP), INTENT(IN) :: xij(:, :)
    !! nodal coordinates of element
    !! The number of rows in xij should be same as the spatial dimension
    !! The number of columns should be same as the number of nodes
    !! present in the reference element in geoElemsd.
    TYPE(ElemShapeData_), OPTIONAL, INTENT(INOUT) :: geoElemsd
    !! shape function data for geometry which contains local shape function
    !! data. If not present then the local shape function in elemsd
    !! will be used for geometry. This means we are dealing with
    !! isoparametric shape functions.
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: islocal
    !! if true then the global element is a local element
  END SUBROUTINE GetGlobalElemShapeData
END INTERFACE
```

## Parameters

| Parameter       | Type                   | Intent                    | Description                                                                                                                                                                           |
| --------------- | ---------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `obj`           | `CLASS(FEDOF_)`        | `INTENT(INOUT)`           | The FEDOF object instance                                                                                                                                                             |
| `globalElement` | `INTEGER(I4B)`         | `INTENT(IN)`              | The global element number for which to compute shape function data                                                                                                                    |
| `elemsd`        | `TYPE(ElemshapeData_)` | `INTENT(INOUT)`           | Output variable that will contain the global element shape data                                                                                                                       |
| `xij`           | `REAL(DFP)`            | `INTENT(IN)`              | Nodal coordinates of the element. The number of rows in `xij` should match the spatial dimension, and the number of columns should match the number of nodes in the reference element |
| `geoElemsd`     | `TYPE(ElemShapeData_)` | `OPTIONAL, INTENT(INOUT)` | Shape function data for geometry which contains local shape function data. If not present, the local shape function in `elemsd` will be used for geometry (isoparametric case)        |
| `islocal`       | `LOGICAL(LGT)`         | `OPTIONAL, INTENT(IN)`    | If true, `globalElement` is treated as a local element number rather than a global element number                                                                                     |

## Implementation Details

The method performs the following operations:

1. Obtains the element topology index for the specified element
2. Performs error checking in debug mode to ensure the element topology index is valid and the finite element pointer is associated
3. Delegates the actual computation to the appropriate finite element object's `GetGlobalElemShapeData` method

## Usage Example

```fortran
TYPE(FEDOF_) :: myFEDOF
TYPE(ElemshapeData_) :: elemsd
REAL(DFP), ALLOCATABLE :: xij(:, :)
INTEGER(I4B) :: elemNum

! Initialize myFEDOF and prepare xij with nodal coordinates
! ...

! Get the global element shape data
CALL myFEDOF%GetGlobalElemShapeData(globalElement=elemNum, elemsd=elemsd, xij=xij)

! Now elemsd contains the shape functions and derivatives in the global coordinate system
```

## Notes

- This method is part of the core functionality for finite element computations, as it provides the necessary information for evaluating functions and their derivatives in the global coordinate system.
- The transformation from local to global coordinates is handled internally by the finite element implementation.
- If `geoElemsd` is not provided, the method will use an isoparametric formulation where the same shape functions are used for both the solution field and the geometry.
- Debug mode provides additional error checking to ensure the element topology index is valid and required pointers are associated.

Would you like additional information or clarification about any aspect of this method?

## Example 1

import EXAMPLE65 from "./examples/_GetLocalElemshapeData_test_1.md";

<EXAMPLE65 />

## Example 2

import EXAMPLE66 from "./examples/_GetLocalElemshapeData_test_2.md";

<EXAMPLE66 />
