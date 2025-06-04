---
sidebar_position: 2
---

# Structure

The structure of `AbstractDomain` is given below.

```fortran
TYPE, ABSTRACT :: AbstractDomain_
  PRIVATE
  LOGICAL(LGT) :: isInitiated = .FALSE.
    !! flag
  TYPE(String) :: engine
    !! Engine used for generating the meshes
  INTEGER(I4B) :: majorVersion = 0
    !! Major version
  INTEGER(I4B) :: minorVersion = 0
    !! Minor version
  REAL(DFP) :: version = 0.0_DFP
    !! Version  MajorVersion.MinorVersion
  INTEGER(I4B) :: nsd = 0_I4B
    !! number of spatial dimension
  INTEGER(I4B) :: maxNptrs = 0
    !! Largest node number in the domain
  INTEGER(I4B) :: minNptrs = 0
    !! Smallest node number in the domain
  INTEGER(I4B) :: tNodes = 0
    !! Total number of nodes in the mesh
  LOGICAL(I4B) :: isNodeNumberSparse = .FALSE.
    !! True if node numbers are not continuous
  INTEGER(I4B) :: maxElemNum = 0
    !! Largest element number in the domain
  INTEGER(I4B) :: minElemNum = 0
    !! Smallest element number in the domain
  LOGICAL(LGT) :: isElemNumberSparse = .FALSE.
    !! True if element numbers are sparse
  INTEGER(I4B) :: tEntitiesForNodes = 0
    !! Total number of entities required for reading nodes
  INTEGER(I4B) :: tEntitiesForElements = 0
    !! Total number of entities required for reading elements
  INTEGER(I4B) :: tElements(0:3) = [0, 0, 0, 0]
    !! Total number of elements inside the domain
    !! tElements( 0 ) = total number of point elements
    !! tElements( 1 ) = total number of line elements
    !! tElements( 2 ) =  total number of surface elements
    !! tElements( 3 ) = total number of volume/cell elements
  INTEGER(I4B) :: tEntities(0:3) = [0, 0, 0, 0]
    !! Total number of entities inside the domain
    !! tEntities( 0 ) = total number of point mesh entities, mesh of Points
    !! tEntities( 1 ) = total number of line mesh entities, mesh of Edge
    !! tEntities( 2 ) = total number of surface mesh entities, mesh Boundary
    !! tEntities( 3 ) = total number of volume mesh entities, Omega
  REAL(DFP), ALLOCATABLE :: nodeCoord(:, :)
    !! Nodal coordinates in XiJ format
    !! Number of rows are 3, and number of columns is total nodes

  CLASS(AbstractMesh_), POINTER :: meshVolume => NULL()
    !! meshVolume list of meshes of volume entities
  CLASS(AbstractMesh_), POINTER :: meshSurface => NULL()
    !! meshSurface list of meshes of surface entities
  CLASS(AbstractMesh_), POINTER :: meshCurve => NULL()
    !! meshCurve list of meshes of curve entities
  CLASS(AbstractMesh_), POINTER :: meshPoint => NULL()
    !! meshPoint list of meshes of point entities

  TYPE(CSRSparsity_) :: meshMap
  !! Sparse mesh data in CSR format

END TYPE AbstractDomain_
```

| Field Name | Description |
|------------|-------------|
| showTime | Logical flag to show time taken by various routines when set to true |
| isInitiated | Logical flag indicating if the domain has been initiated |
| engine | String containing the name of the engine used for generating the meshes |
| majorVersion | Major version number |
| minorVersion | Minor version number |
| version | Version number (MajorVersion.MinorVersion) |
| nsd | Number of spatial dimensions |
| maxNptrs | Largest node number in the domain |
| minNptrs | Smallest node number in the domain |
| tNodes | Total number of nodes in the mesh |
| isNodeNumberSparse | True if node numbers are not continuous |
| maxElemNum | Largest element number in the domain |
| minElemNum | Smallest element number in the domain |
| isElemNumberSparse | True if element numbers are sparse |
| tEntitiesForNodes | Total number of entities required for reading nodes |
| tEntitiesForElements | Total number of entities required for reading elements |
| tElements | Array containing total number of elements inside the domain by dimension (point, line, surface, volume) |
| tEntities | Array containing total number of entities inside the domain by dimension (point, line, surface, volume) |
| nodeCoord | Nodal coordinates in XiJ format (rows are coordinates, columns are nodes) |
| kdtree | Pointer to Kdtree2_ structure for spatial queries |
| kdresult | Array storing Kdtree query results |

## What is the difference between domain and mesh

A mesh is a collection of same topological order, that is,

- a mesh of volume elements
- a mesh of surface elements
- a mesh of curve elements
- a mesh of point elements

The element number and the node number in the mesh can be sparse. Therefore, we need to create a mapping from local numbering to global numbering. The mesh data does not contain any node coordinate information. The node coordinate data is available in `Domain`. It is stored inside `nodeCoord` array in `xij` format. We need global node number to access the entries in nodeCoord. These global node numbers are stored inside the mesh.

