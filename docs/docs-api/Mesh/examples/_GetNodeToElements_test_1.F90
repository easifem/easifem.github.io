
PROGRAM main
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
  TYPE( Mesh_ ) :: obj
  TYPE( HDF5File_ ) :: meshfile
  INTEGER( I4B ), ALLOCATABLE :: nptrs( : )
  CHARACTER(*), PARAMETER ::  filename="./meshdata/small_mesh.h5"
  ! Initiate and open the mesh file which is in [[HDF5File_]] format.
  ! Then, create an instance of mesh.
  CALL meshfile%Initiate( filename, "READ" )
  CALL meshfile%Open()
  CALL obj%Initiate(hdf5=meshfile, group="/surfaceEntities_1" )
  ! First initiate NodeToElements data
  CALL obj%InitiateNodeToElements()
  ! Now we get the global elements connected to the global node
  nptrs = obj%GetNodeToElements(10)
  CALL OK( all(nptrs .EQ. [14,15,22,23,24,25]), "GetNodeToElements:" )
  !CALL display(nptrs, "nptrs:", full=.true.)
  ! Now we get the global elements connected to more than one node
  nptrs = obj%GetNodeToElements([9,10,11,12])
  CALL OK( all(nptrs .EQ. arange(13, 26) ), "GetNodeToElements:" )
  !call display(nptrs, "nptrs:", full=.true.)
  CALL obj%Deallocate()
  CALL meshfile%Deallocate()
END PROGRAM main
