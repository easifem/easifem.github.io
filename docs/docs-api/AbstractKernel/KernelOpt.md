# KernelOpt

This class contains the options for the kernel.

The structure of this class is given below.

## Structure

```fortran
TYPE KernelOpt_
  LOGICAL(LGT) :: isInitiated = .FALSE.
  !! This variable is Set to true when we initiate the kernel

  LOGICAL(LGT) :: isCommonDomain = .TRUE.
  !! This variable is True when the domain is common.
  !! It is useful in the case of multi-physics simulations.
  !! In multi-physics applications different fields can have different
  !! type and order of shape functions. To construct such shape functions
  !! we may have to use different finite element meshes (hence, domains).
  !! For example, in the fluid mechanics, we often use Taylor-Hood element
  !! Which employs different order of interpolation for pressure and velocity.

  LOGICAL(LGT) :: showTime = .FALSE.
  !! If it is set to true then we create a file called
  !! KernelName_time_stat.csv
  !! This file contains the statics of time taken by the kernel
  !! It will be helpful in improving the kernel

  LOGICAL(LGT) :: unifyVTK = .FALSE.
  !! if it is true all data are exported into one vtu file
  !! in WriteData_vtk method

  LOGICAL(LGT) :: createPVD = .FALSE.
  !! if true paraview data file is created
  !! in WriteData_vtk method

  INTEGER(I4B) :: problemType = TypeKernelProblemOpt%scalar
  !! Kernel problem type
  !! TypeKernelProblemOpt%scalar
  !! TypeKernelProblemOpt%Vector
  !! TypeKernelProblemOpt%MultiPhysics

  INTEGER(I4B) :: algorithm = 1
  !! algorithm

  INTEGER(I4B) :: vtkOutputFreq = 0
  !! frequency of output with WriteData_vtk

  INTEGER(I4B) :: hdfOutputFreq = 0
  !! frequency of output with WriteData_hdf

  INTEGER(I4B) :: coordinateSystem = TypeKernelCoordOpt%default
  !! Spatial coordinate system type. It can take following values
  !! `KERNEL_CARTESIAN` for Cartesian coordinates
  !! `KERNEL_CYLINDRICAL` for Cylinderical coordinates
  !! `KERNEL_SPHERICAL` for Sperical coordinates
  !! NOTE: These parameters are defined in the AbstractKernelParam module.

  INTEGER(I4B) :: maxIter = 100
  !! Maximum  number of iteration iterations
  !! This is useful when when we use iterative solvers like
  !! Newton method, Modified Newton method, or Iterative-predictor solvers.
  !! NOTE: DEFAULT_maxIter is defined in AbstractKernelParam

  INTEGER(I4B) :: timeDependency = TypeKernelTimeOpt%default
  !! This variable indicates if the problem is time dependent or not.
  !! It can take following values:
  !! KERNEL_STEADY  or KERNEL_STATIC
  !! KERNEL_PSEUDOSTATIC
  !! KERNEL_TRANSIENT or KERNEL_DYNAMIC
  !! NOTE: These variables are defined in AbstractKernelParam

  INTEGER(I4B) :: nsd = 0
  !! Spatial dimension of the problem,

  INTEGER(I4B) :: nnt = 1
  !! Number of nodes in time element
  !! NOTE: This variables is used only in space-time finite element methods

  INTEGER(I4B) :: tdof = 0
  !! Total number of degree of freedom per node
  !! NOTE: This variable is Set internally by each kernel while
  !! Setting the kernel.

  INTEGER(I4B) :: postProcessOpt = 1
  !! Postprocessing options
  !! INFO: The actual action depends upon the specific kernels

  INTEGER(I4B) :: currentTimeStep = 1
  !! Current time step number of the simulation.
  !! NOTE: This varible is needed in the transient simulation only.

  INTEGER(I4B) :: totalTimeStep = 0
  !! Total number of time step number in the simulation.
  !! NOTE: This varible is needed in the transient simulation only.

  ! Reals

  REAL(DFP) :: normRHS = 0.0_DFP
  !! norm of the right-hand-side vector in the system of linear equations
  !! NOTE: This variable is used internally

  REAL(DFP) :: dt = 0.0_DFP
  !! Time step size used in the pseudostatic and dynamic problems
  !! Needed in transient case

  REAL(DFP) :: startTime = 0.0
  !! Starting time of simulation
  !! NOTE: This varible is needed in the transient or pseudostatic simulation

  REAL(DFP) :: endTime = 0.0
  !! Final time of the simulation
  !! NOTE: This varible is needed in the transient or pseudostatic simulation

  REAL(DFP) :: currentTime = 0.0
  !! The current time of the simulation
  !! NOTE: This varible is needed in the transient simulation only.

  REAL(DFP) :: lengthScale = 1.0_DFP
  !! This variable denotes the length scale of the problem.
  !! NOTE: This variable is for internal use only.

  REAL(DFP) :: gravity(3) = 0.0_DFP
  !! Acceleration vector due to gravity

  REAL(DFP) :: incrementScale = 1.0_DFP
  !! x = x + incrementScale * displacement

  TYPE(KernelErrorOpt_) :: dispError
  !! Displacement error

  TYPE(KernelErrorOpt_) :: velError
  !! Velocity error

  TYPE(KernelErrorOpt_) :: solError
  !! solution error

  TYPE(KernelErrorOpt_) :: resError
  !! Residual error

  TYPE(String) :: name
  !! This is the name of the kernel. It can be anything you want.

  TYPE(String) :: engine
  !! Which type of linear solver library (engine) we use to
  !! solve system of linear equations. We can specify following
  !! values.
  !! `NATIVE_SERIAL`, `NATIVE_OMP`, `NATIVE_MPI`, `LIS_SERIAL`
  !! `LIS_OMP`, `LIS_MPI`, `PETSC`

  TYPE(String) :: tanmatProp
  !! Symmetric or Unsymmetric tangent matrix

  TYPE(String) :: tanmatName
  !! MATRIX
  !! BLOCKMATRIX

  TYPE(String) :: outputPath
  !! Path to put output files
  !! Default is results

  TYPE(String) :: domainFile
  !! domain file name

  TYPE(KernelBasisOpt_) :: basisForSpace
  !! Basis function option for space

  TYPE(KernelBasisOpt_) :: basisForTime
  !! Basis function option for time

  TYPE(KernelBasisOpt_) :: basisForPressure
  !! Basis function option for pressure

  TYPE(KernelBasisOpt_) :: basisForVelocity
  !! Basis function option for velocity

  TYPE(IterationData_) :: iterData
  !! Iteration data
  !! INFO: The actual action depends upon the specific kernels

END TYPE KernelOpt_
```

