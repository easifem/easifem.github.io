# Initiate

This subroutine constructs the quadrature points.

## Interface 1

```fortran
INTERFACE Initiate
  MODULE SUBROUTINE Initiate(obj, refElem, order, quadratureType, &
                             alpha, beta, lambda)
    TYPE(QuadraturePoint_), INTENT(INOUT) :: obj
    !! Total number of xidimension
    CLASS(ReferenceElement_), INTENT(IN) :: refElem
    !! Reference element
    INTEGER(I4B), INTENT(IN) :: order
    !! order of integrand
    CHARACTER(*), INTENT(IN) :: quadratureType
    !! Type of quadrature points
    REAL(DFP), OPTIONAL, INTENT(IN) :: alpha
    !! Jacobi parameter
    REAL(DFP), OPTIONAL, INTENT(IN) :: beta
    !! Jacobi parameter
    REAL(DFP), OPTIONAL, INTENT(IN) :: lambda
    !! Ultraspherical parameter
  END SUBROUTINE Initiate
END INTERFACE Initiate
```

Type of quadrature points:

| Argument       | Type                     | Intent | Optional | Description                                                       |
| -------------- | ------------------------ | ------ | -------- | ----------------------------------------------------------------- |
| obj            | TYPE(QuadraturePoint_)   | INOUT  | No       | The quadrature point object to be initialized                     |
| refElem        | CLASS(ReferenceElement_) | IN     | No       | Reference element                                                 |
| order          | INTEGER(I4B)             | IN     | No       | Order of integrand                                                |
| quadratureType | CHARACTER(*)             | IN     | No       | Type of quadrature points                                         |
| alpha          | REAL(DFP)                | IN     | Yes      | Jacobi parameter (required for Jacobi quadrature)                 |
| beta           | REAL(DFP)                | IN     | Yes      | Jacobi parameter (required for Jacobi quadrature)                 |
| lambda         | REAL(DFP)                | IN     | Yes      | Ultraspherical parameter (required for Ultraspherical quadrature) |

> In the case of `Jacobi` `alpha` and `beta` should be given, and in the case of `Ultraspherical` `lambda` should be given.
> Details about `quadratureType` can be found in the [QuadraturePoint](./QuadraturePoint_.md) documentation.

### Example

import EXAMPLE10 from "./examples/_Initiate_test_1.md";

<EXAMPLE10 />

## Interface 2

```fortran
INTERFACE
  MODULE SUBROUTINE Initiate(obj, refElem, nips, quadratureType, &
                             alpha, beta, lambda)
    TYPE(QuadraturePoint_), INTENT(INOUT) :: obj
    !! Total number of xidimension
    CLASS(ReferenceElement_), INTENT(IN) :: refElem
    !! Reference element
    INTEGER(I4B), INTENT(IN) :: nips(1)
    !! order of integrand
    CHARACTER(*), INTENT(IN) :: quadratureType
    REAL(DFP), OPTIONAL, INTENT(IN) :: alpha
    !! Jacobi parameter
    REAL(DFP), OPTIONAL, INTENT(IN) :: beta
    !! Jacobi parameter
    REAL(DFP), OPTIONAL, INTENT(IN) :: lambda
    !! Ultraspherical parameter
  END SUBROUTINE Initiate
END INTERFACE
```

This method allows us to initiate the quadrature points by specifying the number of integration points, and quadrature type.

| Argument       | Type                     | Intent | Optional | Description                                                       |
| -------------- | ------------------------ | ------ | -------- | ----------------------------------------------------------------- |
| obj            | TYPE(QuadraturePoint_)   | INOUT  | No       | The quadrature point object to be initialized                     |
| refElem        | CLASS(ReferenceElement_) | IN     | No       | Reference element                                                 |
| nips           | INTEGER(I4B)             | IN     | No       | Number of integration points (array of size 1)                    |
| quadratureType | CHARACTER(*)             | IN     | No       | Type of quadrature points                                         |
| alpha          | REAL(DFP)                | IN     | Yes      | Jacobi parameter (required for Jacobi quadrature)                 |
| beta           | REAL(DFP)                | IN     | Yes      | Jacobi parameter (required for Jacobi quadrature)                 |
| lambda         | REAL(DFP)                | IN     | Yes      | Ultraspherical parameter (required for Ultraspherical quadrature) |

### Example

> See the example given in the Interface 1

## Interface 3

This interface is similar to the Interface 1, but in this interface quadratureType are in integer.
You can read more about the quadrature types in the [QuadraturePoint](./QuadraturePoint_.md) documentation.

