# GetNearestNode

<!-- markdownlint-disable MD041 MD013 MD033 -->

Get node coordinate and global node number of nearest node of a give node in the domain.

:::note This method uses Kdtree
Make sure you call `InitiateKdtree` method before calling it. If `Kdtree` is not built then this method will build it for you. Therefore, the first call can take longer time to execute.
:::

:::info

In [Interface 1](#interface-1) you can get a single nearest node. In the [Interface 2](#interface-2) you can get `nn` nearest nodes.
:::

## Interface 1

<Tabs>
<TabItem value="interface" label="Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE obj_GetNearestNode1(obj, qv, x, globalNode)
    CLASS(AbstractDomain_), INTENT(INOUT) :: obj
    REAL(DFP), INTENT(IN) :: qv(:)
    !! Query vector
    REAL(DFP), INTENT(INOUT) :: x(:)
    !! node coord of nearest node
    INTEGER(I4B), INTENT(OUT) :: globalNode
    !! globalNode number
  END SUBROUTINE obj_GetNearestNode1
END INTERFACE
```

</TabItem>

<TabItem value="example" label="example">

import EXAMPLE15 from "./examples/_GetNearestNode_test_1.md";

<EXAMPLE15 />

</TabItem>

<TabItem value="close" label="↢ close">

</TabItem>
</Tabs>

## Interface 2

In this interface you can get `nn` nearest node.

<Tabs>
<TabItem value="interface" label="Interface" default>

```fortran
 INTERFACE
  MODULE SUBROUTINE obj_GetNearestNode2(obj, qv, x, globalNode, nn)
    CLASS(AbstractDomain_), INTENT(INOUT) :: obj
    REAL(DFP), INTENT(IN) :: qv(:)
    !! Query vector
    REAL(DFP), INTENT(INOUT) :: x(:, :)
    !! node coord of nearest node
    !! the size(x, 2) should be atleast nn
    INTEGER(I4B), INTENT(INOUT) :: globalNode(:)
    !! globalNode number, size of globalNode should be atleast nn
    INTEGER(I4B), INTENT(IN) :: nn
    !! number of nearest points
  END SUBROUTINE obj_GetNearestNode2
END INTERFACE
```

</TabItem>

<TabItem value="example" label="example">

import EXAMPLE54 from "./examples/_GetNearestNode_test_4.md";

<EXAMPLE54 />

</TabItem>

<TabItem value="close" label="↢ close">

</TabItem>
</Tabs>
