# KernelFields

This class contains the fields for the kernel. It contains the following fields:

1. MatrixFieldPointer
2. VectorFieldPointer
3. ScalarFieldPointer
4. STVectorFieldPointer
5. STScalarFieldPointer

It is defined in the `KernelComponents` module.

The structure of this class is as follows:

## Structure

```fortran
TYPE :: KernelFields_
  INTEGER(I4B) :: tMatrixFields = 0
  !! total matrix fields

  INTEGER(I4B) :: tVectorFields = 0
  !! total vector fields

  INTEGER(I4B) :: tScalarFields = 0
  !! total scalar fields

  INTEGER(I4B) :: tSTMatrixFields = 0
  !! total space-time matrix fields

  INTEGER(I4B) :: tSTVectorFields = 0
  !! total space-time vector fields

  INTEGER(I4B) :: tSTScalarFields = 0
  !! total space-time scalar fields

  TYPE(MatrixFieldPointer_), ALLOCATABLE :: matrixFields(:)
  !! list of matrix fields

  TYPE(VectorFieldPointer_), ALLOCATABLE :: vectorFields(:)
  !! list of vector fields

  TYPE(ScalarFieldPointer_), ALLOCATABLE :: scalarFields(:)
  !! list of scalar fields

  TYPE(STVectorFieldPointer_), ALLOCATABLE :: stVectorFields(:)
  !! list of space-time vector fields

  TYPE(STScalarFieldPointer_), ALLOCATABLE :: stScalarFields(:)
  !! list of space-time scalar fields

  CLASS(MatrixField_), POINTER :: stiffnessMat => NULL()
  !! Global Stiffness matrix

  CLASS(MatrixField_), POINTER :: diffusionMat => NULL()
  !! Global diffusion matrix

  CLASS(MatrixField_), POINTER :: massMat => NULL()
  !! Global mass matrix

  CLASS(MatrixField_), POINTER :: dampingMat => NULL()
  !! Global damping matrix

  CLASS(VectorField_), POINTER :: displacement => NULL()
  !! Vector field for nodal displacement

  CLASS(VectorField_), POINTER :: velocity => NULL()
  !! Vector field for nodal displacement

  CLASS(VectorField_), POINTER :: acceleration => NULL()
  !! Vector field for nodal acceleration

  CLASS(VectorField_), POINTER :: nodeCoord => NULL()
  !! Vector field for nodal coordinates

  CLASS(ScalarField_), POINTER :: pressure => NULL()
  !! scalar field for nodal pressure

  CLASS(ScalarField_), POINTER :: p_velocity => NULL()
  !! scalar field for nodal pressure

  CLASS(ScalarField_), POINTER :: p_acceleration => NULL()
  !! scalar field for nodal pressure
END TYPE KernelFields_
```
