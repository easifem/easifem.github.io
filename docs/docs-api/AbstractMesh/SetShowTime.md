# SetShowTime

By using this method you can measure the time required in each subroutine of AbstractMesh.

The `obj_SetShowTime` procedure is a method of the `AbstractMesh_` class that allows users to set the `showTime` option for a mesh object. When enabled, this option causes the mesh to display timing information for various mesh operations, which can be useful for performance analysis.

## Syntax

```fortran
CALL obj%SetShowTime(VALUE)
```

## Parameters

| Parameter | Type | Intent | Description |
|-----------|------|--------|-------------|
| `obj` | `CLASS(AbstractMesh_)` | `INOUT` | The mesh object whose `showTime` option is being set |
| `VALUE` | `LOGICAL(LGT)` | `IN` | Boolean value to set for the `showTime` option |

## Description

The `SetShowTime` method simply sets the internal `showTime` logical flag in the mesh object to the value provided in the `VALUE` parameter. When this flag is set to `.TRUE.`, the mesh will display timing information for various operations to help with performance analysis and debugging.

## Example Usage

```fortran
TYPE(Mesh_) :: mesh
! Initialize mesh here...

! Turn on timing display for mesh operations
CALL mesh%SetShowTime(.TRUE.)

! Some mesh operations...
CALL mesh%InitiateNodeToElements()
CALL mesh%InitiateNodeToNodes()

! Turn off timing display when no longer needed
CALL mesh%SetShowTime(.FALSE.)
```

## Implementation Details

The implementation is very straightforward - it simply assigns the input value to the internal `showTime` attribute of the mesh object:

```fortran
MODULE PROCEDURE obj_SetShowTime
obj%showTime = VALUE
END PROCEDURE obj_SetShowTime
```

## Notes

- When the `showTime` option is enabled, various mesh operations will display the time taken for their execution.
- This can be helpful for identifying performance bottlenecks in mesh processing operations.
- The timing information is typically displayed on the standard output.
- For production code, it's recommended to set this option to `.FALSE.` to avoid unnecessary output.
