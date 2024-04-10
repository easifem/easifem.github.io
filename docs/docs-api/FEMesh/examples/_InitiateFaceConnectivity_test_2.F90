PROGRAM main
USE easifemBase
USE easifemClasses
IMPLICIT NONE
TYPE(Mesh_) :: obj
TYPE(HDF5File_) :: meshfile
CHARACTER(*), PARAMETER :: filename = "./meshdata/small_mesh_3d.h5"
INTEGER(I4B) :: iel, globalFaceCon(4, 6), localFaceCon(4, 6)
CALL e%SetQuietMode(.TRUE.)
CALL meshfile%Initiate(FileName=filename, MODE="READ")
!Open the mesh file
CALL meshfile%OPEN()
CALL obj%SetShowTime(.TRUE.)
!Initiate an instance of `Mesh_`
CALL obj%Initiate(hdf5=meshfile, group="/volumeEntities_1")
!Initiate an edge connectivity
CALL obj%InitiateFaceConnectivity()
!Display the content of mesh.
CALL obj%DisplayMeshInfo(filename)
! CALL obj%DisplayElementData("ElementData:")

CALL ElemData_GetGlobalFaceCon(obj%elementData(1),  &
  & globalFaceCon, localFaceCon)
CALL Display(obj%elementData(1), "elementData(1): ")
CALL Display(localFaceCon, "localFaceCon(1): ")
CALL Display(globalFaceCon, "globalFaceCon(1): ")

CALL ElemData_GetGlobalFaceCon(obj%elementData(2),  &
  & globalFaceCon, localFaceCon)
CALL Display(obj%elementData(2), "elementData(2): ")
CALL Display(localFaceCon, "localFaceCon(2): ")
CALL Display(globalFaceCon, "globalFaceCon(2): ")

CALL obj%DEALLOCATE()
CALL meshfile%DEALLOCATE()
END PROGRAM main
