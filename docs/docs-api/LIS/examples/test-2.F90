PROGRAM main
USE easifemBase
#include "lisf.h"

INTEGER :: ierr
LIS_INTEGER :: i, n
LIS_MATRIX :: A

n = 4
CALL lis_initialize(ierr)

CALL lis_matrix_create(0, A, ierr)
CALL lis_matrix_set_size(A, 0, n, ierr)

DO i = 1, n
  IF (i .GT. 1) THEN
    CALL lis_matrix_set_value(LIS_INS_VALUE, i, i - 1, 1.0_DFP, A, ierr)
  END IF

  IF (i .LT. n) THEN
    CALL lis_matrix_set_value(LIS_INS_VALUE, i, i + 1, 1.0_DFP, A, ierr)
  END IF

  CALL lis_matrix_set_value(LIS_INS_VALUE, i, i, 2.0_DFP, A, ierr)
END DO

CALL lis_matrix_set_type(A, LIS_MATRIX_CSR, ierr)
CALL lis_matrix_assemble(A, ierr)

CALL lis_matrix_destroy(A, ierr)

CALL lis_finalize(ierr)
END PROGRAM main
