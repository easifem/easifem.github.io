# CheckEssentialParam

Checks the essential parameters in the parameter list of kernels.

This method is called internally to check the validity of the data while initiating the kernel. A general user should not worry about it.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE CheckEssentialParam(obj, param, prefix)
    CLASS(AbstractKernel_), INTENT(INOUT) :: obj
    TYPE(ParameterList_), INTENT(IN) :: param
    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: prefix
  END SUBROUTINE CheckEssentialParam
END INTERFACE
```
