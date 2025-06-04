# GetTotalElementsTopologyWise

The `GetTotalElementsTopologyWise` method returns the count of elements for each topology type in the mesh. This provides a breakdown of how many elements of each shape (point, line, triangle, etc.) are present.

## Interface

```fortran
INTERFACE
  MODULE PURE FUNCTION GetTotalElementsTopologyWise(obj) RESULT(ans)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    INTEGER(I4B) :: ans(8)
  !! Total number of points, lines, triangles, quadrangles, tetrahedrons,
  !! hexahedrons, prisms, pyramids
  END FUNCTION GetTotalElementsTopologyWise
END INTERFACE
```

## Syntax

```fortran
elementCounts = mesh%GetTotalElementsTopologyWise()
```

## Parameters

| Parameter | Type                   | Intent | Description     |
| --------- | ---------------------- | ------ | --------------- |
| `obj`     | `CLASS(AbstractMesh_)` | `IN`   | The mesh object |

## Return Value

| Type              | Description                                                   |
| ----------------- | ------------------------------------------------------------- |
| `INTEGER(I4B)(8)` | Array containing the count of elements for each topology type |

## Description

`GetTotalElementsTopologyWise` returns an array with 8 elements, where each element represents the count of a specific element topology in the mesh. The indices correspond to the following topologies:

1. Points
2. Lines
3. Triangles
4. Quadrangles (quadrilaterals)
5. Tetrahedrons
6. Hexahedrons (hexahedra)
7. Prisms
8. Pyramids

This method is useful for mesh statistics and for allocating resources based on the number of elements of each type.

## Example Usage

```fortran
TYPE(Mesh_) :: mesh
INTEGER(I4B) :: topoCounts(8)
CHARACTER(LEN=15) :: topoNames(8) = ["Point         ", "Line          ", &
                                     "Triangle      ", "Quadrilateral ", &
                                     "Tetrahedron   ", "Hexahedron    ", &
                                     "Prism         ", "Pyramid       "]

! Initialize mesh...

! Get element counts by topology
topoCounts = mesh%GetTotalElementsTopologyWise()

! Display mesh composition
PRINT *, "Mesh element composition:"
DO i = 1, 8
  IF (topoCounts(i) > 0) THEN
    PRINT *, topoNames(i), ":", topoCounts(i)
  END IF
END DO
```
