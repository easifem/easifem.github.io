PROGRAM main
USE easifembase
IMPLICIT NONE
TYPE(ReferenceTetrahedron_) :: obj
REAL(dfp) :: avar
INTEGER(i4b), PARAMETER :: nsd = 3_I4B
CALL Initiate(obj=obj, nsd=nsd)
CALL Display(obj, 'obj : ')
END PROGRAM main
