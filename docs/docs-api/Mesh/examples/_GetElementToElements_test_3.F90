PROGRAM main
USE easifemBase
USE easifemClasses

IMPLICIT NONE

CHARACTER(*), PARAMETER :: filename = "./meshdata/small_mesh.h5"
INTEGER(I4B), ALLOCATABLE :: elem2elem(:, :)
INTEGER(I4B) :: globalElement
TYPE(ElemData_) :: elemdata1, elemdata2
TYPE(FEMesh_) :: obj
TYPE(HDF5File_) :: meshfile

CALL e%setQuietMode(EXCEPTION_INFORMATION, .TRUE.)
CALL meshfile%Initiate(filename, "READ")
CALL meshfile%OPEN()
CALL obj%Initiate(hdf5=meshfile, group="/surfaceEntities_1")

globalElement = 23
elem2elem = obj%GetElementToElements(globalElement=globalElement, &
                                     onlyElements=.FALSE.)
CALL Display(elem2elem, "Element connected to iel="//tostring(globalElement))
CALL obj%GetElemData(globalElement=globalElement, elemdata=elemdata1, &
                     islocal=.FALSE.)
! CALL ElemData_Display(elemdata1, "elemdata: ")
CALL Blanklines(nol=2)

DO ii = 1, SIZE(elem2elem, 1)

  globalElement = elem2elem(1, ii)
  ! elem2elem = obj%GetElementToElements(globalElement=globalElement, &
  !                                      onlyElements=.FALSE.)
  ! CALL Display(elem2elem, "Element connected to iel="// &
  !              tostring(globalElement))
  CALL obj%GetElemData(globalElement=globalElement, elemdata=elemdata, &
                       islocal=.FALSE.)
  ! CALL ElemData_Display(elemdata, "elemdata: ")

END DO

CALL obj%DEALLOCATE()
CALL meshfile%CLOSE()
CALL meshfile%DEALLOCATE()
END PROGRAM main
