# GetFileParts

<!-- markdownlint-disable MD041 MD013 MD033 MD012 -->

This routine returns the path, filename, and extension from the supplied path of the file.

## Interface

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE SUBROUTINE getFileParts(chars, path, fname, ext)
    CHARACTER(*), INTENT(IN) :: chars
    CHARACTER(*), INTENT(OUT) :: path
    CHARACTER(*), INTENT(OUT) :: fname
    CHARACTER(*), INTENT(OUT) :: ext
  END SUBROUTINE getFileParts
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE11 from "./examples/_GetFileParts_test_1.md";

<EXAMPLE11 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
