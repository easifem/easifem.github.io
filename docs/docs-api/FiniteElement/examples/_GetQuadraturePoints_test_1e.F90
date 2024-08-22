! This program is a part of EASIFEM library
! Copyright (C) 2020-2021  Vikas Sharma, Ph.D
!
! This program is free software: you can redistribute it and/or modify
! it under the terms of the GNU General Public License as published by
! the Free Software Foundation, either version 3 of the License, or
! (at your option) any later version.
!
! This program is distributed in the hope that it will be useful,
! but WITHOUT ANY WARRANTY; without even the implied warranty of
! MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
! GNU General Public License for more details.
!
! You should have received a copy of the GNU General Public License
! along with this program.  If not, see <https: //www.gnu.org/licenses/>
!

!> author: Vikas Sharma, Ph. D.
! date: 2023-09-04
! summary: Line | H1 | GaussChebyshevLobatto

PROGRAM main
USE easifemBase
USE easifemClasses
IMPLICIT NONE

TYPE(FiniteElement_) :: fe
TYPE(ParameterList_) :: param
INTEGER(I4B) :: nsd, elemType, order, iptype
TYPE(String) :: baseCont, baseInterpolation
TYPE(ElemShapeData_) :: elemsd
TYPE(QuadraturePoint_) :: quad
INTEGER(I4B), PARAMETER :: quadratureType = GaussChebyshevLobatto

CALL FPL_Init
CALL param%Initiate()

nsd = 1_I4B
elemType = Line2
order = 1
iptype = GaussLegendreLobatto
baseCont = "H1"
baseInterpolation = "Lagrange"

CALL SetFiniteElementParam( &
  & param=param, &
  & nsd=nsd, &
  & elemType=elemType, &
  & baseContinuity=baseCont%chars(), &
  & baseInterpolation=baseInterpolation%chars(), &
  & iptype=iptype, &
  & basisType=[Legendre], &
  & order=order)

CALL fe%Initiate(param)

CALL fe%GetQuadraturePoints( &
  & quad=quad,  &
  & quadratureType=[quadratureType],  &
  & order=[3])

CALL Display(Mdencode(quad), "## ans: "//char_lf2)

CALL fe%GetQuadraturePoints( &
  & quad=quad,  &
  & quadratureType=[quadratureType],  &
  & nips=[3])

CALL Display(Mdencode(quad), "## ans: "//char_lf2)

CALL param%DEALLOCATE()
CALL FPL_Finalize
END PROGRAM main
