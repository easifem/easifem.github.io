---
sidebar_position: 2
---

# Structure

`AbstractOneDimFE_` is an abstract class that serves as the foundation for all one-dimensional finite element implementations in the EASIFEM library. It defines common attributes and methods that all specific one-dimensional elements must implement or inherit.

A finite element is defined by

- Reference element
- Polynomials space
- Degree of freedoms

```fortran
TYPE, ABSTRACT :: AbstractOneDimFE_
  PRIVATE
  LOGICAL(LGT) :: isInitiated = .FALSE.
  !! It is set to true at the time of constructor

  TYPE(OneDimBasisOpt_) :: opt

  REAL(DFP), ALLOCATABLE :: coeff(:, :)
  !! coefficient necessary for lagrange interpolation

  REAL(DFP), ALLOCATABLE :: xij(:, :)
  !! interpolation points for lagrange polynomial
  !! coeff, and xij are needed internally for
  !! constructing the lagrange polynomial
end type AbstractOneDimFE_
```

- `isInitiated` - Initialization status flag
- `opt` - Options for one-dimensional basis functions
- `coeff` - Coefficients necessary for Lagrange interpolation
- `xij` - Interpolation points for Lagrange polynomial

