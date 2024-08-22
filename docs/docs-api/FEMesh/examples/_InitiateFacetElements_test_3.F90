PROGRAM main
USE easifemBase
USE easifemClasses

IMPLICIT NONE

TYPE(FEMesh_) :: obj
TYPE(HDF5File_) :: meshfile
CHARACTER(LEN=*), PARAMETER :: filename = &
  & "../../Mesh/examples/meshdata/small_mesh.h5"
INTEGER(I4B) :: found, want

CALL meshfile%Initiate(FileName=filename, MODE="READ")

CALL meshfile%OPEN()

CALL obj%Initiate(hdf5=meshfile, dim=2)

CALL obj%InitiateFacetElements()

found = obj%GetTotalFacetElements()
want = 25
CALL OK(found .EQ. want, "GetTotalFacetElements: ")

found = obj%GetTotalBoundaryFacetElements()
want = 8
CALL OK(found .EQ. want, "GetTotalBoundaryFacetElements: ")

found = obj%GetTotalInternalFacetElements()
want = 17
CALL OK(found .EQ. want, "GetTotalInternalFacetElements: ")

CALL obj%DEALLOCATE()
CALL meshfile%DEALLOCATE()
END PROGRAM main
