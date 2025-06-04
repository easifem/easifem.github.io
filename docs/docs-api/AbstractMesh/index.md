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
| [DeallocateKdTree](./DeallocateKdTree.md)                         | Deallocate the kdtree.                           |
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

| Method Name                                                 | Purpose                                                  |
| ----------------------------------------------------------- | -------------------------------------------------------- |
| [InitiateKdTree](./InitiateKdTree.md)                       | Initiate Kdtree.                                         |
| [InitiateNodeToElements](./InitiateNodeToElements.md)       | Initiate node to element data (mapping).                 |
| [InitiateNodeToNodes](./InitiateNodeToNodes.md)             | Initiate Node to nodes data.                             |
| [InitiateExtraNodeToNodes](./InitiateExtraNodeToNodes.md)   | Initiate Node to nodes mapping (used in jump based FEM). |
| [InitiateElementToElements](./InitiateElementToElements.md) | Initiate element to elements mapping.                    |
| [InitiateBoundaryData](./InitiateBoundaryData.md)           | Initiate the boundary data.                              |
| [InitiateEdgeConnectivity](./InitiateEdgeConnectivity.md)   | Initiate Edge connectivity data.                         |
| [InitiateFaceConnectivity](./InitiateFaceConnectivity.md)   | Initiate Face connectivity data.                         |
| [InitiateFacetElements](./InitiateFacetElements.md)         | Initiate boundary data.                                  |

### Element information methods

| Method Name                                     | Purpose                                                              |
| ----------------------------------------------- | -------------------------------------------------------------------- |
| [GetElemType](./GetElemType.md)                 | Get the element name                                                 |
| [GetElemData](./GetElemData.md)                 | Get the element data                                                 |
| [GetElemDataPointer](./GetElemDataPointer.md)   | Get pointer to an element data                                       |
| [GetNNE](./GetNNE.md)                           | Get number of nodes in an element                                    |
| [GetMaxNNE](./GetMaxNNE.md)                     | Get maximum number of nodes in an element                            |
| [Size](./Size.md)                               | Returns the size of the mesh (total number of elements)              |
| [GetElemNum](./GetElemNum.md)                   | Generic method to get list of local or global element number in mesh |
| [GetOrientation](./GetOrientation.md)           | Get the orientation of the element                                   |
| [GetTotalCells](./GetTotalCells.md)             | Returns the total number of cells in the mesh (obj%tElements)        |
| [GetTotalElements](./GetTotalElements.md)       | Generic method for getting the total number of elements              |
| [GetGlobalElemNumber](./GetGlobalElemNumber.md) | Returns the global element number for a local element number         |
| [GetLocalElemNumber](./GetLocalElemNumber.md)   | Returns the local element number of a global element number          |
| [GetOrder](./GetOrder.md)                       | Returns the order of the element of mesh                             |
| [GetMinElemNumber](./GetMinElemNumber.md)       | Get minimum element number                                           |
| [GetMaxElemNumber](./GetMaxElemNumber.md)       | Get maximum element number                                           |

### Topology Methods

| Method Name                                                       | Purpose                                                          |
| ----------------------------------------------------------------- | ---------------------------------------------------------------- |
| [GetElemTopology](./GetElemTopology.md)                           | Generic method to get the element topology name                  |
| [GetElemTopologyIndx](./GetElemTopologyIndx.md)                   | Get the index of element topology                                |
| [GetTotalElementsTopologyWise](./GetTotalElementsTopologyWise.md) | Get total elements topology wise                                 |
| [GetTotalTopology](./GetTotalTopology.md)                         | Get total topology                                               |
| [GetTotalEntities](./GetTotalEntities.md)                         | Generic method for getting total entities in mesh and an element |
| [GetBoundingEntity](./GetBoundingEntity.md)                       | Returns the nodal coordinates                                    |

### Node Information Methods

