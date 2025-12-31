!> author: Vikas Sharma, Ph. D.
! date: 2025-12-28
! This example tests multiplication (*) operator. Scalar nodal variable

PROGRAM main
USE BaseType
USE FEVariable_Method
USE GlobalData
USE Display_Method
USE Test_Method

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
CALL test10
CALL test11
CALL test12
CALL test13
CALL test14

CONTAINS

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test1
  TYPE(FEVariable_) :: obj1, obj2, ans, want
  LOGICAL(LGT) :: isok

  CHARACTER(*), PARAMETER :: testName = &
                             "test1: scalar scalar constant constant"

  obj1 = NodalVariable(1.0_DFP, TypeFEVariableScalar, TypeFEVariableConstant)
  obj2 = NodalVariable(2.0_DFP, TypeFEVariableScalar, TypeFEVariableConstant)
  ans = NodalVariable(0.0_DFP, TypeFEVariableScalar, TypeFEVariableConstant)
  want = NodalVariable(2.0_DFP, TypeFEVariableScalar, TypeFEVariableConstant)

  CALL Multiplication_(obj1, obj2, ans)
  isok = ans .EQ. want

  CALL OK(isok, testName)
END SUBROUTINE test1

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test2
  TYPE(FEVariable_) :: obj1, obj2, ans, want
  LOGICAL(LGT) :: isok

  CHARACTER(*), PARAMETER :: testName = &
                             "test2: scalar scalar constant space"

  obj1 = NodalVariable(1.0_DFP, TypeFEVariableScalar, TypeFEVariableConstant)
  obj2 = NodalVariable([2.0_DFP], TypeFEVariableScalar, TypeFEVariableSpace)
  ans = NodalVariable(1, TypeFEVariableScalar, TypeFEVariableSpace)
  want = NodalVariable([2.0_DFP], TypeFEVariableScalar, TypeFEVariableSpace)

  CALL Multiplication_(obj1, obj2, ans)
  isok = ans .EQ. want

  CALL OK(isok, testName)
END SUBROUTINE test2

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test3
  TYPE(FEVariable_) :: obj1, obj2, ans, want
  LOGICAL(LGT) :: isok

  CHARACTER(*), PARAMETER :: testName = &
                             "test3: scalar scalar constant time"

  obj1 = NodalVariable(1.0_DFP, TypeFEVariableScalar, TypeFEVariableConstant)
  obj2 = NodalVariable([2.0_DFP], TypeFEVariableScalar, TypeFEVariableTime)
  ans = NodalVariable(1, TypeFEVariableScalar, TypeFEVariableTime)
  want = NodalVariable([2.0_DFP], TypeFEVariableScalar, TypeFEVariableTime)

  CALL Multiplication_(obj1, obj2, ans)
  isok = ans .EQ. want

  CALL OK(isok, testName)
END SUBROUTINE test3

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test4
  TYPE(FEVariable_) :: obj1, obj2, ans, want
  REAL(DFP) :: val2(2, 2), val1
  LOGICAL(LGT) :: isok

  CHARACTER(*), PARAMETER :: testName = &
                             "test4: scalar scalar constant spacetime"

  val1 = 2.0_DFP
  obj1 = NodalVariable(val1, TypeFEVariableScalar, TypeFEVariableConstant)

  CALL RANDOM_NUMBER(val2)
  obj2 = NodalVariable(val2, TypeFEVariableScalar, TypeFEVariableSpaceTime)

  ans = NodalVariable( &
        nrow=SIZE(val2, 1), ncol=SIZE(val2, 2), &
        rank=TypeFEVariableScalar, &
        vartype=TypeFEVariableSpaceTime)

  want = NodalVariable( &
         val1 * val2, TypeFEVariableScalar, TypeFEVariableSpaceTime)

  CALL Multiplication_(obj1, obj2, ans)
  isok = ans .EQ. want

  CALL OK(isok, testName)
