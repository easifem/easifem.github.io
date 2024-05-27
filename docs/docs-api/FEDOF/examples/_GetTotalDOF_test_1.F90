PROGRAM main
USE FEDOF_Class
USE FEDomain_Class
USE AbstractMesh_Class
USE HDF5File_Class
USE Display_Method
USE GlobalData
USE Test_Method
IMPLICIT NONE

TYPE(FEDOF_) :: fedof
TYPE(FEDomain_) :: dom
CLASS(AbstractMesh_), POINTER :: meshptr => NULL()
CHARACTER(*), PARAMETER :: filename = &
  & "../../Mesh/examples/meshdata/small_mesh.h5"
TYPE(HDF5File_) :: meshfile
INTEGER(I4B) :: found, want

CALL meshfile%Initiate(filename, mode="READ")
CALL meshfile%OPEN()
CALL dom%Initiate(meshfile, '')

meshptr => dom%GetMeshPointer()

CALL fedof%Initiate(baseContinuity="H1", baseInterpolation="Heirarchical", &
                    order=1, mesh=meshptr)
found = fedof%GetTotalDOF(globalElement=1, islocal=.TRUE.)
want = meshptr%GetNNE(globalElement=1, islocal=.TRUE.)
CALL OK(found == want, "GetTotalDOF (order=1): ")

CALL fedof%Initiate(baseContinuity="H1", baseInterpolation="Heirarchical", &
                    order=2, mesh=meshptr)
found = fedof%GetTotalDOF(globalElement=1, islocal=.TRUE.)
want = meshptr%GetNNE(globalElement=1, islocal=.TRUE.) + 3
CALL OK(found == want, "GetTotalDOF (order=2): ")

CALL fedof%Initiate(baseContinuity="H1", baseInterpolation="Heirarchical", &
                    order=3, mesh=meshptr)
found = fedof%GetTotalDOF(globalElement=1, islocal=.TRUE.)
want = meshptr%GetNNE(globalElement=1, islocal=.TRUE.) + 6 + 1
CALL OK(found == want, "GetTotalDOF (order=3): ")

!CALL dom%Display("domain:")
CALL dom%DEALLOCATE()
CALL meshfile%DEALLOCATE()

END PROGRAM main
