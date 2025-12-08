!> author: Vikas Sharma, Ph. D.
! date: 2025-07-02
! summary:  Testing import from toml for vectorfield

PROGRAM main
USE GlobalData
USE BaseType, ONLY: TypeQuadratureOpt
USE AbstractMesh_Class
USE FEDomain_Class
USE VectorField_Class
USE FEDOF_Class
USE HDF5File_Class
USE Test_Method
USE ExceptionHandler_Class, ONLY: e, EXCEPTION_INFORMATION

IMPLICIT NONE

! Parameters are defined here
CHARACTER(*), PARAMETER :: engine = "NATIVE_SERIAL"
CHARACTER(*), PARAMETER :: &
  meshfilename = "../../FEMesh/examples/meshdata/small_tri3_mesh.h5"
CHARACTER(*), PARAMETER :: tomlfilename = "./toml/VectorField.toml"
INTEGER(I4B), PARAMETER :: nsd = 2
INTEGER(I4B), PARAMETER :: order = 1

! Variables are defined here
TYPE(FEDomain_) :: dom
CLASS(AbstractMesh_), POINTER :: mesh
TYPE(FEDOF_) :: fedof
TYPE(VectorField_) :: obj
TYPE(HDF5File_) :: meshfile

CALL e%setQuietMode(EXCEPTION_INFORMATION, .TRUE.)

CALL meshfile%Initiate(filename=meshfilename, mode="READ")
CALL meshfile%OPEN()
CALL dom%Initiate(hdf5=meshfile, group="")
mesh => dom%GetMeshPointer(dim=nsd)

CALL obj%ImportFromToml(tomlName="field1", &
                        filename=tomlfilename, &
                        fedof=fedof, &
                        mesh=mesh &
                        )

CALL obj%Display("ScalarField obj:")

NULLIFY (mesh)
CALL obj%DEALLOCATE()
CALL dom%DEALLOCATE()
CALL fedof%DEALLOCATE()
CALL meshfile%DEALLOCATE()

END PROGRAM main
