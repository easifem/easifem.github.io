!> author: Vikas Sharma, Ph. D.
! date: 2025-12-28
! This example tests division operator.
! obj1 Vector
! obj2 Scalar

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
  REAL(DFP) :: val1, val2(2), wantval(2)
  LOGICAL(LGT) :: isok

  CHARACTER(*), PARAMETER :: testName = &
                             "test1: vector scalar constant constant"
  CALL RANDOM_NUMBER(val1)
  obj1 = NodalVariable(val1, TypeFEVariableScalar, TypeFEVariableConstant)

  CALL RANDOM_NUMBER(val2)
  obj2 = NodalVariable(val2, TypeFEVariableVector, TypeFEVariableConstant)

  ans = NodalVariable( &
        tsize=SIZE(val2, 1), &
        rank=TypeFEVariableVector, &
        vartype=TypeFEVariableConstant)

  wantval = val2 / val1
  want = NodalVariable(wantval, TypeFEVariableVector, TypeFEVariableConstant)

  CALL Division_(obj2, obj1, ans)
  isok = ans .EQ. want

  CALL OK(isok, testName)
END SUBROUTINE test1

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test2
  TYPE(FEVariable_) :: obj1, obj2, ans, want
  REAL(DFP) :: val1, val2(2, 3), wantval(2, 3)
  INTEGER(I4B) :: ii
  LOGICAL(LGT) :: isok

  CHARACTER(*), PARAMETER :: testName = &
                             "test2: scalar vector constant space"

  CALL RANDOM_NUMBER(val1)
  obj1 = NodalVariable(val1, TypeFEVariableScalar, TypeFEVariableConstant)

  CALL RANDOM_NUMBER(val2)
  obj2 = NodalVariable(val2, TypeFEVariableVector, TypeFEVariableSpace)

  ans = NodalVariable( &
        nrow=SIZE(val2, 1), &
        ncol=SIZE(val2, 2), &
        rank=TypeFEVariableVector, &
        vartype=TypeFEVariableSpace)

  wantval = val2 / val1
  want = NodalVariable(wantval, TypeFEVariableVector, TypeFEVariableSpace)

  CALL Division_(obj2, obj1, ans)
  isok = ans .EQ. want

  CALL OK(isok, testName)
END SUBROUTINE test2

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test3
  TYPE(FEVariable_) :: obj1, obj2, ans, want
  REAL(DFP) :: val1, val2(2, 3), wantval(2, 3)
  LOGICAL(LGT) :: isok

  CHARACTER(*), PARAMETER :: testName = &
                             "test3: scalar vector constant time"

  CALL RANDOM_NUMBER(val1)
  obj1 = NodalVariable(val1, TypeFEVariableScalar, TypeFEVariableConstant)

  CALL RANDOM_NUMBER(val2)
  obj2 = NodalVariable(val2, TypeFEVariableVector, TypeFEVariableTime)

  ans = NodalVariable( &
        nrow=SIZE(val2, 1), &
        ncol=SIZE(val2, 2), &
        rank=TypeFEVariableVector, &
        vartype=TypeFEVariableTime)

  wantval = val2 / val1
  want = NodalVariable(wantval, TypeFEVariableVector, TypeFEVariableTime)

  CALL Division_(obj2, obj1, ans)
  isok = ans .EQ. want

  CALL OK(isok, testName)
END SUBROUTINE test3

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test4
  TYPE(FEVariable_) :: obj1, obj2, ans, want
  REAL(DFP) :: val1, val2(2, 3, 4), wantval(2, 3, 4)
  LOGICAL(LGT) :: isok

  CHARACTER(*), PARAMETER :: testName = &
                             "test4: scalar vector constant spacetime"

  CALL RANDOM_NUMBER(val1)
  obj1 = NodalVariable(val1, TypeFEVariableScalar, TypeFEVariableConstant)

  CALL RANDOM_NUMBER(val2)
  obj2 = NodalVariable(val2, TypeFEVariableVector, TypeFEVariableSpaceTime)

  ans = NodalVariable( &
        dim1=SIZE(val2, 1), &
        dim2=SIZE(val2, 2), &
        dim3=SIZE(val2, 3), &
        rank=TypeFEVariableVector, &
        vartype=TypeFEVariableSpaceTime)

  wantval = val2 / val1
  want = NodalVariable( &
         wantval, TypeFEVariableVector, TypeFEVariableSpaceTime)

  CALL Division_(obj2, obj1, ans)
  isok = ans .EQ. want

  CALL OK(isok, testName)
