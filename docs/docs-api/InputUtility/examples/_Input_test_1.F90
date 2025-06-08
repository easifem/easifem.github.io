!> author: Vikas Sharma, Ph. D.
! date: 2025-06-07
! summary:  Testing input utility for reading a mesh file

PROGRAM main
USE InputUtility
USE GlobalData
USE Test_Method

CALL test1

CONTAINS

SUBROUTINE test1

  LOGICAL(LGT) :: isok, aval

  aval = .TRUE.
  isok = Input(default=.TRUE., option=aval)

  CALL OK(isok, "InputUtility")

END SUBROUTINE test1

END PROGRAM main
