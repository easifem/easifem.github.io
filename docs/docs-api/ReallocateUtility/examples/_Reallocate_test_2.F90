PROGRAM main
USE ReallocateUtility
USE GlobalData
USE Display_Method
USE Test_Method

IMPLICIT NONE

REAL(DFP), ALLOCATABLE :: val(:, :)
LOGICAL(LGT) :: isok
CHARACTER(*), PARAMETER :: testname = "Reallocate2"

CALL Reallocate(val, 10, 4)
isok = SIZE(val, 1) .EQ. 10 .AND. SIZE(val, 2) .EQ. 4
CALL OK(isok, testname)

CALL Reallocate(val, 20, 4, isExpand=.TRUE., expandFactor=1)
isok = SIZE(val, 1) .EQ. 20 .AND. SIZE(val, 2) .EQ. 4
CALL OK(isok, testname)

CALL Reallocate(val, 10, 4, isExpand=.TRUE., expandFactor=1)
isok = SIZE(val, 1) .EQ. 20 .AND. SIZE(val, 2) .EQ. 4
CALL OK(isok, testname)

CALL Reallocate(val, 30, 4, isExpand=.TRUE., expandFactor=2)
isok = SIZE(val, 1) .EQ. 60 .AND. SIZE(val, 2) .EQ. 4
CALL OK(isok, testname)

CALL Reallocate(val, 30, 8, isExpand=.TRUE., expandFactor=2)
isok = SIZE(val, 1) .EQ. 60 .AND. SIZE(val, 2) .EQ. 16
CALL OK(isok, testname)

END PROGRAM main
