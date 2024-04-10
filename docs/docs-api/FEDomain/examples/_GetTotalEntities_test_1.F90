
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
CALL OK(obj%GetTotalEntities(3) .eq. 0, "GetTotalEntities: ")
CALL OK(obj%GetTotalEntities(2) .eq. 2, "GetTotalEntities: ")
CALL OK(obj%GetTotalEntities(1) .eq. 7, "GetTotalEntities: ")
CALL OK(obj%GetTotalEntities(0) .eq. 6, "GetTotalEntities: ")
CALL meshfile%DEALLOCATE()
CALL obj%DEALLOCATE()
END PROGRAM main
