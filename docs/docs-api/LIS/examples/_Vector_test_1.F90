!> author: Vikas Sharma, Ph. D.
! date: 2024-06-01
! summary: testing  lis_vector_set_value

PROGRAM main

USE GlobalData, ONLY: I4B, INT64

#include "lisf.h"

INTEGER(I4B) :: ierr, i, n
INTEGER(INT64) :: v

n = 4
CALL lis_initialize(ierr)

CALL lis_vector_create(0, v, ierr)
CALL lis_vector_set_size(v, 0, n, ierr)

DO i = 1, n
  CALL lis_vector_set_value(LIS_INS_VALUE, i, DBLE(i), v, ierr)
END DO

CALL lis_vector_print(v, ierr)

CALL lis_vector_destroy(v, ierr)

CALL lis_finalize(ierr)

END PROGRAM main
