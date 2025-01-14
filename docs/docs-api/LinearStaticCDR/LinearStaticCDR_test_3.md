This example shows how to initiate an instance of [[LinearStaticCDR_]]

```fortran
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
    INTEGER(I4B), PARAMETER :: tMaterials = 2, tDirichletBC=4, &
      & solverName = LIS_GMRES, preconditionOption=LEFT_PRECONDITION, &
      & convergenceIn = convergenceInRes, &
      & convergenceType=relativeConvergence, &
      & maxIter = 100, &
      & KrylovSubspaceSize=20

!! Initiate an instance of [[ParameterList_]].

    CALL FPL_INIT(); CALL param%initiate()

!! Set parameters for [[LinearStaticCDR_]] kernel.

    CALL SetLinearStaticCDRParam( &
      & param=param, &
      & isConservative=.FALSE., &
      & engine="NATIVE_SERIAL", &
      & coordinateSystem=KERNEL_2D, &
      & tMaterials=tMaterials, &
      & tDirichletBC=tDirichletBC, &
      & domainFile=domainFileName, &
      & baseContinuity="H1", &
      & baseInterpolation="LagrangeInterpolation", &
      & quadratureType="GaussLegendre" )

!! Here, `baseContinuity`, `baseInterpolation`, and `quadratureType` are OPTIONAL.

!! Setting parameters for [[LinSolver_]]

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

!! Initiate the computation domain.

    CALL domainFile%Initiate(filename=domainFileName, mode="READ")
    CALL domainFile%Open()
    CALL dom%Initiate( domainFile, '' )
    CALL domainFile%Deallocate()

!! Initiate an instance of [[LinearStaticCDR_]].

    CALL obj%Initiate( param=param, dom=dom )

!! Display the content of the kernel.

    CALL obj%Display( "LinearStaticCDR :: ")

    CALL obj%Deallocate( )
    CALL dom%Deallocate()
    CALL param%Deallocate()
    CALL FPL_FINALIZE()
END PROGRAM main
```
