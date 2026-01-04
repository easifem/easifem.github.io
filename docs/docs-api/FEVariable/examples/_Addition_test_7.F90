!> author: Vikas Sharma, Ph. D.
! date: 2025-12-28
! This example tests addition operator.
! obj1 Matrix
! obj2 Scalar

#define OP +

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
  REAL(DFP) :: val1, val2(2, 3), wantval(2, 3)
  LOGICAL(LGT) :: isok

  CHARACTER(*), PARAMETER :: testName = &
                             "test1: scalar Matrix constant constant"
  CALL RANDOM_NUMBER(val1)
  obj1 = NodalVariable(val1, TypeFEVariableScalar, TypeFEVariableConstant)

  CALL RANDOM_NUMBER(val2)
  obj2 = NodalVariable(val2, TypeFEVariableMatrix, TypeFEVariableConstant)

  ans = NodalVariable( &
        nrow=SIZE(wantval, 1), &
        ncol=SIZE(wantval, 2), &
        rank=TypeFEVariableMatrix, &
        vartype=TypeFEVariableConstant)

  wantval = val2 OP val1
  want = NodalVariable(wantval, TypeFEVariableMatrix, TypeFEVariableConstant)

  CALL Addition_(obj2, obj1, ans)
  isok = ans .EQ. want

  CALL OK(isok, testName)
END SUBROUTINE test1

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test2
  TYPE(FEVariable_) :: obj1, obj2, ans, want
  REAL(DFP) :: val1, val2(2, 3, 4), wantval(2, 3, 4)
  INTEGER(I4B) :: ii
  LOGICAL(LGT) :: isok

  CHARACTER(*), PARAMETER :: testName = &
                             "test2: scalar Matrix constant space"

  CALL RANDOM_NUMBER(val1)
  obj1 = NodalVariable(val1, TypeFEVariableScalar, TypeFEVariableConstant)

  CALL RANDOM_NUMBER(val2)
  obj2 = NodalVariable(val2, TypeFEVariableMatrix, TypeFEVariableSpace)

  ans = NodalVariable( &
        dim1=SIZE(wantval, 1), &
        dim2=SIZE(wantval, 2), &
        dim3=SIZE(wantval, 3), &
        rank=TypeFEVariableMatrix, &
        vartype=TypeFEVariableSpace)

  wantval = val2 OP val1
  want = NodalVariable(wantval, TypeFEVariableMatrix, TypeFEVariableSpace)

  CALL Addition_(obj2, obj1, ans)
  isok = ans .EQ. want

  CALL OK(isok, testName)
END SUBROUTINE test2

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test3
  TYPE(FEVariable_) :: obj1, obj2, ans, want
  REAL(DFP) :: val1, val2(2, 3, 4), wantval(2, 3, 4)
  LOGICAL(LGT) :: isok

  CHARACTER(*), PARAMETER :: testName = &
                             "test3: scalar Matrix constant time"

  CALL RANDOM_NUMBER(val1)
  obj1 = NodalVariable(val1, TypeFEVariableScalar, TypeFEVariableConstant)

  CALL RANDOM_NUMBER(val2)
  obj2 = NodalVariable(val2, TypeFEVariableMatrix, TypeFEVariableTime)

  ans = NodalVariable( &
        dim1=SIZE(wantval, 1), &
        dim2=SIZE(wantval, 2), &
        dim3=SIZE(wantval, 3), &
        rank=TypeFEVariableMatrix, &
        vartype=TypeFEVariableTime)

  wantval = val2 OP val1
  want = NodalVariable(wantval, TypeFEVariableMatrix, TypeFEVariableTime)

  CALL Addition_(obj2, obj1, ans)
  isok = ans .EQ. want

  CALL OK(isok, testName)
END SUBROUTINE test3

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test4
  TYPE(FEVariable_) :: obj1, obj2, ans, want
  REAL(DFP) :: val1, val2(2, 3, 4, 5), wantval(2, 3, 4, 5)
  LOGICAL(LGT) :: isok

  CHARACTER(*), PARAMETER :: testName = &
                             "test4: scalar Matrix constant spacetime"

  CALL RANDOM_NUMBER(val1)
  obj1 = NodalVariable(val1, TypeFEVariableScalar, TypeFEVariableConstant)

  CALL RANDOM_NUMBER(val2)
  obj2 = NodalVariable(val2, TypeFEVariableMatrix, TypeFEVariableSpaceTime)

  ans = NodalVariable( &
        dim1=SIZE(wantval, 1), &
        dim2=SIZE(wantval, 2), &
        dim3=SIZE(wantval, 3), &
        dim4=SIZE(wantval, 4), &
        rank=TypeFEVariableMatrix, &
        vartype=TypeFEVariableSpaceTime)

  wantval = val2 OP val1
  want = NodalVariable( &
         wantval, TypeFEVariableMatrix, TypeFEVariableSpaceTime)

  CALL Addition_(obj2, obj1, ans)
  isok = ans .EQ. want

  CALL OK(isok, testName)
