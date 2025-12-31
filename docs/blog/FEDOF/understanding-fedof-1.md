---
title: Understanding FEDOF in easifem (Part 1)
description: This post explains concept of FEDOF in easifem.
authors:
  - vickysharma0812
tags: [mesh, fedof, basis, shapeFunctions]
hide_table_of_contents: false
---

## FEDOF

`FEDOF` denotes the finite element degree of freedom. The concept of degree of freedom depends upon the type of finite element approximation (basis functions) used for the problem.

:::note
These series of notes will present the FEDOF concept for for H1 conforming Hierarchical and Lagrange basis functions.
:::

- For Lagrange polynomials the degree of freedoms are associatd with the nodes of the mesh. In this case, a node implies a point in the mesh. This point can be a vertex, somewhere on the edge, face, or interior of the element.
- For Hierarchical polynmials the degree of freedoms are associated with the modes. They can be associated with nodes, edges, faces and interior of the elements. In this case the node has an abstract meaning. But we will associcate them with the vertex, edge, face, and interior basis functions.
- In the case of H1 conforming basis functions with Hierarchical polynomials, the orientation of edge and faces with respect to the master element is very important. However, for Lagrange polynomials the orientation is not so much needed if we generate the nodes correctly for higher order mesh.

<!-- truncate -->

## Mesh related stuff

In this note we will focus on 2D mesh with quadrilateral.

![Quadrilateral mesh](./figures/square_3x3.svg)

Information about this domain is given below:

```txt
engine: GMSH 4.1 0 8
version: 4.1
nsd: 2
minNptrs: 1
maxNptrs: 9
minElemNum: 1
maxElemNum: 16
tNodes: 9
tEntitiesForNodes: 9
tEntitiesForElements: 9
tElements: 4, 8, 4, 0
total mesh of volume: 0
total mesh of surface: 1
total mesh of curve: 4
total mesh of point: 4
```

The information about the cell mesh is given below.

```txt
total nodes: 9
total elements: 4
tEdges: 0
tFaces: 12
```

:::info
For a 2D-mesh, we do not define the edges. For 2D mesh we only have Cell, faces, and vertices.
:::

From the domain we can get the pointer to mesh of cells. In this case a cell is made of quadrilateral elements.

```fortran
cellMesh => dom%GetMeshPointer()
```

We can get the maximum number of nodes in an element by using `GetMaxNNE()` method.

```fortran
maxNNE = cellMesh%GetMaxNNE()
```

For this mesh the value of `maxNNE` will be 4, as the maximum number of nodes in a quadrilateral element is 4.

:::info
You can think maxNNE as the maximum number of vertex connectivity for elements of mesh.
:::

We can get the global element number of a local element number by using following.

```fortran
iel = cellMesh%GetGlobalElemNumber(localElement=1)
```

:::note "GlobalElement vs LocalElement Number"
Global element number is what you see in the mesh file, it the element number assigned by the mesh generator. Whereas, local element number is the location of this element inside the cellMesh object. We do not hope you to know the local element number, therefore, you can convert global element number to local element by using the method `GetLocalElemNumber()`.
:::

In this case iel will be 13.

## Vertex connectivity of mesh

The vertex connectivity of this element can be obtained by using the following code.

```fortran
con = cellMesh%GetConnectivity(globalElement=1, islocal=yes, opt="V")
```

:::note
To get vertex connectivity we use opt="V", for face connectivity we will use opt="F", for edge connectivity we will use opt="E", and for cell connectivity we will use opt="C", and for all connectivity we will use opt="A".
:::

The vertex connectivity of global element 13 (local element 1) is given below.

```txt
1 5 9 8
```

:::caution
Note that the vertex connectivity is returned in terms of global vertex numbers.
:::

## Face connectivity of mesh

Now lets get the face connectivity for this element.

We can enquire about the total number of faces in the mesh by using the method `GetTotalFaces()` as shown below.

```fortran
CALL Display(cellMesh%GetTotalFaces(), "Total faces in mesh:")
```

The face connectivity of global Element 13 (local element 1) can be obtained by using the following.

