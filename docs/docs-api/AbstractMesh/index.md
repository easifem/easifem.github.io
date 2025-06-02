---
tags:
  - mesh
  - domain
  - easifemClasses
category:
  - Mesh
  - Domain
docs: done
extpkgs: none
sidebar_position: 1
status: stable
---

# AbstractMesh

`AbstractMesh_` datatype handles the finite element mesh. [The structure of this data type is given here](./AbstractMesh_.md).

## Summary of methods

### Constructor Methods

| Method Name                                                       | Purpose                                          |
| ----------------------------------------------------------------- | ------------------------------------------------ |
| [Initiate](./Initiate.md)                                         | Read the mesh by reading a hdf5 file.            |
| [DEALLOCATE](./Deallocate.md)                                     | Deallocate memory occupied by the mesh instance. |
| [isEmpty](./IsEmpty.md)                                           | Returns true if the mesh is empty.               |
| [DeallocateKdtree](./DeallocateKdTree.md)                         | Deallocate the kdtree.                           |
| [InitiateDynamicDataStructure](./InitiateDynamicDataStructure.md) | Initiate Kdtree related data                     |

### IOMethods

| Method Name                                               | Purpose                           |
| --------------------------------------------------------- | --------------------------------- |
| [Import](./Import.md)                                     | Read mesh from hdf5 file.         |
| [Export](./Export.md)                                     | Export mesh to an hdf5 file.      |
| [ExportToVTK](./ExportToVTK.md)                           | Export mesh to a VTKfile.         |
| [Display](./Display.md)                                   | Display the mesh.                 |
| [DisplayNodeData](./DisplayNodeData.md)                   | Display node data.                |
| [DisplayElementData](./DisplayElementData.md)             | Display element data.             |
| [DisplayFacetData](./DisplayFacetData.md)                 | Display facet data.               |
| [DisplayInternalFacetData](./DisplayInternalFacetData.md) | Display internal facet data.      |
| [DisplayBoundaryFacetData](./DisplayBoundaryFacetData.md) | Display boundary facet data.      |
| [DisplayFacetElements](./DisplayFacetElements.md)         | Display facet element shape data. |
| [DisplayMeshInfo](./DisplayMeshInfo.md)                   | Display mesh information.         |

### Constructor methods for connectivity

| Method Name                                           | Purpose                                                  |
| ----------------------------------------------------- | -------------------------------------------------------- |
| [InitiateKdtree](./InitiateKdtree.md)                 | Initiate Kdtree.                                         |
| [InitiateNodeToElements](./InitiateNodeToElements.md) | Initiate node to element data (mapping).                 |
| InitiateNodeToNodes                                   | Initiate Node to nodes data.                             |
| InitiateExtraNodeToNodes                              | Initiate Node to nodes mapping (used in jump based FEM). |
| InitiateElementToElements                             | Initiate element to elements mapping.                    |
| InitiateBoundaryData                                  | Initiate the boundary data.                              |
| InitiateEdgeConnectivity                              | (No description provided)                                |
| InitiateFaceConnectivity                              | (No description provided)                                |
| InitiateFacetElements                                 | Initiate boundary data.                                  |

### Element information methods

| Method Name         | Purpose                                                              |
| ------------------- | -------------------------------------------------------------------- |
| GetElemType         | Get the element name                                                 |
| GetElemData         | Get the element data                                                 |
| GetElemDataPointer  | Get pointer to an element data                                       |
| GetNNE              | Get number of nodes in an element                                    |
| GetMaxNNE           | Get maximum number of nodes in an element                            |
| Size                | Returns the size of the mesh (total number of elements)              |
| GetElemNum          | Generic method to get list of local or global element number in mesh |
| GetOrientation      | Get the orientation of the element                                   |
| GetTotalCells       | Returns the total number of cells in the mesh (obj%tElements)        |
| GetTotalElements    | Generic method for getting the total number of elements              |
| GetGlobalElemNumber | Returns the global element number for a local element number         |
| GetLocalElemNumber  | Returns the local element number of a global element number          |
| GetOrder            | Returns the order of the element of mesh                             |
| GetMinElemNumber    | Get minimum element number                                           |
| GetMaxElemNumber    | Get maximum element number                                           |
| isElementPresent    | Returns true if a given element number is present                    |
| isElementActive     | Check if element is active                                           |

