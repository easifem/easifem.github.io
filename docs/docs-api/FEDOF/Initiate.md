# Initiate

This method initiates an instance of `FEDOF`. There are several ways to initiate an instance of `FEDOF`.

The `Initiate` method has four different implementations:

1. `Initiate1` - Initializes with homogeneous order for all elements
2. `Initiate2` - Initializes with inhomogeneous orders specified per element
3. `Initiate3` - Initializes from a parameter list
4. `Initiate4` - Initializes from an order vector defined for global elements

## Interface 1

This method is for Homogeneous order, that is, all elements in the mesh have the same order.

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

### Description

This subroutine configures a FEDOF object by setting up the basis functions, continuity, and interpolation properties based on a given mesh and order.

### Parameters

| Parameter           | Type                         | Intent | Description                                                             |
| ------------------- | ---------------------------- | ------ | ----------------------------------------------------------------------- |
| `obj`               | CLASS(FEDOF_)                | INOUT  | The FEDOF object to be initialized.                                     |
| `order`             | INTEGER(I4B)                 | IN     | Homogeneous polynomial order for the basis functions.                   |
| `mesh`              | CLASS(AbstractMesh_), TARGET | IN     | The computational mesh defining the spatial discretization.             |
| `baseContinuity`    | CHARACTER(*)                 | IN     | Specifies the continuity of basis functions (regularity or conformity). |
| `baseInterpolation` | CHARACTER(*)                 | IN     | Type of basis function used for interpolation.                          |

### Optional Parameters

| Parameter   | Type         | Intent | Optional | Description                                                                                                                        |
| ----------- | ------------ | ------ | -------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `ipType`    | INTEGER(I4B) | IN     | Yes      | Interpolation point type. Used when `baseInterpolation` is set to Lagrange.                                                        |
| `basisType` | INTEGER(I4B) | IN     | Yes      | Array specifying types of basis functions used for constructing Lagrange polynomials. Used when `baseInterpolation` is Lagrange.   |
| `alpha`     | REAL(DFP)    | IN     | Yes      | Alpha parameters for Jacobi polynomials. Required when `baseInterpolation` is Lagrange and `basisType` is Jacobi.                  |
| `beta`      | REAL(DFP)    | IN     | Yes      | Beta parameters for Jacobi polynomials. Required when `baseInterpolation` is Lagrange and `basisType` is Jacobi.                   |
| `lambda`    | REAL(DFP)    | IN     | Yes      | Lambda parameters for Ultraspherical polynomials. Required when `baseInterpolation` is Lagrange and `basisType` is Ultraspherical. |

### Usage Example

```fortran
CALL myFEDOF%Initiate(order=2, mesh=myMesh, baseContinuity="H1", &
                      baseInterpolation="Lagrange", ipType=GAUSS_LOBATTO)
```

## Interface 2

- Here order represents the order of each cell element.
- `order` is a vector of integers, the length of `order` must be equal to the number of elements in the mesh.
- `order(i)` is the order of local element `i`.

```fortran
INTERFACE
  MODULE SUBROUTINE Initiate(obj, order, mesh, baseContinuity, &
           baseInterpolation, ipType, basisType, alpha, lambda, beta, islocal)
    CLASS(FEDOF_), INTENT(INOUT) :: obj
    !! Finite degree of freedom object
    INTEGER(I4B), INTENT(IN) :: order(:)
    !! Inhomogeneous value of order
    !! This is order of each cell element
    !! see the note on islocal
    CLASS(AbstractMesh_), TARGET, INTENT(IN) :: mesh
    !! cell mesh
    CHARACTER(*), INTENT(IN) :: baseContinuity
    !! continuity of basis (regularity)
    CHARACTER(*), INTENT(IN) :: baseInterpolation
    !! basis function used for interpolation
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: ipType
    !! interpolation type
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
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: islocal
    !! islocal denotes whether the order(:) is based on
    !! local element or global element number.
    !! local element means in order(ii) ii is the local
    !! element number, global element means in order(ii) ii is the
    !! global element number. Note that getting local element
    !! number is difficult for user, so it is better to use
    !! global element number.
  END SUBROUTINE Initiate
END INTERFACE
```

### Description

This subroutine configures a FEDOF object using inhomogeneous orders across mesh elements, allowing different polynomial orders for different parts of the domain.

### Parameters

| Parameter           | Type                         | Intent | Description                                                    |
| ------------------- | ---------------------------- | ------ | -------------------------------------------------------------- |
| `obj`               | CLASS(FEDOF_)                | INOUT  | The Finite Element Degree of Freedom object to be initialized. |
| `order`             | INTEGER(I4B)(:)              | IN     | Array of polynomial orders for each cell element.              |
| `mesh`              | CLASS(AbstractMesh_), TARGET | IN     | The computational mesh defining the spatial discretization.    |
| `baseContinuity`    | CHARACTER(*)                 | IN     | Specifies the continuity of basis functions (regularity).      |
| `baseInterpolation` | CHARACTER(*)                 | IN     | Type of basis function used for interpolation.                 |

### Optional Parameters

