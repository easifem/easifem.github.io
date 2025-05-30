! This example shows the usage of `Read`
! methods to read a matrix of integer, real, and booleans.

PROGRAM main
USE TxtFile_Class
USE String_Class
USE GlobalData
USE Test_Method
USE Display_Method
USE BaseType, ONLY: IntVector_, RealVector_
USE ApproxUtility
USE ExceptionHandler_Class, ONLY: e, EXCEPTION_INFORMATION
USE IntVector_Method
USE RealVector_Method

CHARACTER(LEN=*), PARAMETER :: filename = "./files/_Read_test_5.txt"

INTEGER(I4B) :: ii
LOGICAL(LGT) :: isok
TYPE(TxtFile_) :: obj
TYPE(String) :: aline
INTEGER(I4B), ALLOCATABLE :: intval(:, :), iostat
REAL(DFP), ALLOCATABLE :: realval(:, :)
TYPE(IntVector_), ALLOCATABLE :: intvectorval(:)
TYPE(RealVector_), ALLOCATABLE :: realvectorval(:)
INTEGER(I4B), PARAMETER :: intAns(2, 2) = RESHAPE([1, 2, 3, 4], [2, 2])
REAL(DFP), PARAMETER :: realAns(2, 2) = RESHAPE([1.0_DFP, 2.0_DFP, &
                                                 3.0_DFP, 4.0_DFP], [2, 2])

CALL e%SetQuietMode(EXCEPTION_INFORMATION, .TRUE.)

! Initiate an instance of [[TxtFile_]], and then
! Open the [[TxtFile_]] file
CALL obj%Initiate(filename=filename, status='OLD', &
                  action='READ')
CALL obj%OPEN()

! Read the value in the integer.
CALL obj%READ(val=intval, iostat=iostat, separator=",")
isok = ALL(intval .EQ. intAns)
CALL OK(isok, "test read matrix of integer")
! CALL Display(intval, "intval")

! Read the value in the real.
CALL obj%REWIND()
CALL obj%READ(val=realval, iostat=iostat, separator=",")
isok = ALL(realval.approxeq.realAns)
CALL OK(isok, "test read matrix of real")

! Read the value in an instance of [[IntVector_]]
CALL obj%REWIND()
CALL obj%READ(val=intvectorval, iostat=iostat, separator=",")
isok = ALL(Get(intvectorval(1), 1_I4B) .EQ. intAns(1, :))
isok = isok .and. ALL(Get(intvectorval(2), 2_I4B) .EQ. intAns(2, :))
CALL OK(isok, "test read IntVector_")

! Read the value in an instance of [[RealVector_]]
CALL obj%REWIND()
CALL obj%READ(val=realvectorval, iostat=iostat, separator=",")
isok = ALL(Get(realvectorval(1), 1.0_DFP) .APPROXEQ. realAns(1, :))
isok = isok .and. ALL(Get(realvectorval(2), 1.0_DFP) .EQ. realAns(2, :))
CALL OK(isok, "test read RealVector_")

! Cleaning up.
CALL obj%DEALLOCATE()
END PROGRAM main
