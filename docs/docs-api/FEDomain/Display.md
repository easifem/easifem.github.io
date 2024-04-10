# Display

This method displays the content of domain.

## Interface

<Tabs>
<TabItem value="interface" label="Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE obj_Display(obj, msg, unitno)
    CLASS(FEDomain_), INTENT(INOUT) :: obj
    CHARACTER(*), INTENT(IN) :: msg
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: unitno
  END SUBROUTINE obj_Display
END INTERFACE
```

</TabItem>

<TabItem value="example" label="example">

import EXAMPLE8 from "./examples/_Initiate_test_1.md";

<EXAMPLE8 />

</TabItem>

<TabItem value="close" label="↢ close">

</TabItem>
</Tabs>
