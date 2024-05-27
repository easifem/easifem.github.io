# tNodes

<!-- markdownlint-disable MD041 MD013 MD033 MD012 -->

This method returns the total number of nodes in DOF object.

:::info
You can also use the generic method called `SIZE`
:::

Calling examples:

Use `.tNodes.` operator to get the total number of nodes for `DOF_`.

```fortran
ans=.tNodes. obj
```

This returns the size of `DOF_` object. If you want to get the total nodes in a given degree of freedom then we can use the following.

```fortran
ans=obj .tNodes. idof
```

If you want the size of several degrees of freedom then use

```fortran
ans=obj .tNodes. [idof1, idof2, idof3]
```

If you want to know the size of a physical variable, then use the name of physical variable

```fortran
ans= obj .tNodes. "U"
```

## Interface 1

```fortran
INTERFACE
  MODULE PURE FUNCTION Size(obj) RESULT(ans)
    CLASS(DOF_), INTENT(IN) :: obj
    INTEGER(I4B) :: ans
  END FUNCTION Size
END INTERFACE
```

:::note
This method is also available as the generic method called `SIZE`
:::

## Interface 2

```fortran
INTERFACE
  MODULE PURE FUNCTION Size(obj, idof) RESULT(ans)
    CLASS(DOF_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: idof
    INTEGER(I4B) :: ans
  END FUNCTION Size
END INTERFACE
```

- This function returns the total number of nodes for a given degree of freedom number
  `idof`
- `idof` should be lesser than the total degree of freedom.

:::note
This method is also available as the generic method called `SIZE`
:::

## Interface 3

```fortran
INTERFACE
  MODULE PURE FUNCTION Size(obj, varname) RESULT(ans)
    CLASS(DOF_), INTENT(IN) :: obj
    CHARACTER(*), INTENT(IN) :: varname
    INTEGER(I4B) :: ans
  END FUNCTION Size
END INTERFACE
```

- This function returns the total number of nodes for a physical variable.
- The physical variable is given by its name.

:::note
This method is also available as the generic method called `SIZE`
:::

## Interface 4

```fortran
INTERFACE
  MODULE PURE FUNCTION Size(obj, idof) RESULT(ans)
    CLASS(DOF_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: idof(:)
    INTEGER(I4B) :: ans
  END FUNCTION Size
END INTERFACE
```

- This function returns the total number of nodes in multiple degrees of freedom number.
- All degrees of freedom specified in `idof` should be lesser than the total degree of freedom.

:::note
This method is also available as the generic method called `SIZE`
:::

## Examples

import EXAMPLE106 from "./examples/_tNodes_test_1.md";

<EXAMPLE106 />
