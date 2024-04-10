PROGRAM main
USE easifemBase
USE Kdtree2_Module
IMPLICIT NONE

TYPE(kdtree2), POINTER :: kd
REAL(DFP), ALLOCATABLE :: input_data(:, :)

! FUNCTION kdtree2_create(input_data, dim, sort, rearrange) RESULT(mr)
CALL Reallocate(input_data, 3, 100)
CALL RANDOM_NUMBER(input_data)

kd => kdtree2_create(input_data, sort=.FALSE., rearrange=.FALSE.)
! CALL kdtree2_destroy(kd)

END PROGRAM main
