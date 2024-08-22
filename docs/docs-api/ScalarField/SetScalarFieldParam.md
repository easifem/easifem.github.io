# SetScalarFieldParam

<!-- markdownlint-disable MD041 MD013 MD033 MD012 -->

Set the parameter for constructing a scalar field.

## Interface

<Tabs>
<TabItem value="interface" label="Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE SetScalarFieldParam(param, name, engine, fieldType)
    TYPE(ParameterList_), INTENT(INOUT) :: param
    CHARACTER(*), INTENT(IN) :: name
    CHARACTER(*), INTENT(IN) :: engine
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: fieldType

  END SUBROUTINE SetScalarFieldParam
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️See example">

import EXAMPLE7 from "./examples/_Initiate_test_1.md";

<EXAMPLE7 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
