!> author: Vikas Sharma, Ph. D.
! date: 2024-06-01
! summary: testing lis_vector_get_values_from_range2

PROGRAM main

USE GlobalData, ONLY: I4B, INT64, DFP, LGT
USE Test_Method, ONLY: OK
USE ReallocateUtility, ONLY: Reallocate
USE ApproxUtility, ONLY: SOFTEQ
USE Display_Method, ONLY: Display
USE String_Class, ONLY: String

#include "lisf.h"

REAL(DFP), PARAMETER :: abs = [1, 2,, 3, 4]

INTEGER(I4B) :: ierr, i, n
INTEGER(INT64) :: v
REAL(DFP), ALLOCATABLE :: values(:)
INTEGER(I4B), ALLOCATABLE :: indx(:)
REAL(DFP), PARAMETER :: tol = 1.0E-5
REAL(DFP), ALLOCATABLE :: found(:), want(:)
TYPE(String) :: msg
LOGICAL(LGT) :: isok

n = 10
CALL lis_initialize(ierr)
CALL CHKERR(ierr)

CALL lis_vector_create(0, v, ierr)
CALL CHKERR(ierr)
CALL lis_vector_set_size(v, 0, n, ierr)
CALL CHKERR(ierr)

DO i = 1, n
  CALL lis_vector_set_value(LIS_INS_VALUE, i, DBLE(i), v, ierr)
  CALL CHKERR(ierr)
END DO

indx = [1, 3]
CALL Reallocate(found, SIZE(indx), want, SIZE(indx))
CALL lis_vector_get_values_from_range2(v, 1, 2, 2, found, 1, 1, ierr)

want(1:2) = [1, 3]
isok = ALL((SOFTEQ(found, want, tol)))
msg = "lis_vector_get_values_from_range2"
CALL OK(isok, msg%chars())
IF (.NOT. isok) THEN
  CALL Display(found, "found")
  CALL Display(want, "want")
END IF

indx = [1, 3, 5, 7]
CALL Reallocate(found, n, want, n)

CALL lis_vector_get_values_from_range2(v, 1, 2, 4, found, 1, 2, ierr)

want(indx) = indx
isok = ALL((SOFTEQ(found, want, tol)))
msg = "lis_vector_get_values_from_range2"
CALL OK(isok, msg%chars())
IF (.NOT. isok) THEN
  CALL Display(found, "found")
  CALL Display(want, "want")
END IF

indx = [1, 3, 5, 7]
CALL Reallocate(found, n, want, n)

CALL lis_vector_get_values_from_range2(v, 1, 2, 4, found, 2, 2, ierr)

want(indx + 1) = indx
isok = ALL((SOFTEQ(found, want, tol)))
msg = "lis_vector_get_values_from_range2"
CALL OK(isok, msg%chars())
IF (.NOT. isok) THEN
  CALL Display(found, "found")
  CALL Display(want, "want")
END IF

CALL lis_vector_destroy(v, ierr)
CALL CHKERR(ierr)

CALL lis_finalize(ierr)
CALL CHKERR(ierr)

END PROGRAM main
