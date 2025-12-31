!> author: Vikas Sharma, Ph. D.
! date: 2025-10-02
! summary: See test1.toml

PROGRAM main
USE GlobalData, ONLY: DFP, LGT, I4B
USE AbstractMesh_Class
USE FEDomain_Class
USE HDF5File_Class
USE ScalarField_Class
USE FEDOF_Class
USE Display_Method
USE ReallocateUtility
USE ExceptionHandler_Class, ONLY: e, EXCEPTION_INFORMATION

IMPLICIT NONE

!----------------------------------------------------------------------------
! parameters
!----------------------------------------------------------------------------

CHARACTER(*), PARAMETER :: tomlFileName = "./test2.toml"
LOGICAL(LGT), PARAMETER :: yes = .TRUE., no = .FALSE.

!----------------------------------------------------------------------------
! variables
!----------------------------------------------------------------------------

TYPE(FEDomain_) :: dom
TYPE(ScalarField_) :: u
TYPE(FEDOF_) :: fedof
INTEGER(I4B) :: nrow, ncol, tsize

!----------------------------------------------------------------------------
! pointer and allocatables
!----------------------------------------------------------------------------
CLASS(AbstractMesh_), POINTER :: cellMesh => NULL(), boundaryMesh => NULL()
INTEGER(I4B), ALLOCATABLE :: con(:), orient(:, :)

!----------------------------------------------------------------------------
! Setting the verbosity
! In Debug mode, there will many messages printed to the screen
! Following code suppress information-exception.
!----------------------------------------------------------------------------

CALL e%setQuietMode(EXCEPTION_INFORMATION, .TRUE.)

!----------------------------------------------------------------------------
! Domain and Mesh Related
! Initiate FEDomain and get cell mesh pointer
! The cell mesh pointer contains the element of highest spatial dimension.
!----------------------------------------------------------------------------

CALL dom%ImportFromToml(tomlName="domain", filename=tomlFileName)
CALL dom%DisplayDomainInfo(msg="DomainInfo: ")

cellMesh => dom%GetMeshPointer()
CALL cellMesh%DisplayMeshInfo(msg="Cell Mesh Info:")

!----------------------------------------------------------------------------
! scalarField and fedof: Initiate ScalarField and FEDOF
!----------------------------------------------------------------------------

CALL u%ImportFromToml(tomlName="u", fedof=fedof, dom=dom, &
                      filename=tomlFileName)
CALL fedof%Display(msg="FEDOF info: ")

!----------------------------------------------------------------------------
! fedof: Get vertex degree of freedom connectivity
!----------------------------------------------------------------------------

nrow = fedof%GetTotalDOF(globalElement=1, islocal=yes, opt="V")
CALL Display(nrow, "Total Vertex DOF for localElement=1:")

con = fedof%GetConnectivity(globalElement=1, islocal=yes, opt="V")
CALL Display(con, "Vertex DOF connectivity for localElement=1:")

!----------------------------------------------------------------------------
! fedof: Get face degree of freedom connectivity
!----------------------------------------------------------------------------

nrow = fedof%GetTotalDOF(globalElement=1, islocal=yes, opt="F")
CALL Display(nrow, "Total Face DOF for localElement=1:")

con = fedof%GetConnectivity(globalElement=1, islocal=yes, opt="F")
CALL Display(con, "Face DOF connectivity for localElement=1:", full=.TRUE., &
             orient="R")

!----------------------------------------------------------------------------
! fedof: Get cell degree of freedom connectivity
!----------------------------------------------------------------------------

nrow = fedof%GetTotalDOF(globalElement=1, islocal=yes, opt="C")
CALL Display(nrow, "Total Cell DOF for localElement=1:")

con = fedof%GetConnectivity(globalElement=1, islocal=yes, opt="C")
CALL Display(con, "Cell DOF connectivity for localElement=1:", full=.TRUE., &
             orient="R")

!----------------------------------------------------------------------------
! fedof: Get all degree of freedom connectivity
!----------------------------------------------------------------------------

nrow = fedof%GetTotalDOF(globalElement=1, islocal=yes, opt="A")
CALL Display(nrow, "Total DOF for localElement=1:")

con = fedof%GetConnectivity(globalElement=1, islocal=yes, opt="A")
CALL Display(con, "All DOF connectivity for localElement=1:", full=.TRUE., &
             orient="R")

!----------------------------------------------------------------------------
! fedof: Get the vertex dof
!----------------------------------------------------------------------------

CALL Reallocate(con, 100, isExpand=.TRUE., expandFactor=2)
CALL cellMesh%GetConnectivity_(globalElement=1, islocal=yes, opt="V", &
                               ans=con, tsize=tsize)
CALL fedof%GetVertexDOF(globalNode=con(1), islocal=.false., ans=con, tsize=tsize)
CALL Display(con(1), "DOF of vertex 1 of element 1:")

!----------------------------------------------------------------------------
! fedof: Get the face dof
!----------------------------------------------------------------------------

CALL Reallocate(con, 100, isExpand=.TRUE., expandFactor=2)
CALL cellMesh%GetConnectivity_(globalElement=1, islocal=yes, opt="F", &
                               ans=con, tsize=tsize)
nrow = con(1)
CALL fedof%GetFaceDOF(globalFace=nrow, islocal=.TRUE., ans=con, &
                      tsize=tsize)
CALL Display(con(1:tsize), "DOF on face: "//ToString(nrow), full=.TRUE., &
             orient="R")

CALL Reallocate(con, 100, isExpand=.TRUE., expandFactor=2)
CALL cellMesh%GetConnectivity_(globalElement=1, islocal=yes, opt="F", &
                               ans=con, tsize=tsize)
nrow = con(3)
CALL fedof%GetFaceDOF(globalFace=nrow, islocal=.TRUE., ans=con, &
                      tsize=tsize)
CALL Display(con(1:tsize), "DOF on face: "//ToString(nrow), full=.TRUE., &
             orient="R")

!----------------------------------------------------------------------------
! fedof: Get the cell dof
!----------------------------------------------------------------------------

CALL Reallocate(con, 100, isExpand=.TRUE., expandFactor=2)
CALL cellMesh%GetConnectivity_(globalElement=1, islocal=yes, opt="C", &
                               ans=con, tsize=tsize)
nrow = con(1)
CALL fedof%GetCellDOF(globalCell=nrow, islocal=.FALSE., ans=con, &
                      tsize=tsize)
CALL Display(con(1:tsize), "DOF in cell: "//ToString(nrow), full=.TRUE., &
             orient="R")

END PROGRAM main
