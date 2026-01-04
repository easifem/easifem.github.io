!> author: Vikas Sharma, Ph. D.
! date: 2025-12-28
! This example tests division operator.
! obj1 is matrix
! obj2 is matrix

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
  REAL(DFP) :: val1(2, 2), val2(2, 2), wantval(2, 2)

  CHARACTER(*), PARAMETER :: testName = &
                             "test1: Matrix Matrix constant constant"

  CALL RANDOM_NUMBER(val1)
  obj1 = NodalVariable(val1, TypeFEVariableMatrix, TypeFEVariableConstant)

  CALL RANDOM_NUMBER(val2)
  obj2 = NodalVariable(val2, TypeFEVariableMatrix, TypeFEVariableConstant)

  ans = NodalVariable( &
        nrow=SIZE(wantval, 1), &
        ncol=SIZE(wantval, 2), &
        rank=TypeFEVariableMatrix, &
        varType=TypeFEVariableConstant)

  wantval = val1 / val2
  want = NodalVariable(wantval, TypeFEVariableMatrix, TypeFEVariableConstant)

  CALL Division_(obj1, obj2, ans)
  isok = ans .EQ. want

  CALL OK(isok, testName)
END SUBROUTINE test1

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test2
  TYPE(FEVariable_) :: obj1, obj2, ans, want
  REAL(DFP) :: val1(2, 3), val2(2, 3, 4), wantval(2, 3, 4)
  INTEGER(I4B) :: ii
  LOGICAL(LGT) :: isok

  CHARACTER(*), PARAMETER :: testName = &
                             "test2: Matrix Matrix constant space"
  CALL RANDOM_NUMBER(val1)
  obj1 = NodalVariable(val1, TypeFEVariableMatrix, TypeFEVariableConstant)

  CALL RANDOM_NUMBER(val2)
  obj2 = NodalVariable(val2, TypeFEVariableMatrix, TypeFEVariableSpace)

  ans = NodalVariable( &
        dim1=SIZE(wantval, 1), &
        dim2=SIZE(wantval, 2), &
        dim3=SIZE(wantval, 3), &
        rank=TypeFEVariableMatrix, &
        varType=TypeFEVariableSpace)

  DO ii = 1, SIZE(wantval, 3)
    wantval(:, :, ii) = val1 / val2(:, :, ii)
  END DO

  want = NodalVariable(wantval, TypeFEVariableMatrix, TypeFEVariableSpace)

  CALL Division_(obj1, obj2, ans)
  isok = ans .EQ. want

  CALL OK(isok, testName)
END SUBROUTINE test2

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test3
  TYPE(FEVariable_) :: obj1, obj2, ans, want
  LOGICAL(LGT) :: isok
  REAL(DFP) :: val1(2, 3), val2(2, 3, 4), wantval(2, 3, 4)
  INTEGER(I4B) :: ii
  CHARACTER(*), PARAMETER :: testName = &
                             "test3: Matrix Matrix constant time"

  CALL RANDOM_NUMBER(val1)
  obj1 = NodalVariable(val1, TypeFEVariableMatrix, TypeFEVariableConstant)

  CALL RANDOM_NUMBER(val2)
  obj2 = NodalVariable(val2, TypeFEVariableMatrix, TypeFEVariableTime)

  ans = NodalVariable( &
        dim1=SIZE(wantval, 1), &
        dim2=SIZE(wantval, 2), &
        dim3=SIZE(wantval, 3), &
        rank=TypeFEVariableMatrix, &
        varType=TypeFEVariableTime)

  DO ii = 1, SIZE(wantval, 3)
    wantval(:, :, ii) = val1 / val2(:, :, ii)
  END DO

  want = NodalVariable(wantval, TypeFEVariableMatrix, TypeFEVariableTime)

  CALL Division_(obj1, obj2, ans)
  isok = ans .EQ. want

  CALL OK(isok, testName)
