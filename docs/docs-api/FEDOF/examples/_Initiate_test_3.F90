!> author: Vikas Sharma, Ph. D.
! date: 2025-06-06
! summary:  Initiate fedof with H1 and Heirarchical bases, order is a vector.

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
  filename = "../../FEMesh/examples/meshdata/small_tri3_mesh.h5", &
  baseInterpolation = "Hierarchical", &
  baseContinuity = "H1"
TYPE(HDF5File_) :: meshfile
LOGICAL(LGT) :: isok
INTEGER(I4B) :: found, want, order, ii, iel
INTEGER(I4B), ALLOCATABLE :: cellOrder(:), aintvec(:)

CALL e%setQuietMode(EXCEPTION_INFORMATION, .TRUE.)
CALL meshfile%Initiate(filename, mode="READ")
CALL meshfile%OPEN()
CALL dom%Initiate(meshfile, '')

meshptr => dom%GetMeshPointer()
CALL Reallocate(cellOrder, meshptr%GetTotalCells())

aintvec = [14, 15, 17, 24, 18]
order = 1
DO iel = 1, SIZE(aintvec)
  isok = meshptr%IsElementPresent(aintvec(iel))
  IF (.NOT. isok) CYCLE

  ii = meshptr%GetLocalElemNumber(aintvec(iel))
  cellOrder(ii) = order
END DO

aintvec = [22, 23, 25, 21]
order = 2
DO iel = 1, SIZE(aintvec)
  isok = meshptr%IsElementPresent(aintvec(iel))
  IF (.NOT. isok) CYCLE

  ii = meshptr%GetLocalElemNumber(aintvec(iel))
  cellOrder(ii) = order
END DO

aintvec = [19, 20, 26, 16, 13]
order = 3
DO iel = 1, SIZE(aintvec)
  isok = meshptr%IsElementPresent(aintvec(iel))
  IF (.NOT. isok) CYCLE

  ii = meshptr%GetLocalElemNumber(aintvec(iel))
  cellOrder(ii) = order
END DO

CALL fedof%Initiate(baseContinuity=baseContinuity, &
                    baseInterpolation=baseInterpolation, &
                    order=cellOrder, mesh=meshptr, islocal=.TRUE.)
found = fedof%GetTotalDOF()
want = 39
isok = found == want
CALL OK(isok, "Total DOF ")
IF (.NOT. isok) CALL Display([found, want], "found, want: ")

CALL dom%DEALLOCATE()
CALL meshfile%DEALLOCATE()

END PROGRAM main
