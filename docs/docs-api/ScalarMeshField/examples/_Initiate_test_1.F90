PROGRAM main
USE HDF5File_Class
USE FEMesh_Class
USE AbstractField_Class
USE ScalarMeshField_Class
USE FPL
USE GlobalData

IMPLICIT NONE

TYPE(HDF5File_) :: meshfile
TYPE(FEMesh_) :: amesh
TYPE(ScalarMeshField_) :: obj
TYPE(ParameterList_) :: param
CHARACTER(*), PARAMETER :: filename="../../Mesh/examples/meshdata/small_mesh.h5"
INTEGER(I4B), PARAMETER :: nsd = 2
INTEGER(I4B), PARAMETER :: varType = Constant
INTEGER(I4B), PARAMETER :: fieldType = TypeField%normal

CALL meshfile%Initiate(fileName=filename, MODE="READ")
CALL meshfile%OPEN()
CALL amesh%Initiate(hdf5=meshfile, dim=nsd)

CALL amesh%DisplayMeshInfo("mesh info:")

CALL FPL_INIT(); CALL param%initiate()

CALL SetScalarMeshFieldParam(param=param, name='aScalar', &
                             varType=varType, fieldType=fieldType, &
                             engine='NATIVE_SERIAL', defineOn=Nodal, nns=6)

CALL obj%Initiate(param=param, mesh=amesh)

CALL obj%Display('obj: ')

CALL obj%DEALLOCATE()
CALL amesh%DEALLOCATE()
CALL meshfile%CLOSE()
CALL meshfile%DEALLOCATE()
CALL param%DEALLOCATE(); CALL FPL_FINALIZE()
END PROGRAM main
