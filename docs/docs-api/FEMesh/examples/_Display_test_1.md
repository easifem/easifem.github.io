Display method of FEMesh.

import CodeBlock from '@theme/CodeBlock';

import CodeSnippet from '!!raw-loader!./_Display_test_1.F90';

<CodeBlock language="fortran">{CodeSnippet}</CodeBlock>

The result of this example is given below.

```bash title="results"
Mesh object initiated: TRUE
showTime: FALSE
readFromFile: TRUE
isNodeToElementsInitiated: FALSE
isNodeToNodesInitiated: FALSE
isExtraNodeToNodesInitiated: FALSE
isElementToElementsInitiated: TRUE
isEdgeConnectivityInitiated: FALSE
isFaceConnectivityInitiated: TRUE
isBoundaryDataInitiated: FALSE
isFacetDataInitiated: FALSE
uid: 1
Total elements (topology wise)
==============================
point: 0
line: 0
triangle: 14
quadrangle: 0
tetrahedron: 0
hexahedron: 0
prism: 0
pyramid: 0

Total topologies: 1
Topologies(1): Triangle3
maxNNE: 6
nsd: 2
xidim: 2
maxNptrs: 37
minNptrs: 1
maxElemNum: 26
minElemNum: 13
tNodes: 37
tEdges: 0
tFaces: 25
tElements: 14
minX: 0.00000
maxX: 2.00000
minY: 0.00000
maxY: 2.00000
minZ: 0.00000
maxZ: 0.00000
X: 0.00000
Y: 0.00000
Z: 0.00000
boundingEntity ALLOCATED: TRUE
boundingEntity:
----------------
       1
       2
       3
       4
local_elemNumber ALLOCATED: TRUE
local_nptrs ALLOCATED: TRUE
quality ALLOCATED: FALSE
facetElementType ALLOCATED: FALSE
nodeData ALLOCATED: TRUE
nodeData Size: 37
elementData ALLOCATED: TRUE
elementData Size: 14
facetData ALLOCATED: FALSE
kdtree Associated: FALSE
kdresult Allocated: FALSE
```
