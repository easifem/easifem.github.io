---
sidebar_position: 2
---

# Structure

`AbstractBC_` is Abstract class for handling boundary conditions in finite element methods.

[See on GitHub](https://github.com/vickysharma0812/easifem-classes/blob/master/src/modules/AbstractBC/src/AbstractBC_Class.F90)

## Structure

```fortran
TYPE, ABSTRACT :: AbstractBC_
  PRIVATE

  LOGICAL(LGT) :: isInit = .FALSE.
  !! It is true if the object is initiated
  LOGICAL(LGT) :: isNormal = default_isNormal
  !! True if the boundary condition is normal to the boundary
  LOGICAL(LGT) :: isTangent = default_isTangent
  !! True if the boundary condition is tangent to the boundary
  LOGICAL(LGT) :: isUseExternal = default_useExternal
  !! if true then nodal values are used externally
  !! depending upon the context.
  !! Basically we do not use the nodal value stored in the
  !! instance of AbstractBC_
  LOGICAL(LGT) :: isUserFunction = default_isUserFunction
  !! True if userFunction is set
  LOGICAL(LGT) :: isElemToFace = .FALSE.
  !! When elemToFace is set then isElemToFace is true
  LOGICAL(LGT) :: isElemToEdge = .FALSE.
  !! When elemToEdge is set then isElemToEdge is true

  TYPE(String) :: name
  !! name of boundary condition

  INTEGER(I4B) :: idof = default_idof
  !! degree of freedom number
  INTEGER(I4B) :: nodalValueType = default_nodalValueType
  !! Constant, Space, SpaceTime, Time
  INTEGER(I4B) :: nrow = 0
  !! number of rows in nodalValue
  !! constantNodalValue nrow = 1
  !! spaceNodalValue nrow = size of nodenum
  !! timeNodalValue nrow = size of timenodalvalue
  !! spaceTimeNodalValue nrow = size of nodenum
  INTEGER(I4B) :: ncol = 0
  !! number of columns in nodalvalue
  !! constantNodalValue ncol = 1
  !! spaceNodalValue ncol = 1
  !! timeNodalValue ncol = 1
  !! spaceTimeNodalValue ncol = size of times
  INTEGER(I4B) :: tElemToFace = 0
  !! number of col in elemToFace
  INTEGER(I4B) :: tElemToEdge = 0
  !! number of col in elemToEdge

  INTEGER(I4B), ALLOCATABLE :: nodenum(:)
  !! node numbers, where dirichlet boundary condition will be imposed
  !! info: to be used soon

  INTEGER(I4B), ALLOCATABLE :: elemToFace(:, :)
  !! each col contains the following data:
  !! localCellNum, localFaceNum
  !! two col are ordered with respect to localCellNum
  !! For example, if a cell has two or more faces where boundary condition
  !! is applied, then this data will be stored in two consequtive rows:
  !! col1:       localCellNum1, localFace1
  !! col2:       localCellNum1, localFace2
  !!
  !! if the value of localFace is zero, then it means
  !! boundary condition is not applied on that face

  INTEGER(I4B), ALLOCATABLE :: elemToEdge(:, :)
  !! It is used for 3D mesh
  !! each cols contains the following data:
  !! localCellNum, localEdgeNum
  !! two cols are ordered with respect to localCellNum
  !! For example, if a cell has two or more faces where boundary condition
  !! is applied, then this data will be stored in two consequtive rows:
  !! col1:       localCellNum1, localEdge1
  !! col2:       localCellNum1, localEdge2
  !!
  !! if the value of localEdge is zero, then it means
  !! boundary condition is not applied on that edge

  REAL(DFP), ALLOCATABLE :: nodalValue(:, :)
  !! nodal values are kept here,
  !! nodalValues( :, its ) denotes nodal values at time step its
  !! nodalValue is used when useFunction and useExternal is false

  CLASS(UserFunction_), POINTER :: func => NULL()
  !! User function
  TYPE(MeshSelection_) :: boundary
  !! Boundary
  CLASS(AbstractDomain_), POINTER :: dom => NULL()
  !! Domain
END TYPE AbstractBC_
```

## Logical Flags

- **isInit**:
  - Default: `.FALSE.`
  - Description: It is true if the object is initiated

- **isNormal**:
  - Default: `default_isNormal`
  - Description: True if the boundary condition is normal to the boundary

- **isTangent**:
  - Default: `default_isTangent`
  - Description: True if the boundary condition is tangent to the boundary

- **isUseExternal**:
  - Default: `default_useExternal`
  - Description: If true then nodal values are used externally depending upon the context. Basically we do not use the nodal value stored in the instance of AbstractBC_

- **isUserFunction**:
  - Default: `default_isUserFunction`
  - Description: True if userFunction is set

- **isElemToFace**:
  - Default: `.FALSE.`
  - Description: When elemToFace is set then isElemToFace is true

- **isElemToEdge**:
  - Default: `.FALSE.`
  - Description: When elemToEdge is set then isElemToEdge is true

## Basic Properties

- **name**:
  - Type: `String`
  - Description: Name of boundary condition

- **idof**:
  - Type: `INTEGER(I4B)`
  - Default: `default_idof`
  - Description: Degree of freedom number

- **nodalValueType**:
  - Type: `INTEGER(I4B)`
  - Default: `default_nodalValueType`
  - Description: Specifies type - Constant, Space, SpaceTime, or Time

- **nrow**:
  - Type: `INTEGER(I4B)`
  - Default: `0`
  - Description: Number of rows in nodalValue
    - constantNodalValue: nrow = 1
    - spaceNodalValue: nrow = size of nodenum
    - timeNodalValue: nrow = size of timenodalvalue
    - spaceTimeNodalValue: nrow = size of nodenum

- **ncol**:
  - Type: `INTEGER(I4B)`
  - Default: `0`
  - Description: Number of columns in nodalvalue
    - constantNodalValue: ncol = 1
    - spaceNodalValue: ncol = 1
    - timeNodalValue: ncol = 1
    - spaceTimeNodalValue: ncol = size of times

- **tElemToFace**:
  - Type: `INTEGER(I4B)`
  - Default: `0`
  - Description: Number of columns in elemToFace

- **tElemToEdge**:
  - Type: `INTEGER(I4B)`
  - Default: `0`
  - Description: Number of columns in elemToEdge

## Allocatable Arrays

- **nodenum**:
  - Type: `INTEGER(I4B), ALLOCATABLE`
  - Dimension: `(:)`
  - Description: Node numbers where Dirichlet boundary condition will be imposed

- **elemToFace**:
  - Type: `INTEGER(I4B), ALLOCATABLE`
  - Dimension: `(:, :)`
  - Description: Each column contains localCellNum and localFaceNum. Columns are ordered with respect to localCellNum. If a cell has multiple faces where boundary condition is applied, they are stored in consecutive columns. If localFace is zero, boundary condition is not applied on that face.

- **elemToEdge**:
  - Type: `INTEGER(I4B), ALLOCATABLE`
  - Dimension: `(:, :)`
  - Description: Used for 3D mesh. Each column contains localCellNum and localEdgeNum. Columns are ordered with respect to localCellNum. If a cell has multiple edges where boundary condition is applied, they are stored in consecutive columns. If localEdge is zero, boundary condition is not applied on that edge.

- **nodalValue**:
  - Type: `REAL(DFP), ALLOCATABLE`
  - Dimension: `(:, :)`
  - Description: Stores nodal values. nodalValues(:, its) denotes nodal values at time step its. Used when useFunction and useExternal are false.

## References/Pointers

- **func**:
  - Type: `CLASS(UserFunction_), POINTER`
  - Default: `NULL()`
  - Description: User function

- **boundary**:
  - Type: `TYPE(MeshSelection_)`
  - Description: Boundary

- **dom**:
  - Type: `CLASS(AbstractDomain_), POINTER`
  - Default: `NULL()`
  - Description: Domain