### isInitiated

This logical variable is set to true when we initiate the kernel.

### isCommonDomain

This variable is True when the domain is common, that is, all physical variables are defined on the same domain.

This variable is usually set to false in the multi-physics applications. In multi-physics applications different fields can have different type and order of shape functions. To construct such shape functions we may have to use different finite element meshes (hence, domains). For example, in the fluid mechanics, we often use Taylor-Hood element
which employs different order of interpolation for pressure and velocity.

### showTime

If it is set to true then we create a file called `KernelName_time_stat.csv`. This file contains the statics of time taken by the kernel. It will be helpful in improving the kernel.

### unifyVTK

If it is true then all the data are exported into one vtu file in `WriteData_vtk` method.

### createPVD

If it is true then a Paraview data file is created in `WriteData_vtk` method.

### problemType

This variable is an integer code for the type of problem kernel is designed to solve. For example, scale, vector, or multi-physics problem.

You can access these variables from a global variable called `TypeKernelProblemOpt`, for example see [AbstractKernelParam](./AbstractKernelParam.md)

### algorithm

This integer variable depends upon the kernel, and it denotes the specific algorithm used in the kernel.

### vtkOutputFreq

This integer variable denotes the frequency of output with `WriteData_vtk`.

### hdfOutputFreq

This integer variable denotes the frequency of output with `WriteData_hdf`.

### coordinateSystem

This integer variable denotes the coordinate system in which the kernel solves the problem. Its value are defined in a global variable called `TypeKernelCoordOpt`, which is defined in [AbstractKernelParam](./AbstractKernelParam.md).

### maxIter

This integer variable denotes the maximum number of iterations. This is useful when we use iterative solvers like Newton method, Modified Newton method, or Iterative-predictor solvers.

### timeDependency

This integer variable denoted the time dependency of the kernel problem. Its values are defined in the global variable called `TypeKernelTimeOpt` which is defined in the [AbstractKernelParam](./AbstractKernelParam.md)

### nsd

This integer variable denotes the spatial dimension of the problem that the kernel solves.

### nnt

This integer variable denotes the number of time nodes in the space-time finite element method.

### tdof

This integer variable denotes the total number of degrees of freedom per node in the problem.
This variable is set by the kernel internally white setting the kernel.

### postProcessOpt

This integer variable denotes the post-processing option. The actual action depends upon the specific kernels.

### currentTimeStep

This integer variable denotes the current time step of the kernel. It is often used in the transient simulation.

### totalTimeStep

This integer variable denotes the total number of time steps.

### normRHS

This real variable stores the current norm of RHS.

### dt

This real variable contains the current time step size.

### startTime

This real variable contains the starting time of the kernel.

### endTime

This real variable contains the final time of the kernel.

### lengthScale

Length scale is a real variable which denotes the length scale of the problem.

### gravity

Gravity vector.

### incrementScale

Increment scale for displacement.

### dispError, velError, solError, resError

These are instances of `KernelErrorOpt_` which contains the error information, you can find more information in [AbstractKernelParam](./AbstractKernelParam.md)

### name

This is a string which contains the name of the kernel.

### engine

This is a string which contains the name of the engine of the kernel.

### tanmatProp

This string contains the property of the tangent matrix, such as Symmetric or Unsymmetric.

### tanmatName

Name of the tangent matrix.

### outputPath

Path to put output files.

### domainFile

Name of the domain file.

### basisForSpace, basisForTime, basisForPressure, basisForVelocity

These variables are instances of `KernelBasisOpt_` which contains the basis function options for space, time, pressure, and velocity. You can find more information about them [AbstractKernelParam](./AbstractKernelParam.md).

### iterData

This is an instance of `IterationData_` which is defined in the base module, see [IterationData](/docs-api/IterationData).
