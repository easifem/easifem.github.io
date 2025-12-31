# GetFaceDOF

The `GetFaceDOF` generic method in the `FEDOF_Class` is used to retrieve the degrees of freedom (DOF) associated with a face in a finite element mesh. This method has two specific implementations with different parameter sets.

## Method Description

The `GetFaceDOF` generic method retrieves face degrees of freedom through two different interfaces:

1. `GetFaceDOF1` - Gets DOFs directly using a global face number
2. `GetFaceDOF2` - Gets DOFs using a global element number and local face number within that element

## Interface 1

```fortran
SUBROUTINE obj_GetFaceDOF1(obj, globalFace, ans, tsize, islocal)
```

### Parameters

- `obj` - Input, `CLASS(FEDOF_)`, FEDOF object instance
- `globalFace` - Input, `INTEGER(I4B)`, global face number
- `ans` - Output, `INTEGER(I4B)(:)`, array to store face degrees of freedom
- `tsize` - Output, `INTEGER(I4B)`, total size of data written to `ans`
- `islocal` - Optional Input, `LOGICAL(LGT)`, if true, `globalFace` is treated as a local face number

### Implementation Details

The implementation in `GetMethods` submodule uses the internal face index array structure:

```fortran
INTEGER(I4B) :: ii
tsize = 0
DO ii = obj%faceIA(globalface), obj%faceIA(globalface + 1) - 1
  tsize = tsize + 1
  ans(tsize) = ii
END DO
```

The method retrieves DOFs from the face sparsity data structure using the compressed sparse row format stored in `faceIA`.

## Interface 2

```fortran
SUBROUTINE obj_GetFaceDOF2(obj, globalElement, localFaceNumber, ans, tsize, islocal)
```

### Parameters

- `obj` - Input, `CLASS(FEDOF_)`, DOF object
- `globalElement` - Input, `INTEGER(I4B)`, global or local element number
- `localFaceNumber` - Input, `INTEGER(I4B)`, local face number in global element
- `ans` - Output, `INTEGER(I4B)(:)`, array to store face degrees of freedom
- `tsize` - Output, `INTEGER(I4B)`, total size of data written to `ans`
- `islocal` - Optional Input, `LOGICAL(LGT)`, if true, `globalElement` is treated as a local element number

### Implementation Details

This implementation first converts the element and local face information to a global face number, then calls the first implementation:

```fortran
INTEGER(I4B) :: globalFace
globalFace = obj%mesh%GetGlobalFaceNumber(globalElement=globalElement, &
                             islocal=islocal, localFaceNumber=localFaceNumber)
CALL obj%GetFaceDOF(globalFace=globalFace, ans=ans, tsize=tsize, &
                    islocal=islocal)
```

## Usage Example

```fortran
! Example to get DOFs from a face
INTEGER(I4B) :: faceDOFs(100), totalDOFs
TYPE(FEDOF_) :: myDOF

! Method 1: Using global face number
CALL myDOF%GetFaceDOF(globalFace=5, ans=faceDOFs, tsize=totalDOFs)

! Method 2: Using element and local face number
CALL myDOF%GetFaceDOF(globalElement=10, localFaceNumber=2, ans=faceDOFs, tsize=totalDOFs)
```

## Related Methods

- `GetTotalFaceDOF` - Returns the total number of DOFs on a face
- `GetEdgeDOF` - Similar function but for element edges
- `GetCellDOF` - Gets DOFs for volumetric elements
- `GetVertexDOF` - Gets DOFs for element vertices

Need any additional details about these methods?

## Example

import EXAMPLE93 from "./examples/_GetFaceDOF_test_1.md";

<EXAMPLE93 />
