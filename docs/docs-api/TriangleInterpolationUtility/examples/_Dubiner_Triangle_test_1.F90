PROGRAM main
USE easifembase
USE easifemClasses
IMPLICIT NONE
REAL(dfp), ALLOCATABLE :: xij(:, :), avec(:)
INTEGER(i4b) :: ii, jj, cnt, n
REAL(dfp), ALLOCATABLE :: ans(:, :)
INTEGER(i4b) :: order
TYPE(VTKPlot_) :: aplot
CHARACTER(len=*), PARAMETER :: fname = "./results/"
n = 51
CALL reallocate(avec, n)
CALL reallocate(xij, 2, INT((n + 1) * (n + 2) / 2))
avec = linspace(0.0_DFP, 1.0_DFP, n)
cnt = 0
DO ii = 1, n
  DO jj = 1, n - ii + 1
    cnt = cnt + 1
    xij(1, cnt) = avec(ii)
    xij(2, cnt) = avec(jj)
  END DO
END DO
order = 1
ans = Dubiner_Triangle(&
  & order=order, xij=xij, &
  & refTriangle="UNIT")
DO ii = 1, SIZE(ans, 2)
  CALL aplot%scatter3D(x=xij(1, :), y=xij(2, :), z=ans(:, ii), &
    & filename=fname//"Dubiner( order="//tostring(order)// &
      & " )"//tostring(ii)// &
      & ".vtp", &
    & label="P")
END DO
END PROGRAM main
