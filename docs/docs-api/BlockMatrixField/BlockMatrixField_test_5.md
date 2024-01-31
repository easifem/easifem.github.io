---
tags:
    - BlockMatrixField
    - BlockMatrixField/SetBlockMatrixFieldParam
    - BlockMatrixField/CheckEssentialParam
    - BlockMatrixField/Initiate
    - BlockMatrixField/Display
    - BlockMatrixField/Spy
    - BlockMatrixField/Deallocate
    - BlockMatrixField/Export
---

# BlockMatrixField example 5

This example shows the use of [BlockMatrixField](BlockMatrixField_.md)

## Usage

```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
```

```fortran
  TYPE( BlockMatrixField_ ) :: obj
  TYPE( ParameterList_ ) :: param
  TYPE( Domain_ ), TARGET :: pressureDomain
  TYPE( Domain_ ), TARGET :: velocityDomain
  TYPE( DomainPointer_ ) :: domains( 2 )
  TYPE( HDF5File_ ) :: pressureMeshFile
  TYPE( HDF5File_ ) :: velocityMeshFile
  TYPE( HDF5File_ ) :: blockMatrixOutfile
  CHARACTER( LEN = * ), PARAMETER :: pressureMeshFilename="./mesh_tri3.h5"
  CHARACTER( LEN = * ), PARAMETER :: velocityMeshFilename="./mesh_tri6.h5"
  CHARACTER( LEN = * ), PARAMETER :: blockMatrixOutfileName= &
    & "./blockMatrixOutfile.h5"
```

```fortran
  CALL FPL_INIT(); CALL param%Initiate()
  CALL SetBlockMatrixFieldParam(param=param, name="K",  &
    & physicalVarNames=["V", "P"], spaceCompo=[2, 1], &
    & timeCompo=[1,1], fieldType=FIELD_TYPE_NORMAL,  &
    & matrixProp="UNSYM" )
```

```fortran
  CALL pressureMeshfile%Initiate( FileName=pressureMeshFilename, MODE="READ" )
  CALL velocityMeshfile%Initiate( FileName=velocityMeshFilename, MODE="READ" )
  CALL pressureMeshfile%Open()
  CALL velocityMeshfile%Open()
  CALL pressureDomain%Initiate( pressureMeshfile, "")
  CALL velocityDomain%Initiate( velocityMeshfile, "")
  CALL pressureMeshfile%Deallocate()
  CALL velocityMeshfile%Deallocate()
```

```fortran
  domains(1)%ptr => velocityDomain
  domains(2)%ptr => pressureDomain
  CALL obj%Initiate(param=param, dom=domains)
  CALL blockMatrixOutfile%Initiate( blockMatrixOutfileName, "NEW" )
  CALL blockMatrixOutfile%open()
  CALL obj%Export(blockMatrixOutfile, "/BlockMatrixField")
```

```fortran
  CALL blockMatrixOutfile%Deallocate()
  CALL obj%Deallocate()
  CALL param%Deallocate(); CALL FPL_FINALIZE()
  NULLIFY(domains(1)%ptr, domains(2)%ptr)
  CALL pressureDomain%Deallocate()
  CALL velocityDomain%Deallocate()
  CALL obj%Deallocate()
END PROGRAM main
```