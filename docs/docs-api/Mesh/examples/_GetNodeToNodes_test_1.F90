
PROGRAM main
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
  TYPE( Mesh_ ) :: obj
  TYPE( HDF5File_ ) :: meshfile
  INTEGER( I4B ), ALLOCATABLE :: nptrs( : )
  CHARACTER(*), PARAMETER :: filename="./meshdata/small_mesh.h5"
  ! Initiate and open the mesh file which is in [[HDF5File_]] format.
  ! Then, create an instance of mesh.
  CALL meshfile%Initiate(filename, "READ")
  CALL meshfile%Open()
  CALL obj%Initiate(hdf5=meshfile, group="/surfaceEntities_1" )
  CALL obj%InitiateNodeToNodes()
  ! Now we get the global nodes connected to the global node
  nptrs = sort(obj%GetNodeToNodes(globalNode=10, includeSelf=.FALSE.))
  CALL OK(ALL(nptrs .eq. [1,5,8,9,11,12]), "GetNodeToNodes: ")
  nptrs = sort(obj%GetNodeToNodes(globalNode=[9, 10, 11, 12], includeSelf=.FALSE.))
  CALL OK(ALL(nptrs .eq. arange(1, 12)), "GetNodeToNodes: ")
  CALL obj%Deallocate()
  CALL meshfile%Deallocate()
END PROGRAM main
