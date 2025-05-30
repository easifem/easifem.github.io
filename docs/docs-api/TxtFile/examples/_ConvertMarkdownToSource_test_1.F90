! This code reads a markdown file and extracts the fortran code

PROGRAM main
USE TxtFile_Class

IMPLICIT NONE

TYPE(TxtFile_) :: srcfile, mdfile
CHARACTER(LEN=*), PARAMETER :: mdfilename = "./files/_ConvertMarkdownToSource_testfile.md"
CHARACTER(LEN=*), PARAMETER :: srcfilename = "./files/_ConvertMarkdownToSource_testfile.F90"

CALL mdfile%Initiate(filename=mdfilename, STATUS="OLD", ACTION="READ")
CALL mdfile%OPEN()

CALL srcfile%Initiate(filename=srcfilename, status="REPLACE", &
     ACTION="WRITE")

CALL srcfile%Open()

CALL mdfile%ConvertMarkdownToSource(outfile=srcfile)

CALL mdfile%Deallocate()
CALL srcfile%Deallocate()

END PROGRAM main
