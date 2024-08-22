# DG_Hierarchy

Initiate element shape data for Hierarchy shape functions.

```fortran
MODULE PURE SUBROUTINE DG_Hierarchy(obj, quad, refelem, &
  & continuityType, interpolType)
  CLASS(ElemshapeData_), INTENT(INOUT) :: obj
  CLASS(QuadraturePoint_), INTENT(IN) :: quad
  CLASS(ReferenceElement_), INTENT(IN) :: refelem
  CLASS(DG_), INTENT(IN) :: continuityType
  CLASS(HierarchyInterpolation_), INTENT(IN) :: interpolType
END SUBROUTINE DG_Hierarchy
```
