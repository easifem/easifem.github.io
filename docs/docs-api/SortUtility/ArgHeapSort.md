# ArgHeapSort

This routine performs an indirect heap sort on an array.

It returns the integer array which can be used for obtaining the sorted array.

Calling example:

```fortran
CALL ArgHeapSort(array, arg)
```

Then, `array(arg)` will be sorted in increasing order.

## Interface

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
MODULE PURE SUBROUTINE ArgHeapSort(array, arg)
  INTEGER(Int8| Int16 | Int32 | Int64) | REAL(Real32| Real64), INTENT(IN) :: array(:)
  INTEGER(I4B), INTENT(OUT) :: arg(0:)
END SUBROUTINE ArgHeapSort
```

- Here, entries of `array` are NOT modified by the routine.
- `arg` should be allocated by the user
- `array(arg)` returns the sorted array.

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE20 from "./examples/_ArgSort_test_1.md";

<EXAMPLE20 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
