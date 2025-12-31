!> author: Vikas Sharma, Ph. D.
! date: 2025-08-30
! summary:  Example to use `GetInterpolation` method for vector variable.

PROGRAM main
USE GlobalData, ONLY: I4B, DFP, LGT
USE BaseType, ONLY: ElemshapeData_, QuadraturePoint_, ReferenceQuadrangle_, &
                    FEVariable_, TypeH1, TypeLagrangeInterpolation, &
                    TypeQuadratureOpt, TypePolynomialOpt, &
                    TypeFEVariableVector, TypeFEVariableConstant, &
                    TypeFEVariableSpace

USE ReferenceQuadrangle_Method
USE QuadraturePoint_Method
USE ElemShapeData_Method
USE FEVariable_Method
USE OnesUtility
USE Display_Method

IMPLICIT NONE

TYPE(ElemShapeData_) :: obj
TYPE(QuadraturePoint_) :: quad
TYPE(ReferenceQuadrangle_) :: refelem
TYPE(FEVariable_) :: fevar
INTEGER(I4B) :: ipType, basisType
REAL(DFP), ALLOCATABLE :: interpol(:, :)
INTEGER(I4B), PARAMETER :: nsd = 2, order = 2
REAL(DFP), PARAMETER :: xij(2, 4) = RESHAPE([-1.0, -1.0, 1.0, -1.0, &
                                             1.0, 1.0, -1.0, 1.0], &
                                            [2, 4])

! Initiate an instance of [[ReferenceQuadrangle_]]
refelem = ReferenceQuadrangle(nsd=nsd)

! Initiate Gauss-Legendre Quadrature points.
CALL Initiate(obj=quad, refelem=refelem, order=order, &
              quadratureType='GaussLegendre')

ipType = TypeQuadratureOpt%equidistance
basisType = TypePolynomialOpt%monomial

! Initiate an instance of [[ElemshapeData_]] for [[ReferenceQuadrangle_]].
! The code shown below ONLY initiates the local shape FUNCTION DATA.

CALL Initiate(obj=obj, quad=quad, refelem=refelem, &
              baseContinuity=TypeH1, &
              baseInterpolation=TypeLagrangeInterpolation, &
              ipType=ipType, basisType=basisType, order=order)

CALL Set(obj=obj, val=xij(1:nsd, 1:obj%nns), &
         N=obj%N(1:obj%nns, 1:obj%nips), &
         dNdXi=obj%dNdXi(1:obj%nns, 1:obj%xidim, 1:obj%nips))

CALL test1
CALL test2
CALL test3
CALL test4

CONTAINS

!----------------------------------------------------------------------------
!                                                                      test1
!----------------------------------------------------------------------------

! Vector Constant NodalVariable GetInterpolation
SUBROUTINE test1
  REAL(DFP) :: nodeVal(3)
  nodeVal = [1.0_DFP, 2.0_DFP, 3.0_DFP]
  fevar = NodalVariable(nodeVal, TypeFEVariableVector, TypeFEVariableConstant)
  CALL GetInterpolation(obj=obj, ans=interpol, val=fevar)
  CALL Display(interpol, "vector + constant: ")
END SUBROUTINE test1

!----------------------------------------------------------------------------
!                                                                      test2
!----------------------------------------------------------------------------

! Vector Constant NodalVariable Interpolation
SUBROUTINE test2
! Scalar constant
! fevar = NodalVariable(1.0_DFP, TypeFEVariableScalar, TypeFEVariableConstant)
! CALL Display(Interpolation(obj=obj, val=fevar), "scalar+constant:")
END SUBROUTINE test2

!----------------------------------------------------------------------------
!                                                                       test3
!----------------------------------------------------------------------------

! Vector Space NodalVariable GetInterpolation
SUBROUTINE test3
  REAL(DFP) :: nodeVal(3, 4)

  nodeVal = RESHAPE([1.0_DFP, 1.0_DFP, 1.0_DFP, &
                     2.0_DFP, 2.0_DFP, 2.0_DFP, &
                     3.0_DFP, 3.0_DFP, 3.0_DFP, &
                     4.0_DFP, 4.0_DFP, 4.0_DFP], &
                    [3, 4])

  fevar = NodalVariable(nodeVal, TypeFEVariableVector, &
                        TypeFEVariableSpace)

  CALL GetInterpolation(obj=obj, ans=interpol, val=fevar)
  CALL Display(interpol, "vector + space: ")
END SUBROUTINE test3

!----------------------------------------------------------------------------
!                                                                       test4
!----------------------------------------------------------------------------

! Vector Space NodalVariable Interpolation
SUBROUTINE test4
! Scalar, space
! var1 = NodalVariable(ones(4, 1.0_DFP), &
!                      typeFEVariableScalar, &
!                      typeFEVariableSpace)
! CALL Display(Interpolation(obj=obj, val=var1), "scalar+space")
END SUBROUTINE test4

END PROGRAM main
