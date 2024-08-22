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
USE ReallocateUtility

IMPLICIT NONE

CLASS(AbstractFE_), POINTER :: obj
INTEGER(I4B) :: elemType, nsd
CHARACTER(:), ALLOCATABLE :: testname, baseContinuity
INTEGER(I4B), ALLOCATABLE :: cellOrder(:), faceOrder(:, :), edgeOrder(:), &
                             cellOrient(:), faceOrient(:, :), edgeOrient(:)

elemType = Triangle
nsd = Xidimension(elemType)
baseContinuity = "H1"
cellOrder = [1]
cellOrient = [0, 1]
CALL Reallocate(faceOrder, 1, 3)
CALL Reallocate(faceOrient, 1, 3)
faceOrder = 1
faceOrient = 1

testname = "Triangle, H1, Hierarhical, cellOrder=1"
CALL callme

CONTAINS
SUBROUTINE callme

  !! for 2D elements we should provide cellOrder, cellOrient, faceOrder, faceOrient
  obj => HierarchicalFEPointer(elemType=elemType, nsd=nsd, &
                               baseContinuity=baseContinuity, &
                               cellOrder=cellOrder, cellOrient=cellOrient, &
                               faceOrder=faceOrder, faceOrient=faceOrient)

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
