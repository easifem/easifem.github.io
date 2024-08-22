# tTimeComponents

This method returns the total time components in degree of freedom object.

## Interface

```fortran
INTERFACE
  MODULE PURE FUNCTION ttimecomponents(obj) RESULT(ans)
    CLASS(DOF_), INTENT(IN) :: obj
    INTEGER(I4B) :: ans
  END FUNCTION ttimecomponents
END INTERFACE
```