### Topology Methods

| Method Name                  | Purpose                                                          |
| ---------------------------- | ---------------------------------------------------------------- |
| GetElemTopology              | Generic method to get the element topology name                  |
| GetElemTopologyIndx          | Get the index of element topology                                |
| GetTotalElementsTopologyWise | Get total elements topology wise                                 |
| GetTotalTopology             | Get total topology                                               |
| GetTotalEntities             | Generic method for getting total entities in mesh and an element |

### Node Information Methods

| Method Name           | Purpose                                                                       |
| --------------------- | ----------------------------------------------------------------------------- |
| GetBoundingEntity     | Returns the nodal coordinates                                                 |
| GetNptrs              | Get node number of mesh                                                       |
| GetNptrs_             | Get node number of mesh                                                       |
| GetNptrsInBox         | Get node number in a box                                                      |
| GetNptrsInBox_        | Get node number in a box without allocation                                   |
| GetInternalNptrs      | Returns a vector of internal node numbers                                     |
| GetInternalNptrs_     | Returns a vector of internal node numbers (subroutine version, no allocation) |
| GetBoundaryNptrs      | Returns a vector of boundary node numbers                                     |
| GetTotalNodes         | Get total nodes                                                               |
| GetTotalInternalNodes | Returns the total number of internal nodes                                    |
| GetTotalBoundaryNodes | Returns the total number of boundary nodes                                    |
| GetLocalNodeNumber    | Returns the local node number of a global node number                         |
| GetLocalNodeNumber_   | Get local node number without allocation                                      |
| GetGlobalNodeNumber   | Returns the global node number of a local node number                         |
| GetNodeCoord          | Get node coordinates                                                          |
| GetNearestNode        | Get nearest node                                                              |
| GetMinNodeNumber      | Get minimum element number                                                    |
| GetMaxNodeNumber      | Get maximum node number                                                       |
| isBoundaryNode        | Returns true if a given global node number is a boundary node                 |
| isNodePresent         | Returns true if a node number is present                                      |
| GetNodeMask           | Returns the mask for the presence of node                                     |
| isAnyNodePresent      | Returns true if any of the node number is present                             |
| isAllNodePresent      | Returns true if all of the node numbers are present                           |

### Connectivity Methods

| Method Name             | Purpose                                                          |
| ----------------------- | ---------------------------------------------------------------- |
| GetConnectivity         | Returns node numbers in an element (this is vertex connectivity) |
| GetConnectivity_        | Generic method for getting the connectivity of an element        |
| GetNodeConnectivity     | Returns all the node connectivity of the mesh elements           |
| GetNodeToElements       | Generic method to get elements around node or nodes              |
| GetNodeToNodes          | Returns nodes connected to a given node number                   |
| GetNodeToNodes_         | Returns nodes connected to a given node number                   |
| GetElementToElements    | Returns elements connected to a given element number             |
| GetElementToElements_   | Get element to elements mapping                                  |
| GetMaxNodeToElements    | Get maximum number of node to elements                           |
| GetMaxElementToElements | Get maximum number of element to elements                        |
| GetMaxNodeToNodes       | Get maximum number of node to nodes                              |

### Boundary and Facet Methods

