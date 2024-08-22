
PROGRAM main
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
  TYPE( Mesh_ ) :: obj
  TYPE( HDF5File_ ) :: meshfile
  INTEGER( I4B ), ALLOCATABLE :: nptrs( : )
  INTEGER( I4B ) :: iel, ii
  CHARACTER( LEN=* ), PARAMETER :: filename="./meshdata/small_mesh.h5"

CALL meshfile%Initiate( FileName=filename, MODE="READ" )
CALL meshfile%Open()
CALL obj%Initiate(hdf5=meshfile, group="/surfaceEntities_1" )

CALL obj%DisplayElementData( "element data" )
CALL Display( "OK" )

  CALL obj%Deallocate()
  CALL meshfile%Deallocate()
END PROGRAM main
