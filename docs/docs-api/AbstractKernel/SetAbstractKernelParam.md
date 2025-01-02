# SetAbstractKernelParam

Set the kernel parameters in parameter list.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE SetAbstractKernelParam( &
    param, prefix, problemType, name, engine, coordinateSystem, &
    domainFile, isCommonDomain, gravity, timeDependency, &
    maxIter, nsd, nnt, tdof, dt, startTime, endTime, &
    currentTime, currentTimeStep, totalTimeStep, &
    baseInterpolationForSpace, baseContinuityForSpace, &
    quadratureTypeForSpace, ipTypeForSpace, &
    basisTypeForSpace, alphaForSpace, &
    betaForSpace, lambdaForSpace, baseInterpolationForTime, &
    baseContinuityForTime, quadratureTypeForTime, ipTypeForTime, &
    basisTypeForTime, alphaForTime, betaForTime, lambdaForTime, &
    postProcessOpt, tDirichletBC, tNeumannBC, tWeakDirichletBC, &
    isSymNitsche, nitscheAlpha, &
    materialInterfaces, isConstantMatProp, tSolidMaterials, &
    algorithm, vtkOutputFreq, isIsotropic, isIncompressible, &
    rtoleranceForDisplacement, atoleranceForDisplacement, &
    rtoleranceForVelocity, atoleranceForVelocity, &
    rtoleranceForResidual, atoleranceForResidual, tanmatProp, &
    tanmatName, tOverlappedMaterials, outputPath, tPointSource, showTime, &
    unifyVTK, createPVD)

    CHARACTER(*), INTENT(IN) :: prefix
    !! prefix
    INTEGER(I4B), INTENT(IN) :: problemType
    !! Kernel problem type. Problem can be scalar, vector, or multi-physics
    !! TypeKernelProblemOpt%Scalar
    !! TypeKernelProblemOpt%Vector
    !! TypeKernelProblemOpt%MultiPhysics
    CHARACTER(*), OPTIONAL, INTENT(IN) :: baseContinuityForSpace
    !! Type of continuity of basis function for Space
    !! NOTE: Default value is given in AbstractKernelParam
    CHARACTER(*), OPTIONAL, INTENT(IN) :: baseContinuityForTime
    !! Type of continuity of basis function for Time
    !! NOTE: Default value is given in AbstractKernelParam
    CHARACTER(*), OPTIONAL, INTENT(IN) :: baseInterpolationForSpace
    !! Type of interpolation function used for Space
    !! NOTE: Default value is given in AbstractKernelParam
    CHARACTER(*), OPTIONAL, INTENT(IN) :: baseInterpolationForTime
    !! Type of interpolation function used for Time
    !! NOTE: Default value is given in AbstractKernelParam
    CHARACTER(*), OPTIONAL, INTENT(IN) :: domainFile
    !! Name of domain file
    CHARACTER(*), OPTIONAL, INTENT(IN) :: engine
    !! Engine of the kernel
    CHARACTER(*), OPTIONAL, INTENT(IN) :: name
    !! name of the kernel
    CHARACTER(*), OPTIONAL, INTENT(IN) :: quadratureTypeForSpace
    !! Type of quadrature for space
    !! NOTE: Default value is given in AbstractKernelParam
    CHARACTER(*), OPTIONAL, INTENT(IN) :: quadratureTypeForTime
    !! Type of quadrature for time
    !! NOTE: Default value is given in AbstractKernelParam
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: coordinateSystem
    !! Coordinate system of the problem
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: currentTimeStep
    !! Current time step
    !! INFO: Default value is 1
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: maxIter
    !! maximum number of iterations, required for iterData
    !! NOTE: Default value is given in AbstractKernelParam
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: nnt
    !! Number of nodes in time element.
    !! NOTE: This variable is needed only in the case of
    !! space-time finite element method.
    !! The default value is 1
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: nsd
    !! Spatial dimension of the problem
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: postProcessOpt
    !! Postprocessing option for writeData
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: tdof
    !! Total degree of freedom per nodes in the problem
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: timeDependency
    !! time dependency of the problem
    !! INFO: Default value is KERNEL_STEADY
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: totalTimeStep
    !!Total number of time steps
    !! INFO: Default value is 1
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: isCommonDomain
    !! Is domain comman or different domain for multi-physics
    REAL(DFP), OPTIONAL, INTENT(IN) :: currentTime
    !! Current time step of the simulation
    !! INFO: Default value if 0.0_DFP
    REAL(DFP), OPTIONAL, INTENT(IN) :: dt
    !! Time step size
    !! INFO: Default value is 0.0
    REAL(DFP), OPTIONAL, INTENT(IN) :: endTime
    !! Last time of simulation
    !! INFO: Default value is 0.0_DFP
    REAL(DFP), OPTIONAL, INTENT(IN) :: gravity(3)
    !! Acceleration due to gravity
    !! INFO: Default value if [0,0,0]
    REAL(DFP), OPTIONAL, INTENT(IN) :: startTime
    !! Start time of the simulation
    !! INFO: Default value is 0.0
    TYPE(ParameterList_), INTENT(INOUT) :: param
    !! Put parameters here
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: ipTypeForSpace
    !! Interpolation point type in space
    !! Default is Equidistance
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: ipTypeForTime
    !! Interpolation point type in time
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: basisTypeForSpace
    !! Basis type used for constructing the shape functions
    !! Like monomials, Legendre, Chebyshev, Jacobi
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: basisTypeForTime
    !! Basis type used for constructing the shape function in time
    REAL(DFP), OPTIONAL, INTENT(IN) :: alphaForSpace
    !! Jacobi polynomial parameter  in space
    REAL(DFP), OPTIONAL, INTENT(IN) :: alphaForTime
    !! Jacobi polynomial parameter in time
    REAL(DFP), OPTIONAL, INTENT(IN) :: betaForSpace
    !! Jacobi polynomial parameter in space
    REAL(DFP), OPTIONAL, INTENT(IN) :: betaForTime
    !! Jacobi polynomial parameter in time
    REAL(DFP), OPTIONAL, INTENT(IN) :: lambdaForSpace
    !! Ultraspherical polynomial parameter in space
    REAL(DFP), OPTIONAL, INTENT(IN) :: lambdaForTime
    !! Ultraspherical polynomial parameter in time
    !!
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: tDirichletBC
    !! Total number of Dirichlet domain for pressure, default=0
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: tWeakDirichletBC
    !! Total number of Nitsche boundary conditions for displacement
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: tNeumannBC
    !! Total number of Neumann domain for pressure, default=0
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: isSymNitsche
    !! True if symmetric Nitsche formulation
    REAL(DFP), OPTIONAL, INTENT(IN) :: nitscheAlpha
    !! Alpha parameter used in Nitsche formulation
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: materialInterfaces(:)
    !! Mesh-IDs of materialInterfaces
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: tSolidMaterials
    !! total number of materials
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: isConstantMatProp
    !! It is true if the material properties are constant
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: algorithm
    !! algorithm
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: vtkOutputFreq
    !! frequency of output with WriteData_vtk
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: isIsotropic
    !! It is true if the material is isotropic
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: isIncompressible
    !! It is true if the material is incompressible
    REAL(DFP), OPTIONAL, INTENT(IN) :: rtoleranceForDisplacement
    !! relative tolerance for convergence in displacement field
    REAL(DFP), OPTIONAL, INTENT(IN) :: rtoleranceForVelocity
    !! relative tolerance for convergence in velocity field
    REAL(DFP), OPTIONAL, INTENT(IN) :: rtoleranceForResidual
    !! relative tolerance for velocity field
    REAL(DFP), OPTIONAL, INTENT(IN) :: atoleranceForDisplacement
    !! absolute tolerance for convergence in displacement field
    REAL(DFP), OPTIONAL, INTENT(IN) :: atoleranceForVelocity
    !! absolute tolerance for convergence in velocity field
    REAL(DFP), OPTIONAL, INTENT(IN) :: atoleranceForResidual
    !! absolute tolerance for velocity
    CHARACTER(*), OPTIONAL, INTENT(IN) :: tanmatProp
    !! Tangent matrix properties
    CHARACTER(*), OPTIONAL, INTENT(IN) :: tanmatName
    !! Tangent matrix name
    !! MATRIX, BLOCKMATRIX
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: tOverlappedMaterials
    !! Total number of overlapped materials
    CHARACTER(*), OPTIONAL, INTENT(IN) :: outputPath
    !! path where output of kernel will be written
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: tPointSource
    !! total number of point sources, size of nbcPointSource
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: showTime
    !! Show time of each steps
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: unifyVTK
    !! unified write data to vtk file
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: createPVD
    !! create the paraview data file
  END SUBROUTINE SetAbstractKernelParam
END INTERFACE
```