| Method Name                                         | Purpose                                                                       |
| --------------------------------------------------- | ----------------------------------------------------------------------------- |
| [GetNptrs](./GetNptrs.md)                           | Get node number of mesh                                                       |
| [GetNptrs_](./GetNptrs_.md)                         | Get node number of mesh                                                       |
| [GetNptrsInBox](./GetNptrsInBox.md)                 | Get node number in a box                                                      |
| [GetNptrsInBox_](./GetNptrsInBox_.md)               | Get node number in a box without allocation                                   |
| [GetInternalNptrs](./GetInternalNptrs.md)           | Returns a vector of internal node numbers                                     |
| [GetInternalNptrs_](./GetInternalNptrs_.md)         | Returns a vector of internal node numbers (subroutine version, no allocation) |
| [GetBoundaryNptrs](./GetBoundaryNptrs.md)           | Returns a vector of boundary node numbers                                     |
| [GetTotalNodes](./GetTotalNodes.md)                 | Get total nodes                                                               |
| [GetTotalInternalNodes](./GetTotalInternalNodes.md) | Returns the total number of internal nodes                                    |
| [GetTotalBoundaryNodes](./GetTotalBoundaryNodes.md) | Returns the total number of boundary nodes                                    |
| [GetLocalNodeNumber](./GetLocalNodeNumber.md)       | Returns the local node number of a global node number                         |
| [GetLocalNodeNumber_](./GetLocalNodeNumber_.md)     | Get local node number without allocation                                      |
| [GetGlobalNodeNumber](./GetGlobalNodeNumber.md)     | Returns the global node number of a local node number                         |
| [GetNodeCoord](./GetNodeCoord.md)                   | Get node coordinates                                                          |
| [GetNearestNode](./GetNearestNode.md)               | Get nearest node                                                              |
| [GetMinNodeNumber](./GetMinNodeNumber.md)           | Get minimum element number                                                    |
| [GetMaxNodeNumber](./GetMaxNodeNumber.md)           | Get maximum node number                                                       |
| [GetNodeMask](./GetNodeMask.md)                     | Returns the mask for the presence of node                                     |

### Connectivity Methods

| Method Name                                             | Purpose                                                          |
| ------------------------------------------------------- | ---------------------------------------------------------------- |
| [GetConnectivity](./GetConnectivity.md)                 | Returns node numbers in an element (this is vertex connectivity) |
| [GetConnectivity_](./GetConnectivity_.md)               | Generic method for getting the connectivity of an element        |
| [GetNodeConnectivity](./GetNodeConnectivity.md)         | Returns all the node connectivity of the mesh elements           |
| [GetNodeToElements](./GetNodeToElements.md)             | Generic method to get elements around node or nodes              |
| [GetNodeToNodes](./GetNodeToNodes.md)                   | Returns nodes connected to a given node number                   |
| [GetNodeToNodes_](./GetNodeToNodes_.md)                 | Returns nodes connected to a given node number                   |
| [GetElementToElements](./GetElementToElements.md)       | Returns elements connected to a given element number             |
| [GetElementToElements_](./GetElementToElements_.md)     | Get element to elements mapping                                  |
| [GetMaxNodeToElements](./GetMaxNodeToElements.md)       | Get maximum number of node to elements                           |
| [GetMaxElementToElements](./GetMaxElementToElements.md) | Get maximum number of element to elements                        |
| [GetMaxNodeToNodes](./GetMaxNodeToNodes.md)             | Get maximum number of node to nodes                              |

### Geometry methods

| Method Name                                                         | Purpose                                                                              |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| [FindEdge](./FindEdge.md)                                           | Find a edge in a cell (only for 3D)                                                  |
| [FindFace](./FindFace.md)                                           | Find a face in a cell                                                                |
| [GetBoundaryElementData](./GetBoundaryElementData.md)               | Returns boundary element data                                                        |
| [GetBoundingBox](./GetBoundingBox.md)                               | Return the bounding box                                                              |
| [GetCellNumber](./GetCellNumber.md)                                 | Returns the master and slave cell number of a facet element                          |
| [GetFacetConnectivity](./GetFacetConnectivity.md)                   | Generic method to Get the connectivity of a facet element                            |
| [GetFacetElementType](./GetFacetElementType.md)                     | Returns the facet element type of a given cell element number                        |
| [GetFacetParam](./GetFacetParam.md)                                 | Get the parameters of facet elements                                                 |
| [GetGlobalEdgeNumber](./GetGlobalEdgeNumber.md)                     | Get global Edge number from global element and localEdgenumber                       |
| [GetGlobalFaceNumber](./GetGlobalFaceNumber.md)                     | Get global face number from global element and localFacenumber                       |
| [GetLocalFacetID](./GetLocalFacetID.md)                             | Return the local facet id, so that we can Get reference element of the facet element |
| [GetMasterCellNumber](./GetMasterCellNumber.md)                     | Returns the master cell number of a facet element                                    |
| [GetNSD](./GetNSD.md)                                               | Return the NSD                                                                       |
| [GetSlaveCellNumber](./GetSlaveCellNumber.md)                       | Returns the slave cell number of a facet element                                     |
| [GetTotalBoundaryElements](./GetTotalBoundaryElements.md)           | Returns the total number of boundary elements                                        |
| [GetTotalBoundaryFacetElements](./GetTotalBoundaryFacetElements.md) | Returns the total number of boundary facet elements                                  |
| [GetTotalEdges](./GetTotalEdges.md)                                 | Returns the total number of edges in the mesh (obj%tEdges)                           |
| [GetTotalFaces](./GetTotalFaces.md)                                 | Returns the total number of faces in the mesh (obj%tFaces)                           |
| [GetTotalFacetElements](./GetTotalFacetElements.md)                 | Returns the total number of facet elements in the mesh                               |
| [GetTotalInternalFacetElements](./GetTotalInternalFacetElements.md) | Returns the total number of internal facet elements                                  |
| [GetXidimension](./GetXiDimension.md)                               | Return the NSD                                                                       |

