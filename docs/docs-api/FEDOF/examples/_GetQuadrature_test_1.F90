! Get quadrature1 tested
!! obj_GetQuadraturePoints1(obj, quad, globalElement, quadratureType, order, alpha, beta, lambda, islocal)

PROGRAM main
USE FEDOF_Class
USE FEDomain_Class
USE AbstractMesh_Class
USE HDF5File_Class
USE Display_Method
USE GlobalData
USE Test_Method
USE ExceptionHandler_Class, ONLY: e, EXCEPTION_INFORMATION
USE BaseType, ONLY: QuadraturePoint_, TypeQuadratureOpt
USE QuadraturePoint_Method

IMPLICIT NONE

TYPE(FEDOF_) :: obj
TYPE(FEDomain_) :: dom
CLASS(AbstractMesh_), POINTER :: meshptr => NULL()
CHARACTER(*), PARAMETER :: filename = &
                           "../../Mesh/examples/meshdata/small_mesh.h5"
TYPE(HDF5File_) :: meshfile
TYPE(QuadraturePoint_) :: quad

CHARACTER(:), ALLOCATABLE :: testname

INTEGER(I4B) :: globalElement, telements, order

CALL e%setQuietMode(EXCEPTION_INFORMATION, .TRUE.)
CALL meshfile%Initiate(filename, mode="READ")
CALL meshfile%OPEN()
CALL dom%Initiate(meshfile, '')

meshptr => dom%GetMeshPointer()

CALL obj%Initiate(baseContinuity="H1", baseInterpolation="Hierarchical", &
                  order=1, mesh=meshptr)
testname = "H1 Hierarchical order=1"

! CALL obj%Display(testname)

! telements = meshptr%GetTotalElements()
telements = 1
globalElement = 1
order = 2

! DO globalElement = 1, telements

CALL obj%GetQuadraturePoints(quad=quad, globalElement=globalElement, &
                             quadratureType=TypeQuadratureOpt%GaussLegendre, &
                             order=order, islocal=.TRUE.)

! CALL Display(cellorder(1:tcellorder), "cellorder: ")
! CALL Display(faceorder(1:3, 1:tfaceorder), "faceorder: ")
! CALL Display(edgeorder(1:tedgeorder), "edgeOrder: ")
! CALL Display(cellOrient(1:tcellorient), "cellOrient: ")

CALL Display(globalelement, "globalelements: ")
CALL Display(order, "order: ")
CALL Display(quad, "quad:")

! END DO

!CALL dom%Display("domain:")
CALL dom%DEALLOCATE()
CALL meshfile%DEALLOCATE()

END PROGRAM main

! total nodes = 25
! total elements = 16
! total faces = 40
! total edges = 0
