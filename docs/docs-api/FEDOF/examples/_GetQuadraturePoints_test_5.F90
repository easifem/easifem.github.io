!> author: Vikas Sharma, Ph. D.
! date: 2025-06-01
! summary:  Initiate FEDOF object by import from toml

PROGRAM main
USE FEDOF_Class
USE FEDomain_Class
USE AbstractMesh_Class
USE HDF5File_Class
USE Display_Method
USE GlobalData
USE Test_Method
USE ExceptionHandler_Class, ONLY: e, EXCEPTION_INFORMATION
USE BaseType, ONLY: QuadraturePoint_
USE QuadraturePoint_Method

IMPLICIT NONE

TYPE(FEDOF_) :: obj
TYPE(FEDomain_) :: dom
CLASS(AbstractMesh_), POINTER :: meshptr => NULL()
CHARACTER(*), PARAMETER :: &
  filename = "../../FEMesh/examples/meshdata/small_tri3_mesh.h5", &
  toml_filename = "./toml/_ImportFromToml_test_3.toml"
TYPE(HDF5File_) :: meshfile
TYPE(QuadraturePoint_) :: quad

! CALL e%setQuietMode(EXCEPTION_INFORMATION, .TRUE.)
CALL meshfile%Initiate(filename, mode="READ")
CALL meshfile%OPEN()
CALL dom%Initiate(meshfile, '')

meshptr => dom%GetMeshPointer()

CALL obj%ImportFromToml(tomlName="test1", filename=toml_filename, &
                        dom=dom)

CALL obj%GetQuadraturePoints(quad=quad, globalElement=1, &
                             islocal=.TRUE.)

CALL Display(quad, "Quadrature points")

! CALL obj%Display("FEDOF:")

!CALL dom%Display("domain:")
CALL dom%DEALLOCATE()
CALL meshfile%DEALLOCATE()

END PROGRAM main
