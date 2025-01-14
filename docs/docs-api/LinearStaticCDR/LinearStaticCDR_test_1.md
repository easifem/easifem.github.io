!!  This examples shows how to use `SetLinearStaticCDRParam` to set the parameters of [[LinearStaticCDR_]] kernel.

``` fortran
PROGRAM main
    USE easifemBase
    USE easifemClasses
    USE easifemKernels
    USE LinearStaticCDR_Class
    IMPLICIT NONE
    TYPE(ParameterList_) :: param
    TYPE(LinearStaticCDR_) :: obj

!!  Initiate an instance of [[ParameterList_]].

    CALL FPL_INIT(); CALL param%Initiate()

!!  Setting parameters for initiating an instance of [[LinearStaticCDR_]]

  CALL SetLinearStaticCDRParam( &
    & isConservative=.FALSE., &
    & param=param, &
    & engine="NATIVE_SERIAL",  &
    & coordinateSystem=KERNEL_2D, &
    & tMaterials=2, &
    & tDirichletBC=4,  &
    & domainFile="./mesh.h5" )

!! Let us see the content of param.


  CALL param%print()

  CALL obj%CheckEssentialParam(param)

  CALL param%Deallocate(); CALL FPL_FINALIZE()
END PROGRAM main
```
