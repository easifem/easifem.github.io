# Get

Get the entries from fortran vector or realvector using DOf object.

## Interface 1

```fortran
 INTERFACE
  MODULE PURE FUNCTION Get(val, obj, idof, StorageFMT, nodenum, &
    & Force3D) RESULT(ans)
    REAL(DFP), INTENT(IN) :: val(:)
    CLASS(DOF_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: idof(:)
    INTEGER(I4B), INTENT(IN) :: StorageFMT
    INTEGER(I4B), INTENT(IN) :: nodenum(:)
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: force3D
    REAL(DFP), ALLOCATABLE :: ans(:)
  END FUNCTION Get
END INTERFACE
```

## Interface 2

```fortran
INTERFACE
  MODULE PURE FUNCTION Get(val, obj, idof, StorageFMT, &
    & Force3D) RESULT(ans)
    REAL(DFP), INTENT(IN) :: val(:)
    CLASS(DOF_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: idof(:)
    INTEGER(I4B), INTENT(IN) :: StorageFMT
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: force3D
    REAL(DFP), ALLOCATABLE :: ans(:)
  END FUNCTION Get
END INTERFACE
```
