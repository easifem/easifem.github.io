PROGRAM main
USE GlobalData
USE BaseType, ONLY: RealVector_
USE RealVector_Method

IMPLICIT NONE

TYPE(RealVector_), ALLOCATABLE :: obj(:)

! Generate several random vectors by using [Random_Number](Random_Number.md).

CALL RANDOM_NUMBER(obj, [3, 4, 5])
CALL Display(obj, "obj: ")

END PROGRAM main
