PROGRAM main
USE ReallocateUtility
USE GlobalData
USE Display_Method
USE Test_Method

IMPLICIT NONE

REAL(DFP), ALLOCATABLE :: avec(:)
LOGICAL(LGT) :: isok
CHARACTER(*), PARAMETER :: testname = "Reallocate1"

CALL Reallocate(avec, 10)
isok = SIZE(avec) .EQ. 10
CALL OK(isok, testname)

CALL Reallocate(avec, 20, isExpand=.TRUE., expandFactor=1)
isok = SIZE(avec) .EQ. 20
CALL OK(isok, testname)

CALL Reallocate(avec, 10, isExpand=.TRUE., expandFactor=1)
isok = SIZE(avec) .EQ. 20
CALL OK(isok, testname)
IF (.NOT. isok) THEN
  CALL Display(SIZE(avec), "size of avec:")
END IF

CALL Reallocate(avec, 30, isExpand=.TRUE., expandFactor=2)
isok = SIZE(avec) .EQ. 60
CALL OK(isok, testname)

END PROGRAM main
