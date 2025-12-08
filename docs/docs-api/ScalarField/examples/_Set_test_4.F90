!> author: Vikas Sharma, Ph. D.
! date: 2024-06-05
! summary: Set4 and Set5, setting all the values using index

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
  INTEGER(I4B) :: iel, ii, tNodes, tElements, tcon, maxCon
  LOGICAL(LGT) :: isok
  REAL(DFP), ALLOCATABLE :: realVec(:), ans(:)
  INTEGER(I4B), ALLOCATABLE :: con(:)

  tNodes = u%SIZE()
  tElements = mesh%GetTotalElements()
  maxCon = fedof%GetMaxTotalConnectivity()

  CALL Reallocate(con, maxCon)
  CALL Reallocate(ans, maxCon)
  CALL Reallocate(realVec, maxCon)
  CALL RANDOM_NUMBER(realVec)

  DO iel = 1, tElements
    CALL fedof%GetConnectivity_(ans=con, tsize=tcon, opt="A", &
                                globalElement=iel, islocal=.TRUE.)
    CALL RANDOM_NUMBER(realVec(1:tcon))
    CALL u%Set(VALUE=realVec(1:tcon), globalNode=con(1:tcon), &
               islocal=.TRUE.)
    CALL u%Get(globalNode=con(1:tcon), islocal=.TRUE., &
               VALUE=ans, tsize=tcon)

    DO ii = 1, tcon
      isok = realVec(ii) .APPROXEQ.ans(ii)
      IF (.NOT. isok) EXIT
    END DO

    IF (.NOT. isok) THEN
      CALL Display("Test Failed in "//testName//": at node "//ToString(ii))
      RETURN
    END IF

  END DO
  CALL OK(.TRUE., testName)
END SUBROUTINE test1

!----------------------------------------------------------------------------
!                                                                      test1
!----------------------------------------------------------------------------

SUBROUTINE test2
  CHARACTER(*), PARAMETER :: testName = "test2()"
  INTEGER(I4B) :: iel, ii, tNodes, tElements, tcon, maxCon
  LOGICAL(LGT) :: isok
  REAL(DFP) :: areal
  REAL(DFP), ALLOCATABLE :: realVec(:), ans(:)
  INTEGER(I4B), ALLOCATABLE :: con(:)

  tNodes = u%SIZE()
  tElements = mesh%GetTotalElements()
  maxCon = fedof%GetMaxTotalConnectivity()

  CALL Reallocate(con, maxCon)
  CALL Reallocate(ans, maxCon)

  DO iel = 1, tElements
    CALL fedof%GetConnectivity_(ans=con, tsize=tcon, opt="A", &
                                globalElement=iel, islocal=.TRUE.)
    CALL RANDOM_NUMBER(areal)
    CALL u%Set(VALUE=areal, globalNode=con(1:tcon), &
               islocal=.TRUE.)
    CALL u%Get(globalNode=con(1:tcon), islocal=.TRUE., &
               VALUE=ans, tsize=tcon)

    DO ii = 1, tcon
      isok = areal.APPROXEQ.ans(ii)
      IF (.NOT. isok) EXIT
    END DO

    IF (.NOT. isok) THEN
      CALL Display("Test Failed in "//testName//": at node "//ToString(ii))
      RETURN
    END IF

  END DO
  CALL OK(.TRUE., testName)
END SUBROUTINE test2

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

END PROGRAM main

