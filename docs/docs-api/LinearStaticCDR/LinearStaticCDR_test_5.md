This example demonstrates how to use `addMaterial` to add new material to [[LinearStaticCDR_]] kernel.

``` fortran
PROGRAM main
    USE easifemBase
    USE easifemClasses
    USE easifemKernels
    USE LinearStaticCDR_Class
    IMPLICIT NONE
    TYPE(LinearStaticCDR_) :: obj
    TYPE(ParameterList_) :: param
    TYPE(Domain_) :: dom
    CHARACTER( LEN = * ), PARAMETER :: domainFileName="./mesh.h5"
    TYPE( HDF5File_ ) :: domainFile
    TYPE( MeshSelection_ ) :: region
    INTEGER(I4B), PARAMETER :: tMaterials = 2, tDirichletBC=4, &
      & solverName = LIS_GMRES, preconditionOption=LEFT_PRECONDITION, &
      & convergenceIn = convergenceInRes, &
      & convergenceType=relativeConvergence, &
      & maxIter = 100, &
      & KrylovSubspaceSize=20

!!  Initiate an instance of [[ParameterList_]].

    CALL FPL_INIT(); CALL param%initiate()

!!  Set parameters for [[LinearStaticCDR_]] kernel.

    CALL SetLinearStaticCDRParam( param=param, &
      & engine="NATIVE_SERIAL", &
      & isConservative=.FALSE., &
      & coordinateSystem=KERNEL_2D, tMaterials=tMaterials, &
      & tDirichletBC=tDirichletBC, domainFile=domainFileName, &
      & baseContinuity="H1", &
      & baseInterpolation="LagrangeInterpolation", &
      & quadratureType="GaussLegendre" )

!! Here, `baseContinuity`, `baseInterpolation`, and `quadratureType` are optional.

!!  Setting parameters for [[LinSolver_]]

    CALL SetLinSolverParam( &
      & param=param, &
      & solverName=solverName,&
      & preconditionOption=preconditionOption, &
      & convergenceIn=convergenceIn, &
      & convergenceType=convergenceType, &
      & maxIter=maxIter, &
      & relativeToRHS=.TRUE., &
      & KrylovSubspaceSize=KrylovSubspaceSize, &
      & rtol=1.0D-10, &
      & atol=1.0D-10 )

!!  Initiate the computation domain.

    CALL domainFile%Initiate(filename=domainFileName, mode="READ")
    CALL domainFile%Open()
    CALL dom%Initiate( domainFile, '' )
    CALL domainFile%Deallocate()

!!  Set parameters for [[LinearStaticCDR_]] kernel.

    CALL obj%Initiate( param=param, dom=dom )

!! "Material 1" Now we use `AddMaterial` method to add a material and region to the kernel.

    CALL region%Initiate( isSelectionByMeshID=.TRUE. )
    CALL region%Add( dim=2, meshID=[1] )
    CALL obj%AddMaterial( materialNo=1, region=region )
    CALL region%Deallocate()

!! "Material 2" Now we use `AddMaterial` method to add a material and region to the kernel.

    CALL region%Initiate( isSelectionByMeshID=.TRUE. )
    CALL region%Add( dim=2, meshID=[2] )
    CALL obj%AddMaterial( materialNo=2, region=region )
    CALL region%Deallocate()

!!  Display the content of [[LinearStaticCDR_]]

    CALL obj%Display( "LinearStaticCDR :: ")

    CALL obj%Deallocate( )
    CALL dom%Deallocate()
    CALL param%Deallocate()
    CALL FPL_FINALIZE()
END PROGRAM main
```
