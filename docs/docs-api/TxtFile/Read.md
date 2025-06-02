---
title: Read
---

This method reads data from a file into various Fortran data types, including scalars, vectors, and instances of `IntVector_` and `RealVector_`.

- We can read data from a file in a scalar variable of Integer, Real, String, Boolean, [IntVector](../IntVector/IntVector_.md) or [RealVector](../RealVector/RealVector_.md) type.
- We can read data in a vector of Integer, Real, String, Boolean, IntVector, RealVector type.
- We can read data in a matrix of Integer, Real, String.

## Interface 1 (For reading scalar)

```fortran
INTERFACE
  MODULE SUBROUTINE READ (obj, val, iostat, iomsg, &
                         ignoreComment, ignoreBlank, commentSymbol, separator)
    CLASS(TxtFile_), INTENT(INOUT) :: obj
    DataType, INTENT(INOUT) :: val
    INTEGER(I4B), INTENT(OUT) :: iostat
    CHARACTER(LEN=*), OPTIONAL, INTENT(OUT) :: iomsg
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: ignoreComment
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: ignoreBlank
    CHARACTER(len=1), OPTIONAL, INTENT(IN) :: commentSymbol
    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: separator
  END SUBROUTINE READ
END INTERFACE
```

- In above call, DataType can be any of the following:
  - `INTEGER(Int8|Int16|Int32|Int64)`
  - `REAL(Real32|Real64)`
  - `LOGICAL(LGT)`
  - `STRING`
  - `INTVECTOR_`
  - `REALVECTOR_`

## Interface 2 (For reading vector)

```fortran
INTERFACE
  MODULE SUBROUTINE READ (obj, val, iostat, iomsg, &
                         ignoreComment, ignoreBlank, commentSymbol, separator)
    CLASS(TxtFile_), INTENT(INOUT) :: obj
    DataType, ALLOCATABLE, INTENT(INOUT) :: val(:)
    INTEGER(I4B), OPTIONAL, INTENT(OUT) :: iostat
    CHARACTER(LEN=*), OPTIONAL, INTENT(OUT) :: iomsg
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: ignoreComment
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: ignoreBlank
    CHARACTER(len=1), OPTIONAL, INTENT(IN) :: commentSymbol
    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: separator
  END SUBROUTINE READ
END INTERFACE
```

- In above call, DataType can be any of the following:
  - `INTEGER(Int8|Int16|Int32|Int64)`
  - `REAL(Real32|Real64)`
  - `LOGICAL(LGT)`
  - `STRING`
  - `INTVECTOR_`
  - `REALVECTOR_`

## Interface 3 (For reading matrix)

```fortran
INTERFACE
  MODULE SUBROUTINE txt_Read_mat_Int8(obj, val, iostat, iomsg, &
                         ignoreComment, ignoreBlank, commentSymbol, separator)
    CLASS(TxtFile_), INTENT(INOUT) :: obj
    DataType, ALLOCATABLE, INTENT(INOUT) :: val(:, :)
    INTEGER(I4B), OPTIONAL, INTENT(OUT) :: iostat
    CHARACTER(LEN=*), OPTIONAL, INTENT(OUT) :: iomsg
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: ignoreComment
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: ignoreBlank
    CHARACTER(len=1), OPTIONAL, INTENT(IN) :: commentSymbol
    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: separator
  END SUBROUTINE txt_Read_mat_Int8
END INTERFACE
```

- In above call, DataType can be any of the following:
  - `INTEGER(Int8|Int16|Int32|Int64)`
  - `REAL(Real32|Real64)`
  - `LOGICAL(LGT)`
  - `STRING`

## Example 1 (Reading scalar values)

import EXAMPLE90 from "./examples/_Read_test_1.md";

<EXAMPLE90 />

## Example 2 (Reading vector values)

import EXAMPLE91 from "./examples/_Read_test_2.md";

<EXAMPLE91 />
