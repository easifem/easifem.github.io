# tNames

This method returns the total number of physical variables in `DOF` object.

## Interface

```fortran
INTERFACE
  MODULE PURE FUNCTION tNames(obj) RESULT(ans)
    CLASS(DOF_), INTENT(IN) :: obj
    INTEGER(I4B) :: ans
  END FUNCTION tNames
END INTERFACE
```
