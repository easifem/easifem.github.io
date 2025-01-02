# KernelMeshFields

This class contains the mesh fields of the kernel.

Its structure is given below:

## Structure

```fortran
TYPE :: KernelMeshFields_
  TYPE(AbstractScalarMeshFieldPointer_), ALLOCATABLE :: scalarFields(:)
  !! Scalar mesh fields

  TYPE(AbstractVectorMeshFieldPointer_), ALLOCATABLE :: vectorFields(:)
  !! Vector mesh fields

  TYPE(AbstractTensorMeshFieldPointer_), ALLOCATABLE :: tensorFields(:)
  !! tensor mesh fields

  CLASS(AbstractScalarMeshField_), POINTER :: massDensity => NULL()
  !! Mass density, scalar mesh field

  INTEGER(I4B) :: massDensityFieldType = TypeField%normal
  !! field type for mass density
  !! normal means the field will change from one element to another

  INTEGER(I4B) :: massDensityVarType = TypeField%constant
  !! varType denotes how the field is changing inside the element
  !! constant means the field is constant inside the element
  !! space means the field changes in space element
  !! spaceTime means the field changes in space-time element
  !! time means the field changes in time element

  INTEGER(I4B) :: massDensityDefineOn = TypeFEVariableOpt%quadrature
  !! mass density is defined on quadrature points

  INTEGER(I4B) :: massDensityMaxNNS = 0
  !! maximum number of nodes in space for mass density

  INTEGER(I4B) :: massDensityMaxNNT = 0
  !! maximum number of nodes in time for mass density

  CLASS(AbstractScalarMeshField_), POINTER :: shearModulus => NULL()
  !! Lame parameter
  !! NOTE: It is need in the case of Isotropic elasticity
  !! This will be a scalar mesh field

  INTEGER(I4B) :: shearModulusFieldType = TypeField%normal
  !! field type for mass density
  !! normal means the field will change from one element to another

  INTEGER(I4B) :: shearModulusVarType = TypeField%constant
  !! varType denotes how the field is changing inside the element
  !! constant means the field is constant inside the element
  !! space means the field changes in space element
  !! spaceTime means the field changes in space-time element
  !! time means the field changes in time element

  INTEGER(I4B) :: shearModulusDefineOn = TypeFEVariableOpt%quadrature
  !! mass density is defined on quadrature points

  INTEGER(I4B) :: shearModulusMaxNNS = 0
  !! maximum number of nodes in space for mass density

  INTEGER(I4B) :: shearModulusMaxNNT = 0
  !! maximum number of nodes in time for mass density

  CLASS(AbstractScalarMeshField_), POINTER :: youngsModulus => NULL()
  !! Lame parameter
  !! NOTE: It is need in the case of Isotropic elasticity
  !! This will be a scalar mesh field

  INTEGER(I4B) :: youngsModulusFieldType = TypeField%normal
  !! field type for mass density
  !! normal means the field will change from one element to another

  INTEGER(I4B) :: youngsModulusVarType = TypeField%constant
  !! varType denotes how the field is changing inside the element
  !! constant means the field is constant inside the element
  !! space means the field changes in space element
  !! spaceTime means the field changes in space-time element
  !! time means the field changes in time element

  INTEGER(I4B) :: youngsModulusDefineOn = TypeFEVariableOpt%quadrature
  !! mass density is defined on quadrature points

  INTEGER(I4B) :: youngsModulusMaxNNS = 0
  !! maximum number of nodes in space for mass density

  INTEGER(I4B) :: youngsModulusMaxNNT = 0
  !! maximum number of nodes in time for mass density

  CLASS(AbstractScalarMeshField_), POINTER :: dampCoeff_alpha => NULL()
  !! Rayleigh damping coefficient alpha

  CLASS(AbstractScalarMeshField_), POINTER :: dampCoeff_beta => NULL()
  !! Rayleigh damping coefficient beta

  INTEGER(I4B) :: dampCoeffFieldType = TypeField%normal
  !! field type for mass density
  !! normal means the field will change from one element to another

  INTEGER(I4B) :: dampCoeffVarType = TypeField%constant
  !! varType denotes how the field is changing inside the element
  !! constant means the field is constant inside the element
  !! space means the field changes in space element
  !! spaceTime means the field changes in space-time element
  !! time means the field changes in time element

  INTEGER(I4B) :: dampCoeffDefineOn = TypeFEVariableOpt%quadrature
  !! mass density is defined on quadrature points

  INTEGER(I4B) :: dampCoeffMaxNNS = 0
  !! maximum number of nodes in space for mass density

  INTEGER(I4B) :: dampCoeffMaxNNT = 0
  !! maximum number of nodes in time for mass density

  CLASS(AbstractScalarMeshField_), POINTER :: scalarCoeff => NULL()
  !! it can be phase velocity or coefficient of permiabillity for
  !! isotropic medium this will be a scalar mesh field

  INTEGER(I4B) :: scalarCoeffFieldType = TypeField%normal
  !! field type for mass density
  !! normal means the field will change from one element to another

  INTEGER(I4B) :: scalarCoeffVarType = TypeField%constant
  !! varType denotes how the field is changing inside the element
  !! constant means the field is constant inside the element
  !! space means the field changes in space element
  !! spaceTime means the field changes in space-time element
  !! time means the field changes in time element

  INTEGER(I4B) :: scalarCoeffDefineOn = TypeFEVariableOpt%quadrature
  !! mass density is defined on quadrature points

  INTEGER(I4B) :: scalarCoeffMaxNNS = 0
  !! maximum number of nodes in space for mass density

  INTEGER(I4B) :: scalarCoeffMaxNNT = 0
  !! maximum number of nodes in time for mass density

  CLASS(AbstractScalarMeshField_), POINTER :: phase_velocity => NULL()
  !! phase_velocity ! This will be a scalar mesh field

  CLASS(AbstractVectorMeshField_), POINTER :: stress => NULL()
  !! Stress tensor ! This will be a tensor mesh field

  CLASS(AbstractVectorMeshField_), POINTER :: strain => NULL()
  !! Strain tensor ! This will be a tensor mesh field

  CLASS(AbstractVectorMeshField_), POINTER :: solidMechData => NULL()
  !! Constitutive data for solid materials

  CLASS(AbstractTensorMeshField_), POINTER :: Cijkl => NULL()
  !! Elasticity tensor
  !! NOTE: It is used for non Isotropic elasticity
  !! This will be a tensor mesh field

  INTEGER(I4B) :: cijklFieldType = TypeField%normal
  !! field type for mass density
  !! normal means the field will change from one element to another

  INTEGER(I4B) :: cijklVarType = TypeField%constant
  !! varType denotes how the field is changing inside the element
  !! constant means the field is constant inside the element
  !! space means the field changes in space element
  !! spaceTime means the field changes in space-time element
  !! time means the field changes in time element

  INTEGER(I4B) :: cijklDefineOn = TypeFEVariableOpt%quadrature
  !! mass density is defined on quadrature points

  INTEGER(I4B) :: cijklMaxNNS = 0
  !! maximum number of nodes in space for mass density

  INTEGER(I4B) :: cijklMaxNNT = 0
  !! maximum number of nodes in time for mass density

  INTEGER(I4B) :: cijklDim1 = 0
  !! dimension of elasticity tensor

  INTEGER(I4B) :: cijklDim2 = 0
  !! dimension of elasticity tensor

END TYPE KernelMeshFields_
```
