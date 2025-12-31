!> author: Vikas Sharma, Ph. D.
! date: 2025-12-28
! This example tests multiplication (*) operator.
! obj1 is vector
! obj2 is vector

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
  REAL(DFP) :: val1(2), val2(2), wantVal(2)

  CHARACTER(*), PARAMETER :: testName = &
                             "test1: vector vector constant constant"

  CALL RANDOM_NUMBER(val1)
  obj1 = NodalVariable(val1, TypeFEVariableVector, TypeFEVariableConstant)

  CALL RANDOM_NUMBER(val2)
  obj2 = NodalVariable(val2, TypeFEVariableVector, TypeFEVariableConstant)

  ans = NodalVariable( &
        tsize=SIZE(val1), &
        rank=TypeFEVariableVector, &
        varType=TypeFEVariableConstant)

  wantVal = val1 * val2
  want = NodalVariable(wantVal, TypeFEVariableVector, TypeFEVariableConstant)

  CALL Multiplication_(obj1, obj2, ans)
  isok = ans .EQ. want

  CALL OK(isok, testName)
END SUBROUTINE test1

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test2
  TYPE(FEVariable_) :: obj1, obj2, ans, want
  REAL(DFP) :: val1(2), val2(2, 3), wantVal(2, 3)
  INTEGER(I4B) :: ii
  LOGICAL(LGT) :: isok

  CHARACTER(*), PARAMETER :: testName = &
                             "test2: Vector Vector constant space"
  CALL RANDOM_NUMBER(val1)
  obj1 = NodalVariable(val1, TypeFEVariableVector, TypeFEVariableConstant)

  CALL RANDOM_NUMBER(val2)
  obj2 = NodalVariable(val2, TypeFEVariableVector, TypeFEVariableSpace)

  ans = NodalVariable( &
        nrow=SIZE(val2, 1), &
        ncol=SIZE(val2, 2), &
        rank=TypeFEVariableVector, &
        varType=TypeFEVariableSpace)

  DO ii = 1, SIZE(val2, 2)
    wantVal(:, ii) = val1 * val2(:, ii)
  END DO

  want = NodalVariable(wantVal, TypeFEVariableVector, TypeFEVariableSpace)

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
  REAL(DFP) :: val1(2), val2(2, 3), wantVal(2, 3)
  INTEGER(I4B) :: ii
  CHARACTER(*), PARAMETER :: testName = &
                             "test3: Vector Vector constant time"

  CALL RANDOM_NUMBER(val1)
  obj1 = NodalVariable(val1, TypeFEVariableVector, TypeFEVariableConstant)

  CALL RANDOM_NUMBER(val2)
  obj2 = NodalVariable(val2, TypeFEVariableVector, TypeFEVariableTime)

  ans = NodalVariable( &
        nrow=SIZE(val2, 1), &
        ncol=SIZE(val2, 2), &
        rank=TypeFEVariableVector, &
        varType=TypeFEVariableTime)

  DO ii = 1, SIZE(val2, 2)
    wantVal(:, ii) = val1 * val2(:, ii)
  END DO

  want = NodalVariable(wantVal, TypeFEVariableVector, TypeFEVariableTime)

  CALL Multiplication_(obj1, obj2, ans)
  isok = ans .EQ. want

  CALL OK(isok, testName)
END SUBROUTINE test3

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test4
  TYPE(FEVariable_) :: obj1, obj2, ans, want
  REAL(DFP) :: val1(2), val2(2, 3, 4), wantVal(2, 3, 4)
  INTEGER(I4B) :: ii, jj
  LOGICAL(LGT) :: isok

  CHARACTER(*), PARAMETER :: testName = &
                             "test4: Vector Vector constant spacetime"

  CALL RANDOM_NUMBER(val1)
  obj1 = NodalVariable(val1, TypeFEVariableVector, TypeFEVariableConstant)

  CALL RANDOM_NUMBER(val2)
  obj2 = NodalVariable(val2, TypeFEVariableVector, TypeFEVariableSpaceTime)

  ans = NodalVariable( &
        dim1=SIZE(val2, 1), &
        dim2=SIZE(val2, 2), &
        dim3=SIZE(val2, 3), &
        rank=TypeFEVariableVector, &
        vartype=TypeFEVariableSpaceTime)

  DO jj = 1, SIZE(val2, 3)
    DO ii = 1, SIZE(val2, 2)
      wantVal(:, ii, jj) = val1 * val2(:, ii, jj)
    END DO
  END DO

  want = NodalVariable( &
         wantVal, TypeFEVariableVector, TypeFEVariableSpaceTime)

  CALL Multiplication_(obj1, obj2, ans)
  isok = ans .EQ. want

  CALL OK(isok, testName)
