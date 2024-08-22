# Initiate

<!-- markdownlint-disable MD041 MD013 MD033 MD012 -->

This method initiate an instance of `AbstractFE_`.

## Interface

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE fe_Initiate(obj, param)
    CLASS(AbstractFE_), INTENT(INOUT) :: obj
    TYPE(ParameterList_), INTENT(IN) :: param
  END SUBROUTINE fe_Initiate
END INTERFACE
```

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
