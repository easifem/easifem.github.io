# FindFace

Find a face in a cell.

## Interface

```fortran
MODULE SUBROUTINE FindFace(obj, globalElement, faceCon, isFace, &
                           localFaceNumber, onlyBoundaryElement, islocal)
  CLASS(AbstractMesh_), INTENT(INOUT) :: obj
  !! abstract mesh
  INTEGER(I4B), INTENT(IN) :: globalElement
  !! global or local elem number
  INTEGER(I4B), INTENT(IN) :: faceCon(:)
  !! vertex connectivity of face
  LOGICAL(LGT), INTENT(OUT) :: isFace
  !! if faceCon is a face of globalElement then it is true, else false
  INTEGER(I4B), INTENT(OUT) :: localFaceNumber
  !! local face number if found, else 0
  LOGICAL(LGT), INTENT(IN) :: onlyBoundaryElement
  !! if true then we will search if the element is boundary element
  LOGICAL(LGT), OPTIONAL, INTENT(IN) :: islocal
  !! if true then global element is local element
END SUBROUTINE FindFace
```

## Description

Searches for a specific face in an element. This routine checks if the specified face connectivity exists in the given element and returns the local face number if found.

## Arguments

- `obj`: The abstract mesh object.
- `globalElement`: The global (or local) element number to search in.
- `faceCon`: Array containing the vertex connectivity of the face to find.
- `isFace`: Returns true if the face is found in the element.
- `localFaceNumber`: Returns the local face number if found, 0 otherwise.
- `onlyBoundaryElement`: If true, only searches if the element is a boundary element.
- `islocal`: If present and true, `globalElement` is treated as a local element number.

## Example

```fortran
INTEGER(I4B) :: elemNum = 5, faceNodes(4) = [10, 11, 15, 14]
LOGICAL(LGT) :: found
INTEGER(I4B) :: faceNum

CALL mesh%FindFace(elemNum, faceNodes, found, faceNum, .FALSE.)

IF (found) THEN
  PRINT *, "Face found with local number:", faceNum
ELSE
  PRINT *, "Face not found in element"
END IF
```