END SUBROUTINE test4

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test5
  TYPE(FEVariable_) :: obj1, obj2, ans, want
  REAL(DFP) :: val2, val1(2)
  LOGICAL(LGT) :: isok

  CHARACTER(*), PARAMETER :: testName = &
                             "test5: scalar scalar space constant"

  CALL RANDOM_NUMBER(val1)
  obj1 = NodalVariable(val1, TypeFEVariableScalar, TypeFEVariableSpace)

  CALL RANDOM_NUMBER(val2)
  obj2 = NodalVariable(val2, TypeFEVariableScalar, TypeFEVariableConstant)

  ans = NodalVariable( &
        tsize=SIZE(val1), &
        rank=TypeFEVariableScalar, &
        vartype=TypeFEVariableSpace)

  want = NodalVariable( &
         val1 * val2, TypeFEVariableScalar, TypeFEVariableSpace)

  CALL Multiplication_(obj1, obj2, ans)
  isok = ans .EQ. want

  CALL OK(isok, testName)
END SUBROUTINE test5

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test6
  TYPE(FEVariable_) :: obj1, obj2, ans, want
  REAL(DFP) :: val2(2), val1(2)
  LOGICAL(LGT) :: isok

  CHARACTER(*), PARAMETER :: testName = &
                             "test6: scalar scalar space space"

  CALL RANDOM_NUMBER(val1)
  obj1 = NodalVariable(val1, TypeFEVariableScalar, TypeFEVariableSpace)

  CALL RANDOM_NUMBER(val2)
  obj2 = NodalVariable(val2, TypeFEVariableScalar, TypeFEVariableSpace)

  ans = NodalVariable( &
        tsize=SIZE(val1), &
        rank=TypeFEVariableScalar, &
        vartype=TypeFEVariableSpace)

  want = NodalVariable( &
         val1 * val2, TypeFEVariableScalar, TypeFEVariableSpace)

  CALL Multiplication_(obj1, obj2, ans)
  isok = ans .EQ. want

  CALL OK(isok, testName)
END SUBROUTINE test6

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test7
  TYPE(FEVariable_) :: obj1, obj2, ans, want
  REAL(DFP) :: val1(2), val2(2, 3), wantVal(2, 3)
  INTEGER(I4B) :: ii
  LOGICAL(LGT) :: isok

  CHARACTER(*), PARAMETER :: testName = &
                             "test7: scalar scalar space spacetime"

  CALL RANDOM_NUMBER(val1)
  obj1 = NodalVariable(val1, TypeFEVariableScalar, TypeFEVariableSpace)

  CALL RANDOM_NUMBER(val2)
  obj2 = NodalVariable(val2, TypeFEVariableScalar, TypeFEVariableSpaceTime)

  ans = NodalVariable( &
        nrow=SIZE(val2, 1), ncol=SIZE(val2, 2), &
        rank=TypeFEVariableScalar, &
        vartype=TypeFEVariableSpaceTime)

  DO ii = 1, SIZE(val2, 2)
    wantVal(:, ii) = val1 * val2(:, ii)
  END DO

  want = NodalVariable( &
         wantVal, TypeFEVariableScalar, TypeFEVariableSpaceTime)

  CALL Multiplication_(obj1, obj2, ans)
  isok = ans .EQ. want

  CALL OK(isok, testName)
END SUBROUTINE test7

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test8
  TYPE(FEVariable_) :: obj1, obj2, ans, want
  REAL(DFP) :: val1(2), val2, wantVal(2)
  LOGICAL(LGT) :: isok

  CHARACTER(*), PARAMETER :: testName = &
                             "test8: scalar scalar time constant"

  CALL RANDOM_NUMBER(val1)
  obj1 = NodalVariable(val1, TypeFEVariableScalar, TypeFEVariableTime)

  CALL RANDOM_NUMBER(val2)
  obj2 = NodalVariable(val2, TypeFEVariableScalar, TypeFEVariableConstant)

  ans = NodalVariable( &
        tsize=SIZE(val1, 1), &
        rank=TypeFEVariableScalar, &
        vartype=TypeFEVariableTime)

  wantVal = val1 * val2

  want = NodalVariable( &
         wantVal, TypeFEVariableScalar, TypeFEVariableTime)

  CALL Multiplication_(obj1, obj2, ans)
  isok = ans .EQ. want

  CALL OK(isok, testName)
