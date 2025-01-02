# PostCheckError

This method checks the error in the kernel after setting the kernel.

## Interface

```fortran
INTERFACE AbstractKernelPostCheckError
  MODULE SUBROUTINE obj_PostCheckError(obj)
    CLASS(AbstractKernel_), INTENT(INOUT) :: obj
  END SUBROUTINE obj_PostCheckError
END INTERFACE AbstractKernelPostCheckError
```
