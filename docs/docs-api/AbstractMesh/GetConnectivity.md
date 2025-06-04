# GetConnectivity

This function returns the global node numbers that define the connectivity of a given element. By default, it returns the vertex connectivity, but you can use the `opt` parameter to request different types of connectivity (edge, face, cell, or all).

## Interface

```fortran
MODULE PURE FUNCTION getConnectivity(obj, globalElement) RESULT(ans)
  CLASS(Mesh_), INTENT(IN) :: obj
  INTEGER(I4B), INTENT(IN) :: globalElement
  INTEGER(I4B), ALLOCATABLE :: ans(:)
END FUNCTION getConnectivity
```

## Purpose

Retrieves the connectivity information for a specified element in the mesh.

## Syntax

```fortran
connectivity = mesh%GetConnectivity(globalElement, islocal, opt)
```

## Arguments

- `globalElement` (INTEGER, input): The global (or local) element number to retrieve connectivity information for.
- `islocal` (LOGICAL, optional, input): If present and true, then `globalElement` is treated as a local element number. Default is false.
- `opt` (CHARACTER, optional, input): Specifies which type of connectivity to retrieve.
  - "V" or "Vertex" - Vertex connectivity (default)
  - "E" or "Edge" - Edge connectivity
  - "F" or "Face" - Face connectivity
  - "C" or "Cell" - Cell connectivity
  - "A" or "All" - All connectivity types

## Returns

- `connectivity` (INTEGER array): A 1D array containing the global node numbers that define the specified element's connectivity.

## Example

```fortran
INTEGER(I4B), ALLOCATABLE :: vertexConn(:)
! Get vertex connectivity for element 5
vertexConn = mesh%GetConnectivity(5)

! Get edge connectivity for element 10
INTEGER(I4B), ALLOCATABLE :: edgeConn(:)
edgeConn = mesh%GetConnectivity(10, opt="E")
```
