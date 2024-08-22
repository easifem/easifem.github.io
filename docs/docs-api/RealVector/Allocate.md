# Allocate

<!-- markdownlint-disable MD041 MD013 MD033 MD012 -->

Allocate memory for `RealVector`.

## Interface

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE SUBROUTINE Allocate(obj, Dims)
    CLASS(RealVector_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: Dims
  END SUBROUTINE Allocate
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE7 from "./examples/_Initiate_test_1.md";

<EXAMPLE7 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
