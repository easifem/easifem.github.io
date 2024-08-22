# TimeComponents

This function returns the TimeComponents in degree of freedom object.

## Interface

```fortran
 INTERFACE
  MODULE PURE FUNCTION timecomponents(obj) RESULT(ans)
    CLASS(DOF_), INTENT(IN) :: obj
    INTEGER(I4B), ALLOCATABLE :: ans(:)
  END FUNCTION imecomponents
END INTERFACE
```

```fortran
INTERFACE
  MODULE PURE FUNCTION timecomponents(obj, ivar) RESULT(ans)
    CLASS(DOF_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B) :: ans
  END FUNCTION timecomponents
END INTERFACE
```
