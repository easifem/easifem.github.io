# GetLocalElemShapeData

The `GetLocalElemShapeData` method retrieves local element shape function data for a specific element in a finite element mesh. This method acts as a dispatcher that calls the appropriate shape function evaluation method based on the continuity and interpolation type of the finite element space.

## Syntax

```fortran
CALL obj%GetLocalElemShapeData(globalElement, elemsd, quad, islocal)
```

## Arguments

| Argument        | Intent           | Description                                                                  |
| --------------- | ---------------- | ---------------------------------------------------------------------------- |
| `obj`           | `INOUT`          | An instance of the `FEDOF_` class                                            |
| `globalElement` | `IN`             | Global element number (or local element number if `islocal=.TRUE.`)          |
| `elemsd`        | `INOUT`          | `ElemShapedata_` object to store the shape function data                     |
| `quad`          | `IN`             | `QuadraturePoint_` object containing quadrature points                       |
| `islocal`       | `IN`, `OPTIONAL` | Logical flag - if true, `globalElement` is treated as a local element number |

## Description

This method determines the appropriate shape function evaluation strategy based on the case name derived from the basis continuity and interpolation type. Currently, it supports:

- `H1LAGR`: H1-conforming Lagrange interpolation
- `H1HIER`: H1-conforming Hierarchical interpolation

The method dispatches to the appropriate specialized method:

- `GetLocalElemShapeDataH1Lagrange` for Lagrange interpolation
- `GetLocalElemShapeDataH1Hierarchical` for Hierarchical interpolation

## Implementation Details

The method performs the following steps:

1. Obtains the case name by calling `obj%GetCaseName()`
2. Uses a SELECT CASE statement to call the appropriate specialized method
3. Raises an error if no matching case is found

## Example Usage

```fortran
TYPE(FEDOF_) :: fedof
TYPE(ElemShapedata_) :: elemsd
TYPE(QuadraturePoint_) :: quad
INTEGER :: elemNumber

! Initialize fedof, elemsd, quad, and elemNumber

! Get local element shape data
CALL fedof%GetLocalElemShapeData(globalElement=elemNumber, elemsd=elemsd, quad=quad)
```

## Notes

- The method depends on the continuity and interpolation type settings in the FEDOF object
- Error checking is performed in debug mode to ensure the element is valid
- This method serves as a high-level interface to different shape function implementations

Would you like me to explain any specific part of this method in more detail?

## Example 1

import EXAMPLE65 from "./examples/_GetLocalElemshapeData_test_1.md";

<EXAMPLE65 />

## Example 2

import EXAMPLE66 from "./examples/_GetLocalElemshapeData_test_2.md";

<EXAMPLE66 />