| Method Name                   | Purpose                                                                              |
| ----------------------------- | ------------------------------------------------------------------------------------ |
| GetTotalBoundaryElements      | Returns the total number of boundary elements                                        |
| GetBoundaryElementData        | Returns boundary element data                                                        |
| GetTotalFacetElements         | Returns the total number of facet elements in the mesh                               |
| GetTotalBoundaryFacetElements | Returns the total number of boundary facet elements                                  |
| GetTotalInternalFacetElements | Returns the total number of internal facet elements                                  |
| GetMasterCellNumber           | Returns the master cell number of a facet element                                    |
| GetSlaveCellNumber            | Returns the slave cell number of a facet element                                     |
| GetCellNumber                 | Returns the master and slave cell number of a facet element                          |
| GetLocalFacetID               | Return the local facet id, so that we can Get reference element of the facet element |
| GetGlobalFaceNumber           | Get global face number from global element and localFacenumber                       |
| GetGlobalEdgeNumber           | Get global Edge number from global element and localEdgenumber                       |
| FindFace                      | Find a face in a cell                                                                |
| FindEdge                      | Find a edge in a cell (only for 3D)                                                  |
| GetFacetConnectivity          | Generic method to Get the connectivity of a facet element                            |
| GetFacetElementType           | Returns the facet element type of a given cell element number                        |
| GetFacetParam                 | Get the parameters of facet elements                                                 |
| isBoundaryElement             | Returns true if a given global element number is a boundary element                  |
| isDomainBoundaryElement       | Returns true if a given global element number is a boundary element                  |
| isDomainFacetElement          | Returns true if a given global element number is a boundary element                  |

### Geometry Methods

| Method Name    | Purpose                                                    |
| -------------- | ---------------------------------------------------------- |
| GetTotalFaces  | Returns the total number of faces in the mesh (obj%tFaces) |
| GetTotalEdges  | Returns the total number of edges in the mesh (obj%tEdges) |
| GetBoundingBox | Return the bounding box                                    |
| GetNSD         | Return the NSD                                             |
| GetXidimension | Return the NSD                                             |

### Status Check Methods

| Method Name         | Purpose                                           |
| ------------------- | ------------------------------------------------- |
| isInit              | Returns obj%isInitiated                           |
| isNodeToElements    | Check if node to elements mapping is available    |
| isNodeToNodes       | Check if node to nodes mapping is available       |
| isExtraNodeToNodes  | Check if extra node to nodes mapping is available |
| isElementToElements | Check if element to elements mapping is available |
| isEdgeConnectivity  | Check if edge connectivity is available           |
| isFaceConnectivity  | Check if face connectivity is available           |
| isBoundaryData      | Check if boundary data is available               |
| isFacetData         | Check if facet data is available                  |

### Set methods

| Method Name         | Purpose                                           |
| ------------------- | ------------------------------------------------- |
| SetShowTime         | Set showTime option                               |
| SetBoundingBox      | Set the bounding box                              |
| SetSparsity         | Generic method for Setting the sparsity           |
| SetTotalMaterial    | Generic method                                    |
| SetMaterial         | Set material to an element                        |
| SetFacetElementType | Set the facet element type of a given cell number |
| SetQuality          | Set mesh quality                                  |
| SetParam            | Set parameters of mesh                            |
| SetFacetParam       | Set the parameters of facet element               |

### Set/Configuration Methods

| Method Name         | Purpose                                           |
| ------------------- | ------------------------------------------------- |
| SetShowTime         | Set showTime option                               |
| SetBoundingBox      | Set the bounding box                              |
| SetSparsity         | Generic method for Setting the sparsity           |
| SetTotalMaterial    | Generic method                                    |
| SetMaterial         | Set material to an element                        |
| SetFacetElementType | Set the facet element type of a given cell number |
| SetQuality          | Set mesh quality                                  |
| SetParam            | Set parameters of mesh                            |
| SetFacetParam       | Set the parameters of facet element               |
| GetMaterial         | Returns the material id of a given medium         |
| GetTotalMaterial    | Returns the total materials in an element         |
| GetParam            | Get parameter of mesh                             |

## All methods

import DocCardList from '@theme/DocCardList';

<DocCardList />
