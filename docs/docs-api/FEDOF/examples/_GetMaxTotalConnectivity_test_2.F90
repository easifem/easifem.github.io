PROGRAM main
USE FEDOF_Class
USE FEMesh_Class
USE HDF5File_Class
USE Display_Method
USE GlobalData
USE Test_Method
USE ExceptionHandler_Class, ONLY: e, EXCEPTION_INFORMATION

IMPLICIT NONE

TYPE(FEDOF_) :: obj
TYPE(FEMesh_) :: mesh
CHARACTER(*), PARAMETER :: filename = &
                           "../../Mesh/examples/meshdata/small_mesh.h5", &
                           baseContinuity = "H1", &
                           baseInterpolation = "Heirarchical"
INTEGER(I4B), PARAMETER :: order = 1, nsd = 2

TYPE(HDF5File_) :: meshfile
INTEGER(I4B) :: found, want
LOGICAL(LGT) :: isok

CALL e%SetQuietMode(EXCEPTION_INFORMATION, .TRUE.)
CALL meshfile%Initiate(filename, mode="READ")
CALL meshfile%OPEN()

CALL mesh%Initiate(hdf5=meshfile, dim=nsd)

CALL obj%Initiate(baseContinuity=baseContinuity, &
                  baseInterpolation=baseInterpolation, &
                  order=order, mesh=mesh)
!CALL fedof%Display("FEDOF:")
found = obj%GetMaxTotalConnectivity()
want = 3
isok = found == want

CALL OK(isok, "GetMaxTotalConnectivity")
IF (.NOT. isok) THEN
  CALL Display(found, "found: ")
  CALL Display(want, "want: ")
END IF

!CALL dom%Display("domain:")
CALL mesh%DEALLOCATE()
CALL meshfile%DEALLOCATE()

END PROGRAM main
