This file will be read by the problem ./_ConvertMarkdownToSource_test_1.F90 and converted into a fortran source file.

This is a header.

```fortran
PROGRAM main
USE easifemBase
USE easifemClasses
```

This is a declaration code.

```fortran
IMPLICIT NONE
TYPE(TxtFile_) :: srcfile, mdfile
CHARACTER(LEN=*), PARAMETER :: mdfilename = "./examples/TxtFile_test_1.md"
CHARACTER(LEN=*), PARAMETER :: srcfilename = "./examples/TxtFile_test_1.f90"
```

This is a body code.

```fortran
CALL mdfile%Initiate(filename=mdfilename, STATUS="OLD", ACTION="READ")
CALL mdfile%OPEN()
CALL srcfile%Initiate(filename=srcfilename, status="REPLACE", &
                      ACTION="WRITE")
CALL srcfile%OPEN()
CALL mdfile%ConvertMarkdownToSource(outfile=srcfile)

CALL mdfile%DEALLOCATE()
CALL srcfile%DEALLOCATE()
END PROGRAM main
```
