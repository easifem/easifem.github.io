# IsPreset

<!-- markdownlint-disable MD041 MD013 MD033 MD012 -->

Returns true if a substring pattern is found within string.

:::note
This routine does not handle trailing spaces that can be eliminated by TRIM(). So,
strings should be trimmed when passing into function.
:::

## Interface

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION isPresent(chars, pattern) RESULT(Ans)
    CHARACTER(*), INTENT(IN) :: chars
    CHARACTER(*), INTENT(IN) :: pattern
    LOGICAL(LGT) :: ans
  END FUNCTION isPresent
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE17 from "./examples/_IsPresent_test_1.md";

<EXAMPLE17 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
