PROGRAM main
USE FEDOF_Class
USE FEDomain_Class
USE AbstractMesh_Class
USE HDF5File_Class
USE Display_Method
USE GlobalData
USE Test_Method
USE ExceptionHandler_Class, ONLY: e, EXCEPTION_INFORMATION

IMPLICIT NONE

TYPE(FEDOF_) :: obj
TYPE(FEDomain_) :: dom
CLASS(AbstractMesh_), POINTER :: meshptr => NULL()
CHARACTER(*), PARAMETER :: filename = &
                           "../../Mesh/examples/meshdata/small_mesh.h5"
TYPE(HDF5File_) :: meshfile
INTEGER(I4B) :: found, want
CHARACTER(:), ALLOCATABLE :: testname

INTEGER(I4B) :: cellOrder(3), faceOrder(3, 100), edgeOrder(100), tfaceorient(2), &
                cellOrient(3), faceOrient(3, 100), edgeOrient(100), &
globalElement, tedgeorient, tcellorder, tfaceorder, tedgeorder, tcellorient, &
                telements

CALL e%setQuietMode(EXCEPTION_INFORMATION, .TRUE.)
CALL meshfile%Initiate(filename, mode="READ")
CALL meshfile%OPEN()
CALL dom%Initiate(meshfile, '')

meshptr => dom%GetMeshPointer()

CALL obj%Initiate(baseContinuity="H1", baseInterpolation="Heirarchical", &
                  order=1, mesh=meshptr)
testname = "H1 Hierarchical order=1"

! CALL obj%Display(testname)

telements = meshptr%GetTotalElements()

DO globalElement = 1, telements

  ! globalelement = 1
  CALL obj%GetOrders(cellorder=cellorder, faceorder=faceorder, &
          edgeorder=edgeorder, cellorient=cellorient, faceorient=faceorient, &
        edgeorient=edgeorient, tcellorder=tcellorder, tfaceorder=tfaceorder, &
    tedgeorder=tedgeorder, tcellorient=tcellorient, tfaceorient=tfaceorient, &
         tedgeorient=tedgeorient, globalelement=globalelement, islocal=.TRUE.)

  ! CALL Display(cellorder(1:tcellorder), "cellorder: ")
  ! CALL Display(faceorder(1:3, 1:tfaceorder), "faceorder: ")
  ! CALL Display(edgeorder(1:tedgeorder), "edgeOrder: ")
  ! CALL Display(cellOrient(1:tcellorient), "cellOrient: ")
  CALL Display(globalelement, "globalelements: ")
  CALL Display(faceOrient(1:tfaceorient(1), 1:tfaceorient(2)), "faceOrient:")

END DO

!CALL dom%Display("domain:")
CALL dom%DEALLOCATE()
CALL meshfile%DEALLOCATE()

END PROGRAM main

! total nodes = 25
! total elements = 16
! total faces = 40
! total edges = 0