END SUBROUTINE test4

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test5
  TYPE(FEVariable_) :: obj1, obj2, ans, want
  REAL(DFP) :: val1(2, 3), val2(2), wantVal(2, 3)
  INTEGER(I4B) :: ii
  LOGICAL(LGT) :: isok

  CHARACTER(*), PARAMETER :: testName = &
                             "test5: Vector Vector space constant"

  CALL RANDOM_NUMBER(val1)
  obj1 = NodalVariable(val1, TypeFEVariableVector, TypeFEVariableSpace)

  CALL RANDOM_NUMBER(val2)
  obj2 = NodalVariable(val2, TypeFEVariableVector, TypeFEVariableConstant)

  ans = NodalVariable( &
        nrow=SIZE(val1, 1), &
        ncol=SIZE(val1, 2), &
        rank=TypeFEVariableVector, &
        vartype=TypeFEVariableSpace)

  DO ii = 1, SIZE(val1, 2)
    wantVal(:, ii) = val1(:, ii) * val2(:)
  END DO

  want = NodalVariable( &
         wantVal, TypeFEVariableVector, TypeFEVariableSpace)

  CALL Multiplication_(obj1, obj2, ans)
  isok = ans .EQ. want

  CALL OK(isok, testName)
END SUBROUTINE test5

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test6
  TYPE(FEVariable_) :: obj1, obj2, ans, want
  REAL(DFP) :: val2(2, 3), val1(2, 3), wantVal(2, 3)
  LOGICAL(LGT) :: isok

  CHARACTER(*), PARAMETER :: testName = &
                             "test6: Vector Vector space space"

  CALL RANDOM_NUMBER(val1)
  obj1 = NodalVariable(val1, TypeFEVariableVector, TypeFEVariableSpace)

  CALL RANDOM_NUMBER(val2)
  obj2 = NodalVariable(val2, TypeFEVariableVector, TypeFEVariableSpace)

  ans = NodalVariable( &
        nrow=SIZE(val1, 1), &
        ncol=SIZE(val1, 2), &
        rank=TypeFEVariableVector, &
        vartype=TypeFEVariableSpace)

  wantVal = val1 * val2
  want = NodalVariable( &
         wantVal, TypeFEVariableVector, TypeFEVariableSpace)

  CALL Multiplication_(obj1, obj2, ans)
  isok = ans .EQ. want

  CALL OK(isok, testName)
END SUBROUTINE test6

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test7
  TYPE(FEVariable_) :: obj1, obj2, ans, want
  REAL(DFP) :: val1(2, 3), val2(2, 3, 4), wantVal(2, 3, 4)
  INTEGER(I4B) :: ii, jj
  LOGICAL(LGT) :: isok

  CHARACTER(*), PARAMETER :: testName = &
                             "test7: Vector Vector space spacetime"

  CALL RANDOM_NUMBER(val1)
  obj1 = NodalVariable(val1, TypeFEVariableVector, TypeFEVariableSpace)

  CALL RANDOM_NUMBER(val2)
  obj2 = NodalVariable(val2, TypeFEVariableVector, TypeFEVariableSpaceTime)

  ans = NodalVariable( &
        dim1=SIZE(val2, 1), &
        dim2=SIZE(val2, 2), &
        dim3=SIZE(val2, 3), &
        rank=TypeFEVariableVector, &
        vartype=TypeFEVariableSpaceTime)

  DO jj = 1, SIZE(val2, 3)
    DO ii = 1, SIZE(val2, 2)
      wantVal(:, ii, jj) = val1(:, ii) * val2(:, ii, jj)
    END DO
  END DO

  want = NodalVariable( &
         wantVal, TypeFEVariableVector, TypeFEVariableSpaceTime)

  CALL Multiplication_(obj1, obj2, ans)
  isok = ans .EQ. want

  CALL OK(isok, testName)