END SUBROUTINE test3

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test4
  TYPE(FEVariable_) :: obj1, obj2, ans, want
  REAL(DFP) :: val1(2, 3), val2(2, 3, 4, 5), wantval(2, 3, 4, 5)
  INTEGER(I4B) :: ii, jj
  LOGICAL(LGT) :: isok

  CHARACTER(*), PARAMETER :: testName = &
                             "test4: Matrix Matrix constant spacetime"

  CALL RANDOM_NUMBER(val1)
  obj1 = NodalVariable(val1, TypeFEVariableMatrix, TypeFEVariableConstant)

  CALL RANDOM_NUMBER(val2)
  obj2 = NodalVariable(val2, TypeFEVariableMatrix, TypeFEVariableSpaceTime)

  ans = NodalVariable( &
        dim1=SIZE(wantval, 1), &
        dim2=SIZE(wantval, 2), &
        dim3=SIZE(wantval, 3), &
        dim4=SIZE(wantval, 4), &
        rank=TypeFEVariableMatrix, &
        vartype=TypeFEVariableSpaceTime)

  DO jj = 1, SIZE(wantval, 4)
    DO ii = 1, SIZE(wantval, 3)
      wantval(:, :, ii, jj) = val1 / val2(:, :, ii, jj)
    END DO
  END DO

  want = NodalVariable( &
         wantval, TypeFEVariableMatrix, TypeFEVariableSpaceTime)

  CALL Division_(obj1, obj2, ans)
  isok = ans .EQ. want

  CALL OK(isok, testName)
END SUBROUTINE test4

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test5
  TYPE(FEVariable_) :: obj1, obj2, ans, want
  REAL(DFP) :: val1(2, 3, 4), val2(2, 3), wantval(2, 3, 4)
  INTEGER(I4B) :: ii
  LOGICAL(LGT) :: isok

  CHARACTER(*), PARAMETER :: testName = &
                             "test5: Matrix Matrix space constant"

  CALL RANDOM_NUMBER(val1)
  obj1 = NodalVariable(val1, TypeFEVariableMatrix, TypeFEVariableSpace)

  CALL RANDOM_NUMBER(val2)
  obj2 = NodalVariable(val2, TypeFEVariableMatrix, TypeFEVariableConstant)

  ans = NodalVariable( &
        dim1=SIZE(val1, 1), &
        dim2=SIZE(val1, 2), &
        dim3=SIZE(val1, 3), &
        rank=TypeFEVariableMatrix, &
        vartype=TypeFEVariableSpace)

  DO ii = 1, SIZE(val1, 3)
    wantval(:, :, ii) = val1(:, :, ii) / val2(:, :)
  END DO

  want = NodalVariable( &
         wantval, TypeFEVariableMatrix, TypeFEVariableSpace)

  CALL Division_(obj1, obj2, ans)
  isok = ans .EQ. want

  CALL OK(isok, testName)
END SUBROUTINE test5

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test6
  TYPE(FEVariable_) :: obj1, obj2, ans, want
  REAL(DFP) :: val2(2, 3, 4), val1(2, 3, 4), wantval(2, 3, 4)
  LOGICAL(LGT) :: isok

  CHARACTER(*), PARAMETER :: testName = &
                             "test6: Matrix Matrix space space"

  CALL RANDOM_NUMBER(val1)
  obj1 = NodalVariable(val1, TypeFEVariableMatrix, TypeFEVariableSpace)

  CALL RANDOM_NUMBER(val2)
  obj2 = NodalVariable(val2, TypeFEVariableMatrix, TypeFEVariableSpace)

  ans = NodalVariable( &
        dim1=SIZE(val1, 1), &
        dim2=SIZE(val1, 2), &
        dim3=SIZE(val1, 3), &
        rank=TypeFEVariableMatrix, &
        vartype=TypeFEVariableSpace)

  wantval = val1 / val2
  want = NodalVariable( &
         wantval, TypeFEVariableMatrix, TypeFEVariableSpace)

  CALL Division_(obj1, obj2, ans)
  isok = ans .EQ. want

  CALL OK(isok, testName)
