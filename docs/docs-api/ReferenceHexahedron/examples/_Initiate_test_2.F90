
PROGRAM main
USE easifembase
IMPLICIT NONE
TYPE(ReferenceHexahedron_) :: obj
INTEGER(I4B), PARAMETER :: nsd = 3_I4B
obj = ReferenceHexahedron(nsd=nsd)
CALL Display(obj, 'Obj : ')
END PROGRAM main
