---
sidebar_position: 2
title: GetValue
---

## Getting scalar values

```fortran
INTERFACE GetValue
  MODULE SUBROUTINE GetValue(table, key, VALUE, default_value, &
                             origin, stat, isFound)
    TYPE(toml_table), INTENT(INOUT) :: table
    !! Toml table
    CHARACTER(*), INTENT(IN) :: key
    !! key
    DataType, INTENT(INOUT) :: VALUE
    !! value in string
    DataType, INTENT(IN) :: default_value
    !! default value
    INTEGER(I4B), OPTIONAL, INTENT(INOUT) :: origin
    !! origin, necessary for debugging
    INTEGER(I4B), OPTIONAL, INTENT(INOUT) :: stat
    !! To check the status of getting the value
    LOGICAL(LGT), OPTIONAL, INTENT(INOUT) :: isFound
    !! If key is found then isFound is set to true
  END SUBROUTINE GetValue
END INTERFACE GetValue
```

Following DataTypes are supported.

- String
- INTEGER(Int8 | Int16 | Int32 | Int64)
- REAL(Real32 | Real64)

:::note Default value
The data type of default value should be same as the data type of value. However, in case value is String type, then the default value can be Character type also.
:::

## Get the vector values

The generic interface for getting the vector values is as follows:

```fortran
INTERFACE GetValue
  MODULE SUBROUTINE GetValue(table, key, VALUE, origin, stat, &
                             isFound)
    TYPE(toml_table), INTENT(INOUT) :: table
    CHARACTER(*), INTENT(IN) :: key
    DataType, ALLOCATABLE, INTENT(INOUT) :: VALUE(:)
    INTEGER(I4B), OPTIONAL, INTENT(INOUT) :: origin
    INTEGER(I4B), OPTIONAL, INTENT(INOUT) :: stat
    LOGICAL(LGT), OPTIONAL, INTENT(INOUT) :: isFound
  END SUBROUTINE GetValue
END INTERFACE GetValue
```

The above method will allocate the value. If you want to avoid the allocation, then use the following method.

```fortran
INTERFACE GetValue_
  MODULE SUBROUTINE GetValue_(table, key, VALUE, tsize, origin, stat, &
                              isFound)
    TYPE(toml_table), INTENT(INOUT) :: table
    CHARACTER(*), INTENT(IN) :: key
    DataType, ALLOCATABLE, INTENT(INOUT) :: VALUE(:)
    INTEGER(I4B), INTENT(OUT) :: tsize
    INTEGER(I4B), OPTIONAL, INTENT(INOUT) :: origin
    INTEGER(I4B), OPTIONAL, INTENT(INOUT) :: stat
    LOGICAL(LGT), OPTIONAL, INTENT(INOUT) :: isFound
  END SUBROUTINE GetValue_
END INTERFACE GetValue_
```

- tsize is the number of data written in the value.

The value can have following data types:

- INTEGER(Int8 | Int16 | Int32 | Int64)
- REAL(Real32 | Real64)

## Get the matrix values

The generic interface for getting the matrix values is as follows:

```fortran
INTERFACE GetValue
  MODULE SUBROUTINE GetValue(table, key, VALUE, origin, stat, &
                             isFound)
    TYPE(toml_table), INTENT(INOUT) :: table
    CHARACTER(*), INTENT(IN) :: key
    DataType, ALLOCATABLE, INTENT(INOUT) :: VALUE(:, :)
    INTEGER(I4B), OPTIONAL, INTENT(INOUT) :: origin
    INTEGER(I4B), OPTIONAL, INTENT(INOUT) :: stat
    LOGICAL(LGT), OPTIONAL, INTENT(INOUT) :: isFound
  END SUBROUTINE GetValue
END INTERFACE GetValue
```

The above method will allocate the value. If you want to avoid the allocation, then use the following method.

```fortran
INTERFACE GetValue_
  MODULE SUBROUTINE GetValue_(table, key, VALUE, origin, stat, &
                              isFound, nrow, ncol)
    TYPE(toml_table), INTENT(INOUT) :: table
    CHARACTER(*), INTENT(IN) :: key
    INTEGER(INT8), INTENT(INOUT) :: VALUE(:, :)
    INTEGER(I4B), INTENT(OUT) :: nrow, ncol
    INTEGER(I4B), OPTIONAL, INTENT(INOUT) :: origin
    INTEGER(I4B), OPTIONAL, INTENT(INOUT) :: stat
    LOGICAL(LGT), OPTIONAL, INTENT(INOUT) :: isFound
  END SUBROUTINE GetValue_
END INTERFACE GetValue_
```

- nrow is the number of rows written in the value.
- ncol is the number of columns written in the value.

The value can have following data types:

- INTEGER(Int8 | Int16 | Int32 | Int64)
- REAL(Real32 | Real64)