### Status Check Methods

| Method Name                                             | Purpose                                                             |
| ------------------------------------------------------- | ------------------------------------------------------------------- |
| [isInit](./IsInit.md)                                   | Returns obj%isInitiated                                             |
| [isNodeToElements](./IsNodeToElements.md)               | Check if node to elements mapping is available                      |
| [isNodeToNodes](./IsNodeToNodes.md)                     | Check if node to nodes mapping is available                         |
| [isExtraNodeToNodes](./IsExtraNodeToNodes.md)           | Check if extra node to nodes mapping is available                   |
| [isElementToElements](./IsElementToElements.md)         | Check if element to elements mapping is available                   |
| [isEdgeConnectivity](./IsEdgeConnectivity.md)           | Check if edge connectivity is available                             |
| [isFaceConnectivity](./IsFaceConnectivity.md)           | Check if face connectivity is available                             |
| [isBoundaryData](./IsBoundaryData.md)                   | Check if boundary data is available                                 |
| [isFacetData](./IsFacetData.md)                         | Check if facet data is available                                    |
| [isBoundaryElement](./IsBoundaryElement.md)             | Returns true if a given global element number is a boundary element |
| [isDomainBoundaryElement](./IsDomainBoundaryElement.md) | Returns true if a given global element number is a boundary element |
| [isDomainFacetElement](./IsDomainFacetElement.md)       | Returns true if a given global element number is a boundary element |
| [isAnyNodePresent](./IsAnyNodePresent.md)               | Returns true if any of the node number is present                   |
| [isAllNodePresent](./IsAllNodePresent.md)               | Returns true if all of the node numbers are present                 |
| [isBoundaryNode](./IsBoundaryNode.md)                   | Returns true if a given global node number is a boundary node       |
| [isNodePresent](./IsNodePresent.md)                     | Returns true if a node number is present                            |
| [isElementPresent](./IsElementPresent.md)               | Returns true if a given element number is present                   |
| [isElementActive](./IsElementActive.md)                 | Check if element is active                                          |

### Set methods

| Method Name                                     | Purpose                                           |
| ----------------------------------------------- | ------------------------------------------------- |
| [SetShowTime](./SetShowTime.md)                 | Set showTime option                               |
| [SetBoundingBox](./SetBoundingBox.md)           | Set the bounding box                              |
| [SetSparsity](./SetSparsity.md)                 | Generic method for Setting the sparsity           |
| [SetTotalMaterial](./SetTotalMaterial.md)       | Generic method                                    |
| [SetMaterial](./SetMaterial.md)                 | Set material to an element                        |
| [SetFacetElementType](./SetFacetElementType.md) | Set the facet element type of a given cell number |
| [SetQuality](./SetQuality.md)                   | Set mesh quality                                  |
| [SetParam](./SetParam.md)                       | Set parameters of mesh                            |
| [SetFacetParam](./SetFacetParam.md)             | Set the parameters of facet element               |

### Get Methods

| Method Name                               | Purpose                                   |
| ----------------------------------------- | ----------------------------------------- |
| [GetMaterial](./GetMaterial.md)           | Returns the material id of a given medium |
| [GetTotalMaterial](./GetTotalMaterial.md) | Returns the total materials in an element |
| [GetParam](./GetParam.md)                 | Get parameter of mesh                     |

## All methods

import DocCardList from '@theme/DocCardList';

<DocCardList />
