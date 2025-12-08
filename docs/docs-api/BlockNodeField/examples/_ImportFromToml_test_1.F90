!> author: Vikas Sharma, Ph. D.
! date: 2025-06-14
! summary: Testing import from toml

PROGRAM main
USE GlobalData
USE BaseType, ONLY: TypeQuadratureOpt
USE AbstractMesh_Class
USE FEDomain_Class
USE BlockNodeField_Class
USE FEDOF_Class
USE HDF5File_Class
USE Test_Method
USE ExceptionHandler_Class, ONLY: e, EXCEPTION_INFORMATION
USE TimeFEDOF_Class
USE TimeOpt_Class, ONLY: TimeOpt_, TypeTimeOpt

IMPLICIT NONE

! Parameters are defined here
CHARACTER(*), PARAMETER :: engine = "NATIVE_SERIAL"
CHARACTER(*), PARAMETER :: &
  meshfilename = "../../FEMesh/examples/meshdata/small_tri3_mesh.h5"
CHARACTER(*), PARAMETER :: tomlfilename = "./toml/BlockNodeField.toml"
INTEGER(I4B), PARAMETER :: nsd = 2
INTEGER(I4B), PARAMETER :: order = 1

! Variables are defined here
TYPE(FEDomain_) :: dom
CLASS(AbstractMesh_), POINTER :: mesh
TYPE(FEDOF_) :: fedof
TYPE(BlockNodeField_) :: obj
TYPE(TimeFEDOF_) :: timefedof
TYPE(HDF5File_) :: meshfile
TYPE(TimeOpt_) :: timeopt

CALL e%setQuietMode(EXCEPTION_INFORMATION, .TRUE.)

CALL meshfile%Initiate(filename=meshfilename, mode="READ")
CALL meshfile%OPEN()
CALL dom%Initiate(hdf5=meshfile, group="")
mesh => dom%GetMeshPointer(dim=nsd)

CALL timeopt%ImportFromToml(tomlName="timeOpt", &
                            filename=tomlfilename)

CALL obj%ImportFromToml(tomlName="field1", &
                        filename=tomlfilename, &
                        fedof=fedof, &
                        timefedof=timefedof, &
                        mesh=mesh, &
                        timeOpt=timeopt)

CALL obj%Display("ScalarField obj:")

! CALL timefedof%Display("TimeFEDOF obj:")

NULLIFY (mesh)
CALL obj%DEALLOCATE()
CALL dom%DEALLOCATE()
CALL fedof%DEALLOCATE()
CALL meshfile%DEALLOCATE()

END PROGRAM main
