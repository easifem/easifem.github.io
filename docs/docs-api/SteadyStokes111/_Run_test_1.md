```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  USE easifemMaterials
  USE easifemKernels
  USE SteadyStokes111_Class
  IMPLICIT NONE
  TYPE( SteadyStokes111_ ) :: obj
  TYPE( ParameterList_ ) :: param
  TYPE(VTKFile_) :: vtk_outputfile
  TYPE(HDF5File_) :: hdf_outputfile
  TYPE( HDF5File_ ) :: domainFile
  TYPE( Domain_ ) :: dom
  INTEGER( I4B ), PARAMETER :: refPressureNode=2
  REAL( DFP ), PARAMETER :: refPressure = 0.0_DFP
  INTEGER( I4B ), PARAMETER :: tDirichletBCForVelocity = 3
  INTEGER( I4B ), PARAMETER :: tDirichletBCForPressure = 0
  INTEGER( I4B ), PARAMETER :: tFluidMaterials= 1
  INTEGER( I4B ), PARAMETER :: stabParamOption= 1
  LOGICAL( LGT ), PARAMETER :: isSubscalePressure = .FALSE.
  LOGICAL( LGT ), PARAMETER :: isBoundarySubscale = .FALSE.
  REAL( DFP ), PARAMETER :: gravity(3)=[0.0, -9.8, 0.0]
  LOGICAL( LGT ), PARAMETER :: isConservativeForm = .TRUE.
  CHARACTER( * ), PARAMETER :: engine="NATIVE_SERIAL"
  CHARACTER( * ), PARAMETER :: domainFileName="./long_pipe_tri3.h5"
  INTEGER( I4B ), PARAMETER :: CoordinateSystem = KERNEL_CARTESIAN
  INTEGER( I4B ), PARAMETER :: maxIter = 100
  REAL( DFP ), PARAMETER :: rtoleranceForPressure = 1.0E-6
  REAL( DFP ), PARAMETER :: rtoleranceForVelocity = 1.0E-6
  REAL( DFP ), PARAMETER :: atoleranceForPressure = 1.0E-6
  REAL( DFP ), PARAMETER :: atoleranceForVelocity = 1.0E-6
  REAL( DFP ), PARAMETER :: toleranceForSteadyState = 1.0E-6
  CHARACTER(*), PARAMETER :: baseInterpolationForSpace="LagrangeInterpolation"
  CHARACTER(*), PARAMETER :: baseContinuityForSpace="H1"
  CHARACTER(*), PARAMETER :: quadratureTypeForSpace="GaussLegendre"
  INTEGER(I4B), PARAMETER :: ls_solverName = LIS_SUPERLU !! LIS_GMRES
  INTEGER(I4B), PARAMETER :: ls_preconditionOption = NO_PRECONDITION
  INTEGER(I4B), PARAMETER :: ls_convergenceIn = convergenceInRes !! convergenceInSol
  INTEGER(I4B), PARAMETER :: ls_convergenceType = relativeConvergence
  INTEGER(I4B), PARAMETER :: ls_maxIter = -1
  LOGICAL(LGT), PARAMETER :: ls_relativeToRHS = .TRUE. !! True
  INTEGER(I4B), PARAMETER :: ls_KrylovSubspaceSize = 40
  REAL(DFP), PARAMETER :: ls_rtol = 1.0E-10
  REAL(DFP), PARAMETER :: ls_atol = 1.0E-15
  TYPE( MeshSelection_ ) :: region
  INTEGER( I4B ), PARAMETER :: fluid_meshID(1) = [1]
  REAL( DFP ), PARAMETER :: fluid_massDensity=1000.0
  REAL( DFP ), PARAMETER :: fluid_dynamicViscosity=0.001_DFP
  CHARACTER( LEN = * ), PARAMETER :: fluid_stressStrainModel="NewtonianFluidModel"
  CLASS( DirichletBC_ ), POINTER :: dbc => NULL()
  PROCEDURE(iface_SpaceFunction), pointer :: f_Vx_US => NULL()
```

Set parameters for kernel.

```fortran
CALL FPL_INIT(); CALL param%Initiate()
```

