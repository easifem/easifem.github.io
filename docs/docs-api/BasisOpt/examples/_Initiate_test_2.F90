!> author: Vikas Sharma, Ph. D.
! date: 2025-07-12
! summary:  Initiate BasisOpt for Hierarchical polynomial

PROGRAM main

USE GlobalData
USE BasisOpt_Class
USE BaseType, ONLY: varopt => TypeFEVariableOpt, &
                    elemnameopt => TypeElemNameOpt, &
                    ipopt => TypeInterpolationOpt, &
                    polyopt => TypePolynomialOpt
USE ExceptionHandler_Class, ONLY: e, EXCEPTION_INFORMATION

TYPE(BasisOpt_) :: obj
INTEGER(I4B) :: basisType(3), order, anisoOrder(3)

CALL e%SetQuietMode(EXCEPTION_INFORMATION, .TRUE.)

basisType = polyopt%monomial

CALL obj%Initiate(elemType=elemnameopt%triangle, nsd=2, &
                  baseContinuity="H1", &
                  baseInterpolation="HIER", &
                  feType=varopt%scalar)

! order = 1
! CALL obj%SetOrder(order=order, errCheck=.TRUE.)

! order = 1
! CALL obj%SetOrder(order=order, errCheck=.FALSE.)

anisoOrder = 1
CALL obj%SetOrder(anisoOrder=anisoOrder, errCheck=.TRUE.)

CALL obj%Display("BasisOpt: ")

END PROGRAM main

