PROGRAM main
USE FiniteElement_Class
USE FPL
USE GlobalData
USE Display_Method
USE Test_Method

IMPLICIT NONE

CHARACTER(*), PARAMETER :: baseContinuity = "H1", &
                           baseInterpolation = "Lagrange"

TYPE(FiniteElement_) :: fe
TYPE(ParameterList_) :: param
INTEGER(I4B) :: nsd, elemType, order, iptype

CALL FPL_Init
CALL param%Initiate()

nsd = 1_I4B
elemType = Line2
order = 1
iptype = Equidistance

CALL SetFiniteElementParam(param=param, prefix=fe%GetPrefix(), nsd=nsd, &
                           elemType=elemType, &
                           baseContinuity=baseContinuity, &
                           baseInterpolation=baseInterpolation, &
                           iptype=iptype, &
                           basisType=[Monomial], &
                           order=order)

CALL fe%Initiate(param)

CALL fe%Display("finite element:")

! CALL Display(fe%ReactEncode(), "")

CALL param%DEALLOCATE()
CALL FPL_Finalize
END PROGRAM main