```fortran
INTERFACE Initiate
  MODULE SUBROUTINE Initiate(obj, refElem, order, quadratureType, alpha, beta, lambda)
    TYPE(QuadraturePoint_), INTENT(INOUT) :: obj
    !! Total number of xidimension
    CLASS(ReferenceElement_), INTENT(IN) :: refElem
    !! Reference-element
    INTEGER(I4B), INTENT(IN) :: order
    !! order of integrand
    INTEGER(I4B), INTENT(IN) :: quadratureType
    !! Type of quadrature points
    REAL(DFP), OPTIONAL, INTENT(IN) :: alpha
    !! Jacobi parameter
    REAL(DFP), OPTIONAL, INTENT(IN) :: beta
    !! Jacobi parameter
    REAL(DFP), OPTIONAL, INTENT(IN) :: lambda
    !! Ultraspherical parameter
  END SUBROUTINE Initiate
END INTERFACE Initiate
```

| Argument       | Type                     | Intent | Optional | Description                                                       |
| -------------- | ------------------------ | ------ | -------- | ----------------------------------------------------------------- |
| obj            | TYPE(QuadraturePoint_)   | INOUT  | No       | The quadrature point object to be initialized                     |
| refElem        | CLASS(ReferenceElement_) | IN     | No       | Reference element                                                 |
| order          | INTEGER(I4B)             | IN     | No       | Order of integrand                                                |
| quadratureType | INTEGER(I4B)             | IN     | No       | Type of quadrature points (integer enumeration)                   |
| alpha          | REAL(DFP)                | IN     | Yes      | Jacobi parameter (required for Jacobi quadrature)                 |
| beta           | REAL(DFP)                | IN     | Yes      | Jacobi parameter (required for Jacobi quadrature)                 |
| lambda         | REAL(DFP)                | IN     | Yes      | Ultraspherical parameter (required for Ultraspherical quadrature) |

### Example

- See the example given in the interface 1

## Interface 4

- This inteface is similar to the Interface 3, but in this interface the number of integration points is given.
- This interface is simular to the Interface 2, but in this interface quadratureType are in integer.

```fortran
INTERFACE Initiate
  MODULE SUBROUTINE Initiate(obj, refElem, nips, quadratureType, alpha, beta, lambda)
    TYPE(QuadraturePoint_), INTENT(INOUT) :: obj
    !! Total number of xidimension
    CLASS(ReferenceElement_), INTENT(IN) :: refElem
    !! Reference element
    INTEGER(I4B), INTENT(IN) :: nips(1)
    !! order of integrand
    INTEGER(I4B), INTENT(IN) :: quadratureType
    !! Type of quadrature points
    REAL(DFP), OPTIONAL, INTENT(IN) :: alpha
    !! Jacobi parameter
    REAL(DFP), OPTIONAL, INTENT(IN) :: beta
    !! Jacobi parameter
    REAL(DFP), OPTIONAL, INTENT(IN) :: lambda
    !! Ultraspherical parameter
  END SUBROUTINE Initiate
END INTERFACE Initiate
```

| Argument       | Type                     | Intent | Optional | Description                                                       |
| -------------- | ------------------------ | ------ | -------- | ----------------------------------------------------------------- |
| obj            | TYPE(QuadraturePoint_)   | INOUT  | No       | The quadrature point object to be initialized                     |
| refElem        | CLASS(ReferenceElement_) | IN     | No       | Reference element                                                 |
| nips           | INTEGER(I4B)             | IN     | No       | Number of integration points (array of size 1)                    |
| quadratureType | INTEGER(I4B)             | IN     | No       | Type of quadrature points (integer enumeration)                   |
| alpha          | REAL(DFP)                | IN     | Yes      | Jacobi parameter (required for Jacobi quadrature)                 |
| beta           | REAL(DFP)                | IN     | Yes      | Jacobi parameter (required for Jacobi quadrature)                 |
| lambda         | REAL(DFP)                | IN     | Yes      | Ultraspherical parameter (required for Ultraspherical quadrature) |

## Interface 5

- This inteface is mainly for cartesian elements. In this interface you can specify order of integrand in each direction.
- The method returns the quadrature points which are obtained by the outer product of the quadrature points in each direction.

