---
title: ReadLine
---

This method reads a single line from a given text file.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE ReadLine(obj, val, iostat, iomsg, &
                         ignoreComment, ignoreBlank, commentSymbol, separator)
    CLASS(TxtFile_), INTENT(INOUT) :: obj
    TYPE(String), INTENT(OUT) :: val
    INTEGER(I4B), OPTIONAL, INTENT(OUT) :: iostat
    CHARACTER(*), OPTIONAL, INTENT(OUT) :: iomsg
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: ignoreComment
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: ignoreBlank
    CHARACTER(1), OPTIONAL, INTENT(IN) :: commentSymbol
    CHARACTER(*), OPTIONAL, INTENT(IN) :: separator
  END SUBROUTINE ReadLine
END INTERFACE
```

## Example 1

import EXAMPLE25 from "./examples/_ReadLine_test_1.md";

<EXAMPLE25 />

## Example 2

import EXAMPLE26 from "./examples/_ReadLine_test_2.md";

<EXAMPLE26 />
