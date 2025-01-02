# CheckError

This method check the error in kernel.

## Interface

```fortran
INTERFACE AbstractKernelCheckError
  MODULE SUBROUTINE obj_CheckError(obj)
    CLASS(AbstractKernel_), INTENT(INOUT) :: obj
  END SUBROUTINE obj_CheckError
END INTERFACE AbstractKernelCheckError
```
