!> author: Vikas Sharma, Ph. D.
! date: 2025-06-06
! summary:  Test the intitiate method for H1, Heirarchical basis,
! for different orders.

PROGRAM main
USE OneDimFEDOF_Class, ONLY: OneDimFEDOF_
USE OneDimDomain_Class, ONLY: OneDimDomain_
USE AbstractMesh_Class
USE HDF5File_Class
USE Display_Method
USE GlobalData
USE Test_Method
USE ExceptionHandler_Class, ONLY: e, EXCEPTION_INFORMATION
USE BaseType, ONLY: TypeFEVariableOpt, TypeQuadratureOpt, &
                    TypePolynomialOpt

IMPLICIT NONE

TYPE(OneDimFEDOF_) :: obj
TYPE(OneDimDomain_) :: dom
INTEGER(I4B) :: found, want, order
REAL(DFP), PARAMETER :: domain(2) = [0.0_DFP, 1.0_DFP]
CHARACTER(*), PARAMETER :: baseContinuity="H1" , baseInterpolation="Lagrange"
INTEGER(I4B), PARAMETER :: feType = TypeFEVariableOpt%scalar, &
                           ipType = TypeQuadratureOpt%equidistance, &
                           basisType = TypePolynomialOpt%monomial, &
                           quadratureType = TypeQuadratureOpt%gaussLegendre

CALL e%setQuietMode(EXCEPTION_INFORMATION, .TRUE.)

CALL dom%Initiate(domain=domain, totalElements=2)
! CALL dom%Display("domain: ")

CALL test1
CALL test2

CALL dom%DEALLOCATE()

CONTAINS

SUBROUTINE test1
  order = 1
  CALL obj%Initiate(order=order, mesh=dom, baseContinuity=baseContinuity, &
          baseInterpolation=baseInterpolation, fetype=feType, ipType=ipType, &
    basisType=basisType, quadratureType=quadratureType, quadratureOrder=order)
  CALL obj%Display("FEDOF:")
  found = obj%GetTotalDOF()
  want = dom%GetTotalNodes()
  CALL IS(found, want, "Total DOF (order=1): ")
END SUBROUTINE test1

SUBROUTINE test2
  order = 2
  CALL obj%Initiate(order=order, mesh=dom, baseContinuity=baseContinuity, &
          baseInterpolation=baseInterpolation, fetype=feType, ipType=ipType, &
    basisType=basisType, quadratureType=quadratureType, quadratureOrder=order)
  CALL obj%Display("FEDOF:")
  found = obj%GetTotalDOF()
  want = dom%GetTotalVertexNodes() + (order - 1) * dom%GetTotalElements()
  CALL IS(found, want, "Total DOF ( order : "//Tostring(order)//"): ")
END SUBROUTINE test2

END PROGRAM main
