# KernelMaterials

This class contains the materials of the kernel.

```fortran
TYPE :: KernelMaterials_
  LOGICAL(LGT) :: isConstantMatProp = .FALSE.
  !! Set it to True if the material properties are constant

  LOGICAL(LGT) :: isIsotropic = .FALSE.
  !! Set it to True for isotropic medium

  LOGICAL(LGT) :: isIncompressible = .FALSE.
  !! TRUE if the material is incompressible

  LOGICAL(LGT) :: isMaterialInterface = .FALSE.
  !! True if materialInterfaces are allocated.
  !! We can have multiple solids

  INTEGER(I4B) :: tOverlappedMaterials = 1
  !! Total overlapped materials (like fluid, soil, solid)

  INTEGER(I4B) :: tSolidMaterials = 0
  !! Total number of solid materials

  INTEGER(I4B) :: SOLID_MATERIAL_ID = 0
  !! solid material id

  INTEGER(I4B) :: tMaterialInterfaces = 0
  !! total number of material interfaces

  TYPE(SolidMaterialPointer_), ALLOCATABLE :: solidMaterial(:)
  !! Pointer to the solid material

  TYPE(MeshSelection_), ALLOCATABLE :: solidMaterialToMesh(:)
  !! Map solid material to the mesh portion
  !! The size of solidMaterialToMesh is the same as `tSolidMaterials`
  !! In this way, solidMaterialToMesh(i) gives the mesh region of ith element

  TYPE(DomainConnectivity_), ALLOCATABLE :: matIfaceConnectData(:)
  !! facet to cell data for each materialInterface mesh
  !! The size of matIfaceConnectData is same as the size of
  !! materialInterfaces

  INTEGER(I4B), ALLOCATABLE :: materialInterfaces(:)
  !! mesh id of material interfaces

END TYPE KernelMaterials_
```
