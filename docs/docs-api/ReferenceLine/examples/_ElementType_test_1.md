```fortran
PROGRAM main
USE BaseType
USE ReferenceLine_Method
USE ReferenceElement_Method
USE GlobalData
USE Test_Method

IMPLICIT NONE

TYPE(ReferenceLine_) :: obj
INTEGER(I4B) :: ans

obj = ReferenceLine(nsd=1_I4B)
ans = ElementType(obj)
CALL OK(ans .EQ. Line2, "ElementType ")

END PROGRAM main
```
