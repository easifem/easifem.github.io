import CodeBlock from '@theme/CodeBlock';

import CodeSnippet from '!!raw-loader!./_Initiate_test_1.F90';

<CodeBlock language="fortran">{CodeSnippet}</CodeBlock>

Mesh info:

```txt
total nodes: 12
total elements: 14
```

The above code will initiate an instance of `ScalarMeshField_`, which will contain following data.

```txt
Object INITIATED: TRUE
name: aScalar
prefix: ScalarMeshField
fieldType: NORMAL
engine: NATIVE_SERIAL
tSize: 14
defineOn: Nodal
rank: Scalar
varType: Constant
shape:
---------------------------------
                1
val ALLOCATED: TRUE
indxVal ALLOCATED: TRUE
mesh ASSOCIATED: TRUE
```

- We have saved data in a one dimensional array `val` and `indxVal`. The size of `indxVal` is `telements+1`, i.e., 15.
- The data for element `iel` will be stored in `val(a:b)`, where `a=indxVal(iel)` and `b=indxVal(iel+1)-1`.
- The number of data in each element will be 1, because, we have set `varType=Constant`. It means that data remains constant inside an element.
- There are 14 elements in the mesh.
