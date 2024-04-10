# SetColumn

This method sets the column of the CSRMatrix.

Calling example

- `SetColumn(obj, icolumn, value(:,:))`
- `SetColumn(obj, nodenum, idof, value(:,:))`
- `SetColumn(obj, icolumn, value)`
- `SetColumn(obj, nodenum, idof, value)`
- `SetColumn(obj, nodenum, ivar, idof, value)`
- `SetColumn(obj, nodenum, ivar, idof, value(:))`
- `SetColumn(obj, nodenum, ivar, spacecompo, timecompo, value)`
- `SetColumn(obj, nodenum, ivar, spacecompo, timecompo, value(:))`
- `SetColumn(obj, nodenum, ivar, spacecompo, timecompo(:), value)`
- `SetColumn(obj, nodenum, ivar, spacecompo, timecompo(:), value(:))`
- `SetColumn(obj, nodenum, ivar, spacecompo(:), timecompo, value)`
- `SetColumn(obj, nodenum, ivar, spacecompo(:), timecompo, value(:))`
- `SetColumn(obj, nodenum(:), ivar, spacecompo, timecompo(:), value)`
- `SetColumn(obj, nodenum(:), ivar, spacecompo, timecompo(:), value(:))`
- `SetColumn(obj, nodenum(:), ivar, spacecompo(:), timecompo, value)`
- `SetColumn(obj, nodenum(:), ivar, spacecompo(:), timecompo, value(:))`

## Interface

