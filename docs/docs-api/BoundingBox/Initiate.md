# Initiate

<!-- markdownlint-disable MD033 MD013-->

This routine Initiates the bounding box.

:::note
[Initiate](#interface-1) by specifying the limits:

```fortran
CALL Initiate(obj, nsd, lim)
```

You can also use the function called [`BoundingBox`](#interface-3).

```fortran
ans = BoundingBox(nsd, lim)
```

:::

:::note

[Initiate](#interface-2) by copying:

```fortran
CALL Initiate(obj, Anotherobj)
```

You can also use the function called [BoundingBox](#interface-4).

```fortran
ans = BoundingBox(Anotherobj)
```

:::

:::note
You can also pass the node coordiantes `xij` to [BoundingBox](#interface-5) function.

```fortran
ans = BoundingBox(xij)
```

:::

:::note

You can also use [BoundingBox_Pointer](#interface-6) to get the pointer to a bounding box.
:::

## Interface 1

Initiate by limit.

<Tabs>
<TabItem value="interface" label="Interface" default>

```fortran
INTERFACE
  MODULE PURE SUBROUTINE Initiate(obj, nsd, lim)
    CLASS(BoundingBox_), INTENT(INOUT) :: obj
    !! Instance of bounding box
    INTEGER(I4B), INTENT(IN) :: NSD
    !! Spatial dimension
    REAL(DFP), INTENT(IN) :: lim(6)
    !! Extent of bounding box
  END SUBROUTINE Initiate
END INTERFACE
```

</TabItem>

<TabItem value="example" label="example">

import EXAMPLE56 from "./examples/_Initiate_test_1.md";

<EXAMPLE56 />

</TabItem>

<TabItem value="close" label="↢ close">

</TabItem>
</Tabs>

## Interface 2

<Tabs>
<TabItem value="interface" label="Interface" default>

```fortran
INTERFACE
  MODULE PURE SUBROUTINE Initiate(obj, Anotherobj)
    CLASS(BoundingBox_), INTENT(INOUT) :: obj
    CLASS(BoundingBox_), INTENT(IN) :: Anotherobj
  END SUBROUTINE Initiate
END INTERFACE
```

</TabItem>

<TabItem value="example" label="example">

import EXAMPLE89 from "./examples/_Initiate_test_2.md";

<EXAMPLE89 />

</TabItem>

<TabItem value="close" label="↢ close">

</TabItem>
</Tabs>

## Interface 3

<Tabs>
<TabItem value="interface" label="Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION BoundingBox(nsd, lim) RESULT(ans)
    TYPE(BoundingBox_) :: ans
    INTEGER(I4B), INTENT(IN) :: nsd
    REAL(DFP), INTENT(IN) :: lim(6)
  END FUNCTION BoundingBox
END INTERFACE
```

</TabItem>

<TabItem value="example" label="example">

import EXAMPLE118 from "./examples/_Initiate_test_3.md";

<EXAMPLE118 />

</TabItem>

<TabItem value="close" label="↢ close">

</TabItem>
</Tabs>

## Interface 4

<Tabs>
<TabItem value="interface" label="Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION BoundingBox(Anotherobj) RESULT(ans)
    TYPE(BoundingBox_) :: ans
    CLASS(BoundingBox_), INTENT(IN) :: Anotherobj
  END FUNCTION BoundingBox
END INTERFACE
```

</TabItem>

<TabItem value="example" label="example">

import EXAMPLE149 from "./examples/_Initiate_test_4.md";

<EXAMPLE149 />

</TabItem>

<TabItem value="close" label="↢ close">

</TabItem>
</Tabs>

## Interface 5

<Tabs>
<TabItem value="interface" label="Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION BoundingBox(xij) RESULT(ans)
    REAL(DFP), INTENT(IN) :: xij(:, :)
    !! Nodal coordinates xij( 1:nsd, 1:tnodes )
    TYPE(BoundingBox_) :: ans
    !!
  END FUNCTION BoundingBox
END INTERFACE
```

</TabItem>

<TabItem value="example" label="example">

import EXAMPLE177 from "./examples/_Initiate_test_5.md";

<EXAMPLE177 />

</TabItem>

<TabItem value="close" label="↢ close">

</TabItem>
</Tabs>

## Interface 6

<Tabs>
<TabItem value="interface" label="Interface" default>

```fortran
INTERFACE
  MODULE FUNCTION BoundingBox_Pointer(nsd, lim) RESULT(ans)
    CLASS(BoundingBox_), POINTER :: ans
    INTEGER(I4B), INTENT(IN) :: nsd
    REAL(DFP), INTENT(IN) :: lim(6)
  END FUNCTION BoundingBox_Pointer
END INTERFACE
```

</TabItem>

<TabItem value="example" label="example">

import EXAMPLE209 from "./examples/_Initiate_test_6.md";

<EXAMPLE209 />

</TabItem>

<TabItem value="close" label="↢ close">

</TabItem>
</Tabs>

## Interface 7

<Tabs>
<TabItem value="interface" label="Interface" default>

```fortran
INTERFACE
  MODULE FUNCTION BoundingBox_Pointer(Anotherobj) RESULT(ans)
    CLASS(BoundingBox_), POINTER :: ans
    CLASS(BoundingBox_), INTENT(IN) :: Anotherobj
  END FUNCTION BoundingBox_Pointer
END INTERFACE
```

</TabItem>

<TabItem value="example" label="example">

import EXAMPLE247 from "./examples/_Initiate_test_7.md";

<EXAMPLE247 />

</TabItem>

<TabItem value="close" label="↢ close">

</TabItem>
</Tabs>
