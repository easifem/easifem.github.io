```fortran
PROGRAM main
USE ReferenceQuadrangle_Method
USE GlobalData
USE Display_Method
USE Test_Method

IMPLICIT NONE

INTEGER(I4B) :: faceElemType(10)
LOGICAL(LGT) :: isok

CALL GetFaceElemType_Quadrangle(elemType=Quadrangle, &
                                faceElemType=faceElemType)

isok = ALL(faceElemType(1:4) .EQ. 1_I4B)
CALL OK(isok, "GetFaceElemType_Quadrangle")

END PROGRAM main
```
