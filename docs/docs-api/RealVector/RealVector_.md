---
sidebar_position: 2
---

# Structure

`RealVector` is a data type for real Fortran arrays of rank 1.

```fortran
TYPE :: RealVector_
  INTEGER(I4B) :: tDimension = 1_I4B
  REAL(DFP), ALLOCATABLE :: Val(:)
END TYPE RealVector_
```
