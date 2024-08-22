PROGRAM main
USE easifemBase
USE easifemClasses
USE FEDomain_Class

IMPLICIT NONE

TYPE(FEDomain_) :: obj
TYPE(HDF5File_) :: meshfile
CHARACTER(*), PARAMETER :: filename="../../Mesh/examples/meshdata/small_tri3_mesh_two_region.h5"

CALL meshfile%Initiate(filename, "READ")
CALL meshfile%OPEN()
CALL obj%Initiate(meshfile, '')

CALL IS(obj%GetLocalNodeNumber(1), 1, "GetLocalNodeNumber: ")
CALL IS(obj%GetLocalNodeNumber(2), 2, "GetLocalNodeNumber: ")

CALL OK(ALL(obj%GetLocalNodeNumber([1,2,3,4]) .eq. [1,2,3,4]), "GetLocalNodeNumber: ")

CALL meshfile%DEALLOCATE()
CALL obj%DEALLOCATE()
END PROGRAM main