Set parameters for the kernel.

```fortran
CALL SetSteadyStokes111Param( &
  & param=param, &
  & isConservativeForm=isConservativeForm, &
  & gravity = gravity, &
  & isSubscalePressure = isSubscalePressure, &
  & isBoundarySubscale = isBoundarySubscale, &
  & stabParamOption = stabParamOption, &
  & domainFile = domainFileName, &
  & engine=engine, &
  & CoordinateSystem=KERNEL_CARTESIAN, &
  & maxIter =maxIter, &
  & rtoleranceForPressure = rtoleranceForPressure, &
  & rtoleranceForVelocity = rtoleranceForVelocity, &
  & atoleranceForPressure = atoleranceForPressure, &
  & atoleranceForVelocity = atoleranceForVelocity, &
  & toleranceForSteadyState = toleranceForSteadyState, &
  & tFluidMaterials=tFluidMaterials, &
  & tDirichletBCForPressure=tDirichletBCForPressure, &
  & tDirichletBCForVelocity=tDirichletBCForVelocity, &
  & baseInterpolationForSpace=baseInterpolationForSpace, &
  & baseContinuityForSpace=baseContinuityForSpace, &
  & quadratureTypeForSpace=quadratureTypeForSpace, &
  & refPressureNode=refPressureNode, &
  & refPressure=refPressure &
  & )
```

Setting parameters for linear solver.

```fortran
CALL SetLinSolverParam( &
  & param=param, &
  & solverName=ls_solverName,&
  & preconditionOption=ls_preconditionOption, &
  & convergenceIn=ls_convergenceIn, &
  & convergenceType=ls_convergenceType, &
  & maxIter=ls_maxIter, &
  & relativeToRHS=ls_relativeToRHS, &
  & KrylovSubspaceSize=ls_KrylovSubspaceSize, &
  & rtol=ls_rtol, &
  & atol=ls_atol )
```

Initiate domain by reading data from a domain file.

```fortran
CALL domainFile%Initiate( filename=domainFileName, MODE="READ" )
CALL domainFile%Open()
CALL dom%Initiate( domainFile, "" )
CALL domainFile%Deallocate()
```

Initiate the kernel.

```fortran
CALL obj%Initiate(param=param, dom=dom )
```

Add fluid material to kernel. To do so, we first create an instance of [MeshSelection](../MeshSelection/MeshSelection_.md). Then, we add this instance to the kernel.

```fortran
CALL region%Initiate( isSelectionByMeshID=.TRUE. )
CALL region%Add( dim=dom%GetNSD(), meshID=fluid_meshID )
CALL SetFluidMaterialParam( &
  & param=param, &
  & name="fluidMaterial", &
  & massDensity=fluid_massDensity, &
  & dynamicViscosity = fluid_dynamicViscosity, &
  & stressStrainModel=fluid_stressStrainModel )
CALL SetNewtonianFluidModelParam( &
  & param = param, &
  & dynamicViscosity = fluid_dynamicViscosity )
```

```fortran
CALL obj%AddFluidMaterial( &
  & materialNo=1, &
  & materialName="fluidMaterial", &
  & param=param, &
  & region=region)
CALL region%Deallocate()
```

Now we show how to add dirichlet boundary condition. To this end first we create an instance of [MeshSelection](../MeshSelection/MeshSelection_.md) to select the region of the mesh. Then we define the dirichlet bonundary condition, and pass these two information to kernel.

set parameters for dirichlet boundary condition:

```fortran
#define BOTTOM 1
#define RIGHT 2
#define TOP 3
#define LEFT 4
```

```fortran
CALL SetDirichletBCParam( &
  & param=param, &
  & name="V2=0", &
  & idof=2, &
  & nodalValueType=Constant, &
  & useFunction=.FALSE. )
```

select the mesh region:

```fortran
CALL region%Initiate( isSelectionByMeshID=.TRUE. )
CALL region%Add( dim=obj%nsd-1, meshID=[BOTTOM, TOP, LEFT] )
CALL region%Set()
```

Add dirichlet boundary condition and the region to kernel:

