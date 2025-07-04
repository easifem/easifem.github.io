This example demonstrates how to use `addMaterial` to add new material to [[StaticDiffusion_]] kernel.

```fortran
PROGRAM main
    USE easifemBase
    USE easifemClasses
    USE easifemKernels
    USE StaticDiffusion_Class
    IMPLICIT NONE
    TYPE(StaticDiffusion_) :: obj
    TYPE(ParameterList_) :: param
    TYPE(Domain_) :: dom
    CHARACTER( LEN = * ), PARAMETER :: domainFileName="./mesh.h5"
    TYPE( HDF5File_ ) :: domainFile
    TYPE( MeshSelection_ ) :: region
    INTEGER(I4B), PARAMETER :: tMaterials = 2, tDirichletBC=4, &
      & solverName = LIS_CG, preconditionOption=LEFT_PRECONDITION, &
      & convergenceIn = convergenceInRes, &
      & convergenceType=relativeConvergence, &
      & maxIter = 100, &
      & KrylovSubspaceSize=20
```

!!! note ""
Initiate an instance of [[ParameterList_]].

```fortran
CALL FPL_INIT(); CALL param%initiate()
```

!!! note ""
Set parameters for [[StaticDiffusion_]] kernel.

```fortran
CALL SetStaticDiffusionParam( param=param, engine="NATIVE_SERIAL", &
  & coordinateSystem=KERNEL_2D, tMaterials=tMaterials, &
  & tDirichletBC=tDirichletBC, domainFile=domainFileName, &
  & baseContinuity="H1", &
  & baseInterpolation="LagrangeInterpolation", &
  & quadratureType="GaussLegendre" )
```

Here, `baseContinuity`, `baseInterpolation`, and `quadratureType` are optional.

!!! note ""
Setting parameters for [[LinSolver_]]

```fortran
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
```

!!! note ""
Initiate the computation domain.

```fortran
CALL domainFile%Initiate(filename=domainFileName, mode="READ")
CALL domainFile%Open()
CALL dom%Initiate( domainFile, '' )
CALL domainFile%Deallocate()
```

!!! note ""
Set parameters for [[StaticDiffusion_]] kernel.

```fortran
CALL obj%Initiate( param=param, dom=dom )
```

!!! note "Material 1"
Now we use `AddMaterial` method to add a material and region to the kernel.

```fortran
CALL region%Initiate( isSelectionByMeshID=.TRUE. )
CALL region%Add( dim=2, meshID=[1] )
CALL obj%AddMaterial( materialNo=1, region=region )
CALL region%Deallocate()
```

!!! note "Material 2"
Now we use `AddMaterial` method to add a material and region to the kernel.

```fortran
CALL region%Initiate( isSelectionByMeshID=.TRUE. )
CALL region%Add( dim=2, meshID=[2] )
CALL obj%AddMaterial( materialNo=2, region=region )
CALL region%Deallocate()
```

!!! note ""
Display the content of [[StaticDiffusion_]]

```fortran
CALL obj%Display( "StaticDiffusion :: ")
```

??? example "Results"

    ```bash
    # StaticDiffusion ::
    ## name :
    StaticDiffusion
    # isInitiated : TRUE
    ## engine :
    NATIVE_SERIAL
    # coordinateSystem : 3
    # timeDependency : 0
    # nsd : 2
    # nnt : 0
    # tdof : 1
    # dt : 0.00000
    # startTime : 0.00000
    # endTime : 0.00000
    # currentTime : 0.00000
    # currentTimeStep : 0
    # totalTimeStep : 0
    # elemToMatID : NOT allocated
    # Linear Solver : ASSOCIATED
    # Tangent matrix : NOT ASSOCIATED
    # Procedure pointer Assemble : NOT ASSOCIATED
    # Procedure pointer AssembleTanMat : NOT ASSOCIATED
    # Procedure pointer AssembleRHS : NOT ASSOCIATED
    # Procedure pointer Solve : NOT ASSOCIATED
    # Procedure pointer Update : NOT ASSOCIATED
    # Procedure pointer isConverged : NOT ASSOCIATED
    # Procedure pointer isConverged : NOT ASSOCIATED
    # Procedure pointer WriteData : NOT ASSOCIATED
    # Procedure pointer SaveState : NOT ASSOCIATED
    # Procedure pointer LoadState : NOT ASSOCIATED
    ## domainFile :
    ./mesh.h5
    # tMaterials : 2
    # material : ALLOCATED, SIZE[2]
    # material(1) : NOT ASSOCIATED
    # material(2) : NOT ASSOCIATED
    # materialToMesh : ALLOCATED, SIZE[2]
    # # materialToMesh(1) :
    # isInitiated : TRUE
    # isSelectionByMeshID : T
    # isSelectionByElemNum : F
    # isSelectionByNodeNum : F
    # isSelectionByBox : F
    # SurfaceMeshID :
    size : 1
    1
    # # materialToMesh(2) :
    # isInitiated : TRUE
    # isSelectionByMeshID : T
    # isSelectionByElemNum : F
    # isSelectionByNodeNum : F
    # isSelectionByBox : F
    # SurfaceMeshID :
    size : 1
    2
    # baseContinuity :H1
    # baseInterpolation :LagrangeInterpolation
    # quadratureType :GaussLegendre
    # DBC : ALLOCATED, SIZE[4]
    # DBC(1) : NOT ASSOCIATED
    # DBC(2) : NOT ASSOCIATED
    # DBC(3) : NOT ASSOCIATED
    # DBC(4) : NOT ASSOCIATED
    # Dom : ASSOCIATED
    # rhs : NOT ASSOCIATED
    # sol : NOT ASSOCIATED
    # nodeCoord : NOT ASSOCIATED
    ```

```fortran
    CALL obj%Deallocate( )
    CALL dom%Deallocate()
    CALL param%Deallocate()
    CALL FPL_FINALIZE()
END PROGRAM main
```
