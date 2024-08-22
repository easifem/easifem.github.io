PROGRAM main
USE GlobalData
USE ProductUtility
USE Test_Method
USE ApproxUtility
USE ReallocateUtility

IMPLICIT NONE

REAL(DFP), ALLOCATABLE :: v1(:), v2(:), found(:, :), want(:, :)
LOGICAL(LGT) :: isok
CHARACTER(*), PARAMETER :: testname = "Outerprod"
INTEGER(I4B) :: nrow, ncol

v1 = [1]
v2 = [1, 2]
CALL Reallocate(want, 1, 2)
want(1, :) = [1, 2]
found = OuterProd(v1, v2)
isok = ALL(found.approxeq.want)
CALL OK(isok, testname)

found = 0
CALL OuterProd_(a=v1, b=v2, anscoeff=0.0_DFP, scale=1.0_DFP, ans=found, &
                nrow=nrow, ncol=ncol)
isok = ALL(found.approxeq.want)
CALL OK(isok, testname)

v1 = [1, 2]
v2 = [1, 2, 3]
CALL Reallocate(want, 2, 3)
want(1, :) = [1, 2, 3]
want(2, :) = [2, 4, 6]
found = outerprod(v1, v2)
isok = ALL(found.approxeq.want)
CALL OK(isok, testname)

END PROGRAM main
