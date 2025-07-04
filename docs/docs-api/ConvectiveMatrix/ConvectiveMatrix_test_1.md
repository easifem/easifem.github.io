---
author: Vikas Sharma, Ph.D.
date: 2021-11-21
update: 2022-12-04
status: stable
docs: none
extpkgs: none
category:
  - Example
tags:
  - example
  - ReferenceLine
  - ReferenceLine/Initiate
  - QuadraturePoint/Initiate
  - ElemshapeData/Initiate
  - ConvectiveMatrix
---

# 📚 ConvectiveMatrix example 1

!!! note ""
This example shows how to use the subroutine called `ConvectiveMatrix` to create a convective matrix in space domain.

Here, we want to do the following.

$$
M(I,J) = \int_{\Omega} N^I c_k \frac{\partial N^J}{\partial x_k} d{\Omega}
$$

$$
M(I,J) = \partial u_{iI} \int_{\Omega} c_k \frac{\partial N^I}{\partial x_k} N^J d{\Omega}
$$

!!! warning ""
$c$ is convective velocity, which can be a constant, or a function of spatial coordinates, or some nonlinear function.

In this example, convective matrix is formed for

- [[ReferenceLine_]] element
- [[QuadraturePoint_]] `GaussLegendre`
- Constant velocity

## Modules and classes

## Usage

```fortran
PROGRAM main
    USE easifemBase
    IMPLICIT NONE
    TYPE(elemshapedata_) :: test, trial
    TYPE(quadraturepoint_) :: quad
    TYPE(referenceline_) :: refelem
    REAL(DFP), parameter :: c(1) = [1.0]
    REAL(DFP), ALLOCATABLE :: mat(:, :)
    REAL(DFP), ALLOCATABLE :: XiJ(:, :)
    integer( I4B ), parameter :: order = 1
```

!!! note ""
Let us now create the physical coordinate of the line element.

```fortran
XiJ = RESHAPE([-1, 1], [1, 2])
```

!!! note ""
Now we create an instance of [[ReferenceLine_]].

```fortran
refelem = referenceline(nsd=1)
```

!!! note ""
Here, we create the quadrature points.

```fortran
CALL initiate( obj=quad, refelem=refelem, order=order+order-1, &
    & quadratureType='GaussLegendre' )
```

!!! note ""
Initiate an instance of [[ElemshapeData_]]. You can learn more about it from [[ElemshapeData_test]]

```fortran
CALL initiate(obj=test, &
    & quad=quad, &
    & refelem=refelem, &
    & ContinuityType=typeH1, &
    & InterpolType=typeLagrangeInterpolation)
CALL Set( obj=test, val=xij, N=test%N, dNdXi=test%dNdXi)
```

!!! note ""
Let us now create the convective matrix.

```fortran
mat=ConvectiveMatrix(test=test, trial=test, term1=1, term2=0, c=c)
CALL Display(mat, "mat:")
```

??? example "Results"

    ```bash
            mat:
    --------------------
    -0.500000  -0.500000
     0.500000   0.500000
    ```

!!! note ""
Let us now create the convective matrix.

```fortran
mat=ConvectiveMatrix(test=test, trial=test, term1=0, term2=1, c=c)
CALL Display(mat, "mat:")
```

??? example "Results"

    ```bash
            mat:
    -------------------
    -0.500000  0.500000
    -0.500000  0.500000
    ```

!!! settings "Cleanup"

```fortran
END PROGRAM main
```