END SUBROUTINE test4

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test5
  TYPE(FEVariable_) :: obj1, obj2, ans, want
  REAL(DFP) :: val1(2), val2(1, 3), wantval(1, 3, 2)
  INTEGER(I4B) :: ii
  LOGICAL(LGT) :: isok

  CHARACTER(*), PARAMETER :: testName = &
                             "test5: scalar Matrix space constant"

  CALL RANDOM_NUMBER(val1)
  obj1 = NodalVariable(val1, TypeFEVariableScalar, TypeFEVariableSpace)

  CALL RANDOM_NUMBER(val2)
  obj2 = NodalVariable(val2, TypeFEVariableMatrix, TypeFEVariableConstant)

  ans = NodalVariable( &
        dim1=SIZE(wantval, 1), &
        dim2=SIZE(wantval, 2), &
        dim3=SIZE(wantval, 3), &
        rank=TypeFEVariableMatrix, &
        vartype=TypeFEVariableSpace)

  DO ii = 1, SIZE(wantval, 3)
    wantval(:, :, ii) = val2(:, :) OP val1(ii)
  END DO

  want = NodalVariable( &
         wantval, TypeFEVariableMatrix, TypeFEVariableSpace)

  CALL Addition_(obj2, obj1, ans)
  isok = ans .EQ. want

  CALL OK(isok, testName)
END SUBROUTINE test5

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test6
  TYPE(FEVariable_) :: obj1, obj2, ans, want
  REAL(DFP) :: val1(2), val2(1, 3, 2), wantval(1, 3, 2)
  INTEGER(I4B) :: ii
  LOGICAL(LGT) :: isok

  CHARACTER(*), PARAMETER :: testName = &
                             "test6: scalar Matrix space space"

  CALL RANDOM_NUMBER(val1)
  obj1 = NodalVariable(val1, TypeFEVariableScalar, TypeFEVariableSpace)

  CALL RANDOM_NUMBER(val2)
  obj2 = NodalVariable(val2, TypeFEVariableMatrix, TypeFEVariableSpace)

  ans = NodalVariable( &
        dim1=SIZE(wantval, 1), &
        dim2=SIZE(wantval, 2), &
        dim3=SIZE(wantval, 3), &
        rank=TypeFEVariableMatrix, &
        vartype=TypeFEVariableSpace)

  DO ii = 1, SIZE(wantval, 3)
    wantval(:, :, ii) = val2(:, :, ii) OP val1(ii)
  END DO

  want = NodalVariable( &
         wantval, TypeFEVariableMatrix, TypeFEVariableSpace)

  CALL Addition_(obj2, obj1, ans)
  isok = ans .EQ. want

  CALL OK(isok, testName)
END SUBROUTINE test6

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test7
  TYPE(FEVariable_) :: obj1, obj2, ans, want
  REAL(DFP) :: val1(2), val2(1, 3, 2, 4), wantval(1, 3, 2, 4)
  INTEGER(I4B) :: ii, jj
  LOGICAL(LGT) :: isok

  CHARACTER(*), PARAMETER :: testName = &
                             "test7: scalar Matrix space spacetime"

  CALL RANDOM_NUMBER(val1)
  obj1 = NodalVariable(val1, TypeFEVariableScalar, TypeFEVariableSpace)

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
      wantval(:, :, ii, jj) = val2(:, :, ii, jj) OP val1(ii)
    END DO
  END DO

  want = NodalVariable( &
         wantval, TypeFEVariableMatrix, TypeFEVariableSpaceTime)

  CALL Addition_(obj2, obj1, ans)
  isok = ans .EQ. want

  CALL OK(isok, testName)
