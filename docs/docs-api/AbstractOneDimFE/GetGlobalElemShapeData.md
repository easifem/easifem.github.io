# GetGlobalElemShapeData

Computes global element shape functions and their derivatives using the geometry of the physical element.

## Interface

```fortran
SUBROUTINE obj_GetGlobalElemShapeData(obj, elemsd, xij, geoelemsd)
```

- `obj` - The AbstractOneDimFE_ object
- `elemsd` - Element shape data to be filled
- `xij` - Nodal coordinates of the physical element
- `geoelemsd` - Optional geometry element shape data for non-isoparametric elements
