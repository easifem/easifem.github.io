# NumMatchSr

<!-- markdownlint-disable MD041 MD013 MD033 MD012 -->

This function returns the number of pattern present inside the string.

## Interface

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION numMatchStr(chars, pattern) RESULT(Ans)
    CHARACTER(*), INTENT(IN) :: chars
    CHARACTER(*), INTENT(IN) :: pattern
    INTEGER(I4B) :: ans
  END FUNCTION numMatchStr
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE10 from "./examples/_NumMatchStr_test_1.md";

<EXAMPLE10 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
