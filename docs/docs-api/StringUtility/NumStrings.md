# NumStrins

<!-- markdownlint-disable MD041 MD013 MD033 MD012 -->

This function returns the number of substrings inside a string which are separate by one or more spaces.

## Interface

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION numStrings(chars) RESULT(Ans)
    CHARACTER(*), INTENT(IN) :: chars
    INTEGER(I4B) :: ans
  END FUNCTION numStrings
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE10 from "./examples/_NumStrings_test_1.md";

<EXAMPLE10 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
