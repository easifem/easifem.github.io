! In this example we create an instance of [[CSVFile_]], then we open it and read it.

PROGRAM main
USE CSVFile_Class
USE String_Class
USE GlobalData
USE Display_Method

TYPE(CSVFile_) :: obj
INTEGER(I4B) :: intval
CHARACTER(len=*), PARAMETER :: filename = "./results/test1.txt"
INTEGER(i4b), ALLOCATABLE :: datatypes(:)

! Initiate an instance of [[CSVFile_]], and then Open the [[CSVFile_]] file

CALL obj%Initiate(filename=filename, status='OLD', action='READ')
CALL obj%SetHeaderIndx(1_I4B)
CALL obj%OPEN()
CALL obj%READ()
CALL obj%GetDataTypes(datatypes)
CALL Display(datatypes, "datatypes = ")
CALL obj%GetValue(irow=1, icol=1, val=intval)
CALL Display(intval, "intval = ")

CALL obj%DEALLOCATE()
END PROGRAM main
