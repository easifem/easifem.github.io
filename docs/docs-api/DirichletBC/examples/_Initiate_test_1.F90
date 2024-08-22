!> author: Vikas Sharma, Ph. D.
! date:  2023-11-27
! summary:  Initiate an instance of DirichletBC
!
!# Introduction
!
! Initiate an instance of DirichletBC  for
! Constant boundary condition

PROGRAM main
USE GlobalData
USE BaseType
USE Display_Method
USE DirichletBC_Class
USE MeshSelection_Class
USE FPL
USE FEDomain_Class
USE HDF5File_Class
USE ReallocateUtility
USE AbstractBC_Class

IMPLICIT NONE

CHARACTER(*), PARAMETER :: domainfilename = &
                           "../../Mesh/examples/meshdata/small_mesh.h5"
INTEGER(I4B), PARAMETER :: bottom = 1, top = 3, left = 4, right = 2

TYPE(DirichletBC_) :: obj
TYPE(MeshSelection_) :: boundary
TYPE(ParameterList_) :: param
TYPE(FEDomain_) :: dom
TYPE(HDF5File_) :: domainfile

INTEGER(I4B) :: nsd, tsize, nrow, ncol

INTEGER(I4B), ALLOCATABLE :: nodeNum(:)

REAL(DFP), ALLOCATABLE :: nodalValue(:, :)

CALL FPL_Init; CALL param%Initiate()
CALL domainfile%Initiate(filename=domainfilename, mode="READ")
CALL domainfile%OPEN()
CALL dom%Initiate(domainfile, group="")

nsd = dom%GetNSD()

! We call Set SetAbstractBCParam to set the parameter for boundary condition
CALL SetAbstractBCParam(param=param, prefix=obj%GetPrefix(), &
                        name="ZeroBC", idof=1, nodalValueType=Constant)

! We call SetMeshSelectionParam to set the parameter for boundary condition
CALL SetMeshSelectionParam(param=param, prefix=boundary%GetPrefix(), &
                           isSelectionByMeshID=.TRUE.)

CALL boundary%Initiate(param)

CALL boundary%Add(dom=dom, dim=nsd - 1, meshID=[bottom])
CALL boundary%Set()

CALL boundary%Display("boundary")

CALL obj%Initiate(param=param, boundary=boundary, dom=dom)

CALL obj%Set(constantNodalValue=0.0_DFP)

CALL obj%Display("dbc"//CHAR_LF)

tsize = obj%GetTotalNodeNum()

CALL Reallocate(nodenum, tsize)
CALL Reallocate(nodalvalue, tsize, 1)
CALL obj%Get(nodeNum=nodeNum, nodalValue=nodalValue, nrow=nrow, ncol=ncol)

CALL Display(nodeNum, "nodeNum", advance="NO")
CALL Display(nodalValue, "nodalValue", advance="YES")

CALL domainfile%DEALLOCATE()
CALL dom%DEALLOCATE()
CALL param%DEALLOCATE(); CALL FPL_Finalize
END PROGRAM main
