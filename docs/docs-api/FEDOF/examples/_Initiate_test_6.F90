!> author: Vikas Sharma, Ph. D.
! date: 2024-05-24
! summary: testing initiate method for Hierarchical bases with different orders

PROGRAM main
USE FEDOF_Class
USE FEDomain_Class
USE AbstractMesh_Class
USE HDF5File_Class
USE Display_Method
USE GlobalData
USE Test_Method
USE ExceptionHandler_Class, ONLY: e, EXCEPTION_INFORMATION
USE ReallocateUtility

IMPLICIT NONE

TYPE(FEDOF_) :: fedof
TYPE(FEDomain_) :: dom
CLASS(AbstractMesh_), POINTER :: meshptr => NULL()
CHARACTER(*), PARAMETER :: &
  filename = "../../FEMesh/examples/meshdata/small_tri3_mesh.h5"
TYPE(HDF5File_) :: meshfile
LOGICAL(LGT) :: isok
INTEGER(I4B) :: found, want, order, ii, iel
INTEGER(I4B), ALLOCATABLE :: cellOrder(:, :), aintvec(:)
CHARACTER(*), PARAMETER :: baseContinuity = "H1", &
                           baseInterpolation = "Heirarchical"

CALL e%setQuietMode(EXCEPTION_INFORMATION, .TRUE.)
CALL meshfile%Initiate(filename, mode="READ")
CALL meshfile%OPEN()
CALL dom%Initiate(meshfile, '')

meshptr => dom%GetMeshPointer()
CALL Reallocate(cellOrder, 2, meshptr%GetTotalCells())

aintvec = [14, 15, 17, 24, 18]

order = 1
cellOrder(1, 1:5) = aintvec
cellOrder(2, 1:5) = order

aintvec = [22, 23, 25, 21]
order = 2
cellOrder(1, 6:9) = aintvec
cellOrder(2, 6:9) = order

aintvec = [19, 20, 26, 16, 13]
order = 3
cellOrder(1, 10:14) = aintvec
cellOrder(2, 10:14) = order

CALL fedof%Initiate(baseContinuity=baseContinuity, &
                    baseInterpolation=baseInterpolation, &
                    order=cellOrder, mesh=meshptr)

found = fedof%GetTotalDOF()
want = 39
isok = found == want
CALL OK(isok, "Total DOF ")
IF (.NOT. isok) CALL Display([found, want], "found, want: ")

CALL dom%DEALLOCATE()
CALL meshfile%DEALLOCATE()

END PROGRAM main
