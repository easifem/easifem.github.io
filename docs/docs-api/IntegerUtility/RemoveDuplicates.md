# RemoveDuplicates

<!-- markdownlint-disable MD041 MD013 MD033 -->

This routine removes duplicate entries from the set of integer.

:::note
`RemoveDuplicates` will perform reallocation. If you do not want reallocation then use `RemoveDuplicates_`
:::

Calling example:

```fortran
CALL RemoveDuplicates(avec)
```

Without reallocation:

```fortran
CALL RemoveDuplicates_(avec, tsize, isSorted)
```

## Interface

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE RemoveDuplicates
  MODULE PURE SUBROUTINE RemoveDuplicates_1a(obj)
    INTEGER(INT8), ALLOCATABLE, INTENT(INOUT) :: obj(:)
  END SUBROUTINE RemoveDuplicates_1a
  MODULE PURE SUBROUTINE RemoveDuplicates_1b(obj)
    INTEGER(INT16), ALLOCATABLE, INTENT(INOUT) :: obj(:)
  END SUBROUTINE RemoveDuplicates_1b
  MODULE PURE SUBROUTINE RemoveDuplicates_1c(obj)
    INTEGER(INT32), ALLOCATABLE, INTENT(INOUT) :: obj(:)
  END SUBROUTINE RemoveDuplicates_1c
  MODULE PURE SUBROUTINE RemoveDuplicates_1d(obj)
    INTEGER(INT64), ALLOCATABLE, INTENT(INOUT) :: obj(:)
  END SUBROUTINE RemoveDuplicates_1d
END INTERFACE RemoveDuplicates
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE13 from "./examples/_RemoveDuplicates_test_1.md";

<EXAMPLE13 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 2

<Tabs>
<TabItem value="interface" label="Interface" default>

```fortran
INTERFACE RemoveDuplicates_
  MODULE PURE SUBROUTINE RemoveDuplicates_1a_(obj, tsize, isSorted)
    INTEGER(INT8), INTENT(INOUT) :: obj(:)
    !! obj(1:tsize) will have unique entries
    LOGICAL(LGT), INTENT(IN) :: isSorted
    !! if obj is sorted then set isSorted to true
    INTEGER(I4B), INTENT(OUT) :: tsize
    !! number of unique entries found
  END SUBROUTINE RemoveDuplicates_1a_

  MODULE PURE SUBROUTINE RemoveDuplicates_1b_(obj, tsize, isSorted)
    INTEGER(INT16), INTENT(INOUT) :: obj(:)
    !! obj(1:tsize) will have unique entries
    LOGICAL(LGT), INTENT(IN) :: isSorted
    !! if obj is sorted then set isSorted to true
    INTEGER(I4B), INTENT(OUT) :: tsize
    !! number of unique entries found
  END SUBROUTINE RemoveDuplicates_1b_

  MODULE PURE SUBROUTINE RemoveDuplicates_1c_(obj, tsize, isSorted)
    INTEGER(INT32), INTENT(INOUT) :: obj(:)
    !! obj(1:tsize) will have unique entries
    LOGICAL(LGT), INTENT(IN) :: isSorted
    !! if obj is sorted then set isSorted to true
    INTEGER(I4B), INTENT(OUT) :: tsize
    !! number of unique entries found
  END SUBROUTINE RemoveDuplicates_1c_

  MODULE PURE SUBROUTINE RemoveDuplicates_1d_(obj, tsize, isSorted)
    INTEGER(INT64), INTENT(INOUT) :: obj(:)
    !! obj(1:tsize) will have unique entries
    LOGICAL(LGT), INTENT(IN) :: isSorted
    !! if obj is sorted then set isSorted to true
    INTEGER(I4B), INTENT(OUT) :: tsize
    !! number of unique entries found
  END SUBROUTINE RemoveDuplicates_1d_

END INTERFACE RemoveDuplicates_
```

</TabItem>

<TabItem value="example" label="example">

import EXAMPLE51 from "./examples/_RemoveDuplicates_test_2.md";

<EXAMPLE51 />

</TabItem>

<TabItem value="close" label="↢ close">

</TabItem>
</Tabs>