END SUBROUTINE test8

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test9
  TYPE(FEVariable_) :: obj1, obj2, ans, want
  REAL(DFP) :: val1(2), val2(2), wantVal(2)
  LOGICAL(LGT) :: isok

  CHARACTER(*), PARAMETER :: testName = &
                             "test9: scalar scalar time time"

  CALL RANDOM_NUMBER(val1)
  obj1 = NodalVariable(val1, TypeFEVariableScalar, TypeFEVariableTime)

  CALL RANDOM_NUMBER(val2)
  obj2 = NodalVariable(val2, TypeFEVariableScalar, TypeFEVariableTime)

  ans = NodalVariable( &
        tsize=SIZE(val1, 1), &
        rank=TypeFEVariableScalar, &
        vartype=TypeFEVariableTime)

  wantVal = val1 * val2

  want = NodalVariable( &
         wantVal, TypeFEVariableScalar, TypeFEVariableTime)

  CALL Multiplication_(obj1, obj2, ans)

  isok = ans .EQ. want

  CALL OK(isok, testName)
END SUBROUTINE test9

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test10
  TYPE(FEVariable_) :: obj1, obj2, ans, want
  REAL(DFP) :: val1(3), val2(2, 3), wantVal(2, 3)
  INTEGER(I4B) :: ii
  LOGICAL(LGT) :: isok

  CHARACTER(*), PARAMETER :: testName = &
                             "test10: scalar scalar time spacetime"

  CALL RANDOM_NUMBER(val1)
  obj1 = NodalVariable(val1, TypeFEVariableScalar, TypeFEVariableTime)

  CALL RANDOM_NUMBER(val2)
  obj2 = NodalVariable(val2, TypeFEVariableScalar, TypeFEVariableSpaceTime)

  ans = NodalVariable( &
        nrow=SIZE(val2, 1), &
        ncol=SIZE(val2, 2), &
        rank=TypeFEVariableScalar, &
        vartype=TypeFEVariableSpaceTime)

  DO ii = 1, SIZE(val2, 2)
    wantVal(:, ii) = val1(ii) * val2(:, ii)
  END DO

  want = NodalVariable( &
         wantVal, TypeFEVariableScalar, TypeFEVariableSpaceTime)

  CALL Multiplication_(obj1, obj2, ans)

  isok = ans .EQ. want

  CALL OK(isok, testName)
END SUBROUTINE test10

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test11
  TYPE(FEVariable_) :: obj1, obj2, ans, want
  REAL(DFP) :: val1(2, 3), val2, wantVal(2, 3)
  LOGICAL(LGT) :: isok

  CHARACTER(*), PARAMETER :: testName = &
                             "test11: scalar scalar spacetime constant"

  CALL RANDOM_NUMBER(val1)
  obj1 = NodalVariable(val1, TypeFEVariableScalar, TypeFEVariableSpaceTime)

  CALL RANDOM_NUMBER(val2)
  obj2 = NodalVariable(val2, TypeFEVariableScalar, TypeFEVariableConstant)

  ans = NodalVariable( &
        nrow=SIZE(val1, 1), &
        ncol=SIZE(val1, 2), &
        rank=TypeFEVariableScalar, &
        vartype=TypeFEVariableSpaceTime)

  wantVal = val1 * val2

  want = NodalVariable( &
         wantVal, TypeFEVariableScalar, TypeFEVariableSpaceTime)

  CALL Multiplication_(obj1, obj2, ans)

  isok = ans .EQ. want

  CALL OK(isok, testName)
