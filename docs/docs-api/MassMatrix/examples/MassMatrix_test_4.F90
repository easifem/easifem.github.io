<<<<<<< HEAD
---
title: MassMatrix example 4 
author: Vikas Sharma, Ph.D.
date: 20 Nov 2021
update: 20 Nov 2021 
tags:
    - ReferenceLine
    - ReferenceLine/Initiate
    - QuadraturePoint/Initiate
    - ElemshapeData/Initiate
    - MassMatrix
---

# MassMatrix example 4

!!! note ""
This example shows how to USE the SUBROUTINE called `MassMatrix` to create a mass matrix in space domain.

Here, we want to DO the following.

$$
\int_{\Omega } N^{I}\rho N^{J}d\Omega
$$

!!! warning ""
`rho` can be a constant, or a FUNCTION of spatial coordinates, or some nonlinear FUNCTION.

In this example, following mass matrix is formed for [[ReferenceLine_]] element, [[QuadraturePoint_]] are `GaussLegendre`.

$$
\int_{\Omega } N^{I} N^{J}d\Omega
$$

This TYPE of mass matrix is useful when $rho$ is a constant.

## Modules and classes

## Usage

```fortran
=======
>>>>>>> 8a747609 (Adding documentation of mass matrix)
PROGRAM main
USE easifemBase
IMPLICIT NONE
TYPE(Elemshapedata_) :: test, elemsdForsimplex, trial
TYPE(Quadraturepoint_) :: quad
TYPE(Referenceline_) :: simplexElem, refElemFortest, refElemFortrial
REAL(DFP), ALLOCATABLE :: mat(:, :), XiJ(:, :)
INTEGER(I4B), PARAMETER :: orderFortest = 1, orderForTrial = 2

<<<<<<< HEAD
!!! note ""
Let us now create the physical coordinate of the line element.

```fortran
XiJ = RESHAPE([-1, 1], [1, 2])
```

!!! note ""
Now we create an instance of [[ReferenceLine_]].

```fortran
simplexElem = referenceline(nsd=1)
CALL simplexElem%LagrangeElement(order=orderForTest, highOrderObj=refElemForTest)
CALL simplexElem%LagrangeElement(order=orderForTrial, highOrderObj=refElemForTrial)
```

!!! note ""
Here, we create the quadrature points.

```fortran
CALL initiate( obj=quad, refelem=simplexElem, order=orderForTest+orderForTrial, &
    & quadratureType='GaussLegendre' )
```

!!! note ""
Initiate an instance of [[ElemshapeData_]]. You can learn more about it from [[ElemshapeData_test]].

```fortran
=======
! Let us now create the physical coordinate of the line element.

XiJ = RESHAPE([-1, 1], [1, 2])

! Now  we create an instance of [[ReferenceLine_]].

simplexElem = referenceline(nsd=1)
    CALL simplexElem%LagrangeElement(order=orderForTest, highOrderObj=refElemForTest)
    CALL simplexElem%LagrangeElement(order=orderForTrial, highOrderObj=refElemForTrial)

! Here, we create the quadrature points.

    CALL initiate( obj=quad, refelem=simplexElem, order=orderForTest+orderForTrial, &
              quadratureType='GaussLegendre')

! Initiate an instance of [[ElemshapeData_]]. You can learn more about it from [[ElemshapeData_test]].

>>>>>>> 8a747609 (Adding documentation of mass matrix)
CALL initiate(obj=elemsdForsimplex, &
    & quad=quad, &
    & refelem=simplexElem, &
    & ContinuityType=typeH1, &
    & InterpolType=typeLagrangeInterpolation)
<<<<<<< HEAD
```

!!! note ""
Initiate an instance of [[ElemeshapeData_]] for test function.

```fortran
CALL initiate(obj=test, &
    & quad=quad, &
    & refelem=refElemForTest, &
    & ContinuityType=typeH1, &
    & InterpolType=typeLagrangeInterpolation)
CALL Set(obj=test, val=xij, N=elemsdForSimplex%N, &
    & dNdXi=elemsdForSimplex%dNdXi)
```

!!! note ""
Initiate an instance of [[ElemeshapeData_]] for trial function.

```fortran
CALL initiate(obj=trial, &
    & quad=quad, &
    & refelem=refElemForTrial, &
    & ContinuityType=typeH1, &
    & InterpolType=typeLagrangeInterpolation)
CALL Set(obj=trial, val=xij, N=elemsdForSimplex%N, &
    & dNdXi=elemsdForSimplex%dNdXi)
```

!!! note ""
Let us now create the mass matrix.

```fortran
mat=MassMatrix(test=trial, trial=test)
CALL Display(mat, "mat:")
```
=======

! Initiate an instance of [[ElemeshapeData_]] for test function.

CALL initiate(obj=test, &
    & quad=quad, &
    & refelem=refElemForTest, &
    & ContinuityType=typeH1, &
    & InterpolType=typeLagrangeInterpolation)
CALL Set(obj=test, val=xij, N=elemsdForSimplex%N, &
    & dNdXi=elemsdForSimplex%dNdXi)

! Initiate an instance of [[ElemeshapeData_]] for trial function.

CALL initiate(obj=trial, &
    & quad=quad, &
    & refelem=refElemForTrial, &
    & ContinuityType=typeH1, &
    & InterpolType=typeLagrangeInterpolation)
CALL Set(obj=trial, val=xij, N=elemsdForSimplex%N, &
    & dNdXi=elemsdForSimplex%dNdXi)
>>>>>>> 8a747609 (Adding documentation of mass matrix)

! Let us now create the mass matrix.

mat = MassMatrix(test=trial, trial=test)
CALL Display(mat, "mat:")

END PROGRAM main
