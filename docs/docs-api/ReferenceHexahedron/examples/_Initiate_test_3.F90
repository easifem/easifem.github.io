
PROGRAM main
USE easifembase
IMPLICIT NONE
CLASS(ReferenceElement_), pointer :: obj
INTEGER(I4B), PARAMETER :: nsd = 3_I4B
obj => ReferenceHexahedron_Pointer(nsd=nsd)
CALL Display(obj, 'Obj : ')
END PROGRAM main
