<!-- markdownlint-disable MD041 MD013 MD033 -->

```fortran
PROGRAM main
USE GlobalData
USE Test_Method
USE Display_Method
USE HDF5File_Class
USE FEDomain_Class
USE FEDomainConnectivity_Class
USE ExceptionHandler_Class

IMPLICIT NONE

CHARACTER(*), PARAMETER :: domain1_filename = &
                           "../../Mesh/examples/meshdata/small_tri6_mesh.h5"

CHARACTER(*), PARAMETER :: domain2_filename = &
                           "../../Mesh/examples/meshdata/small_tri3_mesh.h5"

INTEGER(I4B), PARAMETER :: nsd = 2

TYPE(FEDomainConnectivity_) :: obj
TYPE(FEDomain_) :: domain2, domain1
TYPE(HDF5File_) :: domain1_file, domain2_file

INTEGER(I4B), POINTER :: cellToCell(:)
INTEGER(I4B) :: ii, iel, telems
LOGICAL(LGT) :: isok

! Open the mesh file for pressure and velocity domain

CALL e%SetQuietMode(EXCEPTION_INFORMATION, .TRUE.)

CALL domain1_file%Initiate(domain1_filename, MODE="READ")
CALL domain1_file%OPEN()
CALL domain2_file%Initiate(domain2_filename, MODE="READ")
CALL domain2_file%OPEN()

! Initiate the domain for pressure and velocity

CALL domain1%Initiate(domain1_file, "")
CALL domain2%Initiate(domain2_file, "")

CALL obj%InitiateCellToCellData(domain1=domain1, &
                                domain2=domain2)

cellToCell => obj%GetCellToCellPointer()

! CALL Display(celltoCell, "cellToCEll", full=.TRUE.)

telems = domain1%GetTotalElements(dim=nsd)

DO iel = 1, telems

  isok = iel .LE. SIZE(cellToCell)
  IF (.NOT. isok) THEN
    CALL Fail("CellToCell: iel is out of bound")
    RETURN
  END IF

  !! here i am checking if the cellToCell(iel) is present in
  !! in the pressure domain or not.
  !! If it is present then it should be a cell element.
  ii = cellToCell(iel)

  isok = ii .NE. 0
  IF (.NOT. isok) THEN
    CALL Fail("CellToCell: error code 1")
    RETURN
  END IF

  isok = domain2%isElementPresent(globalElement=ii, islocal=.FALSE., dim=nsd)
  IF (.NOT. isok) THEN
    call Display(msg="global element = " // tostring(ii) // " is not present in domain2" )
    CALL Fail("CellToCell: error code 2")
    RETURN
  END IF

END DO
CALL PASS("InitiateCellToCellData()")

CALL domain2_file%DEALLOCATE()
CALL domain1_file%DEALLOCATE()
CALL domain2%DEALLOCATE()
CALL domain1%DEALLOCATE()
CALL obj%DEALLOCATE()
END PROGRAM main
```