END SUBROUTINE test4

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test5
  TYPE(FEVariable_) :: obj1, obj2, ans, want
  REAL(DFP) :: val1(2), val2(3), wantval(3, 2)
  INTEGER(I4B) :: ii
  LOGICAL(LGT) :: isok

  CHARACTER(*), PARAMETER :: testName = &
                             "test5: scalar vector space constant"

  CALL RANDOM_NUMBER(val1)
  obj1 = NodalVariable(val1, TypeFEVariableScalar, TypeFEVariableSpace)

  CALL RANDOM_NUMBER(val2)
  obj2 = NodalVariable(val2, TypeFEVariableVector, TypeFEVariableConstant)

  ans = NodalVariable( &
        nrow=SIZE(wantval, 1), &
        ncol=SIZE(wantval, 2), &
        rank=TypeFEVariableVector, &
        vartype=TypeFEVariableSpace)

  DO ii = 1, SIZE(wantval, 2)
    wantval(:, ii) = val2(:) / val1(ii)
  END DO

  want = NodalVariable( &
         wantval, TypeFEVariableVector, TypeFEVariableSpace)

  CALL Division_(obj2, obj1, ans)
  isok = ans .EQ. want

  CALL OK(isok, testName)
END SUBROUTINE test5

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test6
  TYPE(FEVariable_) :: obj1, obj2, ans, want
  REAL(DFP) :: val1(2), val2(3, 2), wantval(3, 2)
  INTEGER(I4B) :: ii
  LOGICAL(LGT) :: isok

  CHARACTER(*), PARAMETER :: testName = &
                             "test6: scalar vector space space"

  CALL RANDOM_NUMBER(val1)
  obj1 = NodalVariable(val1, TypeFEVariableScalar, TypeFEVariableSpace)

  CALL RANDOM_NUMBER(val2)
  obj2 = NodalVariable(val2, TypeFEVariableVector, TypeFEVariableSpace)

  ans = NodalVariable( &
        nrow=SIZE(wantval, 1), &
        ncol=SIZE(wantval, 2), &
        rank=TypeFEVariableVector, &
        vartype=TypeFEVariableSpace)

  DO ii = 1, SIZE(wantval, 2)
    wantval(:, ii) = val2(:, ii) / val1(ii)
  END DO

  want = NodalVariable( &
         wantval, TypeFEVariableVector, TypeFEVariableSpace)

  CALL Division_(obj2, obj1, ans)
  isok = ans .EQ. want

  CALL OK(isok, testName)
END SUBROUTINE test6

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test7
  TYPE(FEVariable_) :: obj1, obj2, ans, want
  REAL(DFP) :: val1(2), val2(3, 2, 1), wantval(3, 2, 1)
  INTEGER(I4B) :: ii, jj
  LOGICAL(LGT) :: isok

  CHARACTER(*), PARAMETER :: testName = &
                             "test7: scalar vector space spacetime"

  CALL RANDOM_NUMBER(val1)
  obj1 = NodalVariable(val1, TypeFEVariableScalar, TypeFEVariableSpace)

  CALL RANDOM_NUMBER(val2)
  obj2 = NodalVariable(val2, TypeFEVariableVector, TypeFEVariableSpaceTime)

  ans = NodalVariable( &
        dim1=SIZE(wantval, 1), &
        dim2=SIZE(wantval, 2), &
        dim3=SIZE(wantval, 3), &
        rank=TypeFEVariableVector, &
        vartype=TypeFEVariableSpaceTime)

  DO jj = 1, SIZE(wantval, 3)
    DO ii = 1, SIZE(wantval, 2)
      wantval(:, ii, jj) = val2(:, ii, jj) / val1(ii)
    END DO
  END DO

  want = NodalVariable( &
         wantval, TypeFEVariableVector, TypeFEVariableSpaceTime)

  CALL Division_(obj2, obj1, ans)
  isok = ans .EQ. want

  CALL OK(isok, testName)
END SUBROUTINE test7

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test8
  TYPE(FEVariable_) :: obj1, obj2, ans, want
  REAL(DFP) :: val1(2), val2(3), wantval(3, 2)
  INTEGER(I4B) :: ii
  LOGICAL(LGT) :: isok

  CHARACTER(*), PARAMETER :: testName = &
                             "test8: scalar vector time constant"

  CALL RANDOM_NUMBER(val1)
  obj1 = NodalVariable(val1, TypeFEVariableScalar, TypeFEVariableTime)

  CALL RANDOM_NUMBER(val2)
  obj2 = NodalVariable(val2, TypeFEVariableVector, TypeFEVariableConstant)

  ans = NodalVariable( &
        nrow=SIZE(wantval, 1), &
        ncol=SIZE(wantval, 2), &
        rank=TypeFEVariableVector, &
        vartype=TypeFEVariableTime)

  DO ii = 1, SIZE(wantval, 2)
    wantval(:, ii) = val2(:) / val1(ii)
  END DO

  want = NodalVariable( &
         wantval, TypeFEVariableVector, TypeFEVariableTime)

  CALL Division_(obj2, obj1, ans)
  isok = ans .EQ. want

  CALL OK(isok, testName)
