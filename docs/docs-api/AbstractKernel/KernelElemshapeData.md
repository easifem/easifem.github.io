# KernelElemshapeData

This class contains the information of the shape functions used in the kernel.

```fortran
TYPE KernelElemshapeData_
  TYPE(ElemshapeData_) :: geoTimeElemSD
  !! Element shape data on linear time element #STFEM

  TYPE(ElemshapeData_) :: timeElemSD
  !! Element shape data on time element #STFEM

  TYPE(ElemshapeData_) :: geoSpaceElemSD
  !! Element shape data on linear space (simplex) element
  !! cell data only

  TYPE(ElemshapeData_) :: spaceElemSD
  !! Element shape data on space element
  !! cell data only

  TYPE(ElemshapeData_) :: geoSpaceElemSD_facet
  !! Element shape data on linear space (simplex) element
  !! facet element

  TYPE(ElemshapeData_) :: spaceElemSD_facet
  !! Element shape data on space element facet element

  TYPE(STElemshapeData_), ALLOCATABLE :: stelemsd(:)
  !! Element shape data on space-time element
END TYPE KernelElemshapeData_
```
