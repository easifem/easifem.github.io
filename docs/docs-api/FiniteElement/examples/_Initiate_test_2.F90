PROGRAM main
USE easifemBase
USE easifemClasses
IMPLICIT NONE

TYPE(FiniteElement_) :: fe
TYPE(ParameterList_) :: param
INTEGER(I4B) :: nsd, elemType, order, iptype

CALL FPL_Init
CALL param%Initiate()

nsd = 2_I4B
elemType = Triangle
order = 1
iptype = Equidistance

CALL SetFiniteElementParam( &
  & param, &
  & nsd, &
  & elemType, &
  & "H1", &
  & "Lagrange", &
  & iptype, &
  & order)

CALL fe%Initiate(param)
CALL fe%Display("FiniteElement: ")

CALL param%DEALLOCATE()
CALL FPL_Finalize
END PROGRAM main
