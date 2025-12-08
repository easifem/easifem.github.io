!> author: Vikas Sharma, Ph. D.
! date: 2025-12-04
! summary: SetAll
!
! INTERFACE
!   MODULE SUBROUTINE obj_SetMultiple1( &
!     obj, indx, VALUE, scale, addContribution)
!     CLASS(ScalarFieldLis_), INTENT(INOUT) :: obj
!     INTEGER(I4B), INTENT(IN) :: indx(:)
!     !! index, size(indx) = size(value) = tsize
!     REAL(DFP), INTENT(IN) :: VALUE(:)
!     !! values which will be use din obj=value
!     REAL(DFP), OPTIONAL, INTENT(IN) :: scale
!     !! scale
!     LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
!     !! add or set
!   END SUBROUTINE obj_SetMultiple1
! END INTERFACE
!
! INTERFACE
!   MODULE SUBROUTINE obj_SetMultiple2( &
!     obj, istart, iend, stride, VALUE, scale, addContribution)
!     CLASS(ScalarFieldLis_), INTENT(INOUT) :: obj
!     INTEGER(I4B), INTENT(IN) :: istart, iend, stride
!     !! index, size(indx) = size(value) = tsize
!     REAL(DFP), INTENT(IN) :: VALUE(:)
!     !! obj = value
!     REAL(DFP), OPTIONAL, INTENT(IN) :: scale
!     !! scale
!     LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
!     !! add or set
!   END SUBROUTINE obj_SetMultiple2
! END INTERFACE
!
! INTERFACE
!   MODULE SUBROUTINE obj_SetMultiple3( &
!     obj, istart, iend, stride, VALUE, istart_value, iend_value, &
!     stride_value, scale, addContribution)
!     CLASS(ScalarFieldLis_), INTENT(INOUT) :: obj
!     INTEGER(I4B), INTENT(IN) :: istart, iend, stride
!     !! index, size(indx) = size(value) = tsize
!     REAL(DFP), INTENT(IN) :: VALUE(:)
!     !! returned vlaue
!     INTEGER(I4B), INTENT(IN) :: istart_value, iend_value, stride_value
!     !! range of values
!     REAL(DFP), OPTIONAL, INTENT(IN) :: scale
!     !! scale
!     LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
!     !! add or set
!   END SUBROUTINE obj_SetMultiple3
! END INTERFACE
!
! INTERFACE
!   MODULE SUBROUTINE obj_SetMultiple4( &
!     obj, istart, iend, stride, VALUE, scale, addContribution)
!     CLASS(ScalarFieldLis_), INTENT(INOUT) :: obj
!     INTEGER(I4B), INTENT(IN) :: istart, iend, stride
!     !! index, size(indx) = size(value) = tsize
!     REAL(DFP), INTENT(IN) :: VALUE
!     !! obj = value
!     REAL(DFP), OPTIONAL, INTENT(IN) :: scale
!     !! scale
!     LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
!     !! add or set
!   END SUBROUTINE obj_SetMultiple4
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
USE GridPointUtility, ONLY: Linspace

IMPLICIT NONE

CHARACTER(*), PARAMETER :: tomlFileName = "./_SetMultiple_test_1.toml", &
                           myName = "main", &
                           modName = "_Initiate_test_1.F90", &
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
CALL test4

CONTAINS

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test1
  INTEGER(I4B), ALLOCATABLE :: indx(:)
  REAL(DFP), ALLOCATABLE :: VALUE(:)
  indx = [1, 3, 5, 7]
  VALUE = [10.0, 30.0, 50.0, 70.0]
  CALL u%SetMultiple(indx=indx, VALUE=VALUE)
  CALL u%Display("test 1")
END SUBROUTINE test1

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test2
  INTEGER(I4B) :: istart, iend, stride
  REAL(DFP), ALLOCATABLE :: VALUE(:)
  istart = 1
  iend = 7
  stride = 2
  VALUE = [10.0, 30.0, 50.0, 70.0]
  CALL u%SetMultiple(istart=istart, iend=iend, stride=stride, VALUE=VALUE)
  CALL u%Display("test 2")
END SUBROUTINE test2

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test3
  INTEGER(I4B) :: istart, iend, stride
  REAL(DFP), ALLOCATABLE :: VALUE(:)
  istart = 1
  iend = 7
  stride = 2
  VALUE = Linspace(1.0_DFP, 10.0_DFP, 10)
  CALL u%SetMultiple( &
    istart=istart, iend=iend, stride=stride, VALUE=VALUE, istart_value=1, &
    iend_value=7, stride_value=2)
  CALL u%Display("test 3")
END SUBROUTINE test3

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test4
  INTEGER(I4B) :: istart, iend, stride
  REAL(DFP) :: VALUE
  istart = 1
  iend = 7
  stride = 2
  VALUE = 10.0
  CALL u%SetMultiple(istart=istart, iend=iend, stride=stride, VALUE=VALUE)
  CALL u%Display("test 4")
END SUBROUTINE test4

END PROGRAM main
