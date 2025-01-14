This example shows how to use set method in `LinearStaticCDR_` kernel.

```fortran
PROGRAM main
    USE easifemBase
    USE easifemClasses
    USE easifemMaterials
    USE easifemKernels
    USE LinearStaticCDR_Class
    IMPLICIT NONE
    TYPE(LinearStaticCDR_) :: obj
    TYPE(ParameterList_) :: param
    TYPE(Domain_) :: dom
    CHARACTER( LEN = * ), PARAMETER :: domainFileName="./mesh.h5"
    TYPE( HDF5File_ ) :: domainFile
    TYPE( MeshSelection_ ) :: region
    INTEGER(I4B), PARAMETER :: tMaterials = 2, tDirichletBC=2, &
      & solverName = LIS_GMRES, preconditionOption=LEFT_PRECONDITION, &
      & convergenceIn = convergenceInRes, &
      & convergenceType=relativeConvergence, &
      & maxIter = 100, &
      & KrylovSubspaceSize=20
    CLASS( DirichletBC_ ), POINTER :: dbc

!!  Initiate an instance of [[ParameterList_]]

    CALL FPL_INIT(); CALL param%Initiate()

!!  Set the parameter for [[LinearStaticCDR_]]

    CALL SetLinearStaticCDRParam( param=param, &
        & engine="NATIVE_SERIAL", &
        & isConservative=.FALSE., &
        & coordinateSystem=KERNEL_2D, &
        & tMaterials=tMaterials, &
        & tDirichletBC=tDirichletBC, &
        & domainFile=domainFileName, &
        & baseContinuity="H1", &
        & baseInterpolation="LagrangeInterpolation", &
        & quadratureType="GaussLegendre" )

!!  Set the parameter for [[LinSolver_]].

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

!! Initiates computation domain.

    CALL domainFile%Initiate(filename=domainFileName, mode="READ")
    CALL domainFile%Open()
    CALL dom%Initiate( domainFile, '' )
    CALL domainFile%Deallocate()

!!  Initiate an instace of [[LinearStaticCDR_]] kernel

    CALL obj%Initiate( param=param, dom=dom )

!! "addMaterial 1" Add another material and domain region in the [[LinearStaticCDR_]] kernel.

    CALL region%Initiate( isSelectionByMeshID=.TRUE. )
    CALL region%Add( dim=2, meshID=[1] )
    CALL SetSolidMaterialParam( param=param, name="SolidMaterial", &
      & massDensity=1.0_DFP, diffusivity=1.0_DFP )
    CALL obj%AddMaterial( materialNo=1, materialName="SolidMaterial",  &
      & param=param, region=region )
    CALL region%Deallocate()

!! "addMaterial 2" Add another material and domain region in the [[LinearStaticCDR_]] kernel.

    CALL region%Initiate( isSelectionByMeshID=.TRUE. )
    CALL region%Add( dim=2, meshID=[2] )
    CALL SetSolidMaterialParam( param=param, name="SolidMaterial", &
      & massDensity=1.0_DFP, diffusivity=1.0_DFP )
    CALL obj%AddMaterial( materialNo=2, materialName="SolidMaterial",  &
      & param=param, region=region )
    CALL region%Deallocate()

!! "SetDirichletBC 1"
!! Now we set the Dirichlet boundary condition. First we select the mesh
!! boundary, then we prescribe the boundary condition.

    CALL SetDirichletBCParam(param=param, name="ZeroDBC", idof=1, &
      & nodalValueType=Constant, useFunction=.FALSE. )
    CALL region%Initiate( isSelectionByMeshID=.TRUE.)
    CALL region%Add( dim=1, meshID=[3] )
    CALL obj%AddDirichletBC( dbcNo=1, boundary=region, param=param )
    CALL region%Deallocate()
    dbc => obj%GetDirichletBCPointer( dbcNo=1 )
    CALL dbc%Set( ConstantNodalValue=0.0_DFP ); dbc=>NULL()

!! Let us repeat the procedure mentioned above to prescribe another boundary condition.

    CALL SetDirichletBCParam(param=param, name="NonZeroDBC", idof=1, &
      & nodalValueType=Constant, useFunction=.FALSE. )
    CALL region%Initiate( isSelectionByMeshID=.TRUE.)
    CALL region%Add( dim=1, meshID=[6] )
    CALL obj%AddDirichletBC( dbcNo=2, boundary=region, param=param )
    CALL region%Deallocate()
    dbc => obj%GetDirichletBCPointer( dbcNo=2 )
    CALL dbc%Set( ConstantNodalValue=1.0_DFP ); dbc=>NULL()

!! Now that we are done setting the kernels properties, we will call `Set` method.

    CALL obj%set()

!! Display the content of kernel.

    CALL obj%Display( "LinearStaticCDR :: ")

    CALL obj%Deallocate( )
    CALL dom%Deallocate()
    CALL param%Deallocate()
    CALL FPL_FINALIZE()
END PROGRAM main
```
