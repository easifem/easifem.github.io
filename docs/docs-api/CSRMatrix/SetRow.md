# SetRow

Calling example:

- `SetRow(obj, irow, value(:,:))`
- `SetRow(obj, nodenum, idof, value(:,:))`
- `SetRow(obj, irow, value)`
- `SetRow(obj, nodenum, idof, value)`
- `SetRow(obj, nodenum, ivar, idof, value)`
- `SetRow(obj, nodenum, ivar, idof, value(:))`
- `SetRow(obj, nodenum, ivar, spacecompo, timecompo, value)`
- `SetRow(obj, nodenum, ivar, spacecompo, timecompo, value(:))`
- `SetRow(obj, nodenum, ivar, spacecompo, timecompo(:), value)`
- `SetRow(obj, nodenum, ivar, spacecompo, timecompo(:), value(:))`
- `SetRow(obj, nodenum, ivar, spacecompo(:), timecompo, value)`
- `SetRow(obj, nodenum, ivar, spacecompo(:), timecompo, value(:))`
- `SetRow(obj, nodenum(:), ivar, spacecompo, timecompo(:), value)`
- `SetRow(obj, nodenum(:), ivar, spacecompo, timecompo(:), value(:))`
- `SetRow(obj, nodenum(:), ivar, spacecompo(:), timecompo, value)`
- `SetRow(obj, nodenum(:), ivar, spacecompo(:), timecompo, value(:))`

## Interface

