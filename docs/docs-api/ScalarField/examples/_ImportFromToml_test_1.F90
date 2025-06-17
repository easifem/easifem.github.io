!> author: Vikas Sharma, Ph. D.
! date: 2025-06-14
! summary: Testing import from toml
! In this example we will initiate the fedof outside the ScalarField

PROGRAM main
USE GlobalData
USE BaseType, ONLY: TypeQuadratureOpt
USE AbstractMesh_Class
USE FEDomain_Class
USE ScalarField_Class
USE FEDOF_Class
USE HDF5File_Class
USE Test_Method
USE ExceptionHandler_Class, ONLY: e, EXCEPTION_INFORMATION

IMPLICIT NONE

TYPE(FEDomain_) :: dom
CLASS(AbstractMesh_), POINTER :: mesh
TYPE(FEDOF_) :: fedof
TYPE(ScalarField_) :: obj
TYPE(HDF5File_) :: meshfile
INTEGER(I4B) :: ierr
CHARACTER(*), PARAMETER :: engine = "NATIVE_SERIAL"
CHARACTER(*), PARAMETER :: &
  meshfilename = "../../FEMesh/examples/meshdata/small_tri3_mesh.h5"
CHARACTER(*), PARAMETER :: tomlfilename = "./toml/ScalarField.toml"
CHARACTER(*), PARAMETER :: baseContinuity = "H1"
CHARACTER(*), PARAMETER :: baseInterpolation = "Lagrange"
INTEGER(I4B), PARAMETER :: ipType = TypeQuadratureOpt%equidistance
INTEGER(I4B), PARAMETER :: nsd = 2
INTEGER(I4B), PARAMETER :: order = 1

CALL e%setQuietMode(EXCEPTION_INFORMATION, .TRUE.)

CALL meshfile%Initiate(filename=meshfilename, mode="READ")
CALL meshfile%OPEN()
CALL dom%Initiate(hdf5=meshfile, group="")
mesh => dom%GetMeshPointer(dim=nsd)

CALL fedof%Initiate(baseContinuity=baseContinuity, &
                    baseInterpolation=baseInterpolation, &
                    ipType=ipType, order=order, mesh=mesh)

CALL obj%ImportFromToml(tomlName="field1", &
                        filename=tomlfilename, fedof=fedof)

CALL obj%Display("ScalarField obj:")

NULLIFY (mesh)
CALL obj%DEALLOCATE()
CALL dom%DEALLOCATE()
CALL fedof%DEALLOCATE()
CALL meshfile%DEALLOCATE()

END PROGRAM main