```fortran
INTERFACE Initiate
  MODULE SUBROUTINE quad_initiate7(obj, refElem, p, q, r, quadratureType1, quadratureType2, quadratureType3, &
       alpha1, beta1, lambda1, alpha2, beta2, lambda2, alpha3, beta3, lambda3)
    TYPE(QuadraturePoint_), INTENT(INOUT) :: obj
    !! Total number of xidimension
    CLASS(ReferenceElement_), INTENT(IN) :: refElem
    !! Reference-element
    INTEGER(I4B), INTENT(IN) :: p
    !! order of integrand in x
    INTEGER(I4B), INTENT(IN) :: q
    !! order of integrand in y
    INTEGER(I4B), INTENT(IN) :: r
    !! order of integrand in z direction
    INTEGER(I4B), INTENT(IN) :: quadratureType1
    !! Type of quadrature points
    INTEGER(I4B), INTENT(IN) :: quadratureType2
    !! Type of quadrature points
    INTEGER(I4B), INTENT(IN) :: quadratureType3
    !! Type of quadrature points
    REAL(DFP), OPTIONAL, INTENT(IN) :: alpha1, beta1, lambda1
    !! Jacobi parameter and Ultraspherical parameters
    REAL(DFP), OPTIONAL, INTENT(IN) :: alpha2, beta2, lambda2
    !! Jacobi parameter and Ultraspherical parameters
    REAL(DFP), OPTIONAL, INTENT(IN) :: alpha3, beta3, lambda3
    !! Jacobi parameter and Ultraspherical parameters
  END SUBROUTINE quad_initiate7
END INTERFACE Initiate
```

| Argument               | Type                     | Intent | Optional | Description                                   |
| ---------------------- | ------------------------ | ------ | -------- | --------------------------------------------- |
| obj                    | TYPE(QuadraturePoint_)   | INOUT  | No       | The quadrature point object to be initialized |
| refElem                | CLASS(ReferenceElement_) | IN     | No       | Reference element                             |
| p                      | INTEGER(I4B)             | IN     | No       | Order of integrand in x direction             |
| q                      | INTEGER(I4B)             | IN     | No       | Order of integrand in y direction             |
| r                      | INTEGER(I4B)             | IN     | No       | Order of integrand in z direction             |
| quadratureType1        | INTEGER(I4B)             | IN     | No       | Type of quadrature points for x direction     |
| quadratureType2        | INTEGER(I4B)             | IN     | No       | Type of quadrature points for y direction     |
| quadratureType3        | INTEGER(I4B)             | IN     | No       | Type of quadrature points for z direction     |
| alpha1, beta1, lambda1 | REAL(DFP)                | IN     | Yes      | Parameters for x direction quadrature         |
| alpha2, beta2, lambda2 | REAL(DFP)                | IN     | Yes      | Parameters for y direction quadrature         |
| alpha3, beta3, lambda3 | REAL(DFP)                | IN     | Yes      | Parameters for z direction quadrature         |

## Interface 6

This interface is similar to the Interface 5, but in this interface the number of integration points is given.

```fortran
INTERFACE Initiate
  MODULE SUBROUTINE quad_initiate8(obj, refElem, nipsx, nipsy, nipsz, quadratureType1, quadratureType2, quadratureType3, &
       alpha1, beta1, lambda1, alpha2, beta2, lambda2, alpha3, beta3, lambda3)
    TYPE(QuadraturePoint_), INTENT(INOUT) :: obj
    !! Total number of xidimension
    CLASS(ReferenceElement_), INTENT(IN) :: refElem
    !! Reference element
    INTEGER(I4B), INTENT(IN) :: nipsx(1)
    !! number of integration points in x direction
    INTEGER(I4B), INTENT(IN) :: nipsy(1)
    !! number of integration points in y direction
    INTEGER(I4B), INTENT(IN) :: nipsz(1)
    !! number of integration points in z direction
    INTEGER(I4B), INTENT(IN) :: quadratureType1
    !! Type of quadrature points
    INTEGER(I4B), INTENT(IN) :: quadratureType2
    !! Type of quadrature points
    INTEGER(I4B), INTENT(IN) :: quadratureType3
    !! Type of quadrature points
    REAL(DFP), OPTIONAL, INTENT(IN) :: alpha1, beta1, lambda1
    !! Jacobi parameter and Ultraspherical parameter
    REAL(DFP), OPTIONAL, INTENT(IN) :: alpha2, beta2, lambda2
    !! Jacobi parameter and Ultraspherical parameter
    REAL(DFP), OPTIONAL, INTENT(IN) :: alpha3, beta3, lambda3
    !! Jacobi parameter and Ultraspherical parameter
  END SUBROUTINE quad_initiate8
END INTERFACE Initiate
```

