---
sidebar_position: 4
---

# Initiate

This method initiates an instance of `FEDOF`. There are several ways to initiate an instance of `FEDOF`.

## Interface 1

- Homogeneous order
- In case of `H1` Lagrange `FEDOF`, order is determined from the cell order of each mesh.

```fortran
INTERFACE
  MODULE SUBROUTINE Initiate(obj, order, mesh, baseContinuity, &
                    baseInterpolation, ipType, basisType, alpha, beta, lambda)
    CLASS(FEDOF_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: order
    !! homogeneous value of order
    CLASS(AbstractMesh_), TARGET, INTENT(IN) :: mesh
    !! cell mesh
    CHARACTER(*), INTENT(IN) :: baseContinuity
    !! continuity of basis (regularity or conformity)
    CHARACTER(*), INTENT(IN) :: baseInterpolation
    !! basis function used for interpolation
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: ipType
    !! interpolation point type
    !! used when baseInterpolation is Lagrange
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: basisType(:)
    !! type of basis function used for
    !! constructing the Lagrange polynomial
    !! Used when baseInterpolation is Lagrange
    REAL(DFP), OPTIONAL, INTENT(IN) :: alpha(:)
    !! alpha parameter for jacobian parameter
    !! used when baseInterpolation is Lagrange
    !! used when basistype is Jacobi
    REAL(DFP), OPTIONAL, INTENT(IN) :: beta(:)
    !! beta parameter for jacobian parameter
    !! used when baseInterpolation is Lagrange
    !! used when basistype is Jacobi
    REAL(DFP), OPTIONAL, INTENT(IN) :: lambda(:)
    !! lambda parameter for Ultraspherical parameter
    !! used when baseInterpolation is Lagrange
    !! used when basistype is Ultraspherical
  END SUBROUTINE Initiate
END INTERFACE
```

## Interface 2

- Here order represents the order of each cell element.
- In case of `H1` Lagrange `FEDOF`, order is determined from the cell order of each mesh.

```fortran
INTERFACE
  MODULE SUBROUTINE Initiate(obj, order, mesh, baseContinuity, &
                    baseInterpolation, ipType, basisType, alpha, lambda, beta)
    CLASS(FEDOF_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: order(:)
    CLASS(AbstractMesh_), TARGET, INTENT(IN) :: mesh
    CHARACTER(*), INTENT(IN) :: baseContinuity
    CHARACTER(*), INTENT(IN) :: baseInterpolation
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: ipType
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: basisType(:)
    REAL(DFP), OPTIONAL, INTENT(IN) :: alpha(:)
    REAL(DFP), OPTIONAL, INTENT(IN) :: beta(:)
    REAL(DFP), OPTIONAL, INTENT(IN) :: lambda(:)
  END SUBROUTINE Initiate
END INTERFACE
```

## Interface 3

- This method is used to initiate `FEDOF` by using `ParameterList`.

```fortran
INTERFACE
  MODULE SUBROUTINE Initiate(obj, param, mesh)
    CLASS(FEDOF_), INTENT(INOUT) :: obj
    TYPE(ParameterList_), INTENT(IN) :: param
    CLASS(AbstractMesh_), TARGET, INTENT(IN) :: mesh
  END SUBROUTINE Initiate
END INTERFACE
```

## Interface 4

This routine is similar to the interface 2, but the order of the element is defined for global element numbers.

The number of rows in order is equal to 2, the first row contains the global element number the second row contains the order.

This routine will make `order0(:)` from `order(:,:)` and call `Initiate2`.

```fortran
INTERFACE
  MODULE SUBROUTINE Initiate(obj, order, mesh, baseContinuity, &
                    baseInterpolation, ipType, basisType, alpha, beta, lambda)
    CLASS(FEDOF_), INTENT(INOUT) :: obj
    !! FEDOF
    INTEGER(I4B), INTENT(IN) :: order(:, :)
    !! the number of columns in order is equal to total number of elements
    !! the number of rows in order is equal to 2
    !! the first row contains the global element number
    !! the second rows contains the order of that element
    CLASS(AbstractMesh_), TARGET, INTENT(IN) :: mesh
    !! mesh
    CHARACTER(*), INTENT(IN) :: baseContinuity
    !! continuity of basis function
    CHARACTER(*), INTENT(IN) :: baseInterpolation
    !! interpolation of basis
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: ipType
    !! interpolation point type, needed for Lagrange polynomial
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: basisType(:)
    !! basis type, needed for Lagrange polynomial only
    REAL(DFP), OPTIONAL, INTENT(IN) :: alpha(:)
    !! alpha parameter for jacobian parameter
    REAL(DFP), OPTIONAL, INTENT(IN) :: beta(:)
    !! beta parameter for jacobian parameter
    REAL(DFP), OPTIONAL, INTENT(IN) :: lambda(:)
  END SUBROUTINE Initiate
END INTERFACE
```
