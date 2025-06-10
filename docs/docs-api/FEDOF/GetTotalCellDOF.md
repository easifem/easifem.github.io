# GetTotalCellDOF

The `GetTotalCellDOF` method in the `FEDOF_Class` provides the total number of degrees of freedom (DOF) associated with a cell in a finite element mesh.

## Interface

From the `FEDOF_Class.F90` file, the `GetTotalCellDOF` method has the following interface:

```fortran
PROCEDURE, PUBLIC, PASS(obj) :: GetTotalCellDOF => obj_GetTotalCellDOF
!! Get total cell degrees of freedom
```

The specific interface is defined as:

```fortran
MODULE FUNCTION obj_GetTotalCellDOF(obj, globalCell, islocal) RESULT(ans)
  CLASS(FEDOF_), INTENT(IN) :: obj
  INTEGER(I4B), INTENT(IN) :: globalCell
  LOGICAL(LGT), INTENT(IN), OPTIONAL :: islocal
  INTEGER(I4B) :: ans
END FUNCTION obj_GetTotalCellDOF
```

## Description

The `GetTotalCellDOF` method calculates the total number of degrees of freedom associated with a specific cell (volumetric element) in a finite element mesh.

### Parameters

- `obj` - Input, `CLASS(FEDOF_)`, FEDOF object instance
- `globalCell` - Input, `INTEGER(I4B)`, global cell number or local cell number (depends on islocal)
- `islocal` - Optional Input, `LOGICAL(LGT)`, if true, `globalCell` is treated as a local cell number
- `ans` - Output, `INTEGER(I4B)`, total number of DOFs on the specified cell

### Implementation Details

The implementation uses the internal cell index array structure to calculate the total DOF count:

```fortran
INTEGER(I4B) ::  jj
jj = obj%mesh%GetLocalElemNumber(globalElement=globalCell, islocal=islocal)
ans = obj%cellIA(jj + 1) - obj%cellIA(jj)
```

This efficiently computes the number of DOFs by finding the difference between consecutive indices in the compressed sparse row format that stores the cell degrees of freedom.

## Usage Example

```fortran
! Example to get total DOFs on a cell
INTEGER(I4B) :: totalDOFs
TYPE(FEDOF_) :: myDOF

! Get total DOFs on cell #5
totalDOFs = myDOF%GetTotalCellDOF(globalCell=5)

! Get total DOFs using local cell numbering
totalDOFs = myDOF%GetTotalCellDOF(globalCell=2, islocal=.TRUE.)
```

## Related Methods

- `GetCellDOF` - Retrieves the actual DOF indices for a cell
- `GetTotalEdgeDOF` - Gets total DOF count for element edges
- `GetTotalFaceDOF` - Gets total DOF count for element faces
- `GetTotalVertexDOF` - Gets total DOF count for vertices
- `GetTotalDOF` - Gets total DOF count for an entire element or the entire mesh

These methods together provide a complete interface for accessing and counting degrees of freedom in different components of the finite element mesh hierarchy (vertices, edges, faces, cells).

## Example 1

import EXAMPLE74 from "./examples/_GetTotalCellDOF_test_1.md";

<EXAMPLE74 />

