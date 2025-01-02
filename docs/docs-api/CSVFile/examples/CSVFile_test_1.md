<!-- markdownlint-disable MD041 MD013 MD033 MD012 -->

In this example we create an instance of `CSVFile` then we open it and read it.

```fortran
PROGRAM main
  use easifemBase
  use easifemClasses
  TYPE(CSVFile_) :: obj
  TYPE(String) :: aline
  INTEGER(I4B) :: ii, intval
  real(dfp) :: realval
  character(len=*), parameter :: filename="./example/test1.txt"
  integer( i4b ), allocatable :: datatypes( : )

! Initiate an instance of [[CSVFile_]], and then Open the [[CSVFile_]] file

call obj%Initiate(filename=filename, status='OLD', action='READ')
call obj%setHeaderIndx(1_I4B)
call obj%Open()
call obj%Read()
call obj%getDataTypes( datatypes )
call display( datatypes, "datatypes = ")
call obj%getValue( irow=1, icol=1, val=intval)
call display( intval, "intval = " )

CALL obj%Deallocate()
END PROGRAM main
```
