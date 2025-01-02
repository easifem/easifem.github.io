---
sidebar_position: 1
date:  2023-03-21 
update: 2023-03-21  
status: stable 
docs: done
extpkgs:
  - lis
category: 
  - LinearAlgebra
  - Fields
  - Vectors
  - Lis
tags:
  - vectors
  - fields
  - easifemClasses
  - lis
  - extpkgs
---

# ScalarMeshField

`ScalarMeshField` is a subclass of [AbstractMeshField](/docs-api/AbstractMeshField). It is used to store scalar variables defined on elements of mesh. We can define the variable either on the nodes of the finite element, or we can define these variables on the quadrature points.

- By defining `varType` we can control how the scalar field changes inside an element.
- By defining `fieldType`, we can control how the scalar field over the elements of mesh.

## Getting Started

This datatype should be used in the following way:

- Initiate an instance of `ScalarMeshField`. This step will allocate required memory for the scalar field
- Then, set the values in `ScalarMeshField`. This action is performed by using `Set` method. There are several ways to use `Set` method. The first one requires as to pass an instance of `FEVariable`.

## All Methods

import DocCardList from '@theme/DocCardList';

<DocCardList />
