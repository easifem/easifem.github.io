! In this exmple we test Lagrange finite element on Line element.
! Interpolation points are equidistance.

! MODULE FUNCTION obj_HierarchicalFEPointer(elemType, nsd, baseContinuity, &
!            baseInterpolation, cellOrder, faceOrder, edgeOrder, cellOrient, &
!                                          faceOrient, edgeOrient) RESULT(ans)

PROGRAM main
USE GlobalData
USE ReferenceElement_Method
USE BaseType
USE Display_Method
USE AbstractFE_Class
USE HierarchicalFE_Class

IMPLICIT NONE

CLASS(AbstractFE_), POINTER :: obj
INTEGER(I4B) :: elemType, nsd
CHARACTER(:), ALLOCATABLE :: testname, baseContinuity
INTEGER(I4B), ALLOCATABLE :: cellOrder(:), faceOrder(:, :), edgeOrder(:), &
                             cellOrient(:), faceOrient(:, :), edgeOrient(:)

elemType = Line
nsd = Xidimension(elemType)
baseContinuity = "H1"
cellOrder = [0]
cellOrient = [1]

testname = "Line, H1, Hierarhical, cellOrder=0"
CALL callme

CONTAINS
SUBROUTINE callme

  !! for 1D elements we just need to provide cellOrdern and cellOrient data
  obj => HierarchicalFEPointer(elemType=elemType, nsd=nsd, &
                               baseContinuity=baseContinuity, &
                               cellOrder=cellOrder, cellOrient=cellOrient)

  !! If we provide faceOrder, and faceOrient data
  !! or edgeOrder and edgeOrient data then
  !! that data is simply ignored

  ! obj => HierarchicalFEPointer(elemType=elemType, nsd=nsd, &
  !                              baseContinuity=baseContinuity, &
  !                              cellOrder=cellOrder, faceOrder=faceOrder, &
  !                              edgeOrder=edgeOrder, cellOrient=cellOrient, &
  !                              faceOrient=faceOrient, edgeOrient=edgeOrient)

  CALL obj%Display(testname)

  CALL obj%DEALLOCATE()
  DEALLOCATE (obj)
END SUBROUTINE callme

END PROGRAM main
