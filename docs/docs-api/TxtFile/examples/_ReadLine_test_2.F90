! In this example we show how to use `ReadLine` function.

PROGRAM main
USE TxtFile_Class
USE String_Class
USE GlobalData
USE Display_Method

TYPE(TxtFile_) :: obj
TYPE(String) :: aline
INTEGER(I4B) :: ii
CHARACTER(len=*), PARAMETER :: filename = "./files/_ReadLine_test_2.txt"

! Initiate an instance of [[TxtFile_]], and then Open the [[TxtFile_]] file

CALL obj%Initiate(filename=filename, status='OLD', action='READ')
CALL obj%OPEN()

! Read a line/record from the buffer
CALL obj%ReadLine(aline)
CALL Display(aline, "line "//tostring(1)//"=")

! Rewind the file
CALL obj%REWIND()

! Let us read the entire file.
ii = 0
DO WHILE (.NOT. obj%IsEOF())
  CALL obj%ReadLine(aline)
  ii = ii + 1
  CALL Display(aline, "line #"//tostring(ii)//": ")
END DO

! Cleaning up.

CALL obj%DEALLOCATE()
END PROGRAM main
