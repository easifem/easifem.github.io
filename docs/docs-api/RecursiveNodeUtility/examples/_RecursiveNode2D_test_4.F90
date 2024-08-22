PROGRAM main
USE GlobalData
USE RecursiveNodesUtility
USE Display_Method
USE String_class
USE Test_Method
USE ReallocateUtility
USE ApproxUtility

IMPLICIT NONE

REAL(DFP), ALLOCATABLE :: found(:, :), want(:, :)
INTEGER(I4B) :: ipType, order, nrow, ncol
CHARACTER(*), PARAMETER :: test_name = "RecursiveNode2D  test 4"
CHARACTER(20) :: domain
LOGICAL(LGT) :: isok

order = 3; ipType = Equidistance; domain = "UNIT"
CALL test_me

order = 6; ipType = Equidistance; domain = "UNIT"
CALL test_me

order = 3; ipType = Equidistance; domain = "BIUNIT"
CALL test_me

order = 6; ipType = Equidistance; domain = "BIUNIT"
CALL test_me

order = 3; ipType = Equidistance; domain = "BARYCENTRIC"
CALL test_me
!
! order = 6; ipType = Equidistance; domain = "BARY"
! CALL test_me

CONTAINS
SUBROUTINE test_me

  want = RecursiveNode2D(order=order, ipType=ipType, &
                         domain=domain)
  ! CALL Display(SHAPE(want), "shape(want):")

  CALL Reallocate(found, 4, SIZE(want, 2))
  CALL RecursiveNode2D_(order=order, ipType=ipType, &
                        domain=domain, ans=found, nrow=nrow, ncol=ncol)

  isok = nrow == SIZE(want, 1)
  CALL Ok(isok, test_name)
  IF (.NOT. isok) THEN
    CALL Display(nrow, "nrow: ")
    CALL Display(SIZE(want, 1), "want: ")
    CALL Display(want, "want: ")
    RETURN
  END IF

  isok = ncol == SIZE(want, 2)
  CALL OK(isok, test_name)
  IF (.NOT. isok) THEN
    CALL Display(ncol, "ncol: ")
    RETURN
  END IF

  isok = ALL(found(1:nrow, 1:ncol) .approxeq.want)
  CALL OK(isok, test_name)
  IF (.NOT. isok) THEN
    CALL Display(found(1:nrow, 1:ncol), "found:")
    CALL Display(want, "want:")
    RETURN
  END IF

END SUBROUTINE test_me

END PROGRAM main
