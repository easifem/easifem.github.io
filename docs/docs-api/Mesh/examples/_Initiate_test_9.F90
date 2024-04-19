PROGRAM main
USE easifemBase
USE easifemClasses
IMPLICIT NONE
TYPE(Mesh_) :: obj
TYPE(HDF5File_) :: meshfile

  CALL meshfile%Initiate( fileName="./meshdata/small_mesh_two_region.h5", MODE="READ" )
CALL meshfile%OPEN()

CALL obj%Initiate(hdf5=meshfile, dim=2, entities=[1])
CALL obj%Display("")

CALL obj%DEALLOCATE()
CALL meshfile%DEALLOCATE()
END PROGRAM main
