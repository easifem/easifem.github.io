# PreCheckError

This method check the error in kernel before setting it. This method can be extended by the child classes.

## Interface

```fortran
INTERFACE AbstractKernelPreCheckError
  MODULE SUBROUTINE obj_PreCheckError(obj)
    CLASS(AbstractKernel_), INTENT(INOUT) :: obj
  END SUBROUTINE obj_PreCheckError
END INTERFACE AbstractKernelPreCheckError
```
