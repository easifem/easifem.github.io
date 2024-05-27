---
sidebar_position: 3
---

# GetIDOF

<!-- markdownlint-disable MD041 MD013 MD033 MD012 -->

Get `id` of degree of freedom by specifying physical variable, spatial component, time component.

:::note What is `IDOF`

`IDOF` contains the degree of freedom number. Remember, a space-time component of a physical variable is a degree of freedom.

:::

Calling example:

- `GetIDOF(spaceCompo, timeCompo, tspaceCompo)` [Interface 1](#interface-1)
- `GetIDOF(obj, ivar, spaceCompo, timeCompo)` [Interface 2](#interface-2)
- `GetIDOF(obj, ivar, spaceCompo, timeCompo(:) )` [Interface 3](#interface-3)
- `GetIDOF(obj, ivar, spaceCompo(:), timeCompo)` [Interface 4](#interface-4)
- `GetIDOF(spaceCompo, timeCompo(:), tspaceCompo)` [Interface 5](#interface-5)
- `GetIDOF(spaceCompo(:), timeCompo, tspaceCompo)` [Interface 6](#interface-6)
- `GetIDOF(obj, ivar, idof)` [Interface 7](#interface-7)
- `GetIDOF(obj, ivar)` [Interface 8](#interface-8)

## Interface 1

```fortran
INTERFACE
  MODULE PURE FUNCTION GetIDOF(spacecompo, timecompo, tspacecompo) &
    & RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: spacecompo
    INTEGER(I4B), INTENT(IN) :: timecompo
    INTEGER(I4B), INTENT(IN) :: tspacecompo
    INTEGER(I4B) :: ans
  END FUNCTION GetIDOF
END INTERFACE
```

Get `idof` from space, time component.

:::warning
This is an expert level interface. General user should avoid using this interface.
:::

## Interface 2

```fortran
INTERFACE GetIDOF
  MODULE PURE FUNCTION obj_GetIDOF2(obj, ivar, spacecompo, timecompo) &
    RESULT(ans)
    TYPE(DOF_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: ivar
    !! physical variable number
    INTEGER(I4B), INTENT(IN) :: spacecompo
    !! space component of physical variable
    INTEGER(I4B), INTENT(IN) :: timecompo
    !! time component of physical variable
    INTEGER(I4B) :: ans
  END FUNCTION obj_GetIDOF2
END INTERFACE GetIDOF
```

Get `idof` of a physical variable from its space-time components.

## Interface 3

```fortran
INTERFACE GetIDOF
  MODULE PURE FUNCTION obj_GetIDOF3(obj, ivar, spacecompo, timecompo) &
    RESULT(ans)
    TYPE(DOF_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: ivar
    !! physical variable number
    INTEGER(I4B), INTENT(IN) :: spacecompo
    !! space component of physical variable
    INTEGER(I4B), INTENT(IN) :: timecompo(:)
    !! time components of physical variable
    INTEGER(I4B) :: ans(SIZE(timecompo))
    !! idof of each time component
  END FUNCTION obj_GetIDOF3
END INTERFACE GetIDOF
```

## Interface 4

```fortran
INTERFACE GetIDOF
  MODULE PURE FUNCTION obj_GetIDOF4(obj, ivar, spacecompo, timecompo) &
    RESULT(ans)
    TYPE(DOF_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: ivar
    !! physical variable number
    INTEGER(I4B), INTENT(IN) :: spacecompo(:)
    !! several space components of physical variable
    INTEGER(I4B), INTENT(IN) :: timecompo
    !! a time component of a physical variable
    INTEGER(I4B) :: ans(SIZE(spacecompo))
    !! idof of each space component
  END FUNCTION obj_GetIDOF4
END INTERFACE GetIDOF
```

## Interface 5

```fortran
 INTERFACE
  MODULE PURE FUNCTION GetIDOF(spacecompo, timecompo, tspacecompo) &
    & RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: spacecompo
    INTEGER(I4B), INTENT(IN) :: timecompo(:)
    INTEGER(I4B), INTENT(IN) :: tspacecompo
    INTEGER(I4B) :: ans(SIZE(timecompo))
  END FUNCTION GetIDOF
END INTERFACE
```

## Interface 6

```fortran
 INTERFACE
  MODULE PURE FUNCTION GetIDOF(spacecompo, timecompo, tspacecompo) &
    & RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: spacecompo(:)
    INTEGER(I4B), INTENT(IN) :: timecompo
    INTEGER(I4B), INTENT(IN) :: tspacecompo
    INTEGER(I4B) :: ans(SIZE(spacecompo))
  END FUNCTION GetIDOF
END INTERFACE
```

## Interface 7

```fortran
 INTERFACE
  MODULE PURE FUNCTION GetIDOF(obj, ivar, idof) &
    & RESULT(ans)
    TYPE(DOF_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: idof
    INTEGER(I4B) :: ans
  END FUNCTION GetIDOF
END INTERFACE
```

## Interface 8

```fortran
 INTERFACE
  MODULE PURE FUNCTION GetIDOF(obj, ivar) &
    & RESULT(ans)
    TYPE(DOF_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), ALLOCATABLE :: ans(:)
  END FUNCTION GetIDOF
END INTERFACE
```

## Examples

<details>
<summary>See example</summary>

<div>

import EXAMPLE131 from "./examples/_GetIDOF_test_1.md";

<EXAMPLE131 />

</div>
</details>