END SUBROUTINE test11

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test12
  TYPE(FEVariable_) :: obj1, obj2, ans, want
  REAL(DFP) :: val1(2, 3), val2(2), wantVal(2, 3)
  INTEGER(I4B) :: ii
  LOGICAL(LGT) :: isok

  CHARACTER(*), PARAMETER :: testName = &
                             "test12: scalar scalar spacetime space"

  CALL RANDOM_NUMBER(val1)
  obj1 = NodalVariable(val1, TypeFEVariableScalar, TypeFEVariableSpaceTime)

  CALL RANDOM_NUMBER(val2)
  obj2 = NodalVariable(val2, TypeFEVariableScalar, TypeFEVariableSpace)

  ans = NodalVariable( &
        nrow=SIZE(val1, 1), &
        ncol=SIZE(val1, 2), &
        rank=TypeFEVariableScalar, &
        vartype=TypeFEVariableSpaceTime)

  DO ii = 1, SIZE(val1, 2)
    wantVal(:, ii) = val1(:, ii) * val2(:)
  END DO

  want = NodalVariable( &
         wantVal, TypeFEVariableScalar, TypeFEVariableSpaceTime)

  CALL Multiplication_(obj1, obj2, ans)

  isok = ans .EQ. want

  CALL OK(isok, testName)
END SUBROUTINE test12

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test13
  TYPE(FEVariable_) :: obj1, obj2, ans, want
  REAL(DFP) :: val1(2, 3), val2(3), wantVal(2, 3)
  INTEGER(I4B) :: ii
  LOGICAL(LGT) :: isok

  CHARACTER(*), PARAMETER :: testName = &
                             "test13: scalar scalar spacetime time"

  CALL RANDOM_NUMBER(val1)
  obj1 = NodalVariable(val1, TypeFEVariableScalar, TypeFEVariableSpaceTime)

  CALL RANDOM_NUMBER(val2)
  obj2 = NodalVariable(val2, TypeFEVariableScalar, TypeFEVariableTime)

  ans = NodalVariable( &
        nrow=SIZE(val1, 1), &
        ncol=SIZE(val1, 2), &
        rank=TypeFEVariableScalar, &
        vartype=TypeFEVariableSpaceTime)

  DO ii = 1, SIZE(val1, 2)
    wantVal(:, ii) = val1(:, ii) * val2(ii)
  END DO

  want = NodalVariable( &
         wantVal, TypeFEVariableScalar, TypeFEVariableSpaceTime)

  CALL Multiplication_(obj1, obj2, ans)

  isok = ans .EQ. want

  CALL OK(isok, testName)
END SUBROUTINE test13

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test14
  TYPE(FEVariable_) :: obj1, obj2, ans, want
  REAL(DFP) :: val1(2, 3), val2(2, 3), wantVal(2, 3)
  LOGICAL(LGT) :: isok

  CHARACTER(*), PARAMETER :: testName = &
                             "test14: scalar scalar spacetime spacetime"

  CALL RANDOM_NUMBER(val1)
  obj1 = NodalVariable(val1, TypeFEVariableScalar, TypeFEVariableSpaceTime)

  CALL RANDOM_NUMBER(val2)
  obj2 = NodalVariable(val2, TypeFEVariableScalar, TypeFEVariableSpaceTime)

  ans = NodalVariable( &
        nrow=SIZE(val1, 1), &
        ncol=SIZE(val1, 2), &
        rank=TypeFEVariableScalar, &
        vartype=TypeFEVariableSpaceTime)

  wantVal = val1 * val2

  want = NodalVariable( &
         wantVal, TypeFEVariableScalar, TypeFEVariableSpaceTime)

  CALL Multiplication_(obj1, obj2, ans)

  isok = ans .EQ. want

  CALL OK(isok, testName)
END SUBROUTINE test14

END PROGRAM main
