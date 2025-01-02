# KernelInitiateSpaceMatrix

This subroutine initiates the space matrix.

## Interface

```fortran
SUBROUTINE KernelInitiateSpaceMatrix(mat, fedof, nsd, engine, problemType, &
                                    name, matrixProp, comm, local_n, global_n)
  CLASS(MatrixField_), INTENT(INOUT) :: mat
  CLASS(FEDOF_), TARGET, INTENT(INOUT) :: fedof
  INTEGER(I4B), INTENT(IN) :: nsd
  !! number of spatial dimension
  CHARACTER(*), INTENT(IN) :: engine
  !! engine
  INTEGER(I4B), INTENT(IN) :: problemType
  !! problem type
  CHARACTER(*), INTENT(IN) :: name
  !! name
  CHARACTER(*), INTENT(IN) :: matrixProp
  !! matrix property
  INTEGER(I4B), OPTIONAL, INTENT(IN) :: comm
  !! communicator
  INTEGER(I4B), OPTIONAL, INTENT(IN) :: local_n
  !! local number of rows
  INTEGER(I4B), OPTIONAL, INTENT(IN) :: global_n
  !! global number of row
END SUBROUTINE KernelInitiateSpaceMatrix
```

:::note
`fedof` is necessary for initiating the space matrix
:::

You can find more about [FEDOF here](/docs-api/FEDOF).
