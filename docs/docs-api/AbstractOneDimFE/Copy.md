# Copy

Initiates an instance of the finite element by copying from another instance.

:::note
This method can be called directly or through the assignment operator (=).
:::

## Interface

```fortran
MODULE SUBROUTINE obj_Copy(obj, obj2)
  CLASS(AbstractOneDimFE_), INTENT(INOUT) :: obj
  CLASS(AbstractOneDimFE_), INTENT(IN) :: obj2
END SUBROUTINE obj_Copy
```

- `obj`: Target AbstractOneDimFE_ instance to copy to (inout)
- `obj2`: Source AbstractOneDimFE_ instance to copy from (input)