END SUBROUTINE test8

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test9
  TYPE(FEVariable_) :: obj1, obj2, ans, want
  REAL(DFP) :: val1(2), val2(3, 2), wantval(3, 2)
  INTEGER(I4B) :: ii
  LOGICAL(LGT) :: isok
  CHARACTER(*), PARAMETER :: testName = &
                             "test9: scalar vector time time"

  CALL RANDOM_NUMBER(val1)
  obj1 = NodalVariable(val1, TypeFEVariableScalar, TypeFEVariableTime)

  CALL RANDOM_NUMBER(val2)
  obj2 = NodalVariable(val2, TypeFEVariableVector, TypeFEVariableTime)

  ans = NodalVariable( &
        nrow=SIZE(wantval, 1), &
        ncol=SIZE(wantval, 2), &
        rank=TypeFEVariableVector, &
        vartype=TypeFEVariableTime)

  DO ii = 1, SIZE(wantval, 2)
    wantval(:, ii) = val2(:, ii) / val1(ii)
  END DO

  want = NodalVariable( &
         wantval, TypeFEVariableVector, TypeFEVariableTime)

  CALL Division_(obj2, obj1, ans)

  isok = ans .EQ. want

  CALL OK(isok, testName)
END SUBROUTINE test9

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test10
  TYPE(FEVariable_) :: obj1, obj2, ans, want
  REAL(DFP) :: val1(1), val2(2, 3, 1), wantval(2, 3, 1)
  INTEGER(I4B) :: ii, jj
  LOGICAL(LGT) :: isok

  CHARACTER(*), PARAMETER :: testName = &
                             "test10: scalar vector time spacetime"

  CALL RANDOM_NUMBER(val1)
  obj1 = NodalVariable(val1, TypeFEVariableScalar, TypeFEVariableTime)

  CALL RANDOM_NUMBER(val2)
  obj2 = NodalVariable(val2, TypeFEVariableVector, TypeFEVariableSpaceTime)

  ans = NodalVariable( &
        dim1=SIZE(wantval, 1), &
        dim2=SIZE(wantval, 2), &
        dim3=SIZE(wantval, 3), &
        rank=TypeFEVariableVector, &
        vartype=TypeFEVariableSpaceTime)

  DO jj = 1, SIZE(wantval, 3)
    DO ii = 1, SIZE(val2, 2)
      wantval(:, ii, jj) = val2(:, ii, jj) / val1(jj)
    END DO
  END DO

  want = NodalVariable( &
         wantval, TypeFEVariableVector, TypeFEVariableSpaceTime)

  CALL Division_(obj2, obj1, ans)

  isok = ans .EQ. want

  CALL OK(isok, testName)
END SUBROUTINE test10

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test11
  TYPE(FEVariable_) :: obj1, obj2, ans, want
  REAL(DFP) :: val1(2, 1), val2(3), wantval(3, 2, 1)
  INTEGER(I4B) :: ii, jj
  LOGICAL(LGT) :: isok

  CHARACTER(*), PARAMETER :: testName = &
                             "test11: scalar vector spacetime constant"

  CALL RANDOM_NUMBER(val1)
  obj1 = NodalVariable(val1, TypeFEVariableScalar, TypeFEVariableSpaceTime)

  CALL RANDOM_NUMBER(val2)
  obj2 = NodalVariable(val2, TypeFEVariableVector, TypeFEVariableConstant)

  ans = NodalVariable( &
        dim1=SIZE(wantval, 1), &
        dim2=SIZE(wantval, 2), &
        dim3=SIZE(wantval, 3), &
        rank=TypeFEVariableVector, &
        vartype=TypeFEVariableSpaceTime)

  DO jj = 1, SIZE(wantval, 3)
    DO ii = 1, SIZE(wantval, 2)
      wantval(:, ii, jj) = val2(:) / val1(ii, jj)
    END DO
  END DO

  want = NodalVariable( &
         wantval, TypeFEVariableVector, TypeFEVariableSpaceTime)

  CALL Division_(obj2, obj1, ans)

  isok = ans .EQ. want

  CALL OK(isok, testName)
