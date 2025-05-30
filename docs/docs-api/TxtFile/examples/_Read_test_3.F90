! This example shows the usage of `Read`
! methods to read a vector of integer, real, and booleans.
! In these examples, the files contains comments and blank lines.

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

CHARACTER(LEN=*), PARAMETER :: filename = "./files/_Read_test_3.txt"

INTEGER(I4B) :: ii
LOGICAL(LGT) :: isok
TYPE(TxtFile_) :: obj
TYPE(String) :: aline
TYPE(IntVector_) :: intvectorval
TYPE(RealVector_) :: realvectorval
INTEGER(I4B), ALLOCATABLE :: intval(:), iostat
REAL(DFP), ALLOCATABLE :: realval(:)
TYPE(String), ALLOCATABLE :: stringval(:)
LOGICAL(LGT), ALLOCATABLE :: boolval(:)

CALL e%SetQuietMode(EXCEPTION_INFORMATION, .TRUE.)

! Initiate an instance of [[TxtFile_]], and then
! Open the [[TxtFile_]] file
CALL obj%Initiate(filename=filename, status='OLD', &
                  action='READ')
CALL obj%OPEN()

! Read the value in the integer.
CALL obj%READ(val=intval, iostat=iostat, &
              ignoreComment=.TRUE., commentSymbol="#", &
              ignoreBlank=.TRUE.)
isok = ALL(intval .EQ. [1, 2, 3])
CALL OK(isok, "test read vector of integer")

! Read the value in the real.
CALL obj%REWIND()
CALL obj%READ(val=realval, iostat=iostat, &
              ignoreComment=.TRUE., commentSymbol="#", &
              ignoreBlank=.TRUE.)
isok = ALL(realval.approxeq. [1.0_DFP, 2.0_DFP, 3.0_DFP])
CALL OK(isok, "test read vector of real")

! Read the value in the string.
CALL obj%REWIND()
CALL obj%READ(val=stringval, iostat=iostat, &
              ignoreComment=.TRUE., commentSymbol="#", &
              ignoreBlank=.TRUE.)
isok = ALL(stringval .EQ. [String("1"), String("2"), String("3")])
CALL OK(isok, "test read vector of string")

! Read the value in an instance of [[IntVector_]]
CALL obj%REWIND()
CALL obj%READ(val=intvectorval, iostat=iostat, &
              ignoreComment=.TRUE., commentSymbol="#", &
              ignoreBlank=.TRUE.)
isok = ALL(Get(intvectorval, 1_I4B) .EQ. [1, 2, 3])
CALL OK(isok, "test read IntVector_")

! Read the value in an instance of [[RealVector_]]
CALL obj%REWIND()
CALL obj%READ(val=realvectorval, iostat=iostat, &
              ignoreComment=.TRUE., commentSymbol="#", &
              ignoreBlank=.TRUE.)
isok = ALL(Get(realvectorval, 1_I4B) .EQ. [1, 2, 3])
CALL OK(isok, "test read RealVector_")

! Read the value in vector of boolean
CALL obj%REWIND()
CALL obj%READ(val=boolval, iostat=iostat, &
              ignoreComment=.TRUE., commentSymbol="#", &
              ignoreBlank=.TRUE.)
isok = ALL(boolval .EQV. [.TRUE., .FALSE., .FALSE.])
CALL OK(isok, "test read a vector of boolean")

! Cleaning up.
CALL obj%DEALLOCATE()
END PROGRAM main
