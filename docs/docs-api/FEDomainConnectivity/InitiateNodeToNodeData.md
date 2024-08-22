# InitiateNodeToNodeData

<!-- markdownlint-disable MD041 MD013 MD033 -->

This routine initiates nodeToNode data (mapping) between two domains or parts of domains.

## Interface 1

<Tabs>
<TabItem value="interface" label="Interface" default>

This subroutine generates the node to node connectivity between two meshes

- `obj%nodeToNode` will be initiated
- `domain1` main domain
- `domain2` secondary domain
- `dim1, entitynum1` dimension and entity number of mesh in `domain1`
- `dim2, entitynum2` dimension and entity number of mesh in `domain2`

:::caution
In this case bounds of `nodeToNode` will be from 1 to `mesh1%maxNptrs`.
:::

```fortran
INTERFACE
  MODULE SUBROUTINE dc_InitiateNodeToNodeData1(obj, domain1, domain2, &
    & dim1, dim2, entityNum1, entityNum2)
    CLASS(DomainConnectivity_), INTENT(INOUT) :: obj
    !! Domain connectivity object,
    !! [[DomainConnectivity:nodeToNode]] will be initiated
    CLASS(Domain_), INTENT(IN) :: domain1
    !! Primary domain, in nodeToNode(i), i denotes the
    !! global node number in domain1 domain.
    CLASS(Domain_), INTENT(IN) :: domain2
    !! secondary domain, => nodeToNode(i) denotes the
    !! global node number in `domain2` domain.
    INTEGER(I4B), INTENT(IN) :: dim1
    !! dimension of mesh in domain1
    INTEGER(I4B), INTENT(IN) :: dim2
    !! dimension of mesh in domain2
    INTEGER(I4B), INTENT(IN) :: entityNum1
    !! entity num of mesh in domain1
    INTEGER(I4B), INTENT(IN) :: entityNum2
    !! entity num of mesh in domain2
  END SUBROUTINE dc_InitiateNodeToNodeData1
END INTERFACE
```

</TabItem>

<TabItem value="example" label="example">

import EXAMPLE9 from "./examples/_InitiateNodeToNodeData_test_1.md";

<EXAMPLE9 />

</TabItem>

<TabItem value="close" label="↢ close">

</TabItem>
</Tabs>

## Interface 2

<Tabs>
<TabItem value="interface" label="Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE dc_InitiateNodeToNodeData2(obj, domain1, domain2)
    CLASS(DomainConnectivity_), INTENT(INOUT) :: obj
    !! Domain connectivity object
    CLASS(Domain_), INTENT(IN) :: domain1
    !! Primary domain, in nodeToNode(i), i denotes the
    !! global node number in domain1 domain.
    CLASS(Domain_), INTENT(IN) :: domain2
    !! Secondary domain => nodeToNode(i) denotes the
    !! global node number in domain2 domain.
  END SUBROUTINE dc_InitiateNodeToNodeData2
END INTERFACE
```

</TabItem>

<TabItem value="example" label="example">

import EXAMPLE66 from "./examples/_InitiateNodeToNodeData_test_2.md";

<EXAMPLE66 />

</TabItem>

<TabItem value="close" label="↢ close">

</TabItem>
</Tabs>

## More examples
