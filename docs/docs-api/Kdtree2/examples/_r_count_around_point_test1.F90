
PROGRAM main
USE GlobalData, ONLY: I4B, LGT, DFP
USE Display_Method
USE ReallocateUtility
USE Kdtree2_Module
USE CPUTime_Class
IMPLICIT NONE
INTEGER(I4B), PARAMETER :: n = 1000000, d = 3, num_run = 50
TYPE(kdtree2), POINTER :: kd1
INTEGER(I4B) :: ii, indx, nn
REAL(DFP) :: areal, ttime
REAL(DFP), ALLOCATABLE :: input_data(:, :), qv(:)
TYPE(CPUTime_) :: ctime
CALL Reallocate(input_data, d, n)
CALL RANDOM_NUMBER(input_data)
!! qv is query vector
CALL Reallocate(qv, d)
!! We will select qv randomly from input_data
kd1 => kdtree2_create(input_data, sort=.FALSE., rearrange=.TRUE.)
ttime = 0
DO ii = 1, num_run
  CALL RANDOM_NUMBER(areal)
  indx = FLOOR(areal * n) + 1
  qv = input_data(1:d, indx)
  CALL ctime%SetStartTime()
  nn = kdtree2_r_count_around_point(tp=kd1, idxin=indx,  &
  correltime=-1, r2=0.1_DFP)
  CALL ctime%SetEndTime()
  ttime = ttime + ctime%GetTime()
  CALL Display(ctime%GetTime(), "time in each run: ")
END DO
CALL Display(ttime / REAL(num_run, DFP), "average time : ")
CALL kdtree2_destroy(kd1)
END PROGRAM main
