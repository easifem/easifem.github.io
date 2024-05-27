```fortran
PROGRAM main
USE GlobalData
USE BaseType, ONLY: DOF_
USE DOF_Method
USE Test_Method

IMPLICIT NONE

TYPE(DOF_) :: obj
INTEGER(I4B), ALLOCATABLE :: indx(:)

! Initiate an instance of[DOF_] (DOF_.md)

CALL Initiate(obj, tNodes=[10, 10], &
              names=["V", "P"], spaceCompo=[3, 1], &
              timeCompo=[1, 1], storageFMT=FMT_NODES)

! GetIndex

indx = GetIndex(obj, nodeNum=1)
CALL OK(ALL(indx .EQ. [1, 2, 3, 4]), "indx .EQ. [1,2,3,4]:")

indx = GetIndex(obj, nodeNum=5)
CALL OK(ALL(indx .EQ. [17, 18, 19, 20]), "indx .EQ. [17,18,19,20]")

indx = GetIndex(obj, nodeNum=1, iVar=1)
CALL OK(ALL(indx .EQ. [1, 2, 3]), "indx .Eq. [1,2,3]")

indx = GetIndex(obj, nodeNum=1, varName="V")
CALL OK(ALL(indx .EQ. [1, 2, 3]), "indx .Eq. [1,2,3]")

indx = GetIndex(obj, nodeNum=1, iVar=2)
CALL OK(ALL(indx .EQ. [4]), "indx .Eq. [4]")

indx = GetIndex(obj, nodeNum=1, varName="P")
CALL OK(ALL(indx .EQ. [4]), "indx .Eq. [4]")

indx = GetIndex(obj, nodeNum=2, iVar=1)
CALL OK(ALL(indx .EQ. [5, 6, 7]), "indx .Eq. [5,6,7]")

indx = GetIndex(obj, nodeNum=2, iVar=2)
CALL OK(ALL(indx .EQ. [8]), "indx .Eq. [8]")

indx = GetIndex(obj, nodeNum=[1, 2], iVar=1)
CALL OK(ALL(indx .EQ. [1, 2, 3, 5, 6, 7]), "indx .Eq. [1,2,3,5,6,7]")

indx = [GetIndex(obj, nodeNum=1, iVar=1, idof=1)]
CALL OK(ALL(indx .EQ. [1]), "indx .Eq. [1]")

indx = [GetIndex(obj, nodeNum=1, iVar=1, idof=2)]
CALL OK(ALL(indx .EQ. [2]), "indx .Eq. [2]")

indx = [GetIndex(obj, nodeNum=1, iVar=1, idof=3)]
CALL OK(ALL(indx .EQ. [3]), "indx .Eq. [3]")

indx = [GetIndex(obj, nodeNum=2, iVar=1, idof=1)]
CALL OK(ALL(indx .EQ. [5]), "indx .Eq. [5]")

indx = [GetIndex(obj, nodeNum=2, iVar=1, idof=2)]
CALL OK(ALL(indx .EQ. [6]), "indx .Eq. [6]")

indx = [GetIndex(obj, nodeNum=2, iVar=1, idof=3)]
CALL OK(ALL(indx .EQ. [7]), "indx .Eq. [7]")

CALL DEALLOCATE (obj)
END PROGRAM main
```
