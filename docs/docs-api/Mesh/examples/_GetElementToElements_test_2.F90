PROGRAM main
USE easifemBase
USE easifemClasses

IMPLICIT NONE

CHARACTER(*), PARAMETER :: filename = "./meshdata/small_mesh.h5"
INTEGER(I4B), ALLOCATABLE :: elem2elem(:, :)
INTEGER(I4B) :: globalElement, ii
TYPE(ElemData_) :: elemdata1, elemdata2
TYPE(FEMesh_) :: obj
TYPE(HDF5File_) :: meshfile
LOGICAL(LGT) :: isok

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
CALL Blanklines(nol=2)

CALL ElemData_Display(elemdata1, "elemdata: ")

DO ii = 1, SIZE(elem2elem, 1)

  globalElement = elem2elem(ii, 1)
  CALL obj%GetElemData(globalElement=globalElement, elemdata=elemdata2, &
                       islocal=.FALSE.)

  isok = elemdata1%globalFaces(elem2elem(ii, 2)) &
         .EQ. elemdata2%globalFaces(elem2elem(ii, 3))
  CALL OK(isok, "GetElementToElements test-a : ")

  isok = (elemdata1%faceOrient(1, elem2elem(ii, 2)) &
          + elemdata2%faceOrient(1, elem2elem(ii, 3))) .EQ. 0
  CALL OK(isok, "GetElementToElements test-b : ")

END DO

CALL obj%DEALLOCATE()
CALL meshfile%CLOSE()
CALL meshfile%DEALLOCATE()
END PROGRAM main