END SUBROUTINE test6

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test7
  TYPE(FEVariable_) :: obj1, obj2, ans, want
  REAL(DFP) :: val1(2, 3, 4), val2(2, 3, 4, 5), wantval(2, 3, 4, 5)
  INTEGER(I4B) :: ii, jj
  LOGICAL(LGT) :: isok

  CHARACTER(*), PARAMETER :: testName = &
                             "test7: Matrix Matrix space spacetime"

  CALL RANDOM_NUMBER(val1)
  obj1 = NodalVariable(val1, TypeFEVariableMatrix, TypeFEVariableSpace)

  CALL RANDOM_NUMBER(val2)
  obj2 = NodalVariable(val2, TypeFEVariableMatrix, TypeFEVariableSpaceTime)

  ans = NodalVariable( &
        dim1=SIZE(val2, 1), &
        dim2=SIZE(val2, 2), &
        dim3=SIZE(val2, 3), &
        dim4=SIZE(val2, 4), &
        rank=TypeFEVariableMatrix, &
        vartype=TypeFEVariableSpaceTime)

  DO jj = 1, SIZE(val2, 4)
    DO ii = 1, SIZE(val2, 3)
      wantval(:, :, ii, jj) = val1(:, :, ii) / val2(:, :, ii, jj)
    END DO
  END DO

  want = NodalVariable( &
         wantval, TypeFEVariableMatrix, TypeFEVariableSpaceTime)

  CALL Division_(obj1, obj2, ans)
  isok = ans .EQ. want

  CALL OK(isok, testName)
END SUBROUTINE test7

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test8
  TYPE(FEVariable_) :: obj1, obj2, ans, want
  REAL(DFP) :: val1(2, 3, 4), val2(2, 3), wantval(2, 3, 4)
  INTEGER(I4B) :: ii
  LOGICAL(LGT) :: isok

  CHARACTER(*), PARAMETER :: testName = &
                             "test8: Matrix Matrix time constant"

  CALL RANDOM_NUMBER(val1)
  obj1 = NodalVariable(val1, TypeFEVariableMatrix, TypeFEVariableTime)

  CALL RANDOM_NUMBER(val2)
  obj2 = NodalVariable(val2, TypeFEVariableMatrix, TypeFEVariableConstant)

  ans = NodalVariable( &
        dim1=SIZE(val1, 1), &
        dim2=SIZE(val1, 2), &
        dim3=SIZE(val1, 3), &
        rank=TypeFEVariableMatrix, &
        vartype=TypeFEVariableTime)

  DO ii = 1, SIZE(val1, 3)
    wantval(:, :, ii) = val1(:, :, ii) / val2(:, :)
  END DO

  want = NodalVariable( &
         wantval, TypeFEVariableMatrix, TypeFEVariableTime)

  CALL Division_(obj1, obj2, ans)
  isok = ans .EQ. want

  CALL OK(isok, testName)
END SUBROUTINE test8

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test9
  TYPE(FEVariable_) :: obj1, obj2, ans, want
  REAL(DFP) :: val1(2, 3, 4), val2(2, 3, 4), wantval(2, 3, 4)
  LOGICAL(LGT) :: isok

  CHARACTER(*), PARAMETER :: testName = &
                             "test9: Matrix Matrix time time"

  CALL RANDOM_NUMBER(val1)
  obj1 = NodalVariable(val1, TypeFEVariableMatrix, TypeFEVariableTime)

  CALL RANDOM_NUMBER(val2)
  obj2 = NodalVariable(val2, TypeFEVariableMatrix, TypeFEVariableTime)

  ans = NodalVariable( &
        dim1=SIZE(val1, 1), &
        dim2=SIZE(val1, 2), &
        dim3=SIZE(val1, 3), &
        rank=TypeFEVariableMatrix, &
        vartype=TypeFEVariableTime)

  wantval = val1 / val2

  want = NodalVariable( &
         wantval, TypeFEVariableMatrix, TypeFEVariableTime)

  CALL Division_(obj1, obj2, ans)

  isok = ans .EQ. want

  CALL OK(isok, testName)