| Argument               | Type                     | Intent | Optional | Description                                                   |
| ---------------------- | ------------------------ | ------ | -------- | ------------------------------------------------------------- |
| obj                    | TYPE(QuadraturePoint_)   | INOUT  | No       | The quadrature point object to be initialized                 |
| refElem                | CLASS(ReferenceElement_) | IN     | No       | Reference element                                             |
| nipsx                  | INTEGER(I4B)             | IN     | No       | Number of integration points in x direction (array of size 1) |
| nipsy                  | INTEGER(I4B)             | IN     | No       | Number of integration points in y direction (array of size 1) |
| nipsz                  | INTEGER(I4B)             | IN     | No       | Number of integration points in z direction (array of size 1) |
| quadratureType1        | INTEGER(I4B)             | IN     | No       | Type of quadrature points for x direction                     |
| quadratureType2        | INTEGER(I4B)             | IN     | No       | Type of quadrature points for y direction                     |
| quadratureType3        | INTEGER(I4B)             | IN     | No       | Type of quadrature points for z direction                     |
| alpha1, beta1, lambda1 | REAL(DFP)                | IN     | Yes      | Parameters for x direction quadrature                         |
| alpha2, beta2, lambda2 | REAL(DFP)                | IN     | Yes      | Parameters for y direction quadrature                         |
| alpha3, beta3, lambda3 | REAL(DFP)                | IN     | Yes      | Parameters for z direction quadrature                         |

## Interface 7

:::caution
This routine is for developers only, normal user should not worry about this interface.
:::

```fortran
MODULE PURE SUBROUTINE Initiate(obj, Points)
  CLASS(QuadraturePoint_), INTENT(INOUT) :: obj
  REAL(DFP), INTENT(IN) :: Points(:, :)
    !! Points contains the quadrature points and weights
    !! Points( :, ipoint ) contains quadrature points and weights of ipoint
    !! quadrature point. The last row contains the weight. The rest of the
    !! rows contains the coordinates of quadrature.
END SUBROUTINE Initiate
```

| Argument | Type                    | Intent | Optional | Description                                                                                                 |
| -------- | ----------------------- | ------ | -------- | ----------------------------------------------------------------------------------------------------------- |
| obj      | CLASS(QuadraturePoint_) | INOUT  | No       | The quadrature point object to be initialized                                                               |
| Points   | REAL(DFP)               | IN     | No       | Matrix containing quadrature points and weights. Last row contains weights, other rows contain coordinates. |

This subroutine converts the quadrature points into `QuadraturePoint_` data type.

:::caution
This routine is for developers only, normal user should not worry about this interface.
:::

:::info `Points`

- `Points` contains the quadrature points and weights
- for example, `Points( :, ipoint )` contains quadrature points and weights of `ipoint` quadrature point.
- The last row always contains the weight.
- The rest of the rows contains the coordinates of quadrature.
  :::

## Interface 8

:::caution
This routine is for developers only, normal user should not worry about this interface.
:::

```fortran
MODULE PURE SUBROUTINE Initiate(obj, tXi, tPoints)
  CLASS(QuadraturePoint_), INTENT(INOUT) :: obj
  INTEGER(I4B), INTENT(IN) :: tXi
  !! Total number of xidimension
  !! For line tXi=1
  !! For 2D element tXi=2
  !! For 3D element tXi=3
  INTEGER(I4B), INTENT(IN) :: tPoints
  !! Total number quadrature points
END SUBROUTINE Initiate
```

| Argument | Type                    | Intent | Optional | Description                                                                 |
| -------- | ----------------------- | ------ | -------- | --------------------------------------------------------------------------- |
| obj      | CLASS(QuadraturePoint_) | INOUT  | No       | The quadrature point object to be initialized                               |
| tXi      | INTEGER(I4B)            | IN     | No       | Total number of dimensions (1 for line, 2 for 2D element, 3 for 3D element) |
| tPoints  | INTEGER(I4B)            | IN     | No       | Total number of quadrature points                                           |

The following interface allocates the memory for storing the quadrature points.

## QuadraturePoint (Constructor function)

```fortran
MODULE PURE FUNCTION QuadraturePoint(Points) RESULT(obj)
  TYPE(QuadraturePoint_) :: obj
  REAL(DFP), INTENT(IN) :: Points(:, :)
END FUNCTION QuadraturePoint
```

This function converts `Points` to an instance of QuadraturePoint.

## QuadraturePoint_Pointer

```fortran
MODULE PURE FUNCTION QuadraturePoint_Pointer(Points) RESULT(obj)
  CLASS(QuadraturePoint_), POINTER :: obj
  REAL(DFP), INTENT(IN) :: Points(:, :)
END FUNCTION QuadraturePoint_Pointer
```
