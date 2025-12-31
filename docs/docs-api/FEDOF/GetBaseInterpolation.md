# GetBaseInterpolation

The `GetBaseInterpolation` method returns the type of basis functions used for interpolation on the reference element in the FEDOF (Finite Element Degrees of Freedom) instance. 

## Interface

The specific interface is defined as:

```fortran
MODULE FUNCTION obj_GetBaseInterpolation(obj) RESULT(ans)
  CLASS(FEDOF_), INTENT(IN) :: obj
  CHARACTER(:), ALLOCATABLE :: ans
END FUNCTION obj_GetBaseInterpolation
```

## Description

The `GetBaseInterpolation` method returns the type of basis functions used for interpolation on the reference element in the FEDOF (Finite Element Degrees of Freedom) instance. This information is crucial for understanding how the finite element approximation is constructed.

### Parameters

- `obj` - Input, `CLASS(FEDOF_)`, FEDOF object instance
- `ans` - Output, `CHARACTER(:), ALLOCATABLE`, string containing the base interpolation type

### Implementation Details

The implementation is straightforward, returning the internal `baseInterpolation` property:

```fortran
MODULE PROCEDURE obj_GetBaseInterpolation
ans = obj%baseInterpolation
END PROCEDURE obj_GetBaseInterpolation
```

### Possible Return Values

The method returns one of the following interpolation types:

- `"LAGR"` - Lagrange interpolation
- `"HIER"` - Hierarchical interpolation
- `"ORTHO"` - Orthogonal interpolation
- `"HERM"` - Hermite interpolation
- `"SERE"` - Serendipity interpolation

## Usage Example

```fortran
! Example to get the base interpolation type
CHARACTER(:), ALLOCATABLE :: interpType
TYPE(FEDOF_) :: myDOF

! Get the interpolation type
interpType = myDOF%GetBaseInterpolation()

! Check interpolation type and take appropriate action
SELECT CASE (interpType)
CASE ("LAGR")
  PRINT *, "Using Lagrange interpolation"
CASE ("HIER")
  PRINT *, "Using Hierarchical interpolation"
CASE DEFAULT
  PRINT *, "Using other interpolation type: ", interpType
END SELECT
```

## Important Notes

1. The base interpolation type works in conjunction with the base continuity (e.g., "H1", "HCurl", "HDiv", "DG") to determine the complete function space used.
2. The `GetCaseName` method combines the base continuity and base interpolation into a single identifier (e.g., "H1LAGR").
3. Different interpolation types have different mathematical properties and are suitable for different types of problems.

## Related Methods

- `GetCaseName` - Returns the combined continuity and interpolation identifier
- `GetLocalElemShapeData` - Uses the interpolation type to determine which shape functions to compute
- `GetLocalElemShapeDataH1Lagrange` - Specialized method for Lagrange interpolation
- `GetLocalElemShapeDataH1Hierarchical` - Specialized method for Hierarchical interpolation

The `GetBaseInterpolation` method is important for understanding the mathematical basis of the finite element approximation and is often used to determine which specialized algorithms should be applied for shape function evaluation and element matrix assembly.

