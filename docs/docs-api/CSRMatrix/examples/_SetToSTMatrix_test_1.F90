!> author: Vikas Sharma, Ph. D.
! date: 2025-11-20
! summary: Testing SetToSTMatrix method

PROGRAM main
USE GlobalData
USE BaseType
USE CSRMatrix_Method
USE DOF_Method
USE Display_Method

IMPLICIT NONE
TYPE(CSRMatrix_) :: obj, VALUE
TYPE(DOF_) :: dofvalue, dofobj
REAL(DFP), ALLOCATABLE :: valueMat(:, :), objMat(:, :)

CALL Initiate(obj=dofvalue, tNodes=[4], names=['K'], &
              spaceCompo=[1], timeCompo=[1], storageFMT=FMT_DOF)

CALL Initiate(obj=VALUE, ncol=(.tnodes.dofvalue), &
              nrow=(.tnodes.dofvalue), idof=dofvalue, jdof=dofvalue)

CALL Initiate(obj=dofobj, tNodes=[4], names=['K'], &
              spaceCompo=[1], timeCompo=[2], storageFMT=FMT_DOF)

CALL Initiate(obj=obj, ncol=(.tnodes.dofobj), &
              nrow=(.tnodes.dofobj), idof=dofobj, jdof=dofobj)

CALL Setsparsity(VALUE, 1, [1, 2])
CALL Setsparsity(VALUE, 2, [1, 2, 3])
CALL Setsparsity(VALUE, 3, [2, 3, 4])
CALL Setsparsity(VALUE, 4, [3, 4])
CALL SetSparsity(VALUE)

CALL Set(VALUE, 1, 1, 1.0_DFP)
CALL Set(VALUE, 1, 2, 2.0_DFP)
CALL Set(VALUE, 2, 1, 3.0_DFP)
CALL Set(VALUE, 2, 2, 4.0_DFP)
CALL Set(VALUE, 2, 3, 5.0_DFP)
CALL Set(VALUE, 3, 2, 6.0_DFP)
CALL Set(VALUE, 3, 3, 7.0_DFP)
CALL Set(VALUE, 3, 4, 8.0_DFP)
CALL Set(VALUE, 4, 3, 9.0_DFP)
CALL Set(VALUE, 4, 4, 10.0_DFP)

CALL Setsparsity(obj, 1, [1, 2])
CALL Setsparsity(obj, 2, [1, 2, 3])
CALL Setsparsity(obj, 3, [2, 3, 4])
CALL Setsparsity(obj, 4, [3, 4])
CALL SetSparsity(obj)

CALL SetToSTMatrix(obj=obj, VALUE=VALUE, &
                   itimecompo=2, jtimecompo=1, scale=1.0_DFP)
! obj = 2.0_DFP

valueMat = VALUE
CALL Display(valueMat, "valueMat: ", full=.TRUE.)

objMat = obj
CALL Display(objMat, "objMat: ", full=.TRUE.)

CALL DEALLOCATE (obj)
CALL DEALLOCATE (VALUE)
END PROGRAM main