```fortran
!----------------------------------------------------------------------------
!                                                       setColumn@setMethod
!----------------------------------------------------------------------------

!> author: Vikas Sharma, Ph. D.
! date: 24 July 2021
! summary: This routine sets the Column of a sparse matrix

INTERFACE SetColumn
  MODULE SUBROUTINE csrMat_setColumn1(obj, icolumn, VALUE)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: icolumn
    REAL(DFP), INTENT(IN) :: VALUE(:)
  END SUBROUTINE csrMat_setColumn1
END INTERFACE SetColumn

!----------------------------------------------------------------------------
!                                                       setColumn@setMethod
!----------------------------------------------------------------------------

!> author: Vikas Sharma, Ph. D.
! date: 24 July 2021
! summary: This routine sets the Column of a sparse matrix

INTERFACE SetColumn
  MODULE SUBROUTINE csrMat_setColumn1b(obj, icolumn, VALUE)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: icolumn(:)
    REAL(DFP), INTENT(IN) :: VALUE(:)
  END SUBROUTINE csrMat_setColumn1b
END INTERFACE SetColumn

!----------------------------------------------------------------------------
!                                                       setColumn@setMethod
!----------------------------------------------------------------------------

!> author: Vikas Sharma, Ph. D.
! date: 24 July 2021
! summary: This routine sets the Column of a sparse matrix
!
!# Introduction
!
! - This routine sets the Column of a sparse matrix. The Column index is
! calculated using the nodenum and idof.
! - nodenum is the node number
! - idof is the degree of freedom number
! - icolumn calculated from nodenum and idof depends upon the storageFMT.

INTERFACE SetColumn
  MODULE SUBROUTINE csrMat_setColumn2(obj, nodenum, idof, VALUE)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum
    INTEGER(I4B), INTENT(IN) :: idof
    REAL(DFP), INTENT(IN) :: VALUE(:)
  END SUBROUTINE csrMat_setColumn2
END INTERFACE SetColumn

!----------------------------------------------------------------------------
!                                                       setColumn@setMethod
!----------------------------------------------------------------------------

!> author: Vikas Sharma, Ph. D.
! date: 24 July 2021
! summary: This routine sets the Column of a sparse matrix

INTERFACE SetColumn
  MODULE SUBROUTINE csrMat_setColumn3(obj, icolumn, VALUE)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: icolumn
    REAL(DFP), INTENT(IN) :: VALUE
  END SUBROUTINE csrMat_setColumn3
END INTERFACE SetColumn

!----------------------------------------------------------------------------
!                                                       setColumn@setMethod
!----------------------------------------------------------------------------

!> author: Vikas Sharma, Ph. D.
! date: 24 July 2021
! summary: This routine sets the Column of a sparse matrix

INTERFACE SetColumn
  MODULE SUBROUTINE csrMat_setColumn3b(obj, icolumn, VALUE)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: icolumn(:)
    REAL(DFP), INTENT(IN) :: VALUE
  END SUBROUTINE csrMat_setColumn3b
END INTERFACE SetColumn

!----------------------------------------------------------------------------
!                                                       setColumn@setMethod
!----------------------------------------------------------------------------

!> author: Vikas Sharma, Ph. D.
! date: 24 July 2021
! summary: This routine sets the Column of a sparse matrix
!
!# Introduction
!
! - This routine sets the Column of a sparse matrix. The Column index is
! calculated using the nodenum and idof.
! - nodenum is the node number
! - idof is the degree of freedom number
! - icolumn calculated from nodenum and idof depends upon the storageFMT.

INTERFACE SetColumn
  MODULE SUBROUTINE csrMat_setColumn4(obj, nodenum, idof, VALUE)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum
    INTEGER(I4B), INTENT(IN) :: idof
    REAL(DFP), INTENT(IN) :: VALUE
  END SUBROUTINE csrMat_setColumn4
END INTERFACE SetColumn

!----------------------------------------------------------------------------
!                                                       setColumn@setMethod
!----------------------------------------------------------------------------

!> author: Vikas Sharma, Ph. D.
! date: 24 July 2021
! summary: This routine sets the Column of a sparse matrix
!
!# Introduction
!
! - This routine sets the Column of a sparse matrix. The Column index is
! calculated using the nodenum and idof.
! - nodenum is the node number
! - idof is the degree of freedom number
! - icolumn calculated from nodenum and idof depends upon the storageFMT.

INTERFACE SetColumn
  MODULE SUBROUTINE csrMat_setColumn5(obj, nodenum, ivar, idof, VALUE)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: idof
    REAL(DFP), INTENT(IN) :: VALUE
  END SUBROUTINE csrMat_setColumn5
END INTERFACE SetColumn

!----------------------------------------------------------------------------
!                                                       setColumn@setMethod
!----------------------------------------------------------------------------

!> author: Vikas Sharma, Ph. D.
! date: 24 July 2021
! summary: This routine sets the Column of a sparse matrix
!
!# Introduction
!
! - This routine sets the Column of a sparse matrix. The Column index is
! calculated using the nodenum and idof.
! - nodenum is the node number
! - idof is the degree of freedom number
! - icolumn calculated from nodenum and idof depends upon the storageFMT.

INTERFACE SetColumn
  MODULE SUBROUTINE csrMat_setColumn6(obj, nodenum, ivar, idof, VALUE)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: idof
    REAL(DFP), INTENT(IN) :: VALUE(:)
  END SUBROUTINE csrMat_setColumn6
END INTERFACE SetColumn

INTERFACE SetColumn
  MODULE PROCEDURE csrMat_setColumn6
END INTERFACE SetColumn

!----------------------------------------------------------------------------
!                                                       setColumn@setMethod
!----------------------------------------------------------------------------

!> author: Vikas Sharma, Ph. D.
! date: 24 July 2021
! summary: This routine set the Column of a sparse matrix
!
!# Introduction
!
! - This routine sets the Column of a sparse matrix. The Column index is
! calculated
! using the nodenum and idof.
! - nodenum is the node number
! - idof is the degree of freedom number
! - icolumn calculated from nodenum and idof depends upon the storageFMT.

INTERFACE SetColumn
  MODULE SUBROUTINE csrMat_setColumn7(obj, nodenum, ivar, &
    & spacecompo, timecompo, VALUE)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spacecompo
    INTEGER(I4B), INTENT(IN) :: timecompo
    REAL(DFP), INTENT(IN) :: VALUE
  END SUBROUTINE csrMat_setColumn7
END INTERFACE SetColumn

!----------------------------------------------------------------------------
!                                                       setColumn@setMethod
!----------------------------------------------------------------------------

!> author: Vikas Sharma, Ph. D.
! date: 24 July 2021
! summary: This routine set the Column of a sparse matrix
!
!# Introduction
!
! - This routine sets the Column of a sparse matrix. The Column index is
! calculated
! using the nodenum and idof.
! - nodenum is the node number
! - idof is the degree of freedom number
! - icolumn calculated from nodenum and idof depends upon the storageFMT.

INTERFACE SetColumn
  MODULE SUBROUTINE csrMat_setColumn8(obj, nodenum, ivar, &
    & spacecompo, timecompo, VALUE)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spacecompo
    INTEGER(I4B), INTENT(IN) :: timecompo
    REAL(DFP), INTENT(IN) :: VALUE(:)
  END SUBROUTINE csrMat_setColumn8
END INTERFACE SetColumn

!----------------------------------------------------------------------------
!                                                       setColumn@setMethod
!----------------------------------------------------------------------------

!> author: Vikas Sharma, Ph. D.
! date: 24 July 2021
! summary: This routine set the Column of a sparse matrix
!
!# Introduction
!
! - This routine sets the Column of a sparse matrix. The Column index is
! calculated
! using the nodenum and idof.
! - nodenum is the node number
! - idof is the degree of freedom number
! - icolumn calculated from nodenum and idof depends upon the storageFMT.

INTERFACE SetColumn
  MODULE SUBROUTINE csrMat_setColumn9(obj, nodenum, ivar, &
    & spacecompo, timecompo, VALUE)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spacecompo
    INTEGER(I4B), INTENT(IN) :: timecompo(:)
    REAL(DFP), INTENT(IN) :: VALUE
  END SUBROUTINE csrMat_setColumn9
END INTERFACE SetColumn

!----------------------------------------------------------------------------
!                                                       setColumn@setMethod
!----------------------------------------------------------------------------

!> author: Vikas Sharma, Ph. D.
! date: 24 July 2021
! summary: This routine set the Column of a sparse matrix
!
!# Introduction
!
! - This routine sets the Column of a sparse matrix. The Column index is
! calculated
! using the nodenum and idof.
! - nodenum is the node number
! - idof is the degree of freedom number
! - icolumn calculated from nodenum and idof depends upon the storageFMT.

INTERFACE SetColumn
  MODULE SUBROUTINE csrMat_setColumn10(obj, nodenum, ivar, &
    & spacecompo, timecompo, VALUE)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spacecompo
    INTEGER(I4B), INTENT(IN) :: timecompo(:)
    REAL(DFP), INTENT(IN) :: VALUE(:)
  END SUBROUTINE csrMat_setColumn10
END INTERFACE SetColumn

!----------------------------------------------------------------------------
!                                                      setColumn@setMethod
!----------------------------------------------------------------------------

!> author: Vikas Sharma, Ph. D.
! date: 24 July 2021
! summary: This routine set the Column of a sparse matrix
!
!# Introduction
!
! - This routine sets the Column of a sparse matrix. The Column index is
! calculated
! using the nodenum and idof.
! - nodenum is the node number
! - idof is the degree of freedom number
! - icolumn calculated from nodenum and idof depends upon the storageFMT.

INTERFACE SetColumn
  MODULE SUBROUTINE csrMat_setColumn11(obj, nodenum, ivar, &
    & spacecompo, timecompo, VALUE)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spacecompo(:)
    INTEGER(I4B), INTENT(IN) :: timecompo
    REAL(DFP), INTENT(IN) :: VALUE
  END SUBROUTINE csrMat_setColumn11
END INTERFACE SetColumn

!----------------------------------------------------------------------------
!                                                   setColumn@setMethod
!----------------------------------------------------------------------------

!> author: Vikas Sharma, Ph. D.
! date: 24 July 2021
! summary: This routine set the Column of a sparse matrix
!
!# Introduction
!
! - This routine sets the Column of a sparse matrix. The Column index is
! calculated
! using the nodenum and idof.
! - nodenum is the node number
! - idof is the degree of freedom number
! - icolumn calculated from nodenum and idof depends upon the storageFMT.

INTERFACE SetColumn
  MODULE SUBROUTINE csrMat_setColumn12(obj, nodenum, ivar, &
    & spacecompo, timecompo, VALUE)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spacecompo(:)
    INTEGER(I4B), INTENT(IN) :: timecompo
    REAL(DFP), INTENT(IN) :: VALUE(:)
  END SUBROUTINE csrMat_setColumn12
END INTERFACE SetColumn

!----------------------------------------------------------------------------
!                                                      setColumn@setMethod
!----------------------------------------------------------------------------

!> author: Vikas Sharma, Ph. D.
! date: 24 July 2021
! summary: This routine set the Column of a sparse matrix
!
!# Introduction
!
! - This routine sets the Column of a sparse matrix. The Column index is
! calculated
! using the nodenum and idof.
! - nodenum is the node number
! - idof is the degree of freedom number
! - icolumn calculated from nodenum and idof depends upon the storageFMT.

INTERFACE SetColumn
  MODULE SUBROUTINE csrMat_setColumn13(obj, nodenum, ivar, &
    & spacecompo, timecompo, VALUE)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum(:)
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spacecompo
    INTEGER(I4B), INTENT(IN) :: timecompo(:)
    REAL(DFP), INTENT(IN) :: VALUE
  END SUBROUTINE csrMat_setColumn13
END INTERFACE SetColumn

!----------------------------------------------------------------------------
!                                                      setColumn@setMethod
!----------------------------------------------------------------------------

!> author: Vikas Sharma, Ph. D.
! date: 24 July 2021
! summary: This routine set the Column of a sparse matrix
!
!# Introduction
!
! - This routine sets the Column of a sparse matrix. The Column index is
! calculated
! using the nodenum and idof.
! - nodenum is the node number
! - idof is the degree of freedom number
! - icolumn calculated from nodenum and idof depends upon the storageFMT.

INTERFACE SetColumn
  MODULE SUBROUTINE csrMat_setColumn14(obj, nodenum, ivar, &
    & spacecompo, timecompo, VALUE)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum(:)
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spacecompo
    INTEGER(I4B), INTENT(IN) :: timecompo(:)
    REAL(DFP), INTENT(IN) :: VALUE(:)
  END SUBROUTINE csrMat_setColumn14
END INTERFACE SetColumn

!----------------------------------------------------------------------------
!                                                     setColumn@setMethod
!----------------------------------------------------------------------------

!> author: Vikas Sharma, Ph. D.
! date: 24 July 2021
! summary: This routine set the Column of a sparse matrix
!
!# Introduction
!
! - This routine sets the Column of a sparse matrix. The Column index is
! calculated
! using the nodenum and idof.
! - nodenum is the node number
! - idof is the degree of freedom number
! - icolumn calculated from nodenum and idof depends upon the storageFMT.

INTERFACE SetColumn
  MODULE SUBROUTINE csrMat_setColumn15(obj, nodenum, ivar, &
    & spacecompo, timecompo, VALUE)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum(:)
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spacecompo(:)
    INTEGER(I4B), INTENT(IN) :: timecompo
    REAL(DFP), INTENT(IN) :: VALUE
  END SUBROUTINE csrMat_setColumn15
END INTERFACE SetColumn

!----------------------------------------------------------------------------
!                                                      setColumn@setMethod
!----------------------------------------------------------------------------

!> author: Vikas Sharma, Ph. D.
! date: 24 July 2021
! summary: This routine set the Column of a sparse matrix
!
!# Introduction
!
! - This routine sets the Column of a sparse matrix. The Column index is
! calculated
! using the nodenum and idof.
! - nodenum is the node number
! - idof is the degree of freedom number
! - icolumn calculated from nodenum and idof depends upon the storageFMT.

INTERFACE SetColumn
  MODULE SUBROUTINE csrMat_setColumn16(obj, nodenum, ivar, &
    & spacecompo, timecompo, VALUE)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum(:)
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spacecompo(:)
    INTEGER(I4B), INTENT(IN) :: timecompo
    REAL(DFP), INTENT(IN) :: VALUE(:)
  END SUBROUTINE csrMat_setColumn16
END INTERFACE SetColumn
```

