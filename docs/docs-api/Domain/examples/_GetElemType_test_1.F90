
PROGRAM main
USE easifemBase
USE easifemClasses
IMPLICIT NONE
TYPE(Domain_) :: obj
TYPE(HDF5File_) :: domfile
CHARACTER(LEN=*), PARAMETER :: domfilename = "./meshmap/mesh.h5"
INTEGER(I4B), ALLOCATABLE :: elemType(:)

CALL domfile%Initiate(domfilename, mode="READ")
CALL domfile%OPEN()

CALL obj%Initiate(domfile, '')

elemType = obj%GetElemType(dim=1)
CALL Display(elemType, "elemType, dim=1,  ")

elemType = obj%GetElemType(dim=2)
CALL Display(elemType, "elemType, dim=2,  ")

elemType = obj%GetElemType(dim=-1)
CALL Display(elemType, "elemType, dim=-1,  ")

CALL obj%DEALLOCATE()
CALL domfile%DEALLOCATE()
END PROGRAM main
