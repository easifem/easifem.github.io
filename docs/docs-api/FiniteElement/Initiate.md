# Initiate

<!-- markdownlint-disable MD041 MD013 MD033 MD012 -->

This method initiate an instance of `FiniteElement_`.

## Interface

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE Initiate(obj, param)
    CLASS(AbstractFE_), INTENT(INOUT) :: obj
    TYPE(ParameterList_), INTENT(IN) :: param
  END SUBROUTINE Initiate
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE7 from "./examples/_Initiate_test_1a.md";

<EXAMPLE7 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
