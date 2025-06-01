# GetValue

Get values from a toml table.


## Interface 1 (Get scalar values)


## Interface 2 (Get vector values)

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

Here DataType can be one of the following types:

- `INTEGER(Int8)`
- `INTEGER(Int16)`
- `INTEGER(Int32)`
- `INTEGER(Int64)`
- `REAL(Real32)`
- `REAL(Real64)`
- `TYPE(String)`
- `LOGICAL(LGT)`

## Interface 3 (Get matrix values)

