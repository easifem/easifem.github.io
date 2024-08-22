PROGRAM main
USE HashTables
USE GlobalData
USE Display_Method

IMPLICIT NONE

LOGICAL(LGT), PARAMETER :: yes = .TRUE., no = .FALSE.
TYPE(HashTable_) :: obj
TYPE(HashKeyInt32_) :: key
LOGICAL(LGT) :: isok
INTEGER :: ii, n

key = Hashkey(1); CALL obj%set(key, VALUE=yes)
key = Hashkey(3); CALL obj%set(key, VALUE=yes)
key = Hashkey(6); CALL obj%set(key, VALUE=yes)

n = 10
DO ii = 1, n
  key = Hashkey(ii)
  isok = obj%IsKeyPresent(key)
  CALL Display(isok, tostring(ii)//' is present: ')
END DO

END PROGRAM main
