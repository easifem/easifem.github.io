! This example shows the usage of `GetTotalRecords` methods

PROGRAM main
USE TxtFile_Class
USE String_Class
USE GlobalData
USE Display_Method
USE Test_Method

TYPE(TxtFile_) :: obj
TYPE(String) :: aline
INTEGER(I4B) :: ii
CHARACTER(len=*), PARAMETER :: filename = "./files/_GetTotalRecords_test_1.txt", &
  myname = "GetTotalRecords_test_1"

! Initiate an instance of [[TxtFile_]], and then #TxtFile/Open : Open the [[TxtFile_]] file

CALL obj%Initiate(filename=filename, status='OLD', action='READ')
CALL obj%OPEN()

! Returns the total number of records in the file.
! This routine does not ignore the blank record and comments

CALL IS(obj%GetTotalRecords(), 6, myname // "test-1")

! The following code will excludes the comments while counting 
! the number of records. 
! `ignoreComment` and `commentSymbol` should be provided in this case
! Note that this code will still include the blanklines as the valid record.

CALL IS(obj%GetTotalRecords(ignoreComment=.TRUE., commentSymbol="#"), 5, &
  myname // "test-2" )

! The following code will ignore any blank character from the record.
! It will also ignore the comments.
CALL IS(obj%GetTotalRecords(ignoreComment=.TRUE., commentSymbol="#", &
  ignoreBlank=.TRUE.), 3, "test-3" )

! Cleaning up.
CALL obj%DEALLOCATE()
END PROGRAM main
