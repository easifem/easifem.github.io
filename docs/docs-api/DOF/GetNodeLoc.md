---
sidebar_position: 5
---

# GetNodeLoc

<!-- markdownlint-disable MD041 MD013 MD033 MD012 -->

Get the location (index) of node number.

This method returns the location of degree of freedom number `idof` at node number `nodenum`.

:::note
`nodenum` should be lesser than the total number of nodes defined for dof number `idof`.
:::

:::info
`idof`s are continuously numbered, so if there are two or more physical variables, then idof of the second or later physical variables does not start from 1.
:::

Calling example:

- `GetNodeLoc(obj, nodenum, idof)` [Interface 1](#interface-1)
- `GetNodeLoc(obj, nodenum(:), idof)` [Interface 2](#interface-2)
- `GetNodeLoc(obj, nodenum, idof(:) )` [Interface 3](#interface-3)
- `GetNodeLoc(obj, idof)` [Interface 4](#interface-4)
- `GetNodeLoc(obj, nodenum, ivar, idof)` [Interface 5](#interface-5)
- `GetNodeLoc(obj, nodenum(:), ivar, idof)` [Interface 6](#interface-6)
- `GetNodeLoc(obj, nodenum, ivar, spacecompo, timecompo)` [Interface 7](#interface-7)
- `GetNodeLoc(obj, nodenum(:), ivar, spacecompo, timecompo)` [Interface 8](#interface-8)
- `GetNodeLoc(obj, nodenum, ivar, idof(:) )` [Interface 9](#interface-9)
- `GetNodeLoc(obj, nodenum, ivar, spacecompo, timecompo(:) )` [Interface 10](#interface-10)
- `GetNodeLoc(obj, nodenum, ivar, spacecompo(:), timecompo)` [Interface 11](#interface-11)
- `GetNodeLoc(obj, nodenum(:), ivar, spacecompo, timecompo(:) )` [Interface 12](#interface-12)
- `GetNodeLoc(obj, nodenum(:), ivar, spacecompo(:), timecompo)` [Interface 13](#interface-13)

## Interface 1

```fortran
INTERFACE
  MODULE PURE FUNCTION GetNodeLoc(obj, nodenum, idof) RESULT(ans)
    TYPE(DOF_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum
    INTEGER(I4B), INTENT(IN) :: idof
    INTEGER(I4B) :: ans
  END FUNCTION GetNodeLoc
END INTERFACE
```

It returns the location of degree of freedom number `idof` at node number `nodenum`.

:::note
`nodenum` should be lesser than the total number of nodes defined for `dof` number `idof`.
:::

:::note
`idofs` are continuously numbered, so if there are two or more physical variables, then `idof` of the second or later physical variables will not start from 1.
:::

## Interface 2

```fortran
INTERFACE
  MODULE PURE FUNCTION GetNodeLoc(obj, nodenum, idof) RESULT(ans)
    TYPE(DOF_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum(:)
    INTEGER(I4B), INTENT(IN) :: idof
    INTEGER(I4B) :: ans(SIZE(nodenum))
  END FUNCTION GetNodeLoc
END INTERFACE
```

It returns the location of degree of freedom number `idof` at node number `nodenum`.

:::info
`nodenum` should be lesser than the total number of nodes defined for `dof` number `idof`.
:::

:::info
`idofs` are continuously numbered, so if there are two or more physical variables, then `idof` of the second or later physical variables will not start from 1.
:::

## Interface 3

```fortran
INTERFACE
  MODULE PURE FUNCTION GetNodeLoc(obj, nodenum, idof) RESULT(ans)
    TYPE(DOF_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum
    INTEGER(I4B), INTENT(IN) :: idof(:)
    INTEGER(I4B) :: ans(SIZE(idof))
  END FUNCTION GetNodeLoc
END INTERFACE
```

It returns the location of degree of freedom number `idof` at node number `nodenum`.

:::info
`nodenum` should be lesser than the total number of nodes defined for `dof` number `idof`.
:::

:::note
`idofs` are continuously numbered, so if there are two or more physical variables, then `idof` of the second or later physical variables will not start from 1.
:::

## Interface 4

```fortran
INTERFACE
  MODULE PURE FUNCTION GetNodeLoc(obj, idof) RESULT(ans)
    TYPE(DOF_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: idof
    INTEGER(I4B) :: ans(3)
  END FUNCTION GetNodeLoc
END INTERFACE
```

```txt
ans(1) : istart
ans(2) : iend
ans(3) : stride
```

In this way a given degree of freedom `idof` will be located in `vec(istart:iend:stride)`.

:::note
In DOF object, idofs are continuously numbered, so if there are two or more physical variables, then idof of the second or later physical variables will not start from 1.
:::

## Interface 5

```fortran
INTERFACE
  MODULE PURE FUNCTION GetNodeLoc(obj, nodenum, ivar, idof) &
    & RESULT(ans)
    TYPE(DOF_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: idof
    INTEGER(I4B) :: ans
  END FUNCTION GetNodeLoc
END INTERFACE
```

## Interface 6

```fortran
INTERFACE
  MODULE PURE FUNCTION GetNodeLoc(obj, nodenum, ivar, idof) &
    & RESULT(ans)
    TYPE(DOF_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum(:)
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: idof
    INTEGER(I4B) :: ans(SIZE(nodenum))
  END FUNCTION GetNodeLoc
END INTERFACE
```

## Interface 7

```fortran
INTERFACE
  MODULE PURE FUNCTION GetNodeLoc(obj, nodenum, ivar, spacecompo, &
    & timecompo) RESULT(ans)
    TYPE(DOF_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spacecompo
    INTEGER(I4B), INTENT(IN) :: timecompo
    INTEGER(I4B) :: ans
  END FUNCTION GetNodeLoc
END INTERFACE
```

## Interface 8

```fortran
INTERFACE
  MODULE PURE FUNCTION GetNodeLoc(obj, nodenum, ivar, spacecompo, &
    & timecompo) RESULT(ans)
    TYPE(DOF_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum(:)
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spacecompo
    INTEGER(I4B), INTENT(IN) :: timecompo
    INTEGER(I4B) :: ans(SIZE(nodenum))
  END FUNCTION GetNodeLoc
END INTERFACE
```

## Interface 9

```fortran
INTERFACE
  MODULE PURE FUNCTION GetNodeLoc(obj, nodenum, ivar, idof) &
    & RESULT(ans)
    TYPE(DOF_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: idof(:)
    INTEGER(I4B) :: ans(SIZE(idof))
  END FUNCTION GetNodeLoc
END INTERFACE
```

## Interface 10

```fortran
INTERFACE
  MODULE PURE FUNCTION GetNodeLoc(obj, nodenum, ivar, spacecompo, &
    & timecompo) RESULT(ans)
    TYPE(DOF_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spacecompo
    INTEGER(I4B), INTENT(IN) :: timecompo(:)
    INTEGER(I4B) :: ans(SIZE(timecompo))
  END FUNCTION GetNodeLoc
END INTERFACE
```

## Interface 11

```fortran
INTERFACE
  MODULE PURE FUNCTION GetNodeLoc(obj, nodenum, ivar, spacecompo, &
    & timecompo) RESULT(ans)
    TYPE(DOF_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spacecompo(:)
    INTEGER(I4B), INTENT(IN) :: timecompo
    INTEGER(I4B) :: ans(SIZE(spacecompo))
  END FUNCTION GetNodeLoc
END INTERFACE
```

## Interface 12

```fortran
INTERFACE
  MODULE PURE FUNCTION GetNodeLoc(obj, nodenum, ivar, spacecompo, &
    & timecompo) RESULT(ans)
    TYPE(DOF_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum(:)
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spacecompo
    INTEGER(I4B), INTENT(IN) :: timecompo(:)
    INTEGER(I4B) :: ans(SIZE(timecompo) * SIZE(nodenum))
  END FUNCTION GetNodeLoc
END INTERFACE
```

## Interface 13

```fortran
INTERFACE
  MODULE PURE FUNCTION GetNodeLoc(obj, nodenum, ivar, spacecompo, &
    & timecompo) RESULT(ans)
    TYPE(DOF_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum(:)
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spacecompo(:)
    INTEGER(I4B), INTENT(IN) :: timecompo
    INTEGER(I4B) :: ans(SIZE(spacecompo) * SIZE(nodenum))
  END FUNCTION GetNodeLoc
END INTERFACE
```

## Examples

<Tabs>
<TabItem value="example1" label="️܀ Example 1">

import EXAMPLE267 from "./examples/_GetNodeLoc_test_1.md";

<EXAMPLE267 />

</TabItem>

<TabItem value="example2" label="️܀ Example 2">

import EXAMPLE279 from "./examples/_GetNodeLoc_test_2.md";

<EXAMPLE279 />

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>
