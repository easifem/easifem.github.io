
PROGRAM main
USE GlobalData, ONLY: I4B, LGT, DFP
USE Display_Method
USE SortUtility
USE ReallocateUtility
USE Test_Method
USE Kdtree2_Module
IMPLICIT NONE
INTEGER(I4B), PARAMETER :: n = 10000, d = 3, num_run = 5, nn = 50
TYPE(kdtree2_), POINTER :: kd1
TYPE(kdtree2Result_), ALLOCATABLE :: res_tree(:), res_bforce(:)
INTEGER(I4B) :: ii, indx
INTEGER(I4B), ALLOCATABLE :: sort_indx(:)
REAL(DFP) :: areal, maxdeviation
LOGICAL(LGT) :: problem
REAL(DFP), ALLOCATABLE :: input_data(:, :), qv(:)
CALL Reallocate(input_data, d, n)
CALL RANDOM_NUMBER(input_data)
!! qv is query vector
CALL Reallocate(qv, d)
!! We will select qv randomly from input_data
kd1 => kdtree2_create(input_data, sort=.FALSE., rearrange=.FALSE.)
!! when sort is false the result will also be unsorted
!! but kdtree2_n_nearest_brute_force returs sorted results
ALLOCATE (res_tree(nn), res_bforce(nn), sort_indx(nn))
CALL Display('Comparing search of '//tostring(nn) &
             //' neighbors to brute force.')
DO ii = 1, num_run
  CALL RANDOM_NUMBER(areal)
  indx = FLOOR(areal * n) + 1
  qv = input_data(1:d, indx)
  res_tree(:)%idx = -666
  res_bforce(:)%idx = -777
  CALL kdtree2_n_nearest_brute_force(tp=kd1, qv=qv, nn=nn, &
                                     results=res_bforce)
  CALL kdtree2_n_nearest_around_point(tp=kd1, idxin=indx, correltime=-1, &
                                      nn=nn, results=res_tree)
  ! negative 1 correlation time will get all points.
  ! when sort is false the result will also be unsorted
  ! but kdtree2_n_nearest_brute_force returs sorted results
  CALL ArgHeapSort(res_tree(1:nn)%dis, sort_indx)
  maxdeviation = MAXVAL(ABS(res_tree(sort_indx)%dis - res_bforce(1:nn)%dis))
  problem = ANY(res_tree(sort_indx)%idx .NE. res_bforce(1:nn)%idx) .OR. &
            (maxdeviation .GT. 1.0E-8)
  CALL OK(.NOT. problem, "kdtree2_n_nearest_around_point(): ")
  IF (problem) THEN
    CALL Display('MISMATCH! @ : '//tostring(ii))
    CALL Display(res_tree(1:nn)%idx, "Tree indices: ")
    CALL Display(res_bforce(1:nn)%idx, "Brute indices: ")
    CALL Display(res_tree(1:nn)%dis - res_bforce(1:nn)%dis, &
                 "Tree-brute distances: ")
  END IF
END DO
CALL kdtree2_destroy(kd1)
END PROGRAM main
