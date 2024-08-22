PROGRAM main
USE StringUtility
USE GlobalData
USE Test_Method
USE Display_Method

IMPLICIT NONE

BLOCK
  LOGICAL(LGT) :: isok
  CHARACTER(LEN=100) :: astr
  INTEGER(I4B), ALLOCATABLE :: found(:), want(:)

  astr = "/a/b/c"
  CALL StrFind(astr, "/", found)
  want = [1, 3, 5]
  isok = ALL(found .EQ. want)
  CALL ok(isok, "StrFind")
END BLOCK

BLOCK
  LOGICAL(LGT) :: isok
  CHARACTER(LEN=100) :: astr
  INTEGER(I4B), ALLOCATABLE :: found(:), want(:)

  astr = "/a/b/c/"
  CALL StrFind(astr, "/", found)
  want = [1, 3, 5, 7]
  isok = ALL(found .EQ. want)
  CALL ok(isok, "StrFind")
END BLOCK

BLOCK
  LOGICAL(LGT) :: isok
  CHARACTER(LEN=100) :: astr
  INTEGER(I4B), ALLOCATABLE :: found(:), want(:)

  astr = "/"
  CALL StrFind(astr, "/", found)
  want = [1]
  isok = ALL(found .EQ. want)
  CALL ok(isok, "StrFind")
END BLOCK

BLOCK
  LOGICAL(LGT) :: isok
  CHARACTER(LEN=100) :: astr
  INTEGER(I4B), ALLOCATABLE :: found(:), want(:)

  astr = "abc"
  CALL StrFind(astr, "/", found)
  isok = SIZE(found) .EQ. 0
  CALL ok(isok, "StrFind")
  IF (.NOT. isok) THEN
    CALL Display(SIZE(found), "size of found: ")
  END IF
END BLOCK

END PROGRAM main
