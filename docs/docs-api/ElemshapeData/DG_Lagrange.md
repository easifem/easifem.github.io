# DG_Lagrange

Initiate element shape data for Lagrange polynomials.

```fortran
MODULE PURE SUBROUTINE DG_Lagrange(obj, quad, refelem, &
  & continuityType, interpolType)
  CLASS(ElemshapeData_), INTENT(INOUT) :: obj
  CLASS(QuadraturePoint_), INTENT(IN) :: quad
  CLASS(ReferenceElement_), INTENT(IN) :: refelem
  CLASS(DG_), INTENT(IN) :: continuityType
  CLASS(LagrangeInterpolation_), INTENT(IN) :: interpolType
END SUBROUTINE DG_Lagrange
```
