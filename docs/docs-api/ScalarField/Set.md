# Set

<!-- markdownlint-disable MD041 MD013 MD033 MD012 -->

Set the entries in the `ScalarField`.

Calling example:

<span class="badge badge--success">
Set a single entry
</span>

```fortran
CALL Set(
    CLASS(ScalarField_):: obj
    INTEGER(I4B):: globalNode
    REAL(DFP):: VALUE
    REAL(DFP):: scale
    LOGICAL(LGT):: addContribution
)
```

<span class="badge badge--success">
Set all entries to a single scalar value
</span>

```fortran
CALL Set(
    CLASS(ScalarField_):: obj
    REAL(DFP):: VALUE
    REAL(DFP):: scale
    LOGICAL(LGT):: addContribution
)
```

<span class="badge badge--success">
Set all entries of scalar field to a given vector.
</span>

```fortran
CALL Set(
    CLASS(ScalarField_):: obj
    REAL(DFP):: VALUE(:)
    REAL(DFP):: scale
    LOGICAL(LGT):: addContribution
)
```

<span class="badge badge--success">
Set selected entries to a single value.
</span>

```fortran
CALL Set(
    CLASS(ScalarField_):: obj
    INTEGER(I4B):: globalNode(:)
    REAL(DFP):: VALUE
    REAL(DFP):: scale
    LOGICAL(LGT):: addContribution
)
```

<span class="badge badge--success">
Set multiple entries to different values.
</span>

```fortran
CALL Set(
    CLASS(ScalarField_):: obj
    INTEGER(I4B):: globalNode(:)
    REAL(DFP):: VALUE(:)
    REAL(DFP):: scale
    LOGICAL(LGT):: addContribution
)
```

<span class="badge badge--success">
Select multiple enties using triads.
</span>

```fortran
CALL Set(
    CLASS(ScalarField_):: obj
    INTEGER(I4B):: istart
    INTEGER(I4B):: iend
    INTEGER(I4B):: stride
    REAL(DFP):: VALUE
    REAL(DFP):: scale
    LOGICAL(LGT):: addContribution
)
```

<span class="badge badge--success">
Select multiple enties using triads.
</span>

```fortran
CALL Set(
    CLASS(ScalarField_):: obj
    INTEGER(I4B):: istart
    INTEGER(I4B):: iend
    INTEGER(I4B):: stride
    REAL(DFP):: VALUE(:)
    REAL(DFP):: scale
    LOGICAL(LGT):: addContribution
)
```

<span class="badge badge--success">
Copy obj2 in obj.
</span>

```fortran
CALL Set(
    CLASS(ScalarField_):: obj
    CLASS(ScalarField_):: obj2
)
```

<span class="badge badge--success">
Select multiple values using FEVariable.
</span>

```fortran
CALL Set(
    CLASS(ScalarField_):: obj
    INTEGER(I4B):: globalNode(:)
    TYPE(FEVariable_):: VALUE
    REAL(DFP):: scale
    LOGICAL(LGT):: addContribution
)
```

<span class="badge badge--success">
Copy obj2 into obj like AXPY.
</span>

```fortran
CALL Set(
    CLASS(ScalarField_):: obj
    CLASS(ScalarField_):: obj2
    REAL(DFP):: scale
    LOGICAL(LGT):: addContribution
)
```

