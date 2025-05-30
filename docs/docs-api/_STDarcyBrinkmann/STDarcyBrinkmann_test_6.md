```fortran
PROGRAM main
USE easifemBase
USE easifemClasses
USE easifemMaterials
USE easifemKernels
USE STDarcyBrinkmann_Class
IMPLICIT NONE
TYPE( STDarcyBrinkmann_ ) :: obj
TYPE( ParameterList_ ) :: param
TYPE( HDF5File_ ) :: domainFile
TYPE( Domain_ ) :: dom
TYPE( MeshSelection_ ) :: region
CHARACTER( LEN = * ), PARAMETER :: domainFileName="./mesh_tri3.h5"
!> main
CALL FPL_INIT(); CALL param%Initiate()
! #SetSTDarcyBrinkmannParam
CALL SetSTDarcyBrinkmannParam( &
  & param=param, &
  & engine="NATIVE_SERIAL", &
  & nnt=2, &
  & startTime=0.0_DFP, &
  & endTime=10.0_DFP, &
  & dt=0.001_DFP, &
  & CoordinateSystem=KERNEL_2D, &
  & tPorousMaterials=2, &
  & tFluidMaterials=1, &
  & tDirichletBCForPressure=1, &
  & tDirichletBCForVelocity=3, &
  & domainFileForPressure=domainFileName, &
  & domainFileForVelocity=domainFileName )
! #SetLinSolverParam
CALL SetLinSolverParam( param=param, solverName=LIS_GMRES,&
  & preconditionOption=LEFT_PRECONDITION, convergenceIn=convergenceInRes, &
  & convergenceType=relativeConvergence, maxIter=100,relativeToRHS=.TRUE.,&
  & KrylovSubspaceSize=20,rtol=1.0D-10,atol=1.0D-10 )
!> initiate domain
! #HDF5File/Initiate
CALL domainFile%Initiate( domainFileName, MODE="READ" )
! #HDFFile/Open
CALL domainFile%Open()
! #Domain/Initiate
CALL dom%Initiate( domainFile, "" )
! #HDF5File/Deallocate
CALL domainFile%Deallocate()
!> initiate domain [ok!]
! #STDarcyBrinkmann/Initiate
CALL obj%Initiate(param=param, dom=dom )
! #MeshSelection/Initiate
CALL region%Initiate( isSelectionByMeshID=.TRUE. )
! #MeshSelection/Add
CALL region%Add( xidim=dom%getNSD(), meshID=[1] )
! #SetPorousMaterialParam
CALL SetPorousMaterialParam( param=param, name="porousMaterial", &
  & massDensity=1700.0_DFP, stressStrainModel="LinearPoroElasticModel" )
! #SetLinearPoroElasticModelParam
CALL SetLinearPoroElasticModelParam( &
  & param = param,  &
  & ElasticityType = IsoLinearElasticModel, &
  & isPlaneStress = .FALSE., &
  & isPlaneStrain = .TRUE., &
  & PoissonRatio = 0.3_DFP, &
  & YoungsModulus = 1.0D+6 )
! #STDarcyBrinkmann/AddPorousMaterial
CALL obj%AddPorousMaterial(materialNo=1, materialName="porousMaterial", &
  & param=param, region=region)
! #MeshSelection/Deallocate
CALL region%Deallocate()
!> Adding another porous material
! #MeshSelection/Initiate
CALL region%Initiate( isSelectionByMeshID=.TRUE. )
! #MeshSelection/Add
CALL region%Add( xidim=dom%getNSD(), meshID=[2] )
! #SetPorousMaterialParam
CALL SetPorousMaterialParam( param=param, name="porousMaterial", &
  & massDensity=1700.0_DFP, stressStrainModel="LinearPoroElasticModel" )
! #SetLinearPoroElasticModelParam
CALL SetLinearPoroElasticModelParam( &
  & param = param,  &
  & ElasticityType = IsoLinearElasticModel, &
  & isPlaneStress = .FALSE., &
  & isPlaneStrain = .TRUE., &
  & PoissonRatio = 0.3_DFP, &
  & YoungsModulus = 1.0D+6 )
! #STDarcyBrinkmann/AddPorousMaterial
CALL obj%AddPorousMaterial(materialNo=2, materialName="porousMaterial", &
  & param=param, region=region)
! #STDarcyBrinkmann/Display
CALL obj%Display("")
! #STDarcyBrinkmann/Deallocate
CALL obj%Deallocate()
CALL Dom%Deallocate()
CALL param%Deallocate(); CALL FPL_FINALIZE()
END PROGRAM main
```
