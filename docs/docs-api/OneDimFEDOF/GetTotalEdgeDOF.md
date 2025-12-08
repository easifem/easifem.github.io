# GetTotalEdgeDOF

The `GetTotalEdgeDOF` generic method in the `FEDOF_Class` provides the total number of degrees of freedom (DOF) associated with an edge in a finite element mesh.

## Interface

```fortran
MODULE FUNCTION obj_GetTotalEdgeDOF1(obj, globalEdge, islocal) RESULT(ans)
  CLASS(FEDOF_), INTENT(IN) :: obj
  INTEGER(I4B), INTENT(IN) :: globalEdge
  LOGICAL(LGT), INTENT(IN), OPTIONAL :: islocal
  INTEGER(I4B) :: ans
END FUNCTION obj_GetTotalEdgeDOF1

MODULE FUNCTION obj_GetTotalEdgeDOF2(obj, globalElement, localEdgeNumber, &
                                     islocal) RESULT(ans)
  CLASS(FEDOF_), INTENT(IN) :: obj
  INTEGER(I4B), INTENT(IN) :: globalElement
  !! global or local cell element number
  INTEGER(I4B), INTENT(IN) :: localEdgeNumber
  !! local edge number in global element
  LOGICAL(LGT), INTENT(IN), OPTIONAL :: islocal
  !! if true then globalElement is local element
  INTEGER(I4B) :: ans
END FUNCTION obj_GetTotalEdgeDOF2
```

## Description

The `GetTotalEdgeDOF` generic method provides two implementations to retrieve the total edge DOF count:

1. `GetTotalEdgeDOF1` - Gets total DOF count directly using a global edge number
2. `GetTotalEdgeDOF2` - Gets total DOF count using a global element number and local edge number within that element

## Interface 1: GetTotalEdgeDOF1

### Parameters

- `obj` - Input, `CLASS(FEDOF_)`, FEDOF object instance
- `globalEdge` - Input, `INTEGER(I4B)`, global edge number
- `islocal` - Optional Input, `LOGICAL(LGT)`, if true, `globalEdge` is treated as a local edge number
- `ans` - Output, `INTEGER(I4B)`, total number of DOFs on the specified edge

### Implementation Details

The implementation uses the internal edge index array structure to calculate the total DOF count:

```fortran
ans = obj%edgeIA(globalEdge + 1) - obj%edgeIA(globalEdge)
```

## Interface 2: GetTotalEdgeDOF2

### Parameters

- `obj` - Input, `CLASS(FEDOF_)`, FEDOF object instance
- `globalElement` - Input, `INTEGER(I4B)`, global or local cell element number
- `localEdgeNumber` - Input, `INTEGER(I4B)`, local edge number in global element
- `islocal` - Optional Input, `LOGICAL(LGT)`, if true, `globalElement` is treated as a local element
- `ans` - Output, `INTEGER(I4B)`, total number of DOFs on the specified edge

### Implementation Details

This implementation first converts the element and local edge information to a global edge number, then calls the first implementation:

```fortran
INTEGER(I4B) :: globalEdge
globalEdge = obj%mesh%GetGlobalEdgeNumber(globalElement=globalElement, &
                           islocal=islocal, localEdgeNumber=localEdgeNumber)
ans = obj%GetTotalEdgeDOF(globalEdge=globalEdge, islocal=islocal)
```

## Usage Example

```fortran
! Example to get total DOFs on an edge
INTEGER(I4B) :: totalDOFs
TYPE(FEDOF_) :: myDOF

! Method 1: Using global edge number
totalDOFs = myDOF%GetTotalEdgeDOF(globalEdge=8)

! Method 2: Using element and local edge number
totalDOFs = myDOF%GetTotalEdgeDOF(globalElement=15, localEdgeNumber=3)
```

## Related Methods

- `GetEdgeDOF` - Retrieves the actual DOF indices for an edge
- `GetTotalFaceDOF` - Similar function but for element faces
- `GetTotalDOF` - Gets total DOF count for an entire element or the entire mesh
- `GetTotalVertexDOF` - Gets total DOF count for vertices

