# isWhiteChr

<!-- markdownlint-disable MD041 MD013 MD033 MD012 -->

This function returns true when the given char is a space or a tab.

## Interface

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION isWhiteChar(char) RESULT(Ans)
    CHARACTER(1), INTENT(IN) :: char
    LOGICAL(LGT) :: ans
  END FUNCTION isWhiteChar
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE10 from "./examples/_IsWhiteChar_test_1.md";

<EXAMPLE10 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
