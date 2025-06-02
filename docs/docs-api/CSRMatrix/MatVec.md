# MatVec

This routine performs matrix vector multiplication between CSRMatrix and dense vector.

Calling example:

```fortran
CALL MatVec(CSRMatrix_::obj, Real::x(:), Real::y(:)[, Bool::transp])
CALL MatVec(Real::A(:), Integer::JA(:), Real::x(:), Real::y(:))
```

:::tip example 1

$$
y= Ax
$$

```fortran
CALL MatVec(CSRMatrix_::obj, Real::x(:), Real::y(:))
```

:::

:::tip example 2

$$
y= y + s*Ax
$$

```fortran
CALL MatVec(CSRMatrix_::obj, Real::x(:), Real::y(:), Bool::addContribution, REAL::scale)
```

:::

## Interface 1

<Tabs>
<TabItem value="interface" label="܀ MatVec(obj, x, y, transp)" default>

```fortran
INTERFACE MatVec
  MODULE SUBROUTINE csrMat_MatVec1(obj, x, y, isTranspose, addContribution, &
    & scale)
    TYPE(CSRMatrix_), INTENT(IN) :: obj
    REAL(DFP), INTENT(IN) :: x(:)
    REAL(DFP), INTENT(INOUT) :: y(:)
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: isTranspose
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
  END SUBROUTINE csrMat_MatVec1
END INTERFACE MatVec
```

</TabItem>

<TabItem value="example" label="️܀ See example">

TODO

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>

</Tabs>

## Interface 2

<Tabs>

<TabItem value="interface" label="܀ MatVec(A, JA, x, y)" default>

```fortran
INTERFACE MatVec
  MODULE SUBROUTINE csrMat_MatVec2(A, JA, x, y, addContribution, &
    & scale)
    REAL(DFP), INTENT(IN) :: A(:)
    INTEGER(I4B), INTENT(IN) :: JA(:)
    REAL(DFP), INTENT(IN) :: x(:)
    REAL(DFP), INTENT(INOUT) :: y(:)
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
  END SUBROUTINE csrMat_MatVec2
END INTERFACE MatVec
```

</TabItem>

<TabItem value="example" label="️܀ See example">

TODO

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>

</Tabs>
