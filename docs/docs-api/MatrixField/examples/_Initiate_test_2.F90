! In this example we initiate an instance of
! Matrix by copying contents from other matrix.

PROGRAM main
USE GlobalData
USE FPL
USE HDF5File_Class
USE AbstractField_Class, ONLY: TypeField
USE FEMesh_Class
USE MatrixField_Class
USE FEDOF_Class
USE ExceptionHandler_Class

IMPLICIT NONE

CHARACTER(*), PARAMETER :: filename = &
                           "../../Mesh/examples/meshdata/small_mesh.h5"
INTEGER(I4B), PARAMETER :: nsd = 2
INTEGER(I4B), PARAMETER :: spaceCompo = 1, timeCompo = 1
INTEGER(I4B), PARAMETER :: fieldType = TypeField%normal
INTEGER(I4B), PARAMETER :: order = 1

CHARACTER(*), PARAMETER :: engine = "NATIVE_SERIAL"
CHARACTER(*), PARAMETER :: baseContinuity = "H1"
CHARACTER(*), PARAMETER :: baseInterpolation = "Lagrange"

TYPE(FEMesh_) :: mesh
TYPE(MatrixField_) :: obj, obj2
TYPE(HDF5File_) :: meshfile
TYPE(FEDOF_) :: fedof
TYPE(ParameterList_) :: param
INTEGER(I4B) :: ierr

CALL e%setQuietMode(EXCEPTION_INFORMATION, .TRUE.)

CALL FPL_INIT(); CALL param%Initiate()

CALL meshfile%Initiate(filename=filename, mode="READ")
CALL meshfile%OPEN()
CALL mesh%Initiate(hdf5=meshfile, dim=nsd)
CALL meshfile%DEALLOCATE()

CALL fedof%Initiate(baseContinuity=baseContinuity, &
                    baseInterpolation=baseInterpolation, &
                    order=order, mesh=mesh)

CALL mesh%DisplayMeshInfo("mesh info:")

CALL SetMatrixFieldParam(param=param, name="K", matrixProp="UNSYM", &
                         spaceCompo=spaceCompo, timeCompo=timeCompo, &
                         fieldType=fieldType, engine=engine)

CALL obj%Initiate(param=param, fedof=fedof)

CALL obj2%Initiate(obj)

CALL obj2%Display("MatrixField obj:")

CALL obj%DEALLOCATE()
CALL mesh%DEALLOCATE()
CALL param%DEALLOCATE()
CALL FPL_FINALIZE()

END PROGRAM main
