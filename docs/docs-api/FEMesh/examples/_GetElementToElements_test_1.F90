
PROGRAM main
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
  TYPE( FEMesh_ ) :: obj
  TYPE( HDF5File_ ) :: meshfile
  INTEGER( I4B ), ALLOCATABLE :: nptrs( :, : )
  CHARACTER(*), PARAMETER :: filename="../../Mesh/examples/meshdata/small_mesh.h5"
  ! Initiate and open the mesh file which is in [[HDF5File_]] format. Then, create an instance of mesh.
  CALL meshfile%Initiate(filename, "READ" )
  CALL meshfile%Open()
  CALL obj%Initiate(hdf5=meshfile, group="/surfaceEntities_1" )

nptrs = obj%GetElementToElements( globalElement=23, onlyElements=.FALSE. )
CALL Display( nptrs, "Element connected to iel=23")

nptrs = obj%GetElementToElements( globalElement=23, onlyElements=.TRUE. )
CALL Display( nptrs, "Element connected to iel=23")

  CALL obj%Deallocate()
  CALL meshfile%Close()
  CALL meshfile%Deallocate()
END PROGRAM main
