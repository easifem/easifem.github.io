!> author: Vikas Sharma, Ph. D.
! date: 2025-10-23
! summary: Study of DirichletBC class

PROGRAM main
USE GlobalData, ONLY: DFP, I4B, LGT
USE ExceptionHandler_Class, ONLY: e, EXCEPTION_INFORMATION
USE DirichletBC_Class
USE FEDomain_Class
USE AbstractMesh_Class
USE FEDOF_Class
USE ScalarField_Class
USE Display_Method
USE ReallocateUtility

IMPLICIT NONE

!----------------------------------------------------------------------------
! Parameters
!----------------------------------------------------------------------------
CHARACTER(*), PARAMETER :: tomlFileName = "./test4.toml"

!----------------------------------------------------------------------------
! Types and variables
!----------------------------------------------------------------------------
TYPE(DirichletBC_) :: obj
TYPE(FEDomain_) :: dom
TYPE(ScalarField_) :: u
TYPE(FEDOF_) :: fedof, geofedof
INTEGER(I4B) :: tsize, iNodeOnNode, iNodeOnEdge, iNodeOnFace, nrow, ncol

!----------------------------------------------------------------------------
! Allocatables and pointers
!----------------------------------------------------------------------------
CLASS(AbstractMesh_), POINTER :: cellMesh, boundaryMesh
INTEGER(I4B), ALLOCATABLE :: nodeNum(:)
REAL(DFP), ALLOCATABLE :: nodalValue(:, :)

!----------------------------------------------------------------------------
! Setting the verbosity
! In Debug mode, there will many messages printed to the screen
! Following code suppress information-exception.
!----------------------------------------------------------------------------

! CALL e%setQuietMode(EXCEPTION_INFORMATION, .TRUE.)

!----------------------------------------------------------------------------
! Domain: Initiate FEDomain and print info
!----------------------------------------------------------------------------

CALL dom%ImportFromToml(tomlName="domain", filename=tomlFileName)
! CALL dom%DisplayDomainInfo(msg="DomainInfo: ")

!----------------------------------------------------------------------------
! ScalarField and FEDOF: Initiate scalarField and fedof
!----------------------------------------------------------------------------

CALL u%ImportFromToml(tomlName="u", fedof=fedof, geofedof=geofedof, dom=dom, &
                      filename=tomlFileName)
! CALL fedof%Display(msg="FEDOF info: ")

!----------------------------------------------------------------------------
! DirichletBC: Import from toml
!----------------------------------------------------------------------------

CALL obj%ImportFromToml(filename=tomlFileName, dom=dom, tomlName="dbc")
! CALL obj%Display("DirichletBC Info: ")

!----------------------------------------------------------------------------
! DirichletBC: Get the total node numbers
!----------------------------------------------------------------------------
tsize = obj%GetTotalNodeNum(fedof=fedof)
CALL Display(tsize, "Total Node Num: ")

!----------------------------------------------------------------------------
! DirichletBC: Get the node numbers
!----------------------------------------------------------------------------

CALL Reallocate(nodeNum, tsize, isExpand=.TRUE., expandFactor=2)
CALL obj%Get(fedof=fedof, nodeNum=nodeNum, tsize=tsize, &
             iNodeOnNode=iNodeOnNode, iNodeOnEdge=iNodeOnEdge, &
             iNodeOnFace=iNodeOnFace)
CALL Display(tsize, "tsize = ")
CALL Display(nodeNum(1:tsize), "nodeNum", full=.TRUE., orient="ROW")
CALL Display(iNodeOnNode, "iNodeOnNode = ")
CALL Display(iNodeOnFace, "iNodeOnFace = ")
CALL Display(iNodeOnEdge, "iNodeOnEdge = ")

!----------------------------------------------------------------------------
! DirichletBC: Get the nodal values
!----------------------------------------------------------------------------

CALL Reallocate(nodalValue, tsize, 2, isExpand=.TRUE., expandFactor=2)
CALL Display(SHAPE(nodalValue), "shape(nodalValue) before Get: ")
nrow = 0; ncol = 0
CALL obj%Get(fedof=fedof, geofedof=geofedof, nodeNum=nodeNum, &
             nodalValue=nodalValue, nrow=nrow, ncol=ncol)

CALL Display(nodeNum(1:nrow), "nodeNum(1:nrow): ", &
             full=.TRUE., advance="NO")
CALL Display(nodalValue(1:nrow, 1:ncol), "nodalValue: ", &
             full=.TRUE.)
CALL Display([nrow, ncol], "[nrow, ncol]: ")

!----------------------------------------------------------------------------
! Cleanup
!----------------------------------------------------------------------------

CALL dom%DEALLOCATE()

END PROGRAM main
