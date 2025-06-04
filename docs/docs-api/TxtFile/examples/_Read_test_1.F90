! This example shows the usage of `Read` methods to read a scalar.
! We will read integre, real, and boolean value from a file

PROGRAM main
USE TxtFile_Class
USE String_Class
USE GlobalData
USE Test_Method
USE Display_Method
USE ExceptionHandler_Class, ONLY: e, EXCEPTION_INFORMATION

TYPE(TxtFile_) :: obj
TYPE(String) :: aline
INTEGER(I4B) :: int_r0, iostat
REAL(DFP) :: real_r0
LOGICAL(LGT) :: bool_r0
CHARACTER(len=*), PARAMETER :: filename = "./files/_Read_test_1.txt"

! Initiate an instance of [[TxtFile_]], and then
! Open the [[TxtFile_]] file

CALL e%SetQuietMode(EXCEPTION_INFORMATION, .TRUE.)

CALL obj%Initiate(filename=filename, status='OLD', &
                  action='READ')
CALL obj%OPEN()

! Read the value in the integer.
int_r0 = 0
CALL obj%READ(val=int_r0, iostat=iostat)
CALL IS(int_r0, 1, "test read scalar integer")

! Read the value in the real.
real_r0 = 0
! CALL obj%REWIND()
CALL obj%READ(val=real_r0, iostat=iostat)
CALL IS(INT(real_r0, I4B), 2, "test read scalar real")

! Read the value in the boolean
bool_r0 = .FALSE.
! CALL obj%REWIND()
CALL obj%READ(val=bool_r0, iostat=iostat)
CALL IS(bool_r0, .TRUE., "test read scalar boolean")

! Read the value in the boolean
bool_r0 = .TRUE.
! CALL obj%REWIND()
CALL obj%READ(val=bool_r0, iostat=iostat)
CALL IS(bool_r0, .FALSE., "test read scalar boolean")

! Cleaning up.

CALL obj%DEALLOCATE()
END PROGRAM main
