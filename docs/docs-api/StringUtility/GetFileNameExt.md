# GetFileNameExt

<!-- markdownlint-disable MD041 MD013 MD033 MD012 -->

This routine returns the extension of a file.

## Interface

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE SUBROUTINE getFileNameExt(chars, ext)
    CHARACTER(*), INTENT(IN) :: chars
    CHARACTER(*), INTENT(OUT) :: ext
  END SUBROUTINE getFileNameExt
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE11 from "./examples/_GetFileNameExt_test_1.md";

<EXAMPLE11 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
