# GetLocalElemShapeData

Computes local element shape functions and their derivatives at quadrature points.

## Interface

```fortran
SUBROUTINE obj_GetLocalElemShapeData(obj, elemsd, quad)
```

- `obj` - The AbstractOneDimFE_ object
- `elemsd` - Element shape data to be filled
- `quad` - Quadrature points where shape functions are evaluated
