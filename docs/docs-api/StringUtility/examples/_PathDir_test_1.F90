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
  found = PathDir(astr)
  want = "."
  isok = found .EQ. want
  CALL ok(isok, "PathDir")
END BLOCK

BLOCK
  LOGICAL(LGT) :: isok
  CHARACTER(LEN=100) :: astr
  CHARACTER(:), ALLOCATABLE :: found, want

  astr = "/"
  found = PathDir(astr)
  want = "/"
  isok = found .EQ. want
  CALL ok(isok, "PathDir")
END BLOCK

BLOCK
  LOGICAL(LGT) :: isok
  CHARACTER(LEN=100) :: astr
  CHARACTER(:), ALLOCATABLE :: found, want

  astr = "////"
  found = PathDir(astr)
  want = "/"
  isok = found .EQ. want
  CALL ok(isok, "PathDir")

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
  found = PathDir(astr)
  want = "/a/b"
  isok = found .EQ. want
  CALL ok(isok, "PathDir")
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
  found = PathDir(astr)
  want = "/a/b"
  isok = found .EQ. want
  CALL ok(isok, "PathDir")
  IF (.NOT. isok) THEN
    CALL Display(msg="found: ", val=found)
    CALL Display(msg="want: ", val=want)
  END IF
END BLOCK

BLOCK
  LOGICAL(LGT) :: isok
  CHARACTER(LEN=100) :: astr
  CHARACTER(:), ALLOCATABLE :: found, want

  astr = "/a/b///c/"
  found = PathDir(astr)
  want = "/a/b"
  isok = found .EQ. want
  CALL ok(isok, "PathDir")
  IF (.NOT. isok) THEN
    CALL Display(msg="found: ", val=found)
    CALL Display(msg="want: ", val=want)
  END IF
END BLOCK

END PROGRAM main
