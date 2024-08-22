# GetFileName

<!-- markdownlint-disable MD041 MD013 MD033 MD012 -->

Return the name of the file.

## Interface

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE SUBROUTINE getFileName(chars, fname)
    CHARACTER(*), INTENT(IN) :: chars
    CHARACTER(*), INTENT(OUT) :: fname
  END SUBROUTINE getFileName
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE10 from "./examples/_GetFileName_test_1.md";

<EXAMPLE10 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
