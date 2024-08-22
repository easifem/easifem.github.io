PROGRAM main
USE StringUtility
USE GlobalData
USE Test_Method
USE Display_Method

IMPLICIT NONE

BLOCK
  LOGICAL(LGT) :: isok
  CHARACTER(LEN=100) :: astr
  CHARACTER(:), ALLOCATABLE :: found, want

  astr = " "
  found = PathBase(astr)
  want = "."
  isok = found .EQ. want
  CALL ok(isok, "PathBase")
END BLOCK

BLOCK
  LOGICAL(LGT) :: isok
  CHARACTER(LEN=100) :: astr
  CHARACTER(:), ALLOCATABLE :: found, want

  astr = "/"
  found = PathBase(astr)
  want = "/"
  isok = found .EQ. want
  CALL ok(isok, "PathBase")
END BLOCK

BLOCK
  LOGICAL(LGT) :: isok
  CHARACTER(LEN=100) :: astr
  CHARACTER(:), ALLOCATABLE :: found, want

  astr = "////"
  found = PathBase(astr)
  want = "/"
  isok = found .EQ. want
  CALL ok(isok, "PathBase")

  IF (.NOT. isok) THEN
    CALL Display(msg="found: ", val=found)
    CALL Display(msg="want: ", val=want)
  END IF
END BLOCK

BLOCK
  LOGICAL(LGT) :: isok
  CHARACTER(LEN=100) :: astr
  CHARACTER(:), ALLOCATABLE :: found, want

  astr = "/a/b/c"
  found = PathBase(astr)
  want = "c"
  isok = found .EQ. want
  CALL ok(isok, "PathBase")
  IF (.NOT. isok) THEN
    CALL Display(msg="found: ", val=found)
    CALL Display(msg="want: ", val=want)
  END IF
END BLOCK

BLOCK
  LOGICAL(LGT) :: isok
  CHARACTER(LEN=100) :: astr
  CHARACTER(:), ALLOCATABLE :: found, want

  astr = "/a/b/c/"
  found = PathBase(astr)
  want = "c"
  isok = found .EQ. want
  CALL ok(isok, "PathBase")
  IF (.NOT. isok) THEN
    CALL Display(msg="found: ", val=found)
    CALL Display(msg="want: ", val=want)
  END IF
END BLOCK

END PROGRAM main
