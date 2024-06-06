PROGRAM main
USE GlobalData
USE BaseType, ONLY: RealVector_
USE RealVector_Method

IMPLICIT NONE

TYPE(RealVector_), ALLOCATABLE :: obj(:)

CALL Initiate(obj, [5, 5])
CALL Display(obj, "test1")

END PROGRAM main
