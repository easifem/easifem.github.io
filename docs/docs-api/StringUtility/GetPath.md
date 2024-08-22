# GetPath

<!-- markdownlint-disable MD041 MD013 MD033 MD012 -->

Returns the path of a file.

## Interface

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE SUBROUTINE getPath(chars, path)
    CHARACTER(*), INTENT(IN) :: chars
    CHARACTER(*), INTENT(OUT) :: path
  END SUBROUTINE getPath
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE8 from "./examples/_GetPath_test_1.md";

<EXAMPLE8 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