END SUBROUTINE test9

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test10
  TYPE(FEVariable_) :: obj1, obj2, ans, want
  REAL(DFP) :: val1(2, 3, 5), val2(2, 3, 4, 5), wantval(2, 3, 4, 5)
  INTEGER(I4B) :: ii, jj
  LOGICAL(LGT) :: isok

  CHARACTER(*), PARAMETER :: testName = &
                             "test10: Matrix Matrix time spacetime"

  CALL RANDOM_NUMBER(val1)
  obj1 = NodalVariable(val1, TypeFEVariableMatrix, TypeFEVariableTime)

  CALL RANDOM_NUMBER(val2)
  obj2 = NodalVariable(val2, TypeFEVariableMatrix, TypeFEVariableSpaceTime)

  ans = NodalVariable( &
        dim1=SIZE(val2, 1), &
        dim2=SIZE(val2, 2), &
        dim3=SIZE(val2, 3), &
        dim4=SIZE(val2, 4), &
        rank=TypeFEVariableMatrix, &
        vartype=TypeFEVariableSpaceTime)

  DO jj = 1, SIZE(val2, 4)
    DO ii = 1, SIZE(val2, 3)
      wantval(:, :, ii, jj) = val1(:, :, jj) / val2(:, :, ii, jj)
    END DO
  END DO

  want = NodalVariable( &
         wantval, TypeFEVariableMatrix, TypeFEVariableSpaceTime)

  CALL Division_(obj1, obj2, ans)

  isok = ans .EQ. want

  CALL OK(isok, testName)
END SUBROUTINE test10

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test11
  TYPE(FEVariable_) :: obj1, obj2, ans, want
  REAL(DFP) :: val1(2, 3, 4, 5), val2(2, 3), wantval(2, 3, 4, 5)
  LOGICAL(LGT) :: isok
  INTEGER(I4B) :: ii, jj

  CHARACTER(*), PARAMETER :: testName = &
                             "test11: Matrix Matrix spacetime constant"

  CALL RANDOM_NUMBER(val1)
  obj1 = NodalVariable(val1, TypeFEVariableMatrix, TypeFEVariableSpaceTime)

  CALL RANDOM_NUMBER(val2)
  obj2 = NodalVariable(val2, TypeFEVariableMatrix, TypeFEVariableConstant)

  ans = NodalVariable( &
        dim1=SIZE(val1, 1), &
        dim2=SIZE(val1, 2), &
        dim3=SIZE(val1, 3), &
        dim4=SIZE(val1, 4), &
        rank=TypeFEVariableMatrix, &
        vartype=TypeFEVariableSpaceTime)

  DO jj = 1, SIZE(val1, 4)
    DO ii = 1, SIZE(val1, 3)
      wantval(:, :, ii, jj) = val1(:, :, ii, jj) / val2(:, :)
    END DO
  END DO

  want = NodalVariable( &
         wantval, TypeFEVariableMatrix, TypeFEVariableSpaceTime)

  CALL Division_(obj1, obj2, ans)

  isok = ans .EQ. want

  CALL OK(isok, testName)
