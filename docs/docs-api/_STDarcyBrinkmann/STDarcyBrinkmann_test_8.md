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
! main
! #ParameterList/Initiate
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
  & tDirichletBCForVelocity=2, &
  & domainFileForPressure=domainFileName, &
  & domainFileForVelocity=domainFileName )
! #SetLinSolverParam
CALL SetLinSolverParam( param=param, solverName=LIS_GMRES,&
  & preconditionOption=LEFT_PRECONDITION, convergenceIn=convergenceInRes, &
  & convergenceType=relativeConvergence, maxIter=100,relativeToRHS=.TRUE.,&
  & KrylovSubspaceSize=20,rtol=1.0D-10,atol=1.0D-10 )
! #HDF5File/Initiate
CALL domainFile%Initiate( filename=domainFileName, MODE="READ" )
! #HDF5File/Open
CALL domainFile%Open()
! #Domain/Initiate
CALL dom%Initiate( domainFile, "" )
! #HDF5File/Close
CALL domainFile%Deallocate()
! #STDarcyBrinkmann/Initiate
CALL obj%Initiate( param=param, dom=dom )
! #MeshSelection/Initiate
CALL region%Initiate( isSelectionByMeshID=.TRUE. )
! #MeshSelection/Add
CALL region%Add( xidim=dom%GetNSD(), meshID=[1,2] )
! #SetFluidMaterialParam
CALL SetFluidMaterialParam( param=param, name="fluidMaterial", &
  & massDensity=1000.0_DFP, stressStrainModel="NewtonianFluidModel" )
! #SetNewtonianFluidModelParam
CALL SetNewtonianFluidModelParam( param = param,  &
  & Viscosity = 0.001_DFP )
! #STDarcyBrinkmann/AddFluidMaterial
CALL obj%AddFluidMaterial(materialNo=1, materialName="fluidMaterial", &
  & param=param, region=region)
! #MeshSelection/Deallocate
CALL region%Deallocate()
! #STDarcyBrinkmann/Display
CALL obj%Display("")
! #STDarcyBrinkmann/Deallocate
CALL obj%Deallocate()
CALL Dom%Deallocate()
CALL param%Deallocate(); CALL FPL_FINALIZE()
END PROGRAM main
```