## Interface 1

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE set1(obj, globalNode, VALUE, scale, &
    & addContribution)
    CLASS(ScalarField_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode
    REAL(DFP), INTENT(IN) :: VALUE
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE set1
END INTERFACE
```

- Set single entry.

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE127 from "./examples/_Set_test_1.md";

<EXAMPLE127 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 2

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE set2(obj, VALUE, scale, addContribution)
    CLASS(ScalarField_), INTENT(INOUT) :: obj
    REAL(DFP), INTENT(IN) :: VALUE
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE set2
END INTERFACE
```

- Set all values of scalar field to a given scalar.

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE198 from "./examples/_Set_test_2.md";

<EXAMPLE198 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 3

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE set3(obj, VALUE, scale, addContribution)
    CLASS(ScalarField_), INTENT(INOUT) :: obj
    REAL(DFP), INTENT(IN) :: VALUE(:)
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE set3
END INTERFACE
```

- Set all values of scalarfield using a vector of reals.
- The size of value should be same as the size of scalar field.

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE334 from "./examples/_Set_test_3.md";

<EXAMPLE334 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>

</Tabs>

## Interface 4

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
 MODULE SUBROUTINE set4(obj, globalNode, VALUE, scale, addContribution)
    CLASS(ScalarField_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode(:)
    REAL(DFP), INTENT(IN) :: VALUE
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE set4
END INTERFACE
```

Set multiple values to a scalar value.

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE253 from "./examples/_Set_test_4.md";

<EXAMPLE253 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 5

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
 MODULE SUBROUTINE set5(obj, globalNode, VALUE, scale, addContribution)
    CLASS(ScalarField_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode(:)
    REAL(DFP), INTENT(IN) :: VALUE(:)
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE set5
END INTERFACE
```

Set multiple values of scalar field.

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE287 from "./examples/_Set_test_5.md";

<EXAMPLE287 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 6

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE set6(obj, istart, iend, stride, VALUE, &
    & scale, addContribution)
    CLASS(ScalarField_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: istart
    INTEGER(I4B), INTENT(IN) :: iend
    INTEGER(I4B), INTENT(IN) :: stride
    REAL(DFP), INTENT(IN) :: VALUE
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE set6
END INTERFACE
```

Set multiple values by using triplets `istart:iend:stride`

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE321 from "./examples/_Set_test_6.md";

<EXAMPLE321 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 7

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE set7(obj, istart, iend, stride, VALUE, &
    & scale, addContribution)
    CLASS(ScalarField_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: istart
    INTEGER(I4B), INTENT(IN) :: iend
    INTEGER(I4B), INTENT(IN) :: stride
    REAL(DFP), INTENT(IN) :: VALUE(:)
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE set7
END INTERFACE
```

Set multiple values using triplets.

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE358 from "./examples/_Set_test_7.md";

<EXAMPLE358 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 8

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE set8(obj, obj2)
    CLASS(ScalarField_), INTENT(INOUT) :: obj
    CLASS(ScalarField_), INTENT(IN) :: obj2
  END SUBROUTINE set8
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE395 from "./examples/_Set_test_8.md";

<EXAMPLE395 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 9

```fortran
INTERFACE
 MODULE SUBROUTINE set9(obj, globalNode, VALUE, scale, addContribution)
    CLASS(ScalarField_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode(:)
    TYPE(FEVariable_), INTENT(IN) :: VALUE
  !! Scalar, Nodal, FEVariable (Space or Constant)
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE set9
END INTERFACE
```

## Interface 10

```fortran
 INTERFACE
  MODULE SUBROUTINE set10(obj, obj2, scale, addContribution)
    CLASS(ScalarField_), INTENT(INOUT) :: obj
    CLASS(ScalarField_), INTENT(IN) :: obj2
    REAL(DFP), INTENT(IN) :: scale
    LOGICAL(LGT), INTENT(IN) :: addContribution
  END SUBROUTINE set10
END INTERFACE
```

## Interface 11

```fortran
 INTERFACE
  MODULE SUBROUTINE Set11(obj, ivar, idof, VALUE, ivar_value, &
    & idof_value, scale, addContribution)
    CLASS(ScalarField_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: idof
    CLASS(AbstractNodeField_), INTENT(IN) :: VALUE
    INTEGER(I4B), INTENT(IN) :: ivar_value
    INTEGER(I4B), INTENT(IN) :: idof_value
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE Set11
END INTERFACE
```
