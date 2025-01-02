# InitiateTangetMatrix

This subroutine initiate the tangent matrix of the kernel.

:::note
Following points should be noted:

1. If tangent matrix of the kernel is not associated then this subroutine will initiate a new tangent matrix.
2. This subroutine calls the method [KernelInitiateTangentMatrix](./KernelInitiateTangentMatrix.md).
3. This subroutine uses `fedof`, therefore, fedof should be initiated before calling this routine.

:::

## Interface

```fortran
INTERFACE AbstractKernelInitiateTangentMatrix
  MODULE SUBROUTINE obj_InitiateTangentMatrix(obj)
    CLASS(AbstractKernel_), INTENT(INOUT) :: obj
  END SUBROUTINE obj_InitiateTangentMatrix
END INTERFACE AbstractKernelInitiateTangentMatrix
```
