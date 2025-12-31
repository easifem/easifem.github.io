!> author: Vikas Sharma, Ph. D.
! date: 2024-06-05
! summary: Set3, setting all the values using a vector

PROGRAM main
USE AbstractField_Class
USE FEDomain_Class
USE AbstractMesh_Class
USE GlobalData
USE ScalarField_Class
USE FEDOF_Class
USE Display_Method
USE ApproxUtility
USE Test_Method
USE ReallocateUtility
USE ExceptionHandler_Class, ONLY: e, EXCEPTION_INFORMATION

IMPLICIT NONE

CHARACTER(*), PARAMETER :: tomlFileName = "./Set1.toml", &
                           myName = "main", &
                           modName = "_ImportFromToml_test_1.F90"

TYPE(FEDomain_) :: dom
CLASS(AbstractMesh_), POINTER :: mesh
TYPE(FEDOF_) :: fedof, geofedof
TYPE(ScalarField_) :: u

CALL e%SetQuietMode(EXCEPTION_INFORMATION, .TRUE.)
CALL dom%ImportFromToml(fileName=tomlFileName, tomlName="domain")
CALL u%ImportFromToml(fedof=fedof, geofedof=geofedof, dom=dom, &
                      fileName=tomlFileName, tomlName="u")

mesh => dom%GetMeshPointer()

CALL test1
CALL test2

CONTAINS

!----------------------------------------------------------------------------
!                                                                      test1
!----------------------------------------------------------------------------

SUBROUTINE test1
  CHARACTER(*), PARAMETER :: testName = "test1()"
  INTEGER(I4B) :: ii, tNodes
  REAL(DFP) :: areal, ans
  LOGICAL(LGT) :: isok
  REAL(DFP), ALLOCATABLE :: realVec(:)

  tNodes = u%SIZE()
  CALL Reallocate(realVec, tNodes)
  CALL RANDOM_NUMBER(realVec)

  CALL u%Set(VALUE=realVec)

  DO ii = 1, tNodes
    CALL u%Get(globalNode=ii, islocal=.TRUE., VALUE=ans)
    areal = realVec(ii)
    isok = areal.APPROXEQ.ans
    IF (.NOT. isok) THEN
      CALL Display("Test Failed in "//testName//": at node "//ToString(ii))
      RETURN
    END IF
  END DO
  CALL OK(.TRUE., testName)
END SUBROUTINE test1

!----------------------------------------------------------------------------
!                                                                      test2
!----------------------------------------------------------------------------

SUBROUTINE test2
  CHARACTER(*), PARAMETER :: testName = "test2()"
  INTEGER(I4B) :: ii, tNodes
  REAL(DFP) :: areal, ans, scale
  LOGICAL(LGT) :: isok
  REAL(DFP), ALLOCATABLE :: realVec(:)

  tNodes = u%SIZE()
  CALL Reallocate(realVec, tNodes)
  CALL RANDOM_NUMBER(realVec)
  CALL u%Set(VALUE=0.0_DFP)

  scale = 2.0_DFP
  CALL u%Set(VALUE=realVec, scale=scale, addContribution=.TRUE.)

  DO ii = 1, tNodes
    CALL u%Get(globalNode=ii, islocal=.TRUE., VALUE=ans)
    areal = realVec(ii) * scale
    isok = areal.APPROXEQ.ans
    IF (.NOT. isok) THEN
      CALL Display("Test Failed in "//testName//": at node "//ToString(ii))
      RETURN
    END IF
  END DO
  CALL OK(.TRUE., testName)
END SUBROUTINE test2

END PROGRAM main

