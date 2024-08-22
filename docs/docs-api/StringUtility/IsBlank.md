# IsBlank

<!-- markdownlint-disable MD041 MD013 MD033 MD012 -->

This function returns true when given string is completely blank.

## Interface

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION isBlank(chars) RESULT(Ans)
    CHARACTER(*), INTENT(IN) :: chars
    LOGICAL(LGT) :: ans
  END FUNCTION isBlank
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE7 from "./examples/_IsBlank_test_1.md";

<EXAMPLE7 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
