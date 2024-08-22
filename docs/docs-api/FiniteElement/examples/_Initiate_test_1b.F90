PROGRAM main
USE easifemBase
USE easifemClasses
IMPLICIT NONE

TYPE(FiniteElement_) :: fe
TYPE(ParameterList_) :: param
INTEGER(I4B) :: nsd, elemType, order, iptype
TYPE(String) :: baseCont, baseInterpol

CALL FPL_Init
CALL param%Initiate()

nsd = 1_I4B
elemType = Line2
order = 1
iptype = GaussLegendreLobatto
baseCont = "H1"
baseInterpol = "Lagrange"

CALL SetFiniteElementParam( &
  & param=param, &
  & nsd=nsd, &
  & elemType=elemType, &
  & baseContinuity=baseCont%chars(), &
  & baseInterpol=baseInterpol%chars(), &
  & iptype=iptype, &
  & basisType=[Legendre], &
  & order=order)

CALL fe%Initiate(param)

CALL fe%Display("FiniteElement: ")
CALL param%DEALLOCATE()
CALL FPL_Finalize
END PROGRAM main