END SUBROUTINE test7

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test8
  TYPE(FEVariable_) :: obj1, obj2, ans, want
  REAL(DFP) :: val1(2), val2(3, 4), wantval(3, 4, 2)
  INTEGER(I4B) :: ii
  LOGICAL(LGT) :: isok

  CHARACTER(*), PARAMETER :: testName = &
                             "test8: scalar Matrix time constant"

  CALL RANDOM_NUMBER(val1)
  obj1 = NodalVariable(val1, TypeFEVariableScalar, TypeFEVariableTime)

  CALL RANDOM_NUMBER(val2)
  obj2 = NodalVariable(val2, TypeFEVariableMatrix, TypeFEVariableConstant)

  ans = NodalVariable( &
        dim1=SIZE(wantval, 1), &
        dim2=SIZE(wantval, 2), &
        dim3=SIZE(wantval, 3), &
        rank=TypeFEVariableMatrix, &
        vartype=TypeFEVariableTime)

  DO ii = 1, SIZE(wantval, 3)
    wantval(:, :, ii) = val2(:, :) OP val1(ii)
  END DO

  want = NodalVariable( &
         wantval, TypeFEVariableMatrix, TypeFEVariableTime)

  CALL Addition_(obj2, obj1, ans)
  isok = ans .EQ. want

  CALL OK(isok, testName)
END SUBROUTINE test8

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test9
  TYPE(FEVariable_) :: obj1, obj2, ans, want
  REAL(DFP) :: val1(2), val2(1, 3, 2), wantval(1, 3, 2)
  INTEGER(I4B) :: ii
  LOGICAL(LGT) :: isok
  CHARACTER(*), PARAMETER :: testName = &
                             "test9: scalar Matrix time time"

  CALL RANDOM_NUMBER(val1)
  obj1 = NodalVariable(val1, TypeFEVariableScalar, TypeFEVariableTime)

  CALL RANDOM_NUMBER(val2)
  obj2 = NodalVariable(val2, TypeFEVariableMatrix, TypeFEVariableTime)

  ans = NodalVariable( &
        dim1=SIZE(wantval, 1), &
        dim2=SIZE(wantval, 2), &
        dim3=SIZE(wantval, 3), &
        rank=TypeFEVariableMatrix, &
        vartype=TypeFEVariableTime)

  DO ii = 1, SIZE(wantval, 3)
    wantval(:, :, ii) = val2(:, :, ii) OP val1(ii)
  END DO

  want = NodalVariable( &
         wantval, TypeFEVariableMatrix, TypeFEVariableTime)

  CALL Addition_(obj2, obj1, ans)

  isok = ans .EQ. want

  CALL OK(isok, testName)
END SUBROUTINE test9

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test10
  TYPE(FEVariable_) :: obj1, obj2, ans, want
  REAL(DFP) :: val1(1), val2(2, 3, 4, 1), wantval(2, 3, 4, 1)
  INTEGER(I4B) :: ii, jj
  LOGICAL(LGT) :: isok

  CHARACTER(*), PARAMETER :: testName = &
                             "test10: scalar Matrix time spacetime"

  CALL RANDOM_NUMBER(val1)
  obj1 = NodalVariable(val1, TypeFEVariableScalar, TypeFEVariableTime)

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
    DO ii = 1, SIZE(val2, 3)
      wantval(:, :, ii, jj) = val2(:, :, ii, jj) OP val1(jj)
    END DO
  END DO

  want = NodalVariable( &
         wantval, TypeFEVariableMatrix, TypeFEVariableSpaceTime)

  CALL Addition_(obj2, obj1, ans)

  isok = ans .EQ. want

  CALL OK(isok, testName)
END SUBROUTINE test10

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test11
  TYPE(FEVariable_) :: obj1, obj2, ans, want
  REAL(DFP) :: val1(2, 1), val2(3, 4), wantval(3, 4, 2, 1)
  INTEGER(I4B) :: ii, jj
  LOGICAL(LGT) :: isok

  CHARACTER(*), PARAMETER :: testName = &
                             "test11: scalar Matrix spacetime constant"

  CALL RANDOM_NUMBER(val1)
  obj1 = NodalVariable(val1, TypeFEVariableScalar, TypeFEVariableSpaceTime)

  CALL RANDOM_NUMBER(val2)
  obj2 = NodalVariable(val2, TypeFEVariableMatrix, TypeFEVariableConstant)

  ans = NodalVariable( &
        dim1=SIZE(wantval, 1), &
        dim2=SIZE(wantval, 2), &
        dim3=SIZE(wantval, 3), &
        dim4=SIZE(wantval, 4), &
        rank=TypeFEVariableMatrix, &
        vartype=TypeFEVariableSpaceTime)

  DO jj = 1, SIZE(wantval, 4)
    DO ii = 1, SIZE(wantval, 3)
      wantval(:, :, ii, jj) = val2(:, :) OP val1(ii, jj)
    END DO
  END DO

  want = NodalVariable( &
         wantval, TypeFEVariableMatrix, TypeFEVariableSpaceTime)

  CALL Addition_(obj2, obj1, ans)

  isok = ans .EQ. want

  CALL OK(isok, testName)
