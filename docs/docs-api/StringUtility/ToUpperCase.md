# ToUpperCae

<!-- markdownlint-disable MD041 MD013 MD033 MD012 -->

This is a subroutine which converts a string into upper case.

## Interface

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE SUBROUTINE ToUpperCase(chars)
    CHARACTER(*), INTENT(INOUT) :: chars
  END SUBROUTINE ToUpperCase
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE10 from "./examples/_ToUpperCase_test_1.md";

<EXAMPLE10 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
