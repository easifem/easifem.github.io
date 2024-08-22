!> author: Vikas Sharma, Ph. D.
! date: 2024-05-24
! summary: We test ScalarField with heirarchical basis intrpolation

PROGRAM main
USE GlobalData
USE AbstractField_Class, ONLY: TypeField, TypeEngineName
USE AbstractMesh_Class
USE FEDomain_Class
USE ScalarField_Class, ONLY: SetScalarFieldParam
USE ScalarFieldLis_Class

USE FEDOF_Class
USE HDF5File_Class
USE FPL, ONLY: FPL_INIT, FPL_FINALIZE, ParameterList_
USE Test_Method
USE ExceptionHandler_Class, ONLY: e, EXCEPTION_INFORMATION

IMPLICIT NONE

TYPE(FEDomain_) :: dom
CLASS(AbstractMesh_), POINTER :: mesh
TYPE(FEDOF_) :: fedof
TYPE(ScalarFieldLis_) :: obj
TYPE(HDF5File_) :: meshfile
TYPE(ParameterList_) :: param
INTEGER(I4B) :: ierr
CHARACTER(*), PARAMETER :: engine = TypeEngineName%lis_omp
CHARACTER(*), PARAMETER :: meshfilename="../../Mesh/examples/meshdata/small_mesh.h5" 
CHARACTER(*), PARAMETER :: baseContinuity = "H1"
CHARACTER(*), PARAMETER :: baseInterpolation = "Heirarchical"
INTEGER(I4B), PARAMETER :: nsd = 2
INTEGER(I4B), PARAMETER :: order = 3

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

NULLIFY (mesh)
CALL obj%DEALLOCATE()
CALL dom%DEALLOCATE()
CALL fedof%DEALLOCATE()
CALL meshfile%DEALLOCATE()

CALL param%DEALLOCATE()
CALL FPL_FINALIZE()
END PROGRAM main
