# GetElemTopology

The `GetElemTopology` method retrieves the topology information for elements in the mesh. It can return either all element topologies present in the mesh or the topology of a specific element. Element topology refers to the geometric arrangement of nodes that defines the element shape (e.g., triangle, quadrilateral, tetrahedron, hexahedron).

## Interface

```fortran
INTERFACE
  MODULE FUNCTION GetElemTopology1(obj) RESULT(ans)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    INTEGER(I4B) :: ans(8)
  END FUNCTION GetElemTopology1
END INTERFACE

INTERFACE
  MODULE FUNCTION GetElemTopology2(obj, globalElement, islocal) &
    RESULT(ans)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: globalElement
    !! global or local element number
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: islocal
    !! if true then global element is local element
    INTEGER(I4B) :: ans
  END FUNCTION GetElemTopology2
END INTERFACE
```

## Syntax

```fortran
! Get all element topologies in the mesh
topologies = mesh%GetElemTopology()

! Get the topology of a specific element
elemTopology = mesh%GetElemTopology(globalElement, [islocal])
```

## Parameters

| Parameter       | Type                   | Intent          | Description                                                 |
| --------------- | ---------------------- | --------------- | ----------------------------------------------------------- |
| `obj`           | `CLASS(AbstractMesh_)` | `IN`            | The mesh object                                             |
| `globalElement` | `INTEGER(I4B)`         | `IN`            | Global or local element number                              |
| `islocal`       | `LOGICAL(LGT)`         | `IN` (optional) | If true, globalElement is treated as a local element number |

## Return Value

| Version   | Type              | Description                                               |
| --------- | ----------------- | --------------------------------------------------------- |
| Version 1 | `INTEGER(I4B)(8)` | Array of element topology identifiers present in the mesh |
| Version 2 | `INTEGER(I4B)`    | Topology identifier of the specified element              |

## Description

`GetElemTopology` provides information about the geometric arrangement of nodes that defines elements in the mesh. Element topology is a fundamental property that determines how elements are shaped and behave.

The method has two versions:

1. Return an array of all element topologies present in the mesh
2. Return the topology of a specific element

The topology identifiers correspond to specific element shapes, such as:

- Point
- Line
- Triangle
- Quadrilateral
- Tetrahedron
- Hexahedron
- Prism
- Pyramid

## Example Usage

```fortran
TYPE(Mesh_) :: mesh
INTEGER(I4B) :: elemNum, elemTopology
INTEGER(I4B) :: allTopologies(8)

! Initialize mesh, elemNum...

! Get all topologies in the mesh
allTopologies = mesh%GetElemTopology()

! Get the topology of a specific element
elemTopology = mesh%GetElemTopology(elemNum)

! Process based on element topology
SELECT CASE (elemTopology)
CASE (TRIANGLE)
  PRINT *, "Element is a triangle"
CASE (QUADRILATERAL)
  PRINT *, "Element is a quadrilateral"
CASE (TETRAHEDRON)
  PRINT *, "Element is a tetrahedron"
CASE (HEXAHEDRON)
  PRINT *, "Element is a hexahedron"
  ! Other cases...
END SELECT
```
