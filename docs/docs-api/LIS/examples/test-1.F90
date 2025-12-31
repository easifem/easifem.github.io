!> author: Vikas Sharma, Ph. D.
! date: 2025-12-08
! summary: Initiate LIS vector and set values

PROGRAM main
! USE easifemBase
#include "lisf.h"

INTEGER :: ierr
LIS_INTEGER :: i, n
LIS_VECTOR :: v

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
