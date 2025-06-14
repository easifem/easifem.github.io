---
author: Vikas Sharma, Ph.D.
date: 18 Aug 2022
update: 18 Aug 2022
tags:
    - Monomial3D
    - Monomial3D/Display
    - Monomial3D/EvalGradient
---

# Monomial3D example 4

- This example shows the usage of [[Monomial3D_]] class. Following methods are tested.
- [[Monomial3D_#EvalGradient]]

## Modules and classes

- [[Monomial3D_]]

## Usage

```fortran
PROGRAM main
use easifemBase
use easifemClasses
implicit none
type(Monomial3D_) :: obj
integer(I4B) :: n1, n2, n3
character(len=*), parameter :: varname1="x", varname2="y", varname3="z"
real( dfp ) :: x, y, z, ans, avar
real( dfp ), parameter :: tol=1.0E-10
```

!!! note ""
Initiate the following monomial.
$$
f(x,y)=x^2 y z
$$

```fortran
n1=2; n2=1; n3=1
obj=Monomial3D( n1=n1, n2=n2, n3=n3, varname1=varname1, &
  & varname2=varname2, varname3=varname3 )
```

!!! note "EvalGradient"

```fortran
x = 2.0; y = 3.0; z = 4.0
ans = 2 * x * y * z
avar = obj%EvalGradient(x,y,z, dim=1)
CALL OK( SOFTEQ(ans, avar, tol), "test-4" )
!!
ans = x**2 * z
avar = obj%EvalGradient(x,y,z, dim=2)
CALL OK( SOFTEQ(ans, avar, tol), "test-4" )
!!
ans = x**2 * y
avar = obj%EvalGradient(x,y,z, dim=3)
CALL OK( SOFTEQ(ans, avar, tol), "test-4" )
```

```fortran
END PROGRAM main
```
