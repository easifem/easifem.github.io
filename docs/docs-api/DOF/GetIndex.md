---
sidebar_position: 4
---

# GetIndex

<!-- markdownlint-disable MD041 MD013 MD033 MD012 -->

Get index of node number.

Calling example:

- `GetIndex(obj, nodenum)` [Interface 1](#interface-1)
- `GetIndex(obj, nodenum, ivar)` [Interface 2](#interface-2)
- `GetIndex(obj, nodenum, varname)` [Interface 3](#interface-3)
- `GetIndex(obj, nodenum(:) )` [Interface 4](#interface-4)
- `GetIndex(obj, nodenum(:), ivar)` [Interface 5](#interface-5)
- `GetIndex(obj, nodenum(:), varname)` [Interface 6](#interface-6)
- `GetIndex(obj, nodenum, ivar, idof)` [Interface 7](#interface-7)
- `GetIndex(obj, nodenum(:), ivar, idof)` [Interface 8](#interface-8)
- `GetIndex(obj, nodenum, ivar, spacecompo, timecompo)` [Interface 9](#interface-9)
- `GetIndex(obj, nodenum(:), ivar, spacecompo, timecompo)` [Interface 10](#interface-10)

:::note
`nodenum` should be lesser than the total number of nodes defined for dof number `idof`.
:::

:::info
`idof`s are continuously numbered, so if there are two or more physical variables, then idof of the second or later physical variables does not start from 1.
:::

## What is an index

Index is a location of a nodal degree of freedom. For example, consider `velocity` variable with 3 space and 2 time components. Now what is the location of velocity (space component 1, and time component 2) at node number 3. This location is called index.

## Interface 1

```fortran
INTERFACE
  MODULE PURE FUNCTION GetIndex1(obj, nodenum) RESULT(ans)
    CLASS(DOF_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum
    INTEGER(I4B), ALLOCATABLE :: ans(:)
  END FUNCTION GetIndex1
END INTERFACE
```

- This function returns indices, representing the location of all degrees of freedom define on a given node number.
- The size of these indices is equal to the total number of `DOF` in obj
- In this way, `ans(ii)` represents the location of `ii` `dof` at node number `nodenum`
- It is user's responsibility to ensure that for every physical variable the `nodenumber` is lesser than the total number of nodes defined for that physical variable.
- The returned indices can be used to extract values from an instance of `RealVector` or Fortran vector.

:::note
The size of returned vector `ans` will be the total number of degrees of freedom in the `DOF` object.
:::

## Interface 2

```fortran
INTERFACE
  MODULE PURE FUNCTION GetIndex2(obj, nodenum, ivar) RESULT(ans)
    CLASS(DOF_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), ALLOCATABLE :: ans(:)
  END FUNCTION GetIndex2
END INTERFACE
```

- This function returns indices, representing the locations of all the degrees of freedom of a given physical variable `ivar` at a given node number `nodenum`
- The physical variable is defined by `ivar`
- The size of these indices is equal to the total number of DOF defined for the `ivar` physical variable.
- It is user's responsibility to ensure that for the selected physical var the `nodenum` is lesser than the total number of nodes defined for that physical variable.

## Interface 3

```fortran
INTERFACE
  MODULE PURE FUNCTION GetIndex3(obj, nodenum, varname) RESULT(ans)
    CLASS(DOF_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum
    CHARACTER(1), INTENT(IN) :: varname
    INTEGER(I4B), ALLOCATABLE :: ans(:)
  END FUNCTION GetIndex3
END INTERFACE
```

Same as [Interface 2](#interface-2), but physical variable is selected by it name.

## Interface 4

```fortran
INTERFACE
  MODULE PURE FUNCTION GetIndex4(obj, nodenum) RESULT(ans)
    CLASS(DOF_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum(:)
    INTEGER(I4B), ALLOCATABLE :: ans(:)
  END FUNCTION GetIndex4
END INTERFACE
```

- This function returns indices, representing the location of all the degrees of freedom defined at node numbers specified by nodenum.
- The size of these indices is equal to the total number of DOF in obj times the size of `nodenum(:)`.

## Interface 5

```fortran
INTERFACE
  MODULE PURE FUNCTION GetIndex5(obj, nodenum, ivar) RESULT(ans)
    CLASS(DOF_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum(:)
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), ALLOCATABLE :: ans(:)
  END FUNCTION GetIndex5
END INTERFACE
```

- This function returns indices, representing the location of all the degrees of freedom of physical variable given by `ivar`, at nodes given in `nodenum`.
- The physical variable is defined by `ivar`
- The size of these indices is equal to the total number of `DOF` defined for the `ivar` physical variable times the size of `nodenum`.

## Interface 6

```fortran
INTERFACE
  MODULE PURE FUNCTION GetIndex6(obj, nodenum, varname) RESULT(ans)
    CLASS(DOF_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum(:)
    CHARACTER(1), INTENT(IN) :: varname
    INTEGER(I4B), ALLOCATABLE :: ans(:)
  END FUNCTION GetIndex6
END INTERFACE
```

- This function returns a vector of integers (indices) for a given node number and a given physical Variable.
- The physical variable is defined by `varname`
- The size of these indices is equal to the total number of DOF defined for the `varname` physical variable.
- The returned indices represent the degrees of freedom of physical variable `varname` defined on each node.
- It is user's responsibility to ensure that for the selected physical var the `nodenumber` is lesser than the total number of nodes defined for that physical variable.
- The returned indices can be used for getting the dof (all dof) defined on the nodenum for the given physical variable.
- The returned indices can be used to extract values from an instance of [RealVector](../RealVector/RealVector_.md) or fortran vector of real numbers.

## Interface 7

```fortran
INTERFACE GetIndex
  MODULE PROCEDURE dof_getNodeLoc5
END INTERFACE GetIndex
```

## Interface 8

```fortran
INTERFACE GetIndex
  MODULE PROCEDURE dof_getNodeLoc6
END INTERFACE GetIndex
```

## Interface 9

```fortran
INTERFACE GetIndex
  MODULE PROCEDURE dof_getNodeLoc7
END INTERFACE GetIndex
```

## Interface 10

```fortran
INTERFACE GetIndex
  MODULE PROCEDURE dof_getNodeLoc8
END INTERFACE GetIndex
```

## Examples

<details>
<summary>See examples</summary>
<div>

import EXAMPLE164 from "./examples/_GetIndex_test_1.md";

<EXAMPLE164 />

</div>
</details>
