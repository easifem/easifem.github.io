PROGRAM main
USE easifemBase
USE easifemClasses
USE FEDomain_Class
USE FEDomainConnectivity_Class

IMPLICIT NONE

CHARACTER(*), PARAMETER :: velocity_filename = &
                           "../../Mesh/examples/meshdata/big_mesh.h5"

CHARACTER(*), PARAMETER :: pressure_filename = &
                           "../../Mesh/examples/meshdata/big_mesh.h5"

TYPE(FEDomainConnectivity_) :: obj
TYPE(FEDomain_) :: pressureDomain
TYPE(FEDomain_) :: velocityDomain
TYPE(HDF5File_) :: pressureMeshFile
TYPE(HDF5File_) :: velocityMeshFile

INTEGER(I4B), POINTER :: cellToCell(:)
INTEGER(I4B) :: ii, iel, a, b
LOGICAL(LGT) :: isok
TYPE(CPUTime_) :: ct

! Open the mesh file for pressure and velocity domain

CALL e%SetQuietMode(EXCEPTION_INFORMATION, .TRUE.)

CALL velocityMeshFile%Initiate(velocity_filename, MODE="READ")
CALL velocityMeshFile%OPEN()
CALL pressureMeshFile%Initiate(pressure_filename, MODE="READ")
CALL pressureMeshFile%OPEN()

! Initiate the domain for pressure and velocity

CALL velocityDomain%Initiate(velocityMeshFile, "")
CALL pressureDomain%Initiate(pressureMeshFile, "")

CALL ct%SetStartTime()
CALL obj%InitiateCellToCellData(domain1=velocityDomain, &
  & domain2=pressureDomain)
CALL ct%SetEndTime()
CALL Display(ct%GetTime(), "Time in InitiateCellToCellData: ")

CALL ct%SetStartTime()
CALL obj%InitiateCellToCellData(domain1=velocityDomain, &
  & domain2=pressureDomain)
CALL ct%SetEndTime()
CALL Display(ct%GetTime(), "Time in InitiateCellToCellData: ")

cellToCell => obj%GetCellToCellPointer()
CALL velocityDomain%GetParam(minElemNum=a, maxElemNum=b)

DO iel = a, b

  IF (.NOT. velocityDomain%isElementPresent(iel)) CYCLE

  !! here i am checking if the cellToCell(iel) is present in
  !! in the pressure domain or not.
  !! If it is present then it should be a cell element.
  ii = cellToCell(iel)

  isok = ii .NE. 0
  IF (.NOT. isok) THEN
    CALL fail("CellToCell: error code 1")
    RETURN
  END IF

  isok = pressureDomain%isElementPresent(ii)
  IF (.NOT. isok) THEN
    CALL fail("CellToCell: error code 2")
    RETURN
  END IF

END DO
CALL PASS("InitiateCellToCellData()")

CALL pressureMeshFile%DEALLOCATE()
CALL velocityMeshFile%DEALLOCATE()
CALL pressureDomain%DEALLOCATE()
CALL velocityDomain%DEALLOCATE()
CALL obj%DEALLOCATE()
END PROGRAM main
