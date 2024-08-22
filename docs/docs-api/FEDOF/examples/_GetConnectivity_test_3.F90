PROGRAM main
USE FEDOF_Class
USE FEDomain_Class
USE AbstractMesh_Class
USE HDF5File_Class
USE Display_Method
USE GlobalData
USE Test_Method
USE ExceptionHandler_Class, ONLY: e, EXCEPTION_INFORMATION
USE AppendUtility
USE ArangeUtility

IMPLICIT NONE

CHARACTER(*), PARAMETER :: filename = &
                          "../../Mesh/examples/meshdata/small_tri6_mesh.h5", &
                           baseContinuity = "H1", &
                           baseInterpolation = "Lagrange", &
                           test_name = "GetConnectivity (order=2): "

TYPE(FEDOF_) :: fedof
TYPE(FEDomain_) :: dom
CLASS(AbstractMesh_), POINTER :: meshptr => NULL()
TYPE(HDF5File_) :: meshfile
INTEGER(I4B), ALLOCATABLE :: found(:), want(:)
LOGICAL(LGT) :: isok
INTEGER(I4B), PARAMETER :: order = 2

CALL e%setQuietMode(EXCEPTION_INFORMATION, .TRUE.)

CALL meshfile%Initiate(filename, mode="READ")
CALL meshfile%OPEN()
CALL dom%Initiate(meshfile, '')

meshptr => dom%GetMeshPointer()

CALL fedof%Initiate(baseContinuity=baseContinuity, &
                    baseInterpolation=baseInterpolation, &
                    order=order, mesh=meshptr)

found = fedof%GetConnectivity(opt="A", globalElement=1, islocal=.TRUE.)

want = meshptr%GetLocalNodenumber(globalNode=meshptr%GetConnectivity( &
                                  globalElement=1, islocal=.TRUE.), &
                                  islocal=.FALSE.)
isok = ALL(found == want)
CALL OK(isok, test_name)

CALL dom%DEALLOCATE()
CALL meshfile%DEALLOCATE()

END PROGRAM main
