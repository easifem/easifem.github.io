!> author: Vikas Sharma, Ph. D.
! date: 2024-06-01
! summary: testing  lis_vector_set_values4

PROGRAM main

USE GlobalData, ONLY: I4B, INT64, DFP, LGT
USE Test_Method, ONLY: OK
USE ReallocateUtility, ONLY: Reallocate
USE ApproxUtility, ONLY: SOFTEQ
USE Display_Method, ONLY: Display
USE String_Class, ONLY: String

#include "lisf.h"

INTEGER(I4B) :: ierr, i, n
INTEGER(INT64) :: v
REAL(DFP), ALLOCATABLE :: values(:)
INTEGER(I4B), ALLOCATABLE :: indx(:)
REAL(DFP), PARAMETER :: tol = 1.0E-5
REAL(DFP), ALLOCATABLE :: found(:), want(:)
TYPE(String) :: msg
LOGICAL(LGT) :: isok

n = 4
CALL lis_initialize(ierr)

CALL lis_vector_create(0, v, ierr)
CALL lis_vector_set_size(v, 0, n, ierr)

DO i = 1, n
  CALL lis_vector_set_value(LIS_INS_VALUE, i, DBLE(i), v, ierr)
END DO

values = [10.0, 20.0]
indx = [3, 4]

CALL lis_vector_set_values3(LIS_ADD_VALUE, 3_I4B, 2_I4B, values, &
                            v, 2.0_DFP, ierr)

CALL Reallocate(found, 2, want, 2)

CALL lis_vector_get_value(v, indx(1), found(1), ierr)
CALL lis_vector_get_value(v, indx(2), found(2), ierr)
want(1:2) = [23, 44]
isok = ALL((SOFTEQ(found, want, tol)))
msg = "lis_vector_set_values3"
CALL OK(isok, msg%chars())
IF (.NOT. isok) THEN
  CALL Display(found, "found")
  CALL Display(want, "want")
END IF

CALL lis_vector_set_values3(LIS_INS_VALUE, 3_I4B, 2_I4B, values, &
                            v, 2.0_DFP, ierr)

CALL lis_vector_get_value(v, indx(1), found(1), ierr)
CALL lis_vector_get_value(v, indx(2), found(2), ierr)
want(1:2) = [20, 40]
isok = ALL((SOFTEQ(found, want, tol)))
msg = "lis_vector_set_values3"
CALL OK(isok, msg%chars())
IF (.NOT. isok) THEN
  CALL Display(found, "found")
  CALL Display(want, "want")
END IF

CALL CHKERR(ierr)

CALL lis_vector_destroy(v, ierr)
CALL lis_finalize(ierr)

END PROGRAM main
