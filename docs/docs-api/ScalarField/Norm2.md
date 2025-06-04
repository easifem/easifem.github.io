# Norm2

<!-- markdownlint-disable MD041 MD013 MD033 MD012 -->

L2 norm of node field.

:::note
This method has been implemented for NATIVE engine.
:::

## Interface

```fortran
INTERFACE
  MODULE FUNCTION Norm2(obj) RESULT(ans)
    CLASS(AbstractNodeField_), INTENT(IN) :: obj
    REAL(DFP) :: ans
  END FUNCTION Norm2
END INTERFACE
```
