PROGRAM main
USE Test_Method
USE HDF5File_Class
USE FEMesh_Class
USE AbstractField_Class
USE ScalarMeshField_Class
USE FPL
USE GlobalData
USE BaseType
USE FEVariable_Method
USE Display_Method
USE UserFunction_Class

IMPLICIT NONE

INTEGER(I4B), PARAMETER :: nns = 6
CHARACTER(*), PARAMETER :: filename="../../Mesh/examples/meshdata/small_mesh.h5"
INTEGER(I4B), PARAMETER :: nsd = 2
INTEGER(I4B), PARAMETER :: varType = Space
INTEGER(I4B), PARAMETER :: fieldType = TypeField%normal
INTEGER(I4B), PARAMETER :: defineOn = Quadrature
INTEGER(I4B), PARAMETER :: returnType = Scalar
INTEGER(I4B), PARAMETER :: argType = Constant
CHARACTER(*), PARAMETER :: engine = "NATIVE_SERIAL"

TYPE(HDF5File_) :: meshfile
TYPE(FEMesh_) :: amesh
TYPE(ScalarMeshField_) :: obj
TYPE(ParameterList_) :: param
TYPE(UserFunction_) :: func
PROCEDURE(iface_scalarFunction), POINTER :: func1 => NULL()
TYPE(FEVariable_) :: found, want
INTEGER(I4B) :: iel, tcells
LOGICAL(LGT) :: isok

CALL meshfile%Initiate(fileName=filename, MODE="READ")
CALL meshfile%OPEN()
CALL amesh%Initiate(hdf5=meshfile, dim=nsd)

CALL FPL_INIT(); CALL param%Initiate()

CALL SetUserFunctionParam(param=param, name="func", returnType=returnType, &
                          argType=argType)
CALL func%Initiate(param)
CALL func%Set(scalarValue=2.0_DFP)

CALL obj%Initiate(mesh=amesh, func=func, name="func", engine=engine)

CALL obj%Insert(func=func)

tcells = amesh%GetTotalCells()

DO iel = 1, tcells
  CALL obj%Get(globalElement=iel, fevar=found, islocal=.TRUE.)
  want = NodalVariable(2.0_DFP, TypeFEVariableScalar, TypeFEVariableConstant)

  isok = found .EQ. want
  IF (.NOT. isok) EXIT
END DO

CALL OK(isok, 'Set')

CALL obj%DEALLOCATE()
CALL amesh%DEALLOCATE()
CALL meshfile%CLOSE()
CALL meshfile%DEALLOCATE()
CALL param%DEALLOCATE()
CALL FPL_FINALIZE()

END PROGRAM main
