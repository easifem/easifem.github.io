---
sidebar_position: 2
---

# Structure

`AbstractKernel_` class is an abstract class for physics kernel.

## Workflow

import Drawio from '@theme/Drawio'
import kernelWorkflow from '!!raw-loader!/img/drawio/Kernel.drawio';

<Drawio content={kernelWorkflow} />

```fortran
TYPE, ABSTRACT :: AbstractKernel_

  TYPE(FEDomain_), POINTER :: dom => NULL()
  !! Domain of the problem

  TYPE(FEDomainPointer_), ALLOCATABLE :: domains(:)
  !! Domains of the problem

  TYPE(KernelOpt_) :: opt
  !! options of the kernel
  !! It is defined in the KernelComponents module

  TYPE(KernelFields_) :: fields
  !! fields of kernel

  TYPE(KernelMeshFields_) :: meshFields
  !! mesh fields of kernel

  TYPE(KernelMaterials_) :: materials
  !! materials of kernel

  TYPE(KernelElemshapeData_) :: elemsd
  !! element shape data used in kernels

  TYPE(KernelBC_) :: bc
  !! boundary conditions of the kernel

  CLASS(FEDOF_), POINTER :: fedof => NULL()
  !! Degree of freedom of the problem

  TYPE(FEDOFPointer_), ALLOCATABLE :: fedofs(:)
  !! Degree of freedom of the problem

  CLASS(FEDOF_), POINTER :: geofedof => NULL()
  !! Degree of freedom of the geometryof the problem

  CLASS(AbstractFE_), POINTER :: timeFE => NULL()
  !! Time finite element

  CLASS(AbstractFE_), POINTER :: geoTimeFE => NULL()
  !! Linear time finite element

  TYPE(PVDFile_) :: pvdFile
  !! instance of pvd file class

  CLASS(AbstractLinSolver_), POINTER :: linsol => NULL()
  !! A pointer to a Linear iterative solver
  !! NOTE: The actual linear solver depends upon the
  !! engine and type of problem. linsol is initiated in
  !! KernelInitiateFromParam routine.

  CLASS(AbstractMatrixField_), POINTER :: tanmat => NULL()
  !! Global tangent matrix
  !! NOTE: The actual form of tangent matrix depends upon the engine
  !! and type of problem.

  TYPE(TxtFile_) :: showTimeFile
  !! File which keeps the time statics of the kernel (performance related)
  !! This file is created when showTime is set to true.
  !! The name of this file will be
  !! outputPath / name + _time_stat.csv

  CLASS(UserFunction_), POINTER :: bodySourceFunc => NULL()
  !! body force function

  REAL(DFP), ALLOCATABLE :: timeVec(:)
  !! time vector

  INTEGER(I4B), ALLOCATABLE :: dbcIndx(:)
  !! Indices where Dirichlet boundary conditions is prescribed
  !! INFO: This variable is for internal use only.
  !! It is formed from the Dirichlet boundary conditions.
END TYPE
```

### `dom` and `domains`

- `dom` is an instance of [FEDomain_](/docs-api/FEDomain) which denotes the domain of the problem.
- `domains` is an instance of `FEDomainPointer_` which denotes the vector of pointers of `FEDomain`.

Note: `domains` is used in multi-physics problems, in this case we can have several domains for different physical variables.

### `opt`

It is an instance of `KernelOpt_` which contains the options of the kernel, you can find about this in [KernelOpt_](./KernelOpt.md)

### `fields`

This is an instance of `KernelFields`, which is defined in the `KernelComponents` module. You can find more information about this [KernelFields](./KernelFields.md).

### `meshFields`

This is an instance of `KernelMeshFields_` which contains the mesh fields of the kernel. You can find more information about this [KernelMeshFields](./KernelMeshFields.md)

### `materials`

This is an instance of the `KernelMaterials_` which is documented at [KernelMaterials](./KernelMaterials.md)

### `elemsd`

This is an instance of `KernelElemshapeData_` which is documented at [KernelElemshapeData](./KernelElemshapeData.md)

### `bc`

This is an instance of `KernelBC_` which deals with the boundary conditions in the kernel. You can find more information about this [KernelBC](./KernelBC.md)

### fedof

Finite element degree of freedom of the problem.

### fedofs

Finite element degree of freedom of the problem

### geofedof

Geometry related degree of freedom.

### timeFE

Time finite element.

### geoTimeFE

Time finite element for geometry of time.

### pvdFile

Related to Paraview post-processing.

### linsol

Linear solver

### tanmat

Tangent matrix

### showTimeFile

File which keeps the time statics of the kernel (performance related).
This file is created when `showTime` is set to true.
The name of this file will be

```txt
outputPath / name + _time_stat.csv
```
