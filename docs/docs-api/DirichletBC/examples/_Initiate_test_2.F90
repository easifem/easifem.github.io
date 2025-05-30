!> author: Vikas Sharma, Ph. D.
! date:  2023-11-27
! summary:  Initiate an instance of DirichletBC
!
!# Introduction
!
! Initiate an instance of DirichletBC  for Constant boundary condition
! In this example we initiate an instance of [DirichletBC](/docs-api/DirichletBC) by using the [UserFunction](/docs-api/UserFunction). The user function will be configured to give constant value. We will define a pointer to `UserFunction_` and then call [Set](/docs-api/AbstractBC/Set) method. Then, the `Set` method will point to the user supplied `UserFunction`.

PROGRAM main
USE easifemBase
USE easifemClasses
IMPLICIT NONE

CHARACTER(*), PARAMETER :: myName = "main"
CHARACTER(*), PARAMETER :: modName = "main"
TYPE(DirichletBC_) :: obj
TYPE(MeshSelection_) :: boundary
TYPE(ParameterList_) :: param
TYPE(Domain_) :: dom
TYPE(HDF5File_) :: domainfile
CLASS(UserFunction_), POINTER :: func
CHARACTER(*), PARAMETER :: domainfilename = "./mesh3D.h5"
INTEGER(I4B) :: bottom = 1, top = 2, left = 3, right = 4,  &
  & front = 5, behind = 6, nsd
INTEGER(I4B), ALLOCATABLE :: nodeNum(:)
REAL(DFP), ALLOCATABLE :: nodalValue(:, :)

! Initiate Domain

CALL FPL_Init; CALL param%Initiate()
CALL domainfile%Initiate(filename=domainfilename, mode="READ")
CALL domainfile%OPEN()
CALL dom%Initiate(domainfile, group="")

nsd = dom%GetNSD()

! We call Set SetAbstractBCParam to set the parameter for boundary condition
CALL SetAbstractBCParam(param=param, prefix=obj%GetPrefix(),  &
  & name="ZeroBC", idof=1, nodalValueType=Constant, isUserFunction=.TRUE.)

! We call SetMeshSelectionParam to set the parameter for boundary condition
CALL SetMeshSelectionParam(param=param, prefix=boundary%GetPrefix(),  &
  & isSelectionByMeshID=.TRUE.)

! We call SetUserFunctionParam to set the parameter for boundary condition
CALL SetUserFunctionParam(param=param, name="bc", returnType=Scalar,  &
  & argType=Constant)

! boundary
CALL boundary%Initiate(param)
CALL boundary%Add(dom=dom, dim=nsd - 1, meshID=[top])
CALL boundary%Set()

! Initiate DirichletBC
CALL obj%Initiate(param=param, boundary=boundary, dom=dom)

! Initiate user function.

ALLOCATE (func)
CALL func%Initiate(param)
CALL func%Set(scalarValue=1.0_DFP)

! Set the user function to `DirichletBC` by calling [Set](/docs-api/DirichletBC/Set) method.
CALL obj%Set(userFunction=func)

CALL obj%Display("dbc"//CHAR_LF)

! Get the value from `DirichletBC` by calling [Get](/docs-api/DirichletBC/Get) method.
CALL obj%Get(nodeNum=nodeNum, nodalValue=nodalValue)

CALL Display(nodeNum, "nodeNum", advance="NO")
CALL Display(nodalValue, "nodalValue", advance="YES")

CALL domainfile%DEALLOCATE()
CALL dom%DEALLOCATE()
CALL param%DEALLOCATE(); CALL FPL_Finalize
END PROGRAM main
