!> author: Vikas Sharma, Ph. D.
! date: 2025-06-01
! summary:  Get value of an integer vector from toml file

PROGRAM main

USE GlobalData
USE TomlUtility, ONLY: GetValue
USE tomlf, ONLY: toml_table, toml_get => get_value
USE Test_Method
USE ExceptionHandler_Class, ONLY: e, EXCEPTION_INFORMATION

IMPLICIT NONE

CHARACTER(*), PARAMETER :: filename = "./toml/test.toml"
TYPE(toml_table), ALLOCATABLE :: table
TYPE(toml_table), POINTER :: node
INTEGER(I4B) :: origin, stat
LOGICAL(LGT) :: isFound, isok
INTEGER(I4B), ALLOCATABLE :: VALUE(:)

CALL e%setQuietMode(EXCEPTION_INFORMATION, .TRUE.)

CALL GetValue(table=table, filename=filename)

node => NULL()
CALL toml_get(table, "test1", node, origin=origin, requested=.FALSE., &
              stat=stat)

CALL GetValue(table=node, key="value1", VALUE=VALUE, &
              origin=origin, stat=stat, isFound=isFound)
isok = ALL(VALUE .EQ. [1, 2])
CALL OK(isok, "Getvalue: integer vector from toml array")

CALL GetValue(table=node, key="value2", VALUE=VALUE, &
              origin=origin, stat=stat, isFound=isFound)
isok = ALL(VALUE .EQ. [1, 2])
CALL OK(isok, "Getvalue: integer vector from txt file")

CALL GetValue(table=node, key="value3", VALUE=VALUE, &
              origin=origin, stat=stat, isFound=isFound)
isok = ALL(VALUE .EQ. [1, 2])
CALL OK(isok, "Getvalue: integer vector from txt file")

CALL GetValue(table=node, key="value4", VALUE=VALUE, &
              origin=origin, stat=stat, isFound=isFound)
isok = ALL(VALUE .EQ. [1, 2])
CALL OK(isok, "Getvalue: integer vector from csv file")

CALL GetValue(table=node, key="value5", VALUE=VALUE, &
              origin=origin, stat=stat, isFound=isFound)
isok = ALL(VALUE .EQ. [1, 2])
CALL OK(isok, "Getvalue: integer vector from csv file")

CALL GetValue(table=node, key="value6", VALUE=VALUE, &
              origin=origin, stat=stat, isFound=isFound)
isok = ALL(VALUE .EQ. [1, 2, 0, 0, 5])
CALL OK(isok, "Getvalue: integer vector from csv file")

node => NULL()

END PROGRAM main
