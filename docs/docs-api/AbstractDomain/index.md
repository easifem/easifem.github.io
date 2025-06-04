---
sidebar_position: 1
date: 2024-03-28 
update: 2024-03-28 
status: stable
docs: done
extpkgs: none
category:
  - Domain
  - Mesh
tags:
  - Domain
  - Mesh
  - easifemClasses
---

# AbstractDomain

`AbstractDomain` is defined by a collection of the meshes of different dimensions (such as 1, 2, 3). It represents the finite element computation domain.

## Summary of methods


### GetMethods

| Method Name | Description |
|-------------|-------------|
| GetMeshPointer | Returns pointer to the mesh in the domain |
| IsNodePresent | Checks if a node is present in domain |
| IsElementPresent | Checks if an element is present in domain |
| GetConnectivity | Gets the vertex connectivity |
| GetConnectivity_ | Gets the vertex connectivity (subroutine version) |
| GetNNE | Gets number of nodes/vertices in element |
| GetNodeToElements | Gets list of elements connected to specified node(s) |
| GetNodeToElements_ | Gets list of elements connected to specified node(s) (subroutine version) |
| GetTotalNodes | Returns the total number of nodes in domain/mesh/part |
| .tNodes. | Operator for getting total nodes |
| GetTotalElements | Returns the total number of elements in domain/mesh/part |
| .tElements. | Operator for getting total elements |
| GetLocalNodeNumber | Gets local node numbers stored in the domain |
| GetGlobalNodeNumber | Returns global node number from local node number |
| GetTotalEntities | Returns total number of mesh entities |
| GetTotalMesh | Returns total number of mesh entities (deprecated) |
| GetDimEntityNum | Returns dim and entity-num of mesh containing element |
| GetNodeCoord | Returns nodal coordinates |
| GetNodeCoordPointer | Returns pointer to nodal coordinates |
| GetNearestNode | Gets the nearest node(s) to a given point |
| GetNptrs | Returns node numbers (function version) |
| GetNptrs_ | Returns node numbers (subroutine version) |
| GetInternalNptrs | Returns internal node numbers |
| GetNptrsInBox | Gets node numbers in a bounding box |
| GetNptrsInBox_ | Gets node numbers in a box with allocation |
| GetBoundingBox | Returns bounding box |
| GetNSD | Returns the spatial dimension |
| GetOrder | Gets order information |
| GetTotalMeshFacetData | Gets size of mesh facet data |
| GetTotalMaterial | Gets total number of materials |
| GetElemType | Returns element type of each mesh |
| GetUniqueElemType | Returns unique element types in the mesh |
| IsInit | Returns initialization status |
| GetMaxNodeNumber | Returns maximum node number |
| GetMinNodeNumber | Returns minimum node number |
| GetMaxElemNumber | Returns maximum element number |
| GetMinElemNumber | Returns minimum element number |
| GetParam | Returns various parameters |

### Constructor Methods

| Method Name | Description |
|-------------|-------------|
| Initiate | Initiates an instance of domain |
| DEALLOCATE | Deallocates data stored inside an instance of domain |
| DeallocateKdtree | Deallocates kdtree related data |
| IMPORT | Initiates an instance of domain by importing data from meshfile |
| ImportFromToml | Initiates an instance of domain by importing meshfile name from Toml file |
| Display | Displays the domain information |
| DisplayDomainInfo | Displays detailed domain information |

## All methods

import DocCardList from '@theme/DocCardList';

<DocCardList />
