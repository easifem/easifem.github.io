PROGRAM main
USE GlobalData
USE AbstractField_Class, ONLY: TypeField
USE AbstractMesh_Class
USE FEDomain_Class
USE ScalarField_Class
USE FEDOF_Class
USE HDF5File_Class
USE FPL, ONLY: FPL_INIT, FPL_FINALIZE, ParameterList_
USE Test_Method
USE ExceptionHandler_Class, ONLY: e, EXCEPTION_INFORMATION

IMPLICIT NONE

TYPE(FEDomain_) :: dom
CLASS(AbstractMesh_), POINTER :: mesh
TYPE(FEDOF_) :: fedof
TYPE(ScalarField_) :: obj
TYPE(HDF5File_) :: meshfile, resultFile
TYPE(ParameterList_) :: param
INTEGER(I4B) :: ierr
CHARACTER(*), PARAMETER :: engine = "NATIVE_SERIAL"
CHARACTER(*), PARAMETER :: meshfilename="../../Mesh/examples/meshdata/small_mesh.h5" 
CHARACTER(*), PARAMETER :: baseContinuity = "H1"
CHARACTER(*), PARAMETER :: baseInterpolation = "Lagrange"
INTEGER(I4B), PARAMETER :: nsd = 2
INTEGER(I4B), PARAMETER :: order = 1

CALL e%setQuietMode(EXCEPTION_INFORMATION, .TRUE.)

CALL FPL_INIT()
CALL param%initiate()
CALL SetScalarFieldParam(param=param, &
                         fieldType=TypeField%normal, &
                         name="U", &
                         engine=engine)

CALL meshfile%initiate(filename=meshfilename, mode="READ")
CALL meshfile%OPEN()
CALL dom%initiate(hdf5=meshfile, group="")

mesh => dom%GetMeshPointer(dim=nsd)

CALL fedof%Initiate(baseContinuity=baseContinuity, &
                    baseInterpolation=baseInterpolation, &
                    order=order, mesh=mesh)

CALL obj%Initiate(param=param, fedof=fedof)

CALL OK(.TRUE., "Initiate:")

CALL obj%Display("obj = ")
CALL resultFile%initiate(filename="./result.h5", mode="NEW")
CALL resultFile%OPEN()
CALL obj%export(hdf5=resultFile, group="/scalarField1")

NULLIFY (mesh)
CALL obj%DEALLOCATE()
CALL dom%DEALLOCATE()
CALL fedof%DEALLOCATE()
CALL meshfile%DEALLOCATE()
! CALL resultFile%DEALLOCATE()

CALL param%DEALLOCATE()
CALL FPL_FINALIZE()
END PROGRAM main
