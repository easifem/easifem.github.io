# Display

Displays the content of an `AbstractOneDimFE_` object.

```fortran
SUBROUTINE AbstractOneDimFEDisplay(obj, msg, unitno, notFull)
```

- `obj` - The AbstractOneDimFE_ object to display
- `msg` - Message to display with the object
- `unitno` - Unit number for output (optional)
- `notFull` - If true, displays summarized information (optional)

## Interface

Displays the contents of an AbstractOneDimFE_ instance, including its parameters and configuration.

```fortran
MODULE SUBROUTINE obj_Display(obj, msg, unitno, notFull)
  CLASS(AbstractOneDimFE_), INTENT(IN) :: obj
  CHARACTER(*), INTENT(IN) :: msg
  INTEGER(I4B), OPTIONAL, INTENT(IN) :: unitno
  LOGICAL(LGT), OPTIONAL, INTENT(IN) :: notFull
END SUBROUTINE obj_Display
```

- `obj`: AbstractOneDimFE_ instance to display (input)
- `msg`: Message to display alongside the content (input)
- `unitno`: Unit number for output (optional, input)
- `notFull`: Flag to control whether to display full content (optional, input)
