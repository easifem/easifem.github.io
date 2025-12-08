PROGRAM main
USE HDF5File_Class
USE FEMesh_Class
USE AbstractField_Class
USE ScalarMeshField_Class
USE FPL
USE GlobalData
USE UserFunction_Class

IMPLICIT NONE

TYPE(HDF5File_) :: meshfile
TYPE(FEMesh_) :: amesh
TYPE(ScalarMeshField_) :: obj
TYPE(ParameterList_) :: param
TYPE(UserFunction_) :: func

CHARACTER(*), PARAMETER :: filename="../../Mesh/examples/meshdata/small_mesh.h5"
INTEGER(I4B), PARAMETER :: nsd = 2
INTEGER(I4B), PARAMETER :: returnType = Scalar
INTEGER(I4B), PARAMETER :: argType = Constant

CALL meshfile%Initiate(fileName=filename, MODE="READ")
CALL meshfile%OPEN()
CALL amesh%Initiate(hdf5=meshfile, dim=nsd)

CALL FPL_INIT(); CALL param%initiate()

CALL SetUserFunctionParam(param=param, name="func", returnType=returnType, &
                          argType=argType)

CALL func%Initiate(param)
CALL func%Set(scalarValue=2.0_DFP)
CALL obj%Initiate(mesh=amesh, func=func, name="func", engine="NATIVE_SERIAL")

CALL obj%DEALLOCATE()
CALL amesh%DEALLOCATE()
CALL meshfile%CLOSE()
CALL meshfile%DEALLOCATE()
CALL param%DEALLOCATE(); CALL FPL_FINALIZE()
END PROGRAM main