```fortran
con = cellMesh%GetConnectivity(globalElement=1, islocal=yes, opt="F")
CALL Display(con, "Connectivity of faces for globalElement=1: ")
```

The result is given below.

```txt
1 2 3 4
```

:::note
These are local face numbers. Note that there are no global face numbers because the mesh file does not provide face number. Therefore, the concept of global or local face number is not valid here.
:::

We can get the orientation of these faces by using `GetFaceOrientation()`, the face orientation is a two dimensional array, where first dimension contains the face orientation flag in two dimensions and the second dimension contains the local face number. The following code is related to getting the face orientation.

:::caution
The number of rows in faceOrientation should be 3.
:::

```fortran
CALL Reallocate(orient, 3, SIZE(con))
CALL cellMesh%GetFaceOrientation(globalElement=1, islocal=yes, ans=orient, &
                                 nrow=nrow, ncol=ncol)
CALL Display(orient(1:nrow, 1:ncol), &
             "Face orientations for globalElement=1: ")
```

The result is given below.

```txt
Face orientations for globalElement=1:
---------------------------------------
             1   1  -1  -1
```

Let's understand the concept of face orientation.

The vertex connectivity of global element 13 is given by `[1 5 9 8]`. The faces are oriented in the counter clockwise direction.

- Local face 1 is form vertex 1 to vertex 5
- Local face 2 is form vertex 5 to vertex 9
- Local face 3 is form vertex 9 to vertex 8
- Local face 4 is form vertex 8 to vertex 1

In 2D, positive orientation of a face means from small to large vertex number. Therefore,

- Local face 1, form vertex 1 to vertex 5, has positive orientation.
- Local face 2, form vertex 5 to vertex 9, has positive orientation.
- Local face 3, form vertex 9 to vertex 8, has negative orientation.
- Local face 4, form vertex 8 to vertex 1, has negative orientation.

:::warning
If you try to get the edge data for 2D mesh you will get nothing because edge data is note defined for 2D mesh.
:::

Getting vertex connectivity of the a face. To get the node numbers of a face we need to describe the globalElement and the local face number as shown below.

```fortran
con = cellMesh%GetFacetConnectivity(globalElement=1, iface=1, islocal=yes)
CALL Display(con, "Node numbers of face 1 of element 1: ")

con = cellMesh%GetFacetConnectivity(globalElement=1, iface=2, islocal=yes)
CALL Display(con, "Node numbers of face 2 of element 1: ")

con = cellMesh%GetFacetConnectivity(globalElement=1, iface=3, islocal=yes)
CALL Display(con, "Node numbers of face 3 of element 1: ")

con = cellMesh%GetFacetConnectivity(globalElement=1, iface=4, islocal=yes)
CALL Display(con, "Node numbers of face 4 of element 1: ")
```

The result is given below.

```txt
Node numbers of face 1 of element 1: [1 5]
Node numbers of face 2 of element 1: [5 9]
Node numbers of face 3 of element 1: [9 8]
Node numbers of face 4 of element 1: [8 1]
```

:::caution
Note these face connectivities are for local face of element.
:::

## Getting all connectivity of mesh

we can get all connectivity of an element by using the following code.

```fortran
con = cellMesh%GetConnectivity(globalElement=1, islocal=yes, opt='V')
CALL Display(con, "Connectivity of vertex for localElement=1: ")
```

## Scalar FEDOF

Getting the degree of freedom for scalar field.

- Vertex DOF connectivity for localElement=1:

```txt
1 5 9 8
```

- Face DOF connectivity for localElement=1:

```txt
10 11 12 13
```

- Cell DOF connectivity for localElement=1:

```txt
22
```

- All DOF connectivity for localElement=1:

```txt
1 5 9 8 10 11 12 13 22
```

There is another way to get FEDOF connectivity.

From the cellMesh we get the connectivity with opt "V", "F", "C", and "A" for vertex, face, cell, and all DOF connectivity respectively. Then for each of these abstract node number we can call following methods on FEDOF object.

- `GetVertextDOF()`
- `GetFaceDOF()`
- `GetCellDOF()`
