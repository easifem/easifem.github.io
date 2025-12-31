# GetCellDOF

Get the degrees of freedom associated with a specific cell (element volume) in the finite element mesh.

## Interface

```fortran
MODULE SUBROUTINE GetCellDOF(obj, globalCell, ans, tsize, islocal)
  CLASS(FEDOF_), INTENT(IN) :: obj
  INTEGER(I4B), INTENT(IN) :: globalCell
  INTEGER(I4B), INTENT(INOUT) :: ans(:)
  INTEGER(I4B), INTENT(OUT) :: tsize
  LOGICAL(LGT), INTENT(IN), OPTIONAL :: islocal
END SUBROUTINE GetCellDOF
```

## Parameters

- `obj`: The FEDOF_ object
- `globalCell`: Global cell number to retrieve DOFs for
- `ans`: Integer array to store the retrieved DOFs
- `tsize`: Output parameter containing the total size of data written in ans
- `islocal`: Optional logical flag - if true, globalCell is treated as a local cell number

## Functionality

This method retrieves all degrees of freedom associated with a specific cell (element volume) identified by its global cell number. It performs the following operations:

1. Converts the global cell number to a local cell number if needed
2. Accesses the cell DOF information using the cell index array (`cellIA`)
3. Populates the `ans` array with the DOF indices for the specified cell
4. Sets `tsize` to the number of DOFs associated with the cell

The implementation leverages the cell sparsity pattern stored in the `cellIA` array, which provides the start and end indices for each cell's DOF information.

## Implementation Details

The method first converts the global cell number to a local cell number using the mesh's `GetLocalElemNumber` method. It then iterates through the DOF indices stored for this cell, copying each one into the `ans` array and incrementing the `tsize` counter.

## Usage

The `GetCellDOF` method is important for finite element implementations where you need to:

- Assemble matrices based on cell (volume) contributions
- Apply internal conditions on specific cells
- Compute cell-based integrals or other operations
- Access all degrees of freedom associated with a cell for post-processing

Unlike vertex, edge, or face DOFs which are typically shared between elements, cell DOFs are internal to a specific element, making them important for capturing high-order behavior within elements.

## Example 1

import CodeBlock from '@theme/CodeBlock';

import CodeSnippet from '!!raw-loader!./examples/_GetCellDOF_test_1.md';

<CodeBlock language="fortran">{CodeSnippet}</CodeBlock>
