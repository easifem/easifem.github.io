PROGRAM main
USE ReallocateUtility
USE GlobalData
USE Display_Method
USE Test_Method

IMPLICIT NONE

REAL(DFP), ALLOCATABLE :: val(:, :, :)
LOGICAL(LGT) :: isok
CHARACTER(*), PARAMETER :: testname = "Reallocate3"

CALL Reallocate(val, 2, 3, 4)
isok = SIZE(val, 1) .EQ. 2 .AND. SIZE(val, 2) .EQ. 3 .AND. SIZE(val, 3) .EQ. 4
CALL OK(isok, testname)

CALL Reallocate(val, 2, 3, 8, isExpand=.TRUE., expandFactor=1)
isok = SIZE(val, 1) .EQ. 2 .AND. SIZE(val, 2) .EQ. 3 .AND. SIZE(val, 3) .EQ. 8
CALL OK(isok, testname)

CALL Reallocate(val, 2, 3, 8, isExpand=.TRUE., expandFactor=2)
isok = SIZE(val, 1) .EQ. 2 .AND. SIZE(val, 2) .EQ. 3 .AND. SIZE(val, 3) .EQ. 8
CALL OK(isok, testname)

CALL Reallocate(val, 2, 3, 4, isExpand=.TRUE., expandFactor=2)
isok = SIZE(val, 1) .EQ. 2 .AND. SIZE(val, 2) .EQ. 3 .AND. SIZE(val, 3) .EQ. 8
CALL OK(isok, testname)

CALL Reallocate(val, 4, 6, 4, isExpand=.TRUE., expandFactor=2)
isok = SIZE(val, 1) .EQ. 8 .AND. SIZE(val, 2) .EQ. 12 .AND. SIZE(val, 3) .EQ. 8
CALL OK(isok, testname)
END PROGRAM main