END SUBROUTINE test11

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test12
  TYPE(FEVariable_) :: obj1, obj2, ans, want
  REAL(DFP) :: val1(2, 3, 4, 5), val2(2, 3, 4), wantval(2, 3, 4, 5)
  INTEGER(I4B) :: ii, jj
  LOGICAL(LGT) :: isok

  CHARACTER(*), PARAMETER :: testName = &
                             "test12: Matrix Matrix spacetime space"

  CALL RANDOM_NUMBER(val1)
  obj1 = NodalVariable(val1, TypeFEVariableMatrix, TypeFEVariableSpaceTime)

  CALL RANDOM_NUMBER(val2)
  obj2 = NodalVariable(val2, TypeFEVariableMatrix, TypeFEVariableSpace)

  ans = NodalVariable( &
        dim1=SIZE(val1, 1), &
        dim2=SIZE(val1, 2), &
        dim3=SIZE(val1, 3), &
        dim4=SIZE(val1, 4), &
        rank=TypeFEVariableMatrix, &
        vartype=TypeFEVariableSpaceTime)

  DO jj = 1, SIZE(val1, 4)
    DO ii = 1, SIZE(val1, 3)
      wantval(:, :, ii, jj) = val1(:, :, ii, jj) / val2(:, :, ii)
    END DO
  END DO

  want = NodalVariable( &
         wantval, TypeFEVariableMatrix, TypeFEVariableSpaceTime)

  CALL Division_(obj1, obj2, ans)

  isok = ans .EQ. want

  CALL OK(isok, testName)
END SUBROUTINE test12

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test13
  TYPE(FEVariable_) :: obj1, obj2, ans, want
  REAL(DFP) :: val1(2, 3, 4, 5), val2(2, 3, 5), wantval(2, 3, 4, 5)
  INTEGER(I4B) :: ii, jj
  LOGICAL(LGT) :: isok

  CHARACTER(*), PARAMETER :: testName = &
                             "test13: Matrix Matrix spacetime time"

  CALL RANDOM_NUMBER(val1)
  obj1 = NodalVariable(val1, TypeFEVariableMatrix, TypeFEVariableSpaceTime)

  CALL RANDOM_NUMBER(val2)
  obj2 = NodalVariable(val2, TypeFEVariableMatrix, TypeFEVariableTime)

  ans = NodalVariable( &
        dim1=SIZE(val1, 1), &
        dim2=SIZE(val1, 2), &
        dim3=SIZE(val1, 3), &
        dim4=SIZE(val1, 4), &
        rank=TypeFEVariableMatrix, &
        vartype=TypeFEVariableSpaceTime)

  DO jj = 1, SIZE(val1, 4)
    DO ii = 1, SIZE(val1, 3)
      wantval(:, :, ii, jj) = val1(:, :, ii, jj) / val2(:, :, jj)
    END DO
  END DO

  want = NodalVariable( &
         wantval, TypeFEVariableMatrix, TypeFEVariableSpaceTime)

  CALL Division_(obj1, obj2, ans)

  isok = ans .EQ. want

  CALL OK(isok, testName)
END SUBROUTINE test13

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test14
  TYPE(FEVariable_) :: obj1, obj2, ans, want
  REAL(DFP) :: val1(2, 3, 4, 5), val2(2, 3, 4, 5), wantval(2, 3, 4, 5)
  LOGICAL(LGT) :: isok

  CHARACTER(*), PARAMETER :: testName = &
                             "test14: Matrix Matrix spacetime spacetime"

  CALL RANDOM_NUMBER(val1)
  obj1 = NodalVariable(val1, TypeFEVariableMatrix, TypeFEVariableSpaceTime)

  CALL RANDOM_NUMBER(val2)
  obj2 = NodalVariable(val2, TypeFEVariableMatrix, TypeFEVariableSpaceTime)

  ans = NodalVariable( &
        dim1=SIZE(val1, 1), &
        dim2=SIZE(val1, 2), &
        dim3=SIZE(val1, 3), &
        dim4=SIZE(val1, 4), &
        rank=TypeFEVariableMatrix, &
        vartype=TypeFEVariableSpaceTime)

  wantval = val1 / val2

  want = NodalVariable( &
         wantval, TypeFEVariableMatrix, TypeFEVariableSpaceTime)

  CALL Division_(obj1, obj2, ans)

  isok = ans .EQ. want

  CALL OK(isok, testName)
END SUBROUTINE test14

END PROGRAM main