END SUBROUTINE test11

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test12
  TYPE(FEVariable_) :: obj1, obj2, ans, want
  REAL(DFP) :: val1(2, 3), val2(3, 2), wantval(3, 2, 3)
  INTEGER(I4B) :: ii, jj
  LOGICAL(LGT) :: isok

  CHARACTER(*), PARAMETER :: testName = &
                             "test12: scalar vector spacetime space"

  CALL RANDOM_NUMBER(val1)
  obj1 = NodalVariable(val1, TypeFEVariableScalar, TypeFEVariableSpaceTime)

  CALL RANDOM_NUMBER(val2)
  obj2 = NodalVariable(val2, TypeFEVariableVector, TypeFEVariableSpace)

  ans = NodalVariable( &
        dim1=SIZE(wantval, 1), &
        dim2=SIZE(wantval, 2), &
        dim3=SIZE(wantval, 3), &
        rank=TypeFEVariableVector, &
        vartype=TypeFEVariableSpaceTime)

  DO jj = 1, SIZE(wantval, 3)
    DO ii = 1, SIZE(wantval, 2)
      wantval(:, ii, jj) = val2(:, ii) / val1(ii, jj)
    END DO
  END DO

  want = NodalVariable( &
         wantval, TypeFEVariableVector, TypeFEVariableSpaceTime)

  CALL Division_(obj2, obj1, ans)

  isok = ans .EQ. want

  CALL OK(isok, testName)
END SUBROUTINE test12

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test13
  TYPE(FEVariable_) :: obj1, obj2, ans, want
  REAL(DFP) :: val1(2, 3), val2(1, 3), wantval(1, 2, 3)
  INTEGER(I4B) :: ii, jj
  LOGICAL(LGT) :: isok

  CHARACTER(*), PARAMETER :: testName = &
                             "test13: scalar vector spacetime time"

  CALL RANDOM_NUMBER(val1)
  obj1 = NodalVariable(val1, TypeFEVariableScalar, TypeFEVariableSpaceTime)

  CALL RANDOM_NUMBER(val2)
  obj2 = NodalVariable(val2, TypeFEVariableVector, TypeFEVariableTime)

  ans = NodalVariable( &
        dim1=SIZE(wantval, 1), &
        dim2=SIZE(wantval, 2), &
        dim3=SIZE(wantval, 3), &
        rank=TypeFEVariableVector, &
        vartype=TypeFEVariableSpaceTime)

  DO jj = 1, SIZE(wantval, 3)
    DO ii = 1, SIZE(wantval, 2)
      wantval(:, ii, jj) = val2(:, jj) / val1(ii, jj)
    END DO
  END DO

  want = NodalVariable( &
         wantval, TypeFEVariableVector, TypeFEVariableSpaceTime)

  CALL Division_(obj2, obj1, ans)

  isok = ans .EQ. want

  CALL OK(isok, testName)
END SUBROUTINE test13

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test14
  TYPE(FEVariable_) :: obj1, obj2, ans, want
  REAL(DFP) :: val1(2, 3), val2(1, 2, 3), wantval(1, 2, 3)
  LOGICAL(LGT) :: isok
  INTEGER(I4B) :: ii, jj

  CHARACTER(*), PARAMETER :: testName = &
                             "test14: scalar vector spacetime spacetime"

  CALL RANDOM_NUMBER(val1)
  obj1 = NodalVariable(val1, TypeFEVariableScalar, TypeFEVariableSpaceTime)

  CALL RANDOM_NUMBER(val2)
  obj2 = NodalVariable(val2, TypeFEVariableVector, TypeFEVariableSpaceTime)

  ans = NodalVariable( &
        dim1=SIZE(wantval, 1), &
        dim2=SIZE(wantval, 2), &
        dim3=SIZE(wantval, 3), &
        rank=TypeFEVariableVector, &
        vartype=TypeFEVariableSpaceTime)

  DO jj = 1, SIZE(wantval, 3)
    DO ii = 1, SIZE(wantval, 2)
      wantval(:, ii, jj) = val2(:, ii, jj) / val1(ii, jj)
    END DO
  END DO

  want = NodalVariable( &
         wantval, TypeFEVariableVector, TypeFEVariableSpaceTime)

  CALL Division_(obj2, obj1, ans)

  isok = ans .EQ. want

  CALL OK(isok, testName)
END SUBROUTINE test14

END PROGRAM main
