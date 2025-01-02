# KernelInitiateTangentMatrix

This subroutine is defined in `KernelMatrixField_Method`.

:::note
This routine also sets the set the initiated tangent matrix to the linear solver
:::

:::note
`fedof` is necessary for initiating the tangent matrix
:::

You can find more about [FEDOF here](/docs-api/FEDOF).

## Interface 1

This subroutine initiates a non-block type tangent matrix.

```fortran
SUBROUTINE KernelInitiateTangentMatrix1(mat, linsol, fedof, nsd, nnt, engine, &
                                    name, matrixProp, comm, local_n, global_n)
  CLASS(AbstractMatrixField_), INTENT(INOUT) :: mat
  CLASS(AbstractLinSolver_), INTENT(INOUT) :: linsol
  CLASS(FEDOF_), TARGET, INTENT(INOUT) :: fedof
  INTEGER(I4B), INTENT(IN) :: nsd
  INTEGER(I4B), INTENT(IN) :: nnt
  CHARACTER(*), INTENT(IN) :: engine
  CHARACTER(*), INTENT(IN) :: name
  CHARACTER(*), INTENT(IN) :: matrixProp
  INTEGER(I4B), OPTIONAL, INTENT(IN) :: comm
  INTEGER(I4B), OPTIONAL, INTENT(IN) :: local_n
  INTEGER(I4B), OPTIONAL, INTENT(IN) :: global_n
END SUBROUTINE KernelInitiateTangetMatrix1
```

## Interface 2

This subroutine initiates a block type tangent matrix.

```fortran
SUBROUTINE KernelInitiateTangentMatrix2(mat, linsol, fedof, fedofs, name, &
                matrixProp, physicalVarNames, spaceCompo, timeCompo, engine, &
                                        comm, local_n, global_n)
  CLASS(AbstractMatrixField_), INTENT(INOUT) :: mat
  CLASS(AbstractLinSolver_), INTENT(INOUT) :: linsol
  CLASS(FEDOF_), OPTIONAL, TARGET, INTENT(INOUT) :: fedof
  TYPE(FEDOFPointer_), OPTIONAL, INTENT(INOUT) :: fedofs(:)
  CHARACTER(*), INTENT(IN) :: name
  CHARACTER(*), INTENT(IN) :: matrixProp
  CHARACTER(*), INTENT(IN) :: physicalVarNames(:)
  INTEGER(I4B), INTENT(IN) :: spaceCompo(:)
  INTEGER(I4B), INTENT(IN) :: timeCompo(:)
  CHARACTER(*), INTENT(IN) :: engine
  INTEGER(I4B), OPTIONAL, INTENT(IN) :: comm
  INTEGER(I4B), OPTIONAL, INTENT(IN) :: local_n
  INTEGER(I4B), OPTIONAL, INTENT(IN) :: global_n
```