| Parameter   | Type            | Intent | Description                                                                                                                        |
| ----------- | --------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| `ipType`    | INTEGER(I4B)    | IN     | Interpolation point type. Used when `baseInterpolation` is set to Lagrange.                                                        |
| `basisType` | INTEGER(I4B)(:) | IN     | Array specifying types of basis functions used for constructing Lagrange polynomials. Used when `baseInterpolation` is Lagrange.   |
| `alpha`     | REAL(DFP)(:)    | IN     | Alpha parameters for Jacobi polynomials. Required when `baseInterpolation` is Lagrange and `basisType` is Jacobi.                  |
| `beta`      | REAL(DFP)(:)    | IN     | Beta parameters for Jacobi polynomials. Required when `baseInterpolation` is Lagrange and `basisType` is Jacobi.                   |
| `lambda`    | REAL(DFP)(:)    | IN     | Lambda parameters for Ultraspherical polynomials. Required when `baseInterpolation` is Lagrange and `basisType` is Ultraspherical. |
| `islocal`   | LOGICAL(LGT)    | IN     | Specifies whether `order` array references local element numbers (TRUE) or global element numbers (FALSE, default).                |

### Usage Example

```fortran
! Create an array with different orders for different elements
INTEGER(I4B) :: elementOrders(mesh%getTotalElements())
elementOrders = [1, 2, 2, 3, 2, 1] ! Example orders

CALL myFEDOF%Initiate(order=elementOrders, mesh=myMesh, &
                      baseContinuity="H1", baseInterpolation="Lagrange", &
                      ipType=GAUSS_LOBATTO, islocal=.FALSE.)
```

### Notes

- The length of the `order` array must match the number of elements in the mesh.
- When `islocal` is not provided or is FALSE, the indices in `order` correspond to global element numbers.
- When `islocal` is TRUE, the indices in `order` correspond to local element numbers, which may be different from global numbering.
- Using global element numbering is generally easier for users to work with.

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

:::warning WIP
This interface is still under development and may not be fully functional yet.
:::

## Interface 4

- This routine is similar to the Interface 2, but the order of the element is defined for global element numbers.
- This method is more useful for the user who have no idea about the local element number.
- `order` is a two-dimensional array.
  - The number of rows in order is equal to 2
  - The first row contains the global element number
  - The second row contains the order.

:::note
This routine will make `order0(:)` from `order(:,:)` and call `Initiate2` method internally.
:::

```fortran
INTERFACE
  MODULE SUBROUTINE obj_Initiate4(obj, order, mesh, baseContinuity, &
                    baseInterpolation, ipType, basisType, alpha, beta, lambda)
    CLASS(FEDOF_), INTENT(INOUT) :: obj
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
    !! interpolation type
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
  END SUBROUTINE obj_Initiate4
END INTERFACE
```

### Parameters

| Parameter           | Type                         | Intent | Description                                                   |
| ------------------- | ---------------------------- | ------ | ------------------------------------------------------------- |
| `obj`               | CLASS(FEDOF_)                | INOUT  | The FEDOF object to be initialized.                           |
| `order`             | INTEGER(I4B)(:,:)            | IN     | 2×N array where N is the number of elements to be configured. |
| `mesh`              | CLASS(AbstractMesh_), TARGET | IN     | The computational mesh defining the spatial discretization.   |
| `baseContinuity`    | CHARACTER(*)                 | IN     | Specifies the continuity of basis functions (regularity).     |
| `baseInterpolation` | CHARACTER(*)                 | IN     | Type of basis function used for interpolation.                |

### Optional Parameters

| Parameter   | Type            | Intent | Description                                                                                                                        |
| ----------- | --------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| `ipType`    | INTEGER(I4B)    | IN     | Interpolation point type. Used when `baseInterpolation` is set to Lagrange.                                                        |
| `basisType` | INTEGER(I4B)(:) | IN     | Array specifying types of basis functions used for constructing Lagrange polynomials. Used when `baseInterpolation` is Lagrange.   |
| `alpha`     | REAL(DFP)(:)    | IN     | Alpha parameters for Jacobi polynomials. Required when `baseInterpolation` is Lagrange and `basisType` is Jacobi.                  |
| `beta`      | REAL(DFP)(:)    | IN     | Beta parameters for Jacobi polynomials. Required when `baseInterpolation` is Lagrange and `basisType` is Jacobi.                   |
| `lambda`    | REAL(DFP)(:)    | IN     | Lambda parameters for Ultraspherical polynomials. Required when `baseInterpolation` is Lagrange and `basisType` is Ultraspherical. |

### Usage Example

```fortran
! Create a 2×3 array to specify orders for three specific elements
INTEGER(I4B) :: elementOrders(2, 3)
! First row: global element numbers
elementOrders(1, :) = [1, 5, 10]
! Second row: corresponding polynomial orders
elementOrders(2, :) = [2, 3, 1]

CALL myFEDOF%Initiate(order=elementOrders, mesh=myMesh, &
                      baseContinuity="H1", baseInterpolation="Lagrange", &
                      ipType=GAUSS_LOBATTO)
```

### Notes

- This interface is more user-friendly as it allows specifying orders only for elements of interest using their global numbers.
- Internally, this method constructs a complete order array and calls Interface 2.
- The number of columns in the `order` array can be less than the total number of elements in the mesh - only specified elements will receive custom orders.

## Example (H1, Hierarchical, Uniform Order)

import EXAMPLE287 from "./examples/_Initiate_test_1.md";

<EXAMPLE287 />

## Example (H1, Hierarchical, Inhomogeneous Order)

import EXAMPLE295 from "./examples/_Initiate_test_2.md";

<EXAMPLE295 />

## Example (H1, Hierarchical, Inhomogeneous Order with Local Element Number)

import EXAMPLE303 from "./examples/_Initiate_test_3.md";

<EXAMPLE303 />

## Example (H1, Lagrange, Uniform Order)

import EXAMPLE311 from "./examples/_Initiate_test_4.md";

<EXAMPLE311 />

## Example (H1, Lagrange, Inhomogeneous Order)
