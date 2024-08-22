<!-- markdownlint-disable MD041 MD013 MD033 -->

```fortran
PROGRAM main
USE easifemBase
USE easifemClasses
IMPLICIT NONE
CHARACTER(*), PARAMETER :: filename = "./meshdata/small_mesh.h5"
INTEGER(I4B), ALLOCATABLE :: elem2elem(:, :)
INTEGER(I4B) :: globalElement
TYPE(ElemData_) :: elemdata
TYPE(FEMesh_) :: obj
TYPE(HDF5File_) :: meshfile

CALL e%setQuietMode(EXCEPTION_INFORMATION, .TRUE.)
CALL meshfile%Initiate(filename, "READ")
CALL meshfile%OPEN()
CALL obj%Initiate(hdf5=meshfile, group="/surfaceEntities_1")

elem2elem = obj%GetElementToElements(globalElement=23, onlyElements=.FALSE.)
CALL Display(elem2elem, "Element connected to iel=23")
CALL obj%GetElemData(globalElement=23, elemdata=elemdata, islocal=.FALSE.)
CALL ElemData_Display(elemdata, "elemdata: ")

CALL Blanklines(nol=2)
globalElement = 22
elem2elem = obj%GetElementToElements(globalElement=globalElement, &
                                     onlyElements=.FALSE.)
CALL Display(elem2elem, "Element connected to iel="// &
             tostring(globalElement))
CALL obj%GetElemData(globalElement=globalElement, elemdata=elemdata, &
                     islocal=.FALSE.)
CALL ElemData_Display(elemdata, "elemdata: ")

CALL obj%DEALLOCATE()
CALL meshfile%CLOSE()
CALL meshfile%DEALLOCATE()
END PROGRAM main
```

```bash title="results"
Element connected to iel=23
---------------------------
        22   1   2         
        26   2   3         
        25   3   1         
elemdata:
isActive: TRUE
globalElemNum: 23
localElemNum: 11
elementType:INTERNAL_ELEMENT
elementName:Triangle3
globalNodes: 
-------------
      9      
     10      
     11      
globalEdges: 
-------------
     22      
     23      
     24      
edgeOrient: 
------------
     1      
     1      
     1      
globalElements: 
----------------
       22       
        1       
        2       
       26       
        2       
        3       
       25       
        3       
        1       
boundaryData: 
--------------
 
 
Element connected to iel=22
---------------------------
        20   1   3         
        23   2   1         
        14   3   2         
elemdata:
isActive: TRUE
globalElemNum: 22
localElemNum: 10
elementType:INTERNAL_ELEMENT
elementName:Triangle3
globalNodes: 
-------------
      9      
      8      
     10      
globalEdges: 
-------------
     20      
     22      
      5      
edgeOrient: 
------------
     -1     
      1     
      1     
globalElements: 
----------------
       20       
        1       
        3       
       23       
        2       
        1       
       14       
        3       
        2       
boundaryData: 
--------------
```
