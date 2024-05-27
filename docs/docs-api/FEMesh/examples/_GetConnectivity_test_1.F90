PROGRAM main
USE FEMesh_Class, ONLY: FEMesh_
USE HDF5File_Class, ONLY: HDF5File_
USE GlobalData, ONLY: I4B
USE ReallocateUtility, ONLY: Reallocate
USE Display_Method, ONLY: Display

IMPLICIT NONE

TYPE(FEMesh_) :: obj
TYPE(HDF5File_) :: meshfile
CHARACTER(LEN=*), PARAMETER :: filename = "../../Mesh/examples/meshdata/small_quad4_mesh.h5"
INTEGER(I4B), PARAMETER :: nsd = 2
INTEGER(I4B), ALLOCATABLE :: ans(:)

! Initiate and open the mesh file which is in `HDF5File_` format.
CALL meshfile%Initiate(FileName=filename, MODE="READ")
! Open the mesh file
CALL meshfile%OPEN()
! Initiate an instance of `Mesh_`
CALL obj%Initiate(hdf5=meshfile, dim=nsd)
CALL meshfile%DEALLOCATE()

ans = obj%GetConnectivity(globalElement=1, islocal=.TRUE.)
CALL Display(ans, "Node Connectivity:")

ans = obj%GetConnectivity(globalElement=1, islocal=.TRUE., opt="E")
CALL Display(ans, "Edge Connectivity:")

ans = obj%GetConnectivity(globalElement=1, islocal=.TRUE., opt="F")
CALL Display(ans, "Face Connectivity:")

ans = obj%GetConnectivity(globalElement=1, islocal=.TRUE., opt="C")
CALL Display(ans, "Cell Connectivity:")

! Display the content of mesh.
CALL obj%DEALLOCATE()
END PROGRAM main
