
PROGRAM main
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
  TYPE( Mesh_ ) :: obj
  TYPE( HDF5File_ ) :: meshfile
  CALL meshfile%Initiate( fileName="./meshdata/small_mesh_two_region.h5", MODE="READ" )
  CALL meshfile%Open()
  CALL obj%Initiate(hdf5=meshfile, group="/surfaceEntities_2" )
  CALL obj%Display("")
  CALL obj%Deallocate()
  CALL meshfile%Deallocate()
END PROGRAM main
