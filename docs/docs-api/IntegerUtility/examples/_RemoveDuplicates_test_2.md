<!-- markdownlint-disable MD041 MD013 MD033 -->

```fortran
PROGRAM main
USE easifembase

IMPLICIT NONE

INTEGER(i4b), ALLOCATABLE :: intvec(:)
INTEGER(I4B) :: tsize
intvec = [5, 4, 4, 4, 3, 3, 2, 2, 1, 1, 1]

CALL RemoveDuplicates_(intvec, tsize, .FALSE.)
CALL Display(intvec(1:tsize), "intvec = ")
END PROGRAM main
```
