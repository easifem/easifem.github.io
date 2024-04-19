PROGRAM main
USE easifemBase
USE easifemClasses
IMPLICIT NONE
TYPE(FEMesh_) :: obj
TYPE(HDF5File_) :: meshfile
INTEGER(I4B), ALLOCATABLE :: elem2elem(:, :)
  CHARACTER(*), PARAMETER :: filename="../../Mesh/examples/meshdata/small_mesh.h5"
! Initiate and open the mesh file which is in [[HDF5File_]] format. Then, create an instance of mesh.
CALL meshfile%Initiate(filename, "READ")
CALL meshfile%OPEN()
CALL obj%Initiate(hdf5=meshfile, group="/surfaceEntities_1")

elem2elem = obj%GetElementToElements(globalElement=23, onlyElements=.FALSE.)
CALL Display(elem2elem, "Element connected to iel=23")

elem2elem = obj%GetElementToElements(globalElement=23, onlyElements=.TRUE.)
CALL Display(elem2elem, "Element connected to iel=23")

CALL obj%DEALLOCATE()
CALL meshfile%CLOSE()
CALL meshfile%DEALLOCATE()
END PROGRAM main
