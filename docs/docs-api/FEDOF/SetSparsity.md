# SetSparsity

The `SetSparsity` method is used to establish the sparsity pattern in a CSR (Compressed Sparse Row) matrix based on finite element degrees of freedom (FEDOF). This is a crucial operation for efficiently assembling and storing finite element matrices. The method offers two implementations to handle different sparsity pattern generation scenarios.

## Interface 1

> Single FEDOF Sparsity Pattern

```fortran
MODULE SUBROUTINE SetSparsity1(obj, mat)
  CLASS(FEDOF_), INTENT(INOUT) :: obj
  TYPE(CSRMatrix_), INTENT(INOUT) :: mat
END SUBROUTINE SetSparsity1
```

### Purpose

Creates a sparsity pattern in a CSR matrix using a single FEDOF object. This implementation is typically used for matrices representing operations within a single finite element space (like mass or stiffness matrices).

### Parameters

- `obj`: The FEDOF object that contains degree of freedom information
- `mat`: The CSR matrix where the sparsity pattern will be established

### Algorithm

1. Retrieves the mesh pointer from the FEDOF object
2. Allocates connectivity array based on maximum total connectivity
3. For each element in the mesh:
   - Gets the connectivity for the element
   - For each degree of freedom in the element:
     - Sets the sparsity pattern in the matrix for this DOF with respect to all other DOFs in the element
4. Finalizes the sparsity pattern

## Interface 2

> FEDOF to FEDOF Interaction

```fortran
MODULE SUBROUTINE SetSparsity2(obj, col_fedof, cellToCell, mat, ivar, jvar)
  CLASS(FEDOF_), INTENT(INOUT) :: obj
  CLASS(FEDOF_), INTENT(INOUT) :: col_fedof
  INTEGER(I4B), INTENT(IN) :: cellToCell(:)
  TYPE(CSRMatrix_), INTENT(INOUT) :: mat
  INTEGER(I4B), INTENT(IN) :: ivar
  INTEGER(I4B), INTENT(IN) :: jvar
END SUBROUTINE SetSparsity2
```

### Purpose

Creates a sparsity pattern in a CSR matrix using two FEDOF objects. This implementation is used for matrices representing operations between different finite element spaces (like coupling or transfer matrices).

### Parameters

- `obj`: The row FEDOF object that contains degree of freedom information
- `col_fedof`: The column FEDOF object that contains degree of freedom information
- `cellToCell`: Array mapping element indices from row to column mesh
- `mat`: The CSR matrix where the sparsity pattern will be established
- `ivar`: Physical variable index in row
- `jvar`: Physical variable index in column

### Algorithm

1. Retrieves mesh pointers from both FEDOF objects
2. Allocates connectivity arrays for both row and column elements
3. For each element in the row mesh:
   - Gets the connectivity for the row element
   - Finds the corresponding element in the column mesh using cellToCell
   - Gets the connectivity for the column element
   - For each DOF in the row element:
     - Sets the sparsity pattern in the matrix for this row DOF with respect to all column DOFs

## Interface 3

> Multiple FEDOF Interactions

```fortran
INTERFACE FEDOFSetSparsity
  MODULE SUBROUTINE SetSparsity3(fedofs, mat)
    CLASS(FEDOFPointer_), INTENT(INOUT) :: fedofs(:)
    TYPE(CSRMatrix_), INTENT(INOUT) :: mat
  END SUBROUTINE SetSparsity3
END INTERFACE FEDOFSetSparsity
```

There is also a third implementation (`SetSparsity3`) that handles sparsity pattern generation for multiple FEDOF objects. This is particularly useful for complex coupled problems with multiple physics or domains.

## Usage Example

```fortran
! For a single FEDOF (e.g., creating a stiffness matrix)
TYPE(FEDOF_) :: myFEDOF
TYPE(CSRMatrix_) :: stiffnessMatrix

! Set up the sparsity pattern for the matrix
CALL myFEDOF%SetSparsity(stiffnessMatrix)

! For FEDOF to FEDOF interaction (e.g., coupling two different fields)
TYPE(FEDOF_) :: velocityFEDOF, pressureFEDOF
TYPE(CSRMatrix_) :: couplingMatrix
INTEGER(I4B), ALLOCATABLE :: cellMap(:)

! Set up cellMap to map between velocity and pressure elements
! ...

! Set up the sparsity pattern for the coupling matrix
CALL velocityFEDOF%SetSparsity(pressureFEDOF, cellMap, couplingMatrix, 1, 2)
```

## Notes

- The sparsity pattern defines which entries in the matrix are non-zero, allowing for efficient storage and computation.
- The methods check various conditions in debug mode to ensure validity of the inputs.
- The third variant (`SetSparsity3`) is particularly useful for block matrices with multiple physical variables.
- After setting the sparsity pattern, the matrix can be assembled efficiently by only computing and storing the non-zero entries.

## Example 1
