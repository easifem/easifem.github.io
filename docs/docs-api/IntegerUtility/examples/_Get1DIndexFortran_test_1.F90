PROGRAM main
USE GlobalData, ONLY: I4B, LGT, DFP
USE Display_Method
USE IntegerUtility
USE Test_Method

IMPLICIT NONE

INTEGER(I4B) :: found, want, i, j, k, l, indx
LOGICAL(LGT) :: isok

want = 0
test_1: DO j = 1, 3
  DO i = 1, 2

    found = Get1DIndexFortran(i, j, 2, 3)
    want = want + 1
    isok = found == want
    IF (.NOT. isok) THEN
      CALL Display(msg="found", val=found)
      CALL Display(msg="want", val=want)
      EXIT test_1
    END IF

  END DO
END DO test_1

CALL OK(isok, "Get1DIndexFortran")

want = 0
test_2: DO k = 1, 4
  DO j = 1, 3
    DO i = 1, 2

      found = Get1DIndexFortran(i, j, k, 2, 3, 4)
      want = want + 1
      isok = found == want
      IF (.NOT. isok) THEN
        CALL Display(msg="found", val=found)
        CALL Display(msg="want", val=want)
        EXIT test_2
      END IF

    END DO
  END DO
END DO test_2

CALL OK(isok, "Get1DIndexFortran")

want = 0
test_3: DO l = 1, 2
  DO k = 1, 4
    DO j = 1, 3
      DO i = 1, 2

        found = Get1DIndexFortran(i, j, k, l, 2, 3, 4, 2)
        want = want + 1
        isok = found == want
        IF (.NOT. isok) THEN
          CALL Display(msg="found", val=found)
          CALL Display(msg="want", val=want)
          EXIT test_3
        END IF

      END DO
    END DO
  END DO
END DO test_3

CALL OK(isok, "Get1DIndexFortran")

END PROGRAM main