END SUBROUTINE test11

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test12
  TYPE(FEVariable_) :: obj1, obj2, ans, want
  REAL(DFP) :: val1(2, 3), val2(1, 3, 2), wantval(1, 3, 2, 3)
  INTEGER(I4B) :: ii, jj
  LOGICAL(LGT) :: isok

  CHARACTER(*), PARAMETER :: testName = &
                             "test12: scalar Matrix spacetime space"

  CALL RANDOM_NUMBER(val1)
  obj1 = NodalVariable(val1, TypeFEVariableScalar, TypeFEVariableSpaceTime)

  CALL RANDOM_NUMBER(val2)
  obj2 = NodalVariable(val2, TypeFEVariableMatrix, TypeFEVariableSpace)

  ans = NodalVariable( &
        dim1=SIZE(wantval, 1), &
        dim2=SIZE(wantval, 2), &
        dim3=SIZE(wantval, 3), &
        dim4=SIZE(wantval, 4), &
        rank=TypeFEVariableMatrix, &
        vartype=TypeFEVariableSpaceTime)

  DO jj = 1, SIZE(wantval, 4)
    DO ii = 1, SIZE(wantval, 3)
      wantval(:, :, ii, jj) = val2(:, :, ii) OP val1(ii, jj)
    END DO
  END DO

  want = NodalVariable( &
         wantval, TypeFEVariableMatrix, TypeFEVariableSpaceTime)

  CALL Addition_(obj2, obj1, ans)

  isok = ans .EQ. want

  CALL OK(isok, testName)
END SUBROUTINE test12

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test13
  TYPE(FEVariable_) :: obj1, obj2, ans, want
  REAL(DFP) :: val1(2, 3), val2(2, 4, 3), wantval(2, 4, 2, 3)
  INTEGER(I4B) :: ii, jj
  LOGICAL(LGT) :: isok

  CHARACTER(*), PARAMETER :: testName = &
                             "test13: scalar Matrix spacetime time"

  CALL RANDOM_NUMBER(val1)
  obj1 = NodalVariable(val1, TypeFEVariableScalar, TypeFEVariableSpaceTime)

  CALL RANDOM_NUMBER(val2)
  obj2 = NodalVariable(val2, TypeFEVariableMatrix, TypeFEVariableTime)

  ans = NodalVariable( &
        dim1=SIZE(wantval, 1), &
        dim2=SIZE(wantval, 2), &
        dim3=SIZE(wantval, 3), &
        dim4=SIZE(wantval, 4), &
        rank=TypeFEVariableMatrix, &
        vartype=TypeFEVariableSpaceTime)

  DO jj = 1, SIZE(wantval, 4)
    DO ii = 1, SIZE(wantval, 3)
      wantval(:, :, ii, jj) = val2(:, :, jj) OP val1(ii, jj)
    END DO
  END DO

  want = NodalVariable( &
         wantval, TypeFEVariableMatrix, TypeFEVariableSpaceTime)

  CALL Addition_(obj2, obj1, ans)

  isok = ans .EQ. want

  CALL OK(isok, testName)
END SUBROUTINE test13

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test14
  TYPE(FEVariable_) :: obj1, obj2, ans, want
  REAL(DFP) :: val1(2, 3), val2(3, 4, 2, 3), wantval(3, 4, 2, 3)
  LOGICAL(LGT) :: isok
  INTEGER(I4B) :: ii, jj

  CHARACTER(*), PARAMETER :: testName = &
                             "test14: scalar Matrix spacetime spacetime"

  CALL RANDOM_NUMBER(val1)
  obj1 = NodalVariable(val1, TypeFEVariableScalar, TypeFEVariableSpaceTime)

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
      wantval(:, :, ii, jj) = val2(:, :, ii, jj) OP val1(ii, jj)
    END DO
  END DO

  want = NodalVariable( &
         wantval, TypeFEVariableMatrix, TypeFEVariableSpaceTime)

  CALL Addition_(obj2, obj1, ans)

  isok = ans .EQ. want

  CALL OK(isok, testName)
END SUBROUTINE test14

END PROGRAM main

#undef OP
