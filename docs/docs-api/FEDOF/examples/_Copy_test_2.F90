!> author: Vikas Sharma, Ph. D.
! date: 2025-06-06
! summary: This method tests the COPY method for FEDOF class.
! Copy method is same as the assignment opertor.
! Copy method is tested for H1 Lagrange on linear triangular mesh.

PROGRAM main
USE FEDOF_Class
USE FEDomain_Class
USE AbstractMesh_Class
USE HDF5File_Class
USE Display_Method
USE GlobalData
USE Test_Method
USE ExceptionHandler_Class, ONLY: e, EXCEPTION_INFORMATION
USE BaseType, ONLY: TypeQuadratureOpt

IMPLICIT NONE

TYPE(FEDOF_) :: obj, obj2
TYPE(FEDomain_) :: dom
CLASS(AbstractMesh_), POINTER :: meshptr => NULL()

TYPE(HDF5File_) :: meshfile
INTEGER(I4B) :: found, want

CHARACTER(*), PARAMETER :: &
  filename = "../../FEMesh/examples/meshdata/small_tri3_mesh.h5", &
  baseInterpolation = "Lagrange", &
  baseContinuity = "H1"

INTEGER(I4B), PARAMETER :: ipType = TypeQuadratureOpt%equidistance

CALL e%setQuietMode(EXCEPTION_INFORMATION, .TRUE.)
CALL meshfile%Initiate(filename, mode="READ")
CALL meshfile%OPEN()
CALL dom%Initiate(meshfile, '')

meshptr => dom%GetMeshPointer()

CALL obj%Initiate(baseContinuity=baseContinuity, ipType=ipType, &
                  baseInterpolation=baseInterpolation, order=1, mesh=meshptr)
!CALL fedof%Display("FEDOF:")
CALL obj2%copy(obj)

found = obj2%GetTotalDOF()
want = meshptr%GetTotalNodes()
CALL OK(found == want, "Total DOF (order=1): ")

CALL obj%Initiate(baseContinuity=baseContinuity, ipType=ipType, &
                  baseInterpolation=baseInterpolation, order=2, mesh=meshptr)
obj2 = obj
found = obj2%GetTotalDOF()
want = meshptr%GetTotalNodes() + meshptr%GetTotalFaces()
CALL OK(found == want, "Total DOF (order=2): ")

CALL obj%Initiate(baseContinuity=baseContinuity, ipType=ipType, &
                  baseInterpolation=baseInterpolation, order=3, mesh=meshptr)
CALL obj2%Copy(obj)

found = obj2%GetTotalDOF()
want = meshptr%GetTotalNodes() + 2*meshptr%GetTotalFaces() + meshptr%GetTotalCells()
CALL OK(found == want, "Total DOF (order=3): ")

CALL obj%Initiate(baseContinuity=baseContinuity, ipType=ipType, &
                  baseInterpolation=baseInterpolation, order=4, mesh=meshptr)
obj2 = obj

found = obj2%GetTotalDOF()
want = meshptr%GetTotalNodes() + 3*meshptr%GetTotalFaces() + 3*meshptr%GetTotalCells()
CALL OK(found == want, "Total DOF (order=4): ")

!CALL dom%Display("domain:")
CALL dom%DEALLOCATE()
CALL meshfile%DEALLOCATE()

END PROGRAM main