```fortran
CALL obj%AddVelocityDirichletBC( &
  & dbcNo=1, &
  & param=param, &
  & boundary=region )
dbc => obj%GetVelocityDirichletBCPointer( dbcNo=1 )
CALL dbc%Set( ConstantNodalValue=0.0_DFP )
dbc=>NULL()
```

AddDirichletBC, V1=U,
set parameters for dirichlet boundary condition:

```fortran
CALL SetDirichletBCParam( &
  & param=param, &
  & name="UpstreamV1", &
  & idof=1, &
  & nodalValueType = Space, &
  & useFunction=.TRUE. )
```

select the mesh region:

```fortran
CALL region%Deallocate()
CALL region%Initiate( isSelectionByMeshID=.TRUE. )
CALL region%Add( dim=obj%nsd-1, meshID=[LEFT] )
CALL region%Set()
```

Add dirichlet boundary condition and the region to kernel:

```fortran
CALL obj%AddVelocityDirichletBC( &
  & dbcNo=2, &
  & param=param, &
  & boundary=region )
dbc => obj%GetVelocityDirichletBCPointer( dbcNo=2 )
f_Vx_US => function_Vx_US
CALL dbc%Set( SpaceFunction=f_Vx_US )
dbc=>NULL()
f_Vx_US => NULL()
CALL region%Deallocate()
```

AddDirichletBC, V1=0,
set parameters for dirichlet boundary condition:

```fortran
CALL SetDirichletBCParam( &
  & param=param, &
  & name="V1=0", &
  & idof=1, &
  & nodalValueType=Constant, &
  & useFunction=.FALSE. )
```

select the mesh region:

```fortran
CALL region%Initiate( isSelectionByMeshID=.TRUE. )
CALL region%Add( dim=obj%nsd-1, meshID=[BOTTOM, TOP] )
CALL region%Set()
```

Add dirichlet boundary condition and the region to kernel:

```fortran
CALL obj%AddVelocityDirichletBC( &
  & dbcNo=3, &
  & param=param, &
  & boundary=region )
dbc => obj%GetVelocityDirichletBCPointer( dbcNo=3 )
CALL dbc%Set( ConstantNodalValue=0.0_DFP )
dbc=>NULL()
```

AddDirichletBC, P=0
set parameters for dirichlet boundary condition:

```fortran
IF (tDirichletBCForPressure .GT. 0) THEN
  CALL SetDirichletBCParam( &
    & param=param, &
    & name="P=0", &
    & idof=1, &
    & nodalValueType=Constant, &
    & useFunction=.FALSE.)
  ! CALL region%Initiate( &
  !   & isSelectionByNodeNum=.TRUE.)
  ! CALL region%Add(nodenum=[refPressureNode])
  ! CALL region%Set()
  CALL region%Initiate( &
    & isSelectionByMeshID=.TRUE.)
  CALL region%Add(dim=obj%nsd - 1, meshID=[RIGHT])
  CALL region%Set()
  !!
  CALL obj%AddPressureDirichletBC(dbcNo=1, param=param, boundary=region)
  CALL region%DEALLOCATE()
  dbc => obj%GetPressureDirichletBCPointer(dbcNo=1)
  CALL dbc%Set(ConstantNodalValue=refPressure)
  dbc => NULL()
END IF
```

```fortran
CALL obj%Set()
```

Run the kernel.

```fortran
CALL obj%run(param=param)
```

Write Data

```fortran
! CALL outputfile%Initiate(outputfilePrefix//'.h5', "NEW")
! CALL outputfile%Open()
!!
! CALL obj%WriteData(outputfile, "")
CALL obj%WriteData(vtk_outputfile, "")
```

cleanup

```fortran
CALL obj%Deallocate()
CALL dom%Deallocate()
CALL param%Deallocate(); CALL FPL_FINALIZE()
```

```fortran
contains
pure function function_Vx_US(x) result(ans)
REAL( DFP ), INTENT( IN ) :: x(:)
REAL( DFP ) :: ans
ans = 0.01 * (x(2)*(2.0-x(2))) 
end function function_Vx_US
END PROGRAM main
```