END SUBROUTINE test7

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test8
  TYPE(FEVariable_) :: obj1, obj2, ans, want
  REAL(DFP) :: val1(2, 3), val2(2), wantVal(2, 3)
  INTEGER(I4B) :: ii
  LOGICAL(LGT) :: isok

  CHARACTER(*), PARAMETER :: testName = &
                             "test8: Vector Vector time constant"

  CALL RANDOM_NUMBER(val1)
  obj1 = NodalVariable(val1, TypeFEVariableVector, TypeFEVariableTime)

  CALL RANDOM_NUMBER(val2)
  obj2 = NodalVariable(val2, TypeFEVariableVector, TypeFEVariableConstant)

  ans = NodalVariable( &
        nrow=SIZE(val1, 1), &
        ncol=SIZE(val1, 2), &
        rank=TypeFEVariableVector, &
        vartype=TypeFEVariableTime)

  DO ii = 1, SIZE(val1, 2)
    wantVal(:, ii) = val1(:, ii) * val2(:)
  END DO

  want = NodalVariable( &
         wantVal, TypeFEVariableVector, TypeFEVariableTime)

  CALL Multiplication_(obj1, obj2, ans)
  isok = ans .EQ. want

  CALL OK(isok, testName)
END SUBROUTINE test8

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test9
  TYPE(FEVariable_) :: obj1, obj2, ans, want
  REAL(DFP) :: val1(2, 3), val2(2, 3), wantVal(2, 3)
  LOGICAL(LGT) :: isok

  CHARACTER(*), PARAMETER :: testName = &
                             "test9: Vector Vector time time"

  CALL RANDOM_NUMBER(val1)
  obj1 = NodalVariable(val1, TypeFEVariableVector, TypeFEVariableTime)

  CALL RANDOM_NUMBER(val2)
  obj2 = NodalVariable(val2, TypeFEVariableVector, TypeFEVariableTime)

  ans = NodalVariable( &
        nrow=SIZE(val1, 1), &
        ncol=SIZE(val1, 2), &
        rank=TypeFEVariableVector, &
        vartype=TypeFEVariableTime)

  wantVal = val1 * val2

  want = NodalVariable( &
         wantVal, TypeFEVariableVector, TypeFEVariableTime)

  CALL Multiplication_(obj1, obj2, ans)

  isok = ans .EQ. want

  CALL OK(isok, testName)
END SUBROUTINE test9

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test10
  TYPE(FEVariable_) :: obj1, obj2, ans, want
  REAL(DFP) :: val1(2, 4), val2(2, 3, 4), wantVal(2, 3, 4)
  INTEGER(I4B) :: ii, jj
  LOGICAL(LGT) :: isok

  CHARACTER(*), PARAMETER :: testName = &
                             "test10: Vector Vector time spacetime"

  CALL RANDOM_NUMBER(val1)
  obj1 = NodalVariable(val1, TypeFEVariableVector, TypeFEVariableTime)

  CALL RANDOM_NUMBER(val2)
  obj2 = NodalVariable(val2, TypeFEVariableVector, TypeFEVariableSpaceTime)

  ans = NodalVariable( &
        dim1=SIZE(val2, 1), &
        dim2=SIZE(val2, 2), &
        dim3=SIZE(val2, 3), &
        rank=TypeFEVariableVector, &
        vartype=TypeFEVariableSpaceTime)

  DO jj = 1, SIZE(val2, 3)
    DO ii = 1, SIZE(val2, 2)
      wantVal(:, ii, jj) = val1(:, jj) * val2(:, ii, jj)
    END DO
  END DO

  want = NodalVariable( &
         wantVal, TypeFEVariableVector, TypeFEVariableSpaceTime)

  CALL Multiplication_(obj1, obj2, ans)

  isok = ans .EQ. want

  CALL OK(isok, testName)
END SUBROUTINE test10

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test11
  TYPE(FEVariable_) :: obj1, obj2, ans, want
  REAL(DFP) :: val1(2, 3, 4), val2(2), wantVal(2, 3, 4)
  LOGICAL(LGT) :: isok
  INTEGER(I4B) :: ii, jj

  CHARACTER(*), PARAMETER :: testName = &
                             "test11: Vector Vector spacetime constant"

  CALL RANDOM_NUMBER(val1)
  obj1 = NodalVariable(val1, TypeFEVariableVector, TypeFEVariableSpaceTime)

  CALL RANDOM_NUMBER(val2)
  obj2 = NodalVariable(val2, TypeFEVariableVector, TypeFEVariableConstant)

  ans = NodalVariable( &
        dim1=SIZE(val1, 1), &
        dim2=SIZE(val1, 2), &
        dim3=SIZE(val1, 3), &
        rank=TypeFEVariableVector, &
        vartype=TypeFEVariableSpaceTime)

  DO jj = 1, SIZE(val1, 3)
    DO ii = 1, SIZE(val1, 2)
      wantVal(:, ii, jj) = val1(:, ii, jj) * val2(:)
    END DO
  END DO

  want = NodalVariable( &
         wantVal, TypeFEVariableVector, TypeFEVariableSpaceTime)

  CALL Multiplication_(obj1, obj2, ans)

  isok = ans .EQ. want

  CALL OK(isok, testName)
