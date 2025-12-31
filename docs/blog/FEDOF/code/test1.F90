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

CHARACTER(*), PARAMETER :: tomlFileName = "./test1.toml"
LOGICAL(LGT), PARAMETER :: yes = .TRUE., no = .FALSE.

!----------------------------------------------------------------------------
! variables
!----------------------------------------------------------------------------

TYPE(FEDomain_) :: dom
TYPE(ScalarField_) :: u
TYPE(FEDOF_) :: fedof
INTEGER(I4B) :: nrow, ncol

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
!  mesh: Get maximum number of nodes in a cell mesh
!----------------------------------------------------------------------------

! Get the maximum number of nodes in a cell mesh
CALL Display(cellMesh%GetMaxNNE(), "maxNNE in cellMesh: ")

!----------------------------------------------------------------------------
! mesh: Getting the total entities in an element of mesh
!----------------------------------------------------------------------------
con = cellMesh%GetTotalEntities(globalElement=1, islocal=yes)
CALL Display(con, "Total entities for localElement=1: ")
! 4, 0, 4, 1

!----------------------------------------------------------------------------
! mesh: Getting the connectivity of vertices
!----------------------------------------------------------------------------

CALL Display(cellMesh%GetGlobalElemNumber(localElement=1), &
             "Global element number for localElement=1:")
con = cellMesh%GetConnectivity(globalElement=1, islocal=yes, opt="V")
CALL Display(con, "Connectivity of vertices for globalElement=1: ")

!----------------------------------------------------------------------------
!  mesh: Getting the face connectivity
!----------------------------------------------------------------------------

CALL Display(cellMesh%GetTotalFaces(), "Total faces in mesh:")
con = cellMesh%GetConnectivity(globalElement=1, islocal=yes, opt="F")
CALL Display(con, "Connectivity of faces for localElement=1: ")

!----------------------------------------------------------------------------
! mesh: Getting the face orientation
!----------------------------------------------------------------------------

CALL Reallocate(orient, 3, SIZE(con))
CALL cellMesh%GetFaceOrientation(globalElement=1, islocal=yes, ans=orient, &
                                 nrow=nrow, ncol=ncol)
CALL Display(orient(1:nrow, 1:ncol), &
             "Face orientations for localElement=1: ")

!----------------------------------------------------------------------------
! mesh: Getting the node numbers of a face
! To get the node numbers of a face we need describe the globalElement
! and the local face number
!----------------------------------------------------------------------------

con = cellMesh%GetFacetConnectivity(globalElement=1, iface=1, islocal=yes)
CALL Display(con, "Node numbers of face 1 of element 1: ")

con = cellMesh%GetFacetConnectivity(globalElement=1, iface=2, islocal=yes)
CALL Display(con, "Node numbers of face 2 of element 1: ")

con = cellMesh%GetFacetConnectivity(globalElement=1, iface=3, islocal=yes)
CALL Display(con, "Node numbers of face 3 of element 1: ")

con = cellMesh%GetFacetConnectivity(globalElement=1, iface=4, islocal=yes)
CALL Display(con, "Node numbers of face 4 of element 1: ")

!----------------------------------------------------------------------------
! Getting all the connectivity of an element
!----------------------------------------------------------------------------

con = cellMesh%GetConnectivity(globalElement=1, islocal=yes, opt='A')
CALL Display(con, "All Connectivity for localElement=1: ")

!----------------------------------------------------------------------------
! Initiate ScalarField and FEDOF
!----------------------------------------------------------------------------

CALL u%ImportFromToml(tomlName="u", fedof=fedof, dom=dom, &
                      filename=tomlFileName)
CALL fedof%Display(msg="FEDOF info: ")

!----------------------------------------------------------------------------
! Get vertex degree of freedom connectivity
!----------------------------------------------------------------------------

nrow = fedof%GetTotalDOF(globalElement=1, islocal=yes, opt="V")
CALL Display(nrow, "Total Vertex DOF for localElement=1:")

con = fedof%GetConnectivity(globalElement=1, islocal=yes, opt="V")
CALL Display(con, "Vertex DOF connectivity for localElement=1:")

!----------------------------------------------------------------------------
! Get face degree of freedom connectivity
!----------------------------------------------------------------------------

nrow = fedof%GetTotalDOF(globalElement=1, islocal=yes, opt="F")
CALL Display(nrow, "Total Face DOF for localElement=1:")

con = fedof%GetConnectivity(globalElement=1, islocal=yes, opt="F")
CALL Display(con, "Face DOF connectivity for localElement=1:")

!----------------------------------------------------------------------------
! Get cell degree of freedom connectivity
!----------------------------------------------------------------------------

nrow = fedof%GetTotalDOF(globalElement=1, islocal=yes, opt="C")
CALL Display(nrow, "Total Cell DOF for localElement=1:")

con = fedof%GetConnectivity(globalElement=1, islocal=yes, opt="C")
CALL Display(con, "Cell DOF connectivity for localElement=1:")

!----------------------------------------------------------------------------
! Get all degree of freedom connectivity
!----------------------------------------------------------------------------

nrow = fedof%GetTotalDOF(globalElement=1, islocal=yes, opt="A")
CALL Display(nrow, "Total DOF for localElement=1:")

con = fedof%GetConnectivity(globalElement=1, islocal=yes, opt="A")
CALL Display(con, "All DOF connectivity for localElement=1:", full=.TRUE.)

CALL Reallocate(orient, 3, SIZE(con))
CALL cellMesh%GetFaceOrientation(globalElement=1, islocal=yes, ans=orient, &
                                 nrow=nrow, ncol=ncol)

CALL Display(orient(1:nrow, 1:ncol), &
             "Face orientations for localElement=1: ")

!----------------------------------------------------------------------------
! Get all degree of freedom connectivity for local element 3
!----------------------------------------------------------------------------

nrow = fedof%GetTotalDOF(globalElement=3, islocal=yes, opt="A")
CALL Display(nrow, "Total DOF for localElement=3:")

con = fedof%GetConnectivity(globalElement=3, islocal=yes, opt="A")
CALL Display(con, "All DOF connectivity for localElement=3:", full=.TRUE.)

CALL Reallocate(orient, 3, SIZE(con))
CALL cellMesh%GetFaceOrientation(globalElement=3, islocal=yes, ans=orient, &
                                 nrow=nrow, ncol=ncol)

CALL Display(orient(1:nrow, 1:ncol), &
             "Face orientations for localElement=3: ")

END PROGRAM main
