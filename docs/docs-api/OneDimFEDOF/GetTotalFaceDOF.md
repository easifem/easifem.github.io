# GetTotalFaceDOF

The `GetTotalFaceDOF` generic method in the `FEDOF_Class` provides the total number of degrees of freedom (DOF) associated with a face in a finite element mesh.

## Interfaces

From the `FEDOF_Class.F90` file, the `GetTotalFaceDOF` generic method has the following interfaces:

```fortran
PROCEDURE, PASS(obj) :: GetTotalFaceDOF1 => GetTotalFaceDOF1
!! Get total face dof
PROCEDURE, PASS(obj) :: GetTotalFaceDOF2 => GetTotalFaceDOF2
!! Get total face dof from global element and local face number
GENERIC, PUBLIC :: GetTotalFaceDOF => GetTotalFaceDOF1, GetTotalFaceDOF2
```

The specific interfaces are defined as:

```fortran
MODULE FUNCTION GetTotalFaceDOF1(obj, globalFace, islocal) RESULT(ans)
  CLASS(FEDOF_), INTENT(IN) :: obj
  INTEGER(I4B), INTENT(IN) :: globalFace
  LOGICAL(LGT), INTENT(IN), OPTIONAL :: islocal
  INTEGER(I4B) :: ans
END FUNCTION GetTotalFaceDOF1

MODULE FUNCTION GetTotalFaceDOF2(obj, globalElement, localFaceNumber, &
                                 islocal) RESULT(ans)
  CLASS(FEDOF_), INTENT(IN) :: obj
  !! DOF object
  INTEGER(I4B), INTENT(IN) :: globalElement
  !! global or local element number
  INTEGER(I4B), INTENT(IN) :: localFaceNumber
  !! local face number in globall element
  LOGICAL(LGT), INTENT(IN), OPTIONAL :: islocal
  !! if true then globalElement is local element
  INTEGER(I4B) :: ans
  !! Total number of degree of freedom on face
END FUNCTION GetTotalFaceDOF2
```

## Description

The `GetTotalFaceDOF` generic method provides two implementations to retrieve the total face DOF count:

1. `GetTotalFaceDOF1` - Gets total DOF count directly using a global face number
2. `GetTotalFaceDOF2` - Gets total DOF count using a global element number and local face number within that element

## Interface 1: GetTotalFaceDOF1

### Parameters

- `obj` - Input, `CLASS(FEDOF_)`, FEDOF object instance
- `globalFace` - Input, `INTEGER(I4B)`, global face number
- `islocal` - Optional Input, `LOGICAL(LGT)`, if true, `globalFace` is treated as a local face number
- `ans` - Output, `INTEGER(I4B)`, total number of DOFs on the specified face

### Implementation Details

The implementation uses the internal face index array structure to calculate the total DOF count:

```fortran
ans = obj%faceIA(globalface + 1) - obj%faceIA(globalface)
```

This efficiently computes the number of DOFs by finding the difference between consecutive indices in the compressed sparse row format.

## Interface 2: GetTotalFaceDOF2

### Parameters

- `obj` - Input, `CLASS(FEDOF_)`, DOF object
- `globalElement` - Input, `INTEGER(I4B)`, global or local element number
- `localFaceNumber` - Input, `INTEGER(I4B)`, local face number in global element
- `islocal` - Optional Input, `LOGICAL(LGT)`, if true, `globalElement` is treated as a local element
- `ans` - Output, `INTEGER(I4B)`, total number of degrees of freedom on the specified face

### Implementation Details

This implementation first converts the element and local face information to a global face number, then calls the first implementation:

```fortran
INTEGER(I4B) :: globalFace
globalFace = obj%mesh%GetGlobalFaceNumber(globalElement=globalElement, &
                             islocal=islocal, localFaceNumber=localFaceNumber)
ans = obj%GetTotalFaceDOF(globalFace=globalFace, islocal=islocal)
```

## Usage Example

```fortran
! Example to get total DOFs on a face
INTEGER(I4B) :: totalDOFs
TYPE(FEDOF_) :: myDOF

! Method 1: Using global face number
totalDOFs = myDOF%GetTotalFaceDOF(globalFace=3)

! Method 2: Using element and local face number
totalDOFs = myDOF%GetTotalFaceDOF(globalElement=7, localFaceNumber=2)
```

## Related Methods

- `GetFaceDOF` - Retrieves the actual DOF indices for a face
- `GetTotalEdgeDOF` - Similar function but for element edges
- `GetTotalDOF` - Gets total DOF count for an entire element or the entire mesh
- `GetTotalVertexDOF` - Gets total DOF count for vertices

These methods are essential for traversing and accessing degrees of freedom in different components of the mesh hierarchy (vertices, edges, faces, cells).

## Example 1

import EXAMPLE115 from "./examples/_GetTotalFaceDOF_test_1.md";

<EXAMPLE115 />
