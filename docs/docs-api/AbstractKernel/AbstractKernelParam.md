# AbstractKernelParam

This module contains options for kernel.

## KernelProblemOpt

```fortran
TYPE :: KernelProblemOpt_
  INTEGER(I4B) :: scalar = varopt%Scalar
  INTEGER(I4B) :: vector = varopt%Vector
  INTEGER(I4B) :: multiPhysics = varopt%Vector + 100
  INTEGER(I4B) :: NONE = -1
  INTEGER(I4B) :: default = -1
  CHARACTER(4) :: default_char = "NONE"

CONTAINS

  PROCEDURE, PUBLIC, PASS(obj) :: ToNumber => problemType_ToNumber

END TYPE KernelProblemOpt_
```

## KernelCoordOpt

```fortran
TYPE :: KernelCoordOpt_
  INTEGER(I4B) :: OneD_H = 1
  !! One dimensional problem in horizontal direction

  INTEGER(I4B) :: OneD_V = 2
  !! One dimensional problem in vertical direction

  INTEGER(I4B) :: TwoD = 3
  !! Two dimension problem in Cartesian coordinate

  INTEGER(I4B) :: TwoD_Axisym = 4
  !! Two dimension problem in Axis-Symmetric coordinate

  INTEGER(I4B) :: ThreeD = 5
  !! Three dimension problem in Cartesian Coordinate system

  INTEGER(I4B) :: PlaneStress = 6
  !! Two dimension plane stress problem

  INTEGER(I4B) :: PlaneStrain = 7
  !! Two dimension plane strain problem

  INTEGER(I4B) :: Cartesian = 8
  !! Cartesian coordinates

  INTEGER(I4B) :: Cylinderical = 9
  !! Cylinderical coordinates

  INTEGER(I4B) :: Spherical = 10
  !! Sperical coordinates

  INTEGER(I4B) :: default = 8
  !! Default coordinate system

  CHARACTER(9) :: default_char = "CARTESIAN"
  !! default coordinate system

CONTAINS

  PROCEDURE, PUBLIC, PASS(obj) :: ToNumber => coordinateSystem_ToNumber

END TYPE KernelCoordOpt_
```

## KernelTimeOpt

```fortran
TYPE :: KernelTimeOpt_
  INTEGER(I4B) :: static = 0
  !! PDE defines a Static problem

  INTEGER(I4B) :: steady = 0
  !! PDE defines a Static problem

  INTEGER(I4B) :: pseudostatic = 1
  !! PDE defines a Static problem

  INTEGER(I4B) :: transient = 2
  !! PDE defines a Transient problem

  INTEGER(I4B) :: dynamic = 2
  !! PDE defines a Transient problem

  INTEGER(I4B) :: default = 2
  !! Default time dependency

  CHARACTER(9) :: default_char = "TRANSIENT"
  !! Default time dependency

  INTEGER(I4B) :: totalTimeStep = 1
  !! Total number of time steps

  REAL(DFP) :: currentTime = 0.0
  !! Current time

  REAL(DFP) :: dt = 0.0
  !! Time step

  REAL(DFP) :: startTime = 0.0
  !! Start time

  REAL(DFP) :: endTime = 0.0
  !! End time

CONTAINS
  PROCEDURE, PUBLIC, PASS(obj) :: ToNumber => timeDependency_ToNumber

END TYPE KernelTimeOpt_
```

## KernelErrorOpt

```fortran
TYPE :: KernelErrorOpt_
  REAL(DFP) :: atol = 1.0E-6
  !! absolute tolerance for convergence
  REAL(DFP) :: rtol = 1.0E-6
  !! relative tolerance for convergence
  REAL(DFP) :: error0 = 0.0_DFP
  !! initial error
  REAL(DFP) :: error = 0.0_DFP
  !! current error
  INTEGER(I4B) :: maxIter = 100
  !! maximum number iterations
END TYPE KernelErrorOpt_
```

## KernelBasisOpt

```fortran
TYPE :: KernelBasisOpt_
  CHARACTER(2) :: baseContinuity = "H1"
  !! conformity of basis functions
  CHARACTER(4) :: baseInterpolation = "LAGR"
  !! interpolation of basis functions
  INTEGER(I4B) :: quadratureType = ipopt%GaussLegendre
  !! quadrature type
  INTEGER(I4B) :: basisType = polyopt%monomial
  !! basis type in case baseInterpolation is Lagrange
  INTEGER(I4B) :: ipType = ipopt%equidistance
  !! interpolation type incase baseInterpolation is Lagrange
  REAL(DFP) :: alpha = 0.0_DFP
  !! Jacobi polynomial parameter
  REAL(DFP) :: beta = 0.0_DFP
  !! Jacobi polynomial parameter
  REAL(DFP) :: lambda = 0.5_DFP
  !! Ultraspherical polynomial parameter
  CHARACTER(128) :: quadratureType_char = "GAUSSLEGENDRE"
  !! quadrature type
  TYPE(QuadraturePoint_) :: qp
  !! QuadraturePoint

  !! quadratureType_char
  !! basisType_char
  !! ipType_char
END TYPE KernelBasisOpt_
```
