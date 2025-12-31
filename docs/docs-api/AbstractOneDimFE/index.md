---
tags:
  - "finiteElement"
  - "polynomials"
  - "basis"
  - "shapeFunctions"
  - "shape-functions"
category:
  - "FiniteElement"
date: 1692028800
docs: "done"
extpkgs: "none"
sidebar_position: 1
status: "stable"
update: 1692028800
---

# AbstractOneDimFE

`AbstractOneDimFE_` is an abstract data type that provides a base for one-dimensional finite elements.

`AbstractOneDimFE_Class` is a module that defines the abstract base class for one-dimensional finite elements in the EASIFEM library. It provides the foundation for implementing various types of one-dimensional elements with different basis functions, interpolation schemes, and continuity requirements.

The module contains:

- The abstract `AbstractOneDimFE_` class
- A pointer wrapper type `AbstractOneDimFEPointer_`
- Various interfaces for element construction, manipulation, and analysis

## Key Features

- Supports various basis function types (Lagrange, Hierarchical, Orthogonal, etc.)
- Handles different interpolation schemes
- Provides quadrature rules for numerical integration
- Supports various continuity requirements (H1, HDiv, HCurl, DG)
- Manages local and global element shape functions

import EXAMPLE20 from "./AbstractOneDimFE_.md";

<EXAMPLE20 />

## Summary of methods

### Constructor Methods

- `Initiate(param)` - Initialize from parameter list
- `Initiate(baseContinuity, baseInterpolation, ...)` - Initialize from individual parameters
- `Copy(obj2)` - Initialize by copying from another instance
- `CheckEssentialParam(param)` - Check for essential parameters in parameter list
- `DEALLOCATE()` - Free resources used by the object

### I/O Methods

- `Display(msg, unitno, notFull)` - Display the content of the object
- `MdEncode()` - Return a markdown representation of the object
- `ReactEncode()` - Return a React component representation of the object

### Set Methods

- `SetParam(order, fetype, ipType, ...)` - Set various parameters of the element
- `SetOrder(order)` - Change the order of an already initialized element

### Get Methods

- `GetPrefix()` - Abstract method that returns a prefix string for the element type
- `GetLocalElemShapeData(elemsd, quad)` - Get local element shape functions and derivatives
- `GetGlobalElemShapeData(elemsd, xij, geoelemsd)` - Get global element shape functions
- `GetParam(order, fetype, ...)` - Get various parameters from the element

### Quadrature Methods

- `GetQuadraturePoints(quad, quadratureType, ...)` - Generate quadrature points for integration

## All methods

import DocCardList from '@theme/DocCardList';

<DocCardList />
