# GetCaseName

The `GetCaseName` method returns a string that identifies the combination of continuity and interpolation type used in the finite element degree of freedom object. This case name is used internally to determine which algorithms to apply when processing the finite element data.

## Interface

```fortran
INTERFACE
  MODULE FUNCTION GetCaseName(obj) RESULT(ans)
    CLASS(FEDOF_), INTENT(IN) :: obj
    CHARACTER(6) :: ans
  END FUNCTION GetCaseName
END INTERFACE
```

## Parameters

- `obj` - The `FEDOF_` object from which to obtain the case name

## Return Value

- `ans` - A 6-character string combining the basis continuity and the interpolation type

## Implementation Details

The method is straightforward, concatenating the `baseContinuity` and `baseInterpolation` properties of the `FEDOF_` object:

```fortran
ans = obj%baseContinuity//obj%baseInterpolation
```

## Possible Return Values

The return value is a combination of the continuity type and interpolation type:

1. For continuity (`obj%baseContinuity`):
   - `"H1"` - Standard $H^{1}$ conforming elements
   - `"HC[url]"` - H(curl) conforming elements
   - `"HD[iv]"` - H(div) conforming elements
   - `"DG"` - Discontinuous Galerkin elements

2. For interpolation (`obj%baseInterpolation`):
   - `"LAGR"` - Lagrange interpolation
   - `"HIER"` - Hierarchical interpolation
   - `"ORTHO"` - Orthogonal interpolation
   - `"HERM"` - Hermite interpolation
   - `"SERE"` - Serendipity interpolation

Common combinations include:

- `"H1LAGR"` - H¹ conforming elements with Lagrange interpolation
- `"H1HIER"` - H¹ conforming elements with hierarchical interpolation
- `"DGHIER"` - Discontinuous Galerkin with hierarchical interpolation

## Usage Examples

The case name is primarily used in conditional branching to select the appropriate algorithms for a given finite element type:

```fortran
CHARACTER(6) :: casename
casename = fedof%GetCaseName()

SELECT CASE (casename)
CASE ('H1LAGR')
  ! Process H¹ conforming elements with Lagrange interpolation
CASE ('H1HIER')
  ! Process H¹ conforming elements with hierarchical interpolation
CASE ('DGHIER')
  ! Process Discontinuous Galerkin with hierarchical interpolation
CASE DEFAULT
  ! Handle unexpected case
END SELECT
```

This method is used extensively within the `FEDOF_` class to determine the appropriate algorithms for shape function calculation, connectivity generation, and other operations that depend on the specific type of finite element formulation.

## Example

import EXAMPLE80 from "./examples/_GetCaseName_test_1.md";

<EXAMPLE80 />