```fortran
MODULE CSRMatrix_SetRowMethods
USE GlobalData, ONLY: I4B, DFP, LGT
USE BaseType, ONLY: CSRMatrix_
IMPLICIT NONE
PRIVATE

PUBLIC :: SetRow

!----------------------------------------------------------------------------
!                                                          setRow@Methods
!----------------------------------------------------------------------------

!> author: Vikas Sharma, Ph. D.
! date: 24 July 2021
! summary: This routine sets the the row of a sparse matrix

INTERFACE SetRow
  MODULE SUBROUTINE csrMat_setRow1(obj, irow, VALUE)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: irow
    REAL(DFP), INTENT(IN) :: VALUE(:)
  END SUBROUTINE csrMat_setRow1
END INTERFACE SetRow

!----------------------------------------------------------------------------
!                                                          setRow@Methods
!----------------------------------------------------------------------------

!> author: Vikas Sharma, Ph. D.
! date: 24 July 2021
! summary: This routine sets the the row of a sparse matrix

INTERFACE SetRow
  MODULE SUBROUTINE csrMat_setRow1b(obj, irow, VALUE)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: irow(:)
    REAL(DFP), INTENT(IN) :: VALUE(:)
  END SUBROUTINE csrMat_setRow1b
END INTERFACE SetRow

!----------------------------------------------------------------------------
!                                                          setRow@Methods
!----------------------------------------------------------------------------

!> author: Vikas Sharma, Ph. D.
! date: 24 July 2021
! summary: This routine set the row of a sparse matrix
!
!# Introduction
!
! - This routine sets the row of a sparse matrix. The row index is
! calculated using the nodenum and idof.
! - `nodenum` is the node number
! - `idof` is the degree of freedom number
! - `irow` calculated from nodenum and idof depends upon the storageFMT.

INTERFACE SetRow
  MODULE SUBROUTINE csrMat_setRow2(obj, nodenum, idof, VALUE)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum
    INTEGER(I4B), INTENT(IN) :: idof
    REAL(DFP), INTENT(IN) :: VALUE(:)
  END SUBROUTINE csrMat_setRow2
END INTERFACE SetRow

!----------------------------------------------------------------------------
!                                                          setRow@Methods
!----------------------------------------------------------------------------

!> author: Vikas Sharma, Ph. D.
! date: 24 July 2021
! summary: This routine sets the the row of a sparse matrix

INTERFACE SetRow
  MODULE SUBROUTINE csrMat_setRow3(obj, irow, VALUE)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: irow
    REAL(DFP), INTENT(IN) :: VALUE
  END SUBROUTINE csrMat_setRow3
END INTERFACE SetRow

!----------------------------------------------------------------------------
!                                                          setRow@Methods
!----------------------------------------------------------------------------

!> author: Vikas Sharma, Ph. D.
! date: 24 July 2021
! summary: This routine sets the the row of a sparse matrix

INTERFACE SetRow
  MODULE SUBROUTINE csrMat_setRow3b(obj, irow, VALUE)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: irow(:)
    REAL(DFP), INTENT(IN) :: VALUE
  END SUBROUTINE csrMat_setRow3b
END INTERFACE SetRow

!----------------------------------------------------------------------------
!                                                          setRow@Methods
!----------------------------------------------------------------------------

!> author: Vikas Sharma, Ph. D.
! date: 24 July 2021
! summary: This routine set the row of a sparse matrix
!
!# Introduction
!
! - This routine sets the row of a sparse matrix. The row index is calculated
! using the nodenum and idof.
! - nodenum is the node number
! - idof is the degree of freedom number
! - irow calculated from nodenum and idof depends upon the storageFMT.

INTERFACE SetRow
  MODULE SUBROUTINE csrMat_setRow4(obj, nodenum, idof, VALUE)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum
    INTEGER(I4B), INTENT(IN) :: idof
    REAL(DFP), INTENT(IN) :: VALUE
  END SUBROUTINE csrMat_setRow4
END INTERFACE SetRow

!----------------------------------------------------------------------------
!                                                          setRow@Methods
!----------------------------------------------------------------------------

!> author: Vikas Sharma, Ph. D.
! date: 24 July 2021
! summary: This routine set the row of a sparse matrix
!
!# Introduction
!
! - This routine sets the row of a sparse matrix. The row index is calculated
! using the nodenum and idof.
! - nodenum is the node number
! - idof is the degree of freedom number
! - irow calculated from nodenum and idof depends upon the storageFMT.

INTERFACE SetRow
  MODULE SUBROUTINE csrMat_setRow5(obj, nodenum, ivar, idof, VALUE)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: idof
    REAL(DFP), INTENT(IN) :: VALUE
  END SUBROUTINE csrMat_setRow5
END INTERFACE SetRow

!----------------------------------------------------------------------------
!                                                          setRow@Methods
!----------------------------------------------------------------------------

!> author: Vikas Sharma, Ph. D.
! date: 24 July 2021
! summary: This routine set the row of a sparse matrix
!
!# Introduction
!
! - This routine sets the row of a sparse matrix. The row index is calculated
! using the nodenum and idof.
! - nodenum is the node number
! - idof is the degree of freedom number
! - irow calculated from nodenum and idof depends upon the storageFMT.

INTERFACE SetRow
  MODULE SUBROUTINE csrMat_setRow6(obj, nodenum, ivar, idof, VALUE)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: idof
    REAL(DFP), INTENT(IN) :: VALUE(:)
  END SUBROUTINE csrMat_setRow6
END INTERFACE SetRow

!----------------------------------------------------------------------------
!                                                          setRow@Methods
!----------------------------------------------------------------------------

!> author: Vikas Sharma, Ph. D.
! date: 24 July 2021
! summary: This routine set the row of a sparse matrix
!
!# Introduction
!
! - This routine sets the row of a sparse matrix. The row index is calculated
! using the nodenum and idof.
! - nodenum is the node number
! - idof is the degree of freedom number
! - irow calculated from nodenum and idof depends upon the storageFMT.

INTERFACE SetRow
  MODULE SUBROUTINE csrMat_setRow7(obj, nodenum, ivar, &
    & spacecompo, timecompo, VALUE)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spacecompo
    INTEGER(I4B), INTENT(IN) :: timecompo
    REAL(DFP), INTENT(IN) :: VALUE
  END SUBROUTINE csrMat_setRow7
END INTERFACE SetRow

!----------------------------------------------------------------------------
!                                                          setRow@Methods
!----------------------------------------------------------------------------

!> author: Vikas Sharma, Ph. D.
! date: 24 July 2021
! summary: This routine set the row of a sparse matrix
!
!# Introduction
!
! - This routine sets the row of a sparse matrix. The row index is calculated
! using the nodenum and idof.
! - nodenum is the node number
! - idof is the degree of freedom number
! - irow calculated from nodenum and idof depends upon the storageFMT.

INTERFACE SetRow
  MODULE SUBROUTINE csrMat_setRow8(obj, nodenum, ivar, &
    & spacecompo, timecompo, VALUE)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spacecompo
    INTEGER(I4B), INTENT(IN) :: timecompo
    REAL(DFP), INTENT(IN) :: VALUE(:)
  END SUBROUTINE csrMat_setRow8
END INTERFACE SetRow

!----------------------------------------------------------------------------
!                                                          setRow@Methods
!----------------------------------------------------------------------------

!> author: Vikas Sharma, Ph. D.
! date: 24 July 2021
! summary: This routine set the row of a sparse matrix
!
!# Introduction
!
! - This routine sets the row of a sparse matrix. The row index is calculated
! using the nodenum and idof.
! - nodenum is the node number
! - idof is the degree of freedom number
! - irow calculated from nodenum and idof depends upon the storageFMT.

INTERFACE SetRow
  MODULE SUBROUTINE csrMat_setRow9(obj, nodenum, ivar, &
    & spacecompo, timecompo, VALUE)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spacecompo
    INTEGER(I4B), INTENT(IN) :: timecompo(:)
    REAL(DFP), INTENT(IN) :: VALUE
  END SUBROUTINE csrMat_setRow9
END INTERFACE SetRow

!----------------------------------------------------------------------------
!                                                          setRow@Methods
!----------------------------------------------------------------------------

!> author: Vikas Sharma, Ph. D.
! date: 24 July 2021
! summary: This routine set the row of a sparse matrix
!
!# Introduction
!
! - This routine sets the row of a sparse matrix. The row index is calculated
! using the nodenum and idof.
! - nodenum is the node number
! - idof is the degree of freedom number
! - irow calculated from nodenum and idof depends upon the storageFMT.

INTERFACE SetRow
  MODULE SUBROUTINE csrMat_setRow10(obj, nodenum, ivar, &
    & spacecompo, timecompo, VALUE)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spacecompo
    INTEGER(I4B), INTENT(IN) :: timecompo(:)
    REAL(DFP), INTENT(IN) :: VALUE(:)
  END SUBROUTINE csrMat_setRow10
END INTERFACE SetRow

!----------------------------------------------------------------------------
!                                                          setRow@Methods
!----------------------------------------------------------------------------

!> author: Vikas Sharma, Ph. D.
! date: 24 July 2021
! summary: This routine set the row of a sparse matrix
!
!# Introduction
!
! - This routine sets the row of a sparse matrix. The row index is calculated
! using the nodenum and idof.
! - nodenum is the node number
! - idof is the degree of freedom number
! - irow calculated from nodenum and idof depends upon the storageFMT.

INTERFACE SetRow
  MODULE SUBROUTINE csrMat_setRow11(obj, nodenum, ivar, &
    & spacecompo, timecompo, VALUE)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spacecompo(:)
    INTEGER(I4B), INTENT(IN) :: timecompo
    REAL(DFP), INTENT(IN) :: VALUE
  END SUBROUTINE csrMat_setRow11
END INTERFACE SetRow

!----------------------------------------------------------------------------
!                                                          setRow@Methods
!----------------------------------------------------------------------------

!> author: Vikas Sharma, Ph. D.
! date: 24 July 2021
! summary: This routine set the row of a sparse matrix
!
!# Introduction
!
! - This routine sets the row of a sparse matrix. The row index is calculated
! using the nodenum and idof.
! - nodenum is the node number
! - idof is the degree of freedom number
! - irow calculated from nodenum and idof depends upon the storageFMT.

INTERFACE SetRow
  MODULE SUBROUTINE csrMat_setRow12(obj, nodenum, ivar, &
    & spacecompo, timecompo, VALUE)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spacecompo(:)
    INTEGER(I4B), INTENT(IN) :: timecompo
    REAL(DFP), INTENT(IN) :: VALUE(:)
  END SUBROUTINE csrMat_setRow12
END INTERFACE SetRow

!----------------------------------------------------------------------------
!                                                          setRow@Methods
!----------------------------------------------------------------------------

!> author: Vikas Sharma, Ph. D.
! date: 24 July 2021
! summary: This routine set the row of a sparse matrix
!
!# Introduction
!
! - This routine sets the row of a sparse matrix. The row index is calculated
! using the nodenum and idof.
! - nodenum is the node number
! - idof is the degree of freedom number
! - irow calculated from nodenum and idof depends upon the storageFMT.

INTERFACE SetRow
  MODULE SUBROUTINE csrMat_setRow13(obj, nodenum, ivar, &
    & spacecompo, timecompo, VALUE)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum(:)
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spacecompo
    INTEGER(I4B), INTENT(IN) :: timecompo(:)
    REAL(DFP), INTENT(IN) :: VALUE
  END SUBROUTINE csrMat_setRow13
END INTERFACE SetRow

!----------------------------------------------------------------------------
!                                                          setRow@Methods
!----------------------------------------------------------------------------

!> author: Vikas Sharma, Ph. D.
! date: 24 July 2021
! summary: This routine set the row of a sparse matrix
!
!# Introduction
!
! - This routine sets the row of a sparse matrix. The row index is calculated
! using the nodenum and idof.
! - nodenum is the node number
! - idof is the degree of freedom number
! - irow calculated from nodenum and idof depends upon the storageFMT.

INTERFACE SetRow
  MODULE SUBROUTINE csrMat_setRow14(obj, nodenum, ivar, &
    & spacecompo, timecompo, VALUE)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum(:)
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spacecompo
    INTEGER(I4B), INTENT(IN) :: timecompo(:)
    REAL(DFP), INTENT(IN) :: VALUE(:)
  END SUBROUTINE csrMat_setRow14
END INTERFACE SetRow

!----------------------------------------------------------------------------
!                                                          setRow@Methods
!----------------------------------------------------------------------------

!> author: Vikas Sharma, Ph. D.
! date: 24 July 2021
! summary: This routine set the row of a sparse matrix
!
!# Introduction
!
! - This routine sets the row of a sparse matrix. The row index is calculated
! using the nodenum and idof.
! - nodenum is the node number
! - idof is the degree of freedom number
! - irow calculated from nodenum and idof depends upon the storageFMT.

INTERFACE SetRow
  MODULE SUBROUTINE csrMat_setRow15(obj, nodenum, ivar, &
    & spacecompo, timecompo, VALUE)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum(:)
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spacecompo(:)
    INTEGER(I4B), INTENT(IN) :: timecompo
    REAL(DFP), INTENT(IN) :: VALUE
  END SUBROUTINE csrMat_setRow15
END INTERFACE SetRow

!----------------------------------------------------------------------------
!                                                          setRow@Methods
!----------------------------------------------------------------------------

!> author: Vikas Sharma, Ph. D.
! date: 24 July 2021
! summary: This routine set the row of a sparse matrix
!
!# Introduction
!
! - This routine sets the row of a sparse matrix. The row index is calculated
! using the nodenum and idof.
! - nodenum is the node number
! - idof is the degree of freedom number
! - irow calculated from nodenum and idof depends upon the storageFMT.

INTERFACE SetRow
  MODULE SUBROUTINE csrMat_setRow16(obj, nodenum, ivar, &
    & spacecompo, timecompo, VALUE)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum(:)
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spacecompo(:)
    INTEGER(I4B), INTENT(IN) :: timecompo
    REAL(DFP), INTENT(IN) :: VALUE(:)
  END SUBROUTINE csrMat_setRow16
END INTERFACE SetRow

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

END MODULE CSRMatrix_SetRowMethods
```
