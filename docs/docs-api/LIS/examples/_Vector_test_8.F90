!> author: Vikas Sharma, Ph. D.
! date: 2024-06-01
! summary: testing  lis_vector_set_values7

PROGRAM main

USE GlobalData, ONLY: I4B, INT64, DFP, LGT
USE Test_Method, ONLY: OK
USE ReallocateUtility, ONLY: Reallocate
USE ApproxUtility, ONLY: SOFTEQ
USE Display_Method, ONLY: Display
USE String_Class, ONLY: String

#include "lisf.h"

INTEGER(I4B) :: ierr, i, n
INTEGER(INT64) :: v, w
REAL(DFP), ALLOCATABLE :: values(:)
INTEGER(I4B), ALLOCATABLE :: indx(:)
REAL(DFP), PARAMETER :: tol = 1.0E-5
REAL(DFP), ALLOCATABLE :: found(:), want(:)
TYPE(String) :: msg
LOGICAL(LGT) :: isok

n = 4
CALL lis_initialize(ierr)
CALL CHKERR(ierr)

CALL lis_vector_create(0, v, ierr)
CALL CHKERR(ierr)

CALL lis_vector_create(0, w, ierr)
CALL CHKERR(ierr)

CALL lis_vector_set_size(v, 0, n, ierr)
CALL CHKERR(ierr)

CALL lis_vector_set_size(w, 0, 2 * n, ierr)
CALL CHKERR(ierr)

DO i = 1, n
  CALL lis_vector_set_value(LIS_INS_VALUE, i, DBLE(i), v, ierr)
  CALL CHKERR(ierr)
END DO

! w(1:2n:2) = v
CALL lis_vector_set_values7(LIS_INS_VALUE, 1_I4B, 2_I4B, n, v, &
                            w, 1.0_DFP, ierr)
CALL CHKERR(ierr)

CALL lis_vector_print(w, ierr)
CALL CHKERR(ierr)

CALL lis_vector_destroy(v, ierr)
CALL CHKERR(ierr)

CALL lis_finalize(ierr)
CALL CHKERR(ierr)

END PROGRAM main
