# GetField

<!-- markdownlint-disable MD041 MD013 MD033 MD012 -->

This routine returns the field from the string.

## Interface

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE SUBROUTINE getField(i, chars, field, ierr)
    INTEGER(I4B), INTENT(IN) :: i
    CHARACTER(*), INTENT(IN) :: chars
    CHARACTER(:), ALLOCATABLE, INTENT(OUT) :: field
    INTEGER(I4B), INTENT(OUT), OPTIONAL :: ierr
  END SUBROUTINE getField
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ Example 1">

import EXAMPLE10 from "./examples/_GetField_test_1.md";

<EXAMPLE10 />

</TabItem>

<TabItem value="example 2" label="️܀ Example 2">

import EXAMPLE11 from "./examples/_GetField_test_2.md";

<EXAMPLE11 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
