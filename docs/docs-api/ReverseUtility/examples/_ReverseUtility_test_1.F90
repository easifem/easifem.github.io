!> author: Vikas Sharma, Ph. D.
! date: 2025-10-14
! summary: ReverseUtility

PROGRAM main
USE GlobalData, ONLY: DFP
USE ReverseUtility
USE GridPointUtility
USE Display_Method

IMPLICIT NONE

CALL test1
CALL test2
CALL test3
CALL test4
CALL test5
CALL test6
CALL test7
CALL test8
CALL test9

CONTAINS

!----------------------------------------------------------------------------
!                                                                      test1
!----------------------------------------------------------------------------

SUBROUTINE test1
  REAL(DFP) :: avec(10)
  CALL Display("test1")
  avec = Linspace(1.0_DFP, 10.0_DFP, 10)
  CALL Reverse(avec, 1, 5)
  CALL Display(avec, "avec(1:5): ", full=.TRUE.)
END SUBROUTINE test1

!----------------------------------------------------------------------------
!                                                                       test2
!----------------------------------------------------------------------------

SUBROUTINE test2
  REAL(DFP) :: avec(10)
  CALL Display("test2")
  avec = Linspace(1.0_DFP, 10.0_DFP, 10)
  CALL Reverse(avec, 3, 5)
  CALL Display(avec, "avec(3:5): ", full=.TRUE.)
END SUBROUTINE test2

!----------------------------------------------------------------------------
!                                                                       test3
!----------------------------------------------------------------------------

SUBROUTINE test3
  REAL(DFP) :: amat(5, 5)
  CALL Display("test3")
  amat(1:5, 1:5) = RESHAPE(Linspace(1.0_DFP, 25.0_DFP, 25), [5, 5])
  CALL Reverse(amat, 1, 5, 1, 5, dim=2)
  CALL Display(amat, "amat(1:5, 1:5): ", full=.TRUE.)
END SUBROUTINE test3

!----------------------------------------------------------------------------
!                                                                       test4
!----------------------------------------------------------------------------

SUBROUTINE test4
  REAL(DFP) :: amat(5, 5)
  CALL Display("test4")
  amat(1:5, 1:5) = RESHAPE(Linspace(1.0_DFP, 25.0_DFP, 25), [5, 5])
  CALL Reverse(amat, 2, 5, 2, 5, dim=2)
  CALL Display(amat, "amat(1:5, 1:5): ", full=.TRUE.)
END SUBROUTINE test4

!----------------------------------------------------------------------------
!                                                                      test5
!----------------------------------------------------------------------------

SUBROUTINE test5
  REAL(DFP) :: amat(5, 5)
  CALL Display("test5")
  amat(1:5, 1:5) = RESHAPE(Linspace(1.0_DFP, 25.0_DFP, 25), [5, 5])
  CALL Reverse(amat, 1, 5, 1, 5, dim=1)
  CALL Display(amat, "amat(1:5, 1:5): ", full=.TRUE.)
END SUBROUTINE test5

!----------------------------------------------------------------------------
!                                                                       test6
!----------------------------------------------------------------------------

SUBROUTINE test6
  REAL(DFP) :: amat(5, 5)
  CALL Display("test6")
  amat(1:5, 1:5) = RESHAPE(Linspace(1.0_DFP, 25.0_DFP, 25), [5, 5])
  CALL Reverse(amat, 2, 5, 2, 5, dim=1)
  CALL Display(amat, "amat(1:5, 1:5): ", full=.TRUE.)
END SUBROUTINE test6

!----------------------------------------------------------------------------
!                                                                      test7
!----------------------------------------------------------------------------

SUBROUTINE test7
  REAL(DFP) :: amat(5, 5, 5)
  CALL Display("test7")
  amat(1:5, 1:5, 1:5) = RESHAPE(Linspace(1.0_DFP, 125.0_DFP, 125), [5, 5, 5])
  CALL Reverse(amat, 1, 5, 1, 5, 1, 5, dim=3)
  CALL Display(amat, "amat: ", full=.TRUE.)
END SUBROUTINE test7

!----------------------------------------------------------------------------
!                                                                      test8
!----------------------------------------------------------------------------

SUBROUTINE test8
  REAL(DFP) :: amat(5, 5, 5)
  CALL Display("test8")
  amat(1:5, 1:5, 1:5) = RESHAPE(Linspace(1.0_DFP, 125.0_DFP, 125), [5, 5, 5])
  CALL Reverse(amat, 1, 5, 1, 5, 1, 5, dim=2)
  CALL Display(amat, "amat: ", full=.TRUE.)
END SUBROUTINE test8

!----------------------------------------------------------------------------
!                                                                      test9
!----------------------------------------------------------------------------

SUBROUTINE test9
  REAL(DFP) :: amat(5, 5, 5)
  CALL Display("test9")
  amat(1:5, 1:5, 1:5) = RESHAPE(Linspace(1.0_DFP, 125.0_DFP, 125), [5, 5, 5])
  CALL Reverse(amat, 1, 5, 1, 5, 1, 5, dim=1)
  CALL Display(amat, "amat: ", full=.TRUE.)
END SUBROUTINE test9

END PROGRAM main
