!> author: Vikas Sharma, Ph. D.
! date: 2025-12-04
! summary: GetSingle
!
! INTERFACE
!   MODULE SUBROUTINE obj_GetMultiple1(obj, indx, VALUE, tsize)
!     CLASS(AbstractNodeField_), INTENT(IN) :: obj
!     INTEGER(I4B), INTENT(IN) :: indx(:)
!     !! index, size(indx) = size(value) = tsize
!     REAL(DFP), INTENT(OUT) :: VALUE(:)
!     !! returned vlaue
!     INTEGER(I4B), INTENT(OUT) :: tsize
!     !! total number of data written in value
!   END SUBROUTINE obj_GetMultiple1
! END INTERFACE
!
! INTERFACE
!   MODULE SUBROUTINE obj_GetMultiple2(obj, istart, iend, stride, VALUE, tsize)
!     CLASS(AbstractNodeField_), INTENT(IN) :: obj
!     INTEGER(I4B), INTENT(IN) :: istart, iend, stride
!     !! index, size(indx) = size(value) = tsize
!     REAL(DFP), INTENT(OUT) :: VALUE(:)
!     !! returned vlaue
!     INTEGER(I4B), INTENT(OUT) :: tsize
!     !! total number of data written in value
!   END SUBROUTINE obj_GetMultiple2
! END INTERFACE
!
! INTERFACE
!   MODULE SUBROUTINE obj_GetMultiple3( &
!     obj, istart, iend, stride, VALUE, istart_value, iend_value, &
!     stride_value, tsize)
!     CLASS(AbstractNodeField_), INTENT(IN) :: obj
!     INTEGER(I4B), INTENT(IN) :: istart, iend, stride
!     !! index, size(indx) = size(value) = tsize
!     REAL(DFP), INTENT(OUT) :: VALUE(:)
!     !! returned vlaue
!     INTEGER(I4B), INTENT(IN) :: istart_value, iend_value, stride_value
!     !! range of values
!     INTEGER(I4B), INTENT(OUT) :: tsize
!     !! total number of data written in value
!   END SUBROUTINE obj_GetMultiple3
! END INTERFACE

PROGRAM main
USE AbstractField_Class
USE FEDomain_Class
USE GlobalData
USE ScalarField_Class
USE ScalarFieldLis_Class
USE FieldFactory, ONLY: ScalarFieldFactory
USE EngineOpt_Class, ONLY: TypeEngineOpt
USE FEDOF_Class
USE Display_Method
USE BaseType, ONLY: math => TypeMathOpt
USE ExceptionHandler_Class, ONLY: e, EXCEPTION_INFORMATION
USE Test_Method
USE ApproxUtility
USE ReallocateUtility, ONLY: Reallocate

IMPLICIT NONE

CHARACTER(*), PARAMETER :: tomlFileName = "./_GetMultiple_test_1.toml", &
                           myName = "main", &
                           modName = "_GetMultiple_test_1.F90", &
                           engine = "LIS_OMP"
TYPE(FEDomain_) :: dom
TYPE(FEDOF_) :: fedof, geofedof
CLASS(ScalarField_), POINTER :: u

CALL e%SetQuietMode(EXCEPTION_INFORMATION, .TRUE.)
CALL dom%ImportFromToml(fileName=tomlFileName, tomlName="domain")

u => ScalarFieldFactory(engine)
CALL u%ImportFromToml( &
  fedof=fedof, geofedof=geofedof, dom=dom, fileName=tomlFileName, &
  tomlName="u")

CALL test1
CALL test2
CALL test3

CONTAINS

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test1
  INTEGER(I4B), ALLOCATABLE :: indx(:)
  INTEGER(I4B) :: tsize
  REAL(DFP), ALLOCATABLE :: found(:), want(:)
  LOGICAL(LGT) :: isok

  indx = [1, 3, 5, 7]
  want = [10.0, 30.0, 50.0, 70.0]
  CALL u%SetMultiple(indx=indx, VALUE=want)
  CALL Reallocate(found, SIZE(indx))
  CALL u%GetMultiple(indx=indx, VALUE=found, tsize=tsize)
  isok = ALL(want.approxeq.found)
  CALL OK(isok, myName//" test1: ")
END SUBROUTINE test1

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test2
  INTEGER(I4B) :: istart, iend, stride, tsize
  REAL(DFP), ALLOCATABLE :: found(:), want(:)
  LOGICAL(LGT) :: isok

  istart = 1
  iend = 7
  stride = 2
  want = [10.0, 30.0, 50.0, 70.0]
  CALL u%SetMultiple(istart=istart, iend=iend, stride=stride, VALUE=want)
  CALL Reallocate(found, SIZE(want))

  CALL u%GetMultiple(istart=istart, iend=iend, stride=stride, VALUE=found, &
                     tsize=tsize)
  isok = ALL(want.approxeq.found)
  CALL OK(isok, myName//" test2: ")
END SUBROUTINE test2

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test3
  INTEGER(I4B) :: istart, iend, stride, tsize
  REAL(DFP), ALLOCATABLE :: found(:), want(:)
  LOGICAL(LGT) :: isok

  istart = 1
  iend = 7
  stride = 2
  want = [10.0, 30.0, 50.0, 70.0]
  CALL u%SetMultiple(istart=istart, iend=iend, stride=stride, VALUE=want)
  CALL Reallocate(found, 4)

  CALL u%GetMultiple( &
    istart=istart, iend=iend, stride=stride, VALUE=found, tsize=tsize, &
    istart_value=1, iend_value=4, stride_value=1)

  isok = ALL(want.approxeq.found)
  CALL OK(isok, myName//" test3: ")
END SUBROUTINE test3

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

END PROGRAM main
