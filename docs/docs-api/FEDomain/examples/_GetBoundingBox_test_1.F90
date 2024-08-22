PROGRAM main
USE easifemBase
USE easifemClasses
USE FEDomain_Class

IMPLICIT NONE

TYPE(FEDomain_) :: dom
TYPE(HDF5File_) :: meshfile
CHARACTER(*), PARAMETER :: filename = &
  & "../../Mesh/examples/meshdata/small_mesh.h5"

CALL meshfile%Initiate(filename, "READ")
CALL meshfile%OPEN()
CALL dom%Initiate(meshfile, '')
! Now let us get the bounding box of the domain
! by using the method called `GetBoundingBox()`.

CALL Display(dom%GetBoundingBox(), "Box : ")

CALL Display(dom%GetBoundingBox(dim=dom%GetNSD()), "Box:")

CALL Display(dom%GetBoundingBox(dim=1_I4B), "Box:")

CALL dom%DEALLOCATE()
CALL meshfile%CLOSE()
CALL meshfile%DEALLOCATE()
END PROGRAM main
