# UpperCae

<!-- markdownlint-disable MD041 MD013 MD033 MD012 -->

This is a function which returns a string in upper case.

## Interface

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION UpperCase(chars) RESULT(Ans)
    CHARACTER(*), INTENT(IN) :: chars
    CHARACTER(LEN(chars)) :: ans
  END FUNCTION UpperCase
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE10 from "./examples/_UpperCase_test_1.md";

<EXAMPLE10 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
