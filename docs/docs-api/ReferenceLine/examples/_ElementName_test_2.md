```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE
TYPE(ReferenceLine_) :: obj
Type(String) :: astr 
obj = ReferenceLine(nsd=1_I4B)
astr = ElementName(obj)
CALL OK(astr .EQ. "Line2", "ElementName" )
END PROGRAM main
```
