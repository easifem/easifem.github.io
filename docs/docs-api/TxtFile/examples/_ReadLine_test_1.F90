! In this example we create an instance of
! TxtFile_, then we open it and write some data to it.
! Importing modules and defining variables

PROGRAM main
USE TxtFile_Class
USE String_Class
USE GlobalData
USE Display_Method

TYPE(TxtFile_) :: obj
TYPE(String) :: aline
INTEGER(I4B) :: ii

CHARACTER(len=*), PARAMETER :: filename = "./files/_ReadLine_test_1.txt"

! Initiate an instance of [[TxtFile_]], and then Open the [[TxtFile_]] file
CALL obj%Initiate(filename=filename, status='NEW', &
                  action='WRITE')
CALL obj%OPEN()

! Write a long line to the file
aline = aline%REPEAT("hello world! ", 3)
WRITE (obj%GetUnitNo(), "(A)") aline%chars()

! Lets close the file.

CALL obj%DEALLOCATE

! Lets open it again with read access.

CALL obj%Initiate(filename=filename, status='OLD', &
                  action='READ')
CALL obj%OPEN()

! Lets read the long line

aline = ""
CALL obj%ReadLine(aline)

CALL Display(aline, "aline read = ")

CALL obj%DEALLOCATE()

END PROGRAM main
