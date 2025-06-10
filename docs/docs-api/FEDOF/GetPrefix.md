# GetPrefix

Returns the prefix used for setting data in FEDOF.

## Interface

```fortran
INTERFACE
  MODULE FUNCTION GetPrefix(obj) RESULT(ans)
    CLASS(FEDOF_), INTENT(IN) :: obj
    CHARACTER(:), ALLOCATABLE :: ans
  END FUNCTION GetPrefix
END INTERFACE
```
