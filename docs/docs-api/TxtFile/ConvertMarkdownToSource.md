---
title: ConvertMarkdownToSource
---

This method reads a markdown file and extracts the Fortran code blocks, converting them into a Fortran source file.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE ConvertMarkdownToSource(obj, outfile, lang)
    CLASS(TxtFile_), INTENT(INOUT) :: obj
    TYPE(TxtFile_), INTENT(INOUT) :: outfile
    CHARACTER(*), OPTIONAL, INTENT(IN) :: lang
  END SUBROUTINE ConvertMarkdownToSource
END INTERFACE
```

## Example 1

import EXAMPLE21 from "./examples/_ConvertMarkdownToSource_test_1.md";

<EXAMPLE21 />
