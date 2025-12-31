# GetMaxTotalConnectivity

## Interface

```fortran
MODULE FUNCTION obj_GetMaxTotalConnectivity(obj) RESULT(ans)
  CLASS(FEDOF_), INTENT(IN) :: obj
  INTEGER(I4B) :: ans
END FUNCTION obj_GetMaxTotalConnectivity
```

## Description

The `GetMaxTotalConnectivity` method determines the maximum number of degrees of freedom (DOF) associated with any single element in the mesh. This value represents the largest connectivity array size needed to store all DOFs for any element, which is crucial for pre-allocating arrays in finite element assembly operations.

### Parameters

- `obj` - Input, `CLASS(FEDOF_)`, FEDOF object instance
- `ans` - Output, `INTEGER(I4B)`, maximum connectivity size across all elements

### Implementation Details

The implementation iterates through all elements in the mesh, calculates the total DOF for each element, and keeps track of the maximum value:

```fortran
ans = 0
telems = obj%mesh%GetTotalElements()

DO ii = 1, telems
  tdof = obj%GetTotalDOF(globalElement=ii, isLocal=.TRUE.)
  ans = MAX(ans, tdof)
END DO
```

This efficient approach ensures that the returned value is large enough to accommodate the connectivity of any element in the mesh.

## Usage Example

```fortran
! Example to get the maximum connectivity size
INTEGER(I4B) :: maxConnSize
TYPE(FEDOF_) :: myDOF

! Get maximum connectivity size
maxConnSize = myDOF%GetMaxTotalConnectivity()

! Use this value to allocate arrays for element operations
INTEGER(I4B), ALLOCATABLE :: elemDOFs(:)
ALLOCATE (elemDOFs(maxConnSize))

! Now elemDOFs is guaranteed to be large enough for any element
! in the mesh, regardless of element type or polynomial order
```

## Important Notes

1. This method is particularly valuable in heterogeneous meshes where different element types or polynomial orders are used
2. The returned value is often cached in the `maxTotalConnectivity` member variable to avoid recalculation
3. This method can be computationally expensive for large meshes as it loops through all elements

## Related Methods

- `GetTotalDOF` - Used internally to calculate the DOF count for each element
- `GetConnectivity` - Returns the actual connectivity for a specific element
- `GetConnectivity_` - Lower-level method for retrieving element connectivity

The `GetMaxTotalConnectivity` method is an important utility function for memory management in finite element codes, ensuring that sufficient memory is allocated for element-wise operations without excessive over-allocation.

## Example 1

import EXAMPLE71 from "./examples/_GetMaxTotalConnectivity_test_1.md";

<EXAMPLE71 />

## Example 2

import EXAMPLE72 from "./examples/_GetMaxTotalConnectivity_test_2.md";

<EXAMPLE72 />
