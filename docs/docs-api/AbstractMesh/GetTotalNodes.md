# GetTotalNodes

The `GetTotalNodes` method returns the total number of nodes in the mesh, with options to count nodes for specific mesh IDs or element selections.

## Interface

```fortran
INTERFACE
  MODULE FUNCTION GetTotalNodes1(obj) RESULT(ans)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    INTEGER(I4B) :: ans
  END FUNCTION GetTotalNodes1
END INTERFACE

INTERFACE
  MODULE FUNCTION GetTotalNodes2(obj, meshid) RESULT(ans)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: meshid
    INTEGER(I4B) :: ans
  END FUNCTION GetTotalNodes2
END INTERFACE

INTERFACE
  MODULE FUNCTION GetTotalNodes3(obj, globalElement, islocal) RESULT(ans)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    !! abstrract mesh
    INTEGER(I4B), INTENT(IN) :: globalElement(:)
    !! global or local element number
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: islocal
    !! if true then global element is local element
    INTEGER(I4B) :: ans
  END FUNCTION GetTotalNodes3
END INTERFACE
```

## Syntax

```fortran
! Get total nodes in the mesh
totalNodes = mesh%GetTotalNodes()

! Get total nodes for a specific mesh ID
subdomainNodes = mesh%GetTotalNodes(meshid)

! Get total unique nodes in specified elements
elementNodes = mesh%GetTotalNodes(globalElement, [islocal])
```

## Parameters

| Parameter | Type | Intent | Description |
|-----------|------|--------|-------------|
| `obj` | `CLASS(AbstractMesh_)` | `IN` | The mesh object |
| `meshid` | `INTEGER(I4B)` | `IN` | Mesh ID to filter nodes by |
| `globalElement` | `INTEGER(I4B)(:)` | `IN` | Global or local element numbers to count nodes from |
| `islocal` | `LOGICAL(LGT)` | `IN` (optional) | If true, globalElement contains local element numbers |

## Return Value

| Type | Description |
|------|-------------|
| `INTEGER(I4B)` | Total number of nodes matching the criteria |

## Description

`GetTotalNodes` returns the total number of nodes in the mesh, with options to count nodes for specific contexts:

1. Return the total number of all nodes in the mesh
2. Return the total number of nodes in elements with a specific mesh ID
3. Return the total number of unique nodes in a list of specified elements

This information is essential for array sizing, iteration limits, and mesh statistics.

## Example Usage

```fortran
TYPE(Mesh_) :: mesh
INTEGER(I4B) :: totalNodes, subdomain1Nodes, elemNodes
INTEGER(I4B) :: selectedElems(3)

! Initialize mesh...
selectedElems = [10, 15, 20]  ! Example element numbers

! Get total nodes in the mesh
totalNodes = mesh%GetTotalNodes()

! Get total nodes in subdomain 1
subdomain1Nodes = mesh%GetTotalNodes(meshid=1)

! Get total unique nodes in selected elements
elemNodes = mesh%GetTotalNodes(selectedElems)

PRINT*, "Total nodes in mesh:", totalNodes
PRINT*, "Nodes in subdomain 1:", subdomain1Nodes
PRINT*, "Unique nodes in selected elements:", elemNodes
```

---

