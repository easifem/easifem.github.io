!> author: Vikas Sharma, Ph. D.
! date: 2025-07-24
! summary:  This example demonstrates the usage of `getElemNum()` method.

PROGRAM main
USE GlobalData, ONLY: I4B, DFP, LGT
USE MeshSelection_Class
USE FEDomain_Class
USE HDF5File_Class
USE Display_Method
USE ReallocateUtility
USE ExceptionHandler_Class, ONLY: e, EXCEPTION_INFORMATION
USE ArangeUtility, ONLY: Arange
USE Test_Method
USE SortUtility, ONLY: Sort
USE AppendUtility, ONLY: OPERATOR(.append.)

IMPLICIT NONE

CHARACTER(*), PARAMETER :: modName = __FILE_NAME__
CHARACTER(*), PARAMETER :: &
  meshfilename = "../../FEMesh/examples/meshdata/small_tri3_mesh.h5"
TYPE(MeshSelection_) :: obj
TYPE(FEDomain_) :: dom
TYPE(HDF5File_) :: meshfile
INTEGER(I4B), ALLOCATABLE :: found(:), want(:)
INTEGER(I4B) :: telem, tsize
LOGICAL(LGT) :: isok

CALL e%setQuietMode(EXCEPTION_INFORMATION, .TRUE.)
CALL meshfile%Initiate(filename=meshfilename, mode="READ")
CALL meshfile%OPEN()
CALL dom%Initiate(meshfile, '')

CALL obj%Initiate(isSelectionByMeshID=.TRUE.)

CALL obj%Add(dim=2, meshID=[1])
CALL obj%Add(dim=1, meshID=[1, 2])
CALL obj%Set()

CALL test1
CALL test2
CALL test3

CALL obj%DEALLOCATE()

CONTAINS

!----------------------------------------------------------------------------
!                                                                      test1
!----------------------------------------------------------------------------

SUBROUTINE test1
  CHARACTER(*), PARAMETER :: myName = "test1"

  CALL e%RaiseInformation(modName//'::'//myName//' - '// &
                          '[START] ')

  telem = obj%GetTotalElemNum(dom=dom, dim=2)

  CALL Reallocate(found, telem)
  CALL obj%GetElemNum(dom=dom, dim=2, ans=found, tsize=tsize)

  want = Arange(13, 26)
  isok = ALL(found == want)
  CALL OK(isok, "GetElemNum for dim=2 with dom")
  IF (isok) THEN
    CALL Display(telem, "       GetTotalElemNum for dim=2 with dom: ")
  END IF
  ! CALL Display(found, "getElemNum =", orient='row')

  CALL e%RaiseInformation(modName//'::'//myName//' - '// &
                          '[END] ')
END SUBROUTINE test1

!----------------------------------------------------------------------------
!                                                                       test2
!----------------------------------------------------------------------------

SUBROUTINE test2
  CHARACTER(*), PARAMETER :: myName = "test2"

  CALL e%RaiseInformation(modName//'::'//myName//' - '// &
                          '[START] ')

  telem = obj%GetTotalElemNum(dom=dom, dim=1)
  CALL Reallocate(found, telem)
  CALL obj%GetElemNum(dom=dom, dim=1, ans=found, tsize=tsize)

  want = Arange(5, 8)
  isok = ALL(found == want)
  CALL OK(isok, "GetElemNum for dim=1 with dom")
  ! CALL Display(found, "getElemNum =", orient='row')
  IF (isok) THEN
    CALL Display(telem, "       GetTotalElemNum for dim=1 with dom: ")
  END IF

  CALL e%RaiseInformation(modName//'::'//myName//' - '// &
                          '[END] ')
END SUBROUTINE test2

!----------------------------------------------------------------------------
!                                                                      test3
!----------------------------------------------------------------------------

SUBROUTINE test3
  CHARACTER(*), PARAMETER :: myName = "test3"

  CALL e%RaiseInformation(modName//'::'//myName//' - '// &
                          '[START] ')

  telem = obj%GetTotalElemNum(dom=dom)
  isok = telem .EQ. 18
  CALL OK(isok, "GetTotalElemNum with dom: ")

  CALL Reallocate(found, telem)
  CALL obj%GetElemNum(dom=dom, ans=found, tsize=tsize)

  want = Sort(Arange(5, 8) .append.Arange(13, 26))
  isok = ALL(found == want)
  CALL OK(isok, "GetElemNum with dom: ")

  CALL e%RaiseInformation(modName//'::'//myName//' - '// &
                          '[END] ')
END SUBROUTINE test3

END PROGRAM main
