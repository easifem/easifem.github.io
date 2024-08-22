# GetValue

<!-- markdownlint-disable MD041 MD013 MD033 MD012 -->

Get the entries from the Fortran vector or `realvector` using the `DOF` object.

## Interface

```fortran
INTERFACE
  MODULE PURE SUBROUTINE GetValue(v, val, obj, idof, storageFMT, &
    nodenum)
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: v(:)
    REAL(DFP), INTENT(IN) :: val(:)
    CLASS(DOF_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: idof(:)
    INTEGER(I4B), INTENT(IN) :: storageFMT
    INTEGER(I4B), INTENT(IN) :: nodenum(:)
  END SUBROUTINE GetValue
END INTERFACE
```

- This subroutine extracts the values from `val` corresponding to degrees of freedom specified by `idof(:)`. The results are returned in `V`.
- `StorageFMT` can be `NODES_FMT` or `DOF_FMT`, which specifies the storage format of the returned vector.

:::note

This routine will allocate the memory for `v`. If you do not want this behavior, then you should call `GetValue_` subroutine instead. The interface is given below.

:::

```fortran
INTERFACE
 MODULE PURE SUBROUTINE GetValue_(v, tsize, val, obj, idof, storageFMT, &
                                        nodenum)
    REAL(DFP), INTENT(INOUT) :: v(:)
    !! values to return
    INTEGER(I4B), INTENT(OUT) :: tsize
    !! size of data written in v
    REAL(DFP), INTENT(IN) :: val(:)
    !! values to extract from
    TYPE(DOF_), INTENT(IN) :: obj
    !! degree of freedom object
    INTEGER(I4B), INTENT(IN) :: idof(:)
    !! degrees of freedom to extract
    INTEGER(I4B), INTENT(IN) :: storageFMT
    !! storage format of returned vector
    INTEGER(I4B), INTENT(IN) :: nodenum(:)
    !! node numbers to extract
  END SUBROUTINE GetValue_
END INTERFACE
```

## Interface 2

```fortran
INTERFACE
  MODULE PURE SUBROUTINE GetValue(v, val, obj, idof, force3D)
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: v(:, :)
    REAL(DFP), INTENT(IN) :: val(:)
    CLASS(DOF_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: idof(:)
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: force3D
  END SUBROUTINE GetValue
END INTERFACE
```

This subroutine extracts all the values from `val` corresponding to degrees of freedom specified by `idof(:)` and returns it in `V(:,:)`. Values in `v(:,:)` are stored in xiJ format.

:::note
`Force3D` will return a vector in 3D. If there are only two components, then it will set the third component to 0.
:::

:::note

This routine will allocate the memory for `v`. If you do not want this behavior, then you should call `GetValue_` subroutine instead. The interface is given below.

:::

```fortran
INTERFACE GetValue_
 MODULE PURE SUBROUTINE GetValue_(v, val, nrow, ncol, obj, idof, force3D)
    REAL(DFP), INTENT(INOUT) :: v(:, :)
    !! Data to be returned
    INTEGER(I4B), INTENT(OUT) :: nrow, ncol
    !! number of rows and columns written in v
    REAL(DFP), INTENT(IN) :: val(:)
    !! values to extract from
    TYPE(DOF_), INTENT(IN) :: obj
    !! degree of freedom object for val
    INTEGER(I4B), INTENT(IN) :: idof(:)
    !! degrees of freedom to extract
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: force3D
    !! if true then return 3D vector
  END SUBROUTINE GetValue_
END INTERFACE GetValue_
```

## Interface 3

```fortran
 INTERFACE
  MODULE PURE SUBROUTINE GetValue(v, val, obj, idof, storageFMT)
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: v(:)
    REAL(DFP), INTENT(IN) :: val(:)
    CLASS(DOF_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: idof(:)
    INTEGER(I4B), INTENT(IN) :: storageFMT
  END SUBROUTINE GetValue
END INTERFACE
```

This subroutine extracts the values from `val` corresponding to degrees of freedom specified by `idof(:)`.

It returns the results in `V`.

`StorageFMT` can be `Nodes_FMT` or `DOF_FMT`, specifying the returned vector's storage format.

:::note

This routine will allocate the memory for `v`. If you do not want this behavior, then you should call `GetValue_` subroutine instead. The interface is given below.

:::

```fortran
INTERFACE GetValue_
  MODULE PURE SUBROUTINE GetValue_(v, tsize, val, obj, idof, storageFMT)
    REAL(DFP), INTENT(INOUT) :: v(:)
    !! values to be returned
    INTEGER(I4B), INTENT(OUT) :: tsize
    !! size of data written in v
    REAL(DFP), INTENT(IN) :: val(:)
    !! values to extract from
    TYPE(DOF_), INTENT(IN) :: obj
    !! degree of freedom object
    INTEGER(I4B), INTENT(IN) :: idof(:)
    !! degrees of freedom to extract
    INTEGER(I4B), INTENT(IN) :: storageFMT
    !! stroage format of returned vector
  END SUBROUTINE GetValue_
END INTERFACE GetValue_
```
