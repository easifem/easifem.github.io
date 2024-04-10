
PROGRAM main
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
  TYPE( BetterMesh_ ) :: obj
  TYPE( HDF5File_ ) :: meshfile
  CHARACTER( LEN = *), PARAMETER :: filename= &
    & "../../Mesh/examples/meshdata/small_mesh_3d_two_region.h5"

CALL meshfile%Initiate( FileName=filename, MODE="READ" )

CALL meshfile%Open()

CALL obj%Initiate(hdf5=meshfile, dim=2, entities =[1, 2, 3, 4, 5, 7, 8, 9, 10, 11] )

CALL obj%Display("")

  CALL obj%Deallocate()
  CALL meshfile%Deallocate()
END PROGRAM main
