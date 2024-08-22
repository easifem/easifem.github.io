PROGRAM main
USE GlobalData
USE IntegerUtility

USE BaseType

IMPLICIT NONE

TYPE(MultiIndices_) :: obj
INTEGER(i4b) :: n, d
INTEGER(i4b), ALLOCATABLE :: indices(:, :)

Initiate the object.

n = 0
d = 1
CALL Initiate(obj=obj, n=n, d=d)
CALL Display(obj, "(n,d=0,1)=")
indices = GetMultiIndices(obj)
CALL Display(TRANSPOSE(indices), "indices=")

END PROGRAM main
