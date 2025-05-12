# GetNodeToElements

Get node to elements connectivity.

There are two interfaces to this method.

## Interface 1

```fortran
MODULE PURE FUNCTION getNodeToElements(obj, globalNode) RESULT(ans)
  CLASS(Mesh_), INTENT(IN) :: obj
  !! mesh data
  INTEGER(I4B), INTENT(IN) :: globalNode
  !! global node number
  INTEGER(I4B), ALLOCATABLE :: ans(:)
  !! A vector of local element number
END FUNCTION getNodeToElements
```

## Interface 2

```fortran
MODULE PURE FUNCTION getNodeToElements(obj, globalNode) RESULT(ans)
  CLASS(Mesh_), INTENT(IN) :: obj
  !! mesh data
  INTEGER(I4B), INTENT(IN) :: globalNode(:)
  !! global node number
  INTEGER(I4B), ALLOCATABLE :: ans(:)
  !! A vector of local element number
END FUNCTION getNodeToElements
```