END SUBROUTINE test11

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test12
  TYPE(FEVariable_) :: obj1, obj2, ans, want
  REAL(DFP) :: val1(2, 3, 4), val2(2, 3), wantVal(2, 3, 4)
  INTEGER(I4B) :: ii, jj
  LOGICAL(LGT) :: isok

  CHARACTER(*), PARAMETER :: testName = &
                             "test12: Vector Vector spacetime space"

  CALL RANDOM_NUMBER(val1)
  obj1 = NodalVariable(val1, TypeFEVariableVector, TypeFEVariableSpaceTime)

  CALL RANDOM_NUMBER(val2)
  obj2 = NodalVariable(val2, TypeFEVariableVector, TypeFEVariableSpace)

  ans = NodalVariable( &
        dim1=SIZE(val1, 1), &
        dim2=SIZE(val1, 2), &
        dim3=SIZE(val1, 3), &
        rank=TypeFEVariableVector, &
        vartype=TypeFEVariableSpaceTime)

  DO jj = 1, SIZE(val1, 3)
    DO ii = 1, SIZE(val1, 2)
      wantVal(:, ii, jj) = val1(:, ii, jj) * val2(:, ii)
    END DO
  END DO

  want = NodalVariable( &
         wantVal, TypeFEVariableVector, TypeFEVariableSpaceTime)

  CALL Multiplication_(obj1, obj2, ans)

  isok = ans .EQ. want

  CALL OK(isok, testName)
END SUBROUTINE test12

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test13
  TYPE(FEVariable_) :: obj1, obj2, ans, want
  REAL(DFP) :: val1(2, 3, 4), val2(2, 4), wantVal(2, 3, 4)
  INTEGER(I4B) :: ii, jj
  LOGICAL(LGT) :: isok

  CHARACTER(*), PARAMETER :: testName = &
                             "test13: Vector Vector spacetime time"

  CALL RANDOM_NUMBER(val1)
  obj1 = NodalVariable(val1, TypeFEVariableVector, TypeFEVariableSpaceTime)

  CALL RANDOM_NUMBER(val2)
  obj2 = NodalVariable(val2, TypeFEVariableVector, TypeFEVariableTime)

  ans = NodalVariable( &
        dim1=SIZE(val1, 1), &
        dim2=SIZE(val1, 2), &
        dim3=SIZE(val1, 3), &
        rank=TypeFEVariableVector, &
        vartype=TypeFEVariableSpaceTime)

  DO jj = 1, SIZE(val1, 3)
    DO ii = 1, SIZE(val1, 2)
      wantVal(:, ii, jj) = val1(:, ii, jj) * val2(:, jj)
    END DO
  END DO

  want = NodalVariable( &
         wantVal, TypeFEVariableVector, TypeFEVariableSpaceTime)

  CALL Multiplication_(obj1, obj2, ans)

  isok = ans .EQ. want

  CALL OK(isok, testName)
END SUBROUTINE test13

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test14
  TYPE(FEVariable_) :: obj1, obj2, ans, want
  REAL(DFP) :: val1(2, 3, 4), val2(2, 3, 4), wantVal(2, 3, 4)
  LOGICAL(LGT) :: isok

  CHARACTER(*), PARAMETER :: testName = &
                             "test14: Vector Vector spacetime spacetime"

  CALL RANDOM_NUMBER(val1)
  obj1 = NodalVariable(val1, TypeFEVariableVector, TypeFEVariableSpaceTime)

  CALL RANDOM_NUMBER(val2)
  obj2 = NodalVariable(val2, TypeFEVariableVector, TypeFEVariableSpaceTime)

  ans = NodalVariable( &
        dim1=SIZE(val1, 1), &
        dim2=SIZE(val1, 2), &
        dim3=SIZE(val1, 3), &
        rank=TypeFEVariableVector, &
        vartype=TypeFEVariableSpaceTime)

  wantVal = val1 * val2

  want = NodalVariable( &
         wantVal, TypeFEVariableVector, TypeFEVariableSpaceTime)

  CALL Multiplication_(obj1, obj2, ans)

  isok = ans .EQ. want

  CALL OK(isok, testName)
END SUBROUTINE test14

END PROGRAM main
