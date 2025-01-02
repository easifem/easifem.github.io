! We write data to csv file

PROGRAM main
USE CSVFile_Class
USE GlobalData
USE Display_Method
IMPLICIT NONE

TYPE(CSVFile_) :: obj
CHARACTER(len=*), PARAMETER :: filename = "./results/test2.txt"
CHARACTER(:), ALLOCATABLE :: aline
REAL(DFP), ALLOCATABLE :: DATA(:, :)

CALL obj%Initiate(filename=filename, status='REPLACE', action='WRITE')
CALL obj%OPEN()

aline = "# This is a comment line"
CALL obj%WRITE(aline)

ALLOCATE (DATA(2, 3))
CALL RANDOM_NUMBER(DATA)

CALL obj%WRITE(DATA)

CALL obj%DEALLOCATE()
END PROGRAM main
