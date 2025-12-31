In this exmple we test Lagrange finite element on Line element.
Interpolation points are equidistance.

import CodeBlock from '@theme/CodeBlock';

import CodeSnippet from '!!raw-loader!./_Initiate_test_1.F90';

<CodeBlock language="fortran">{CodeSnippet}</CodeBlock>

The explanation and the results of the above code is given below.

### The results of Order=1

$$
N(1)=+0.5x^0-0.5x^1
$$

$$
N(2)=+0.5x^0+0.5x^1
$$

```txt
ReferenceElement=
element type : Line2
xidimension :: 1
nsd : 1
nsd=1
order=1
feType=1
ipType=1
dofType=
--------
1
1
1
1
transformType=1

order=1
Total Basis=2
N(1)=+0.5x^0-0.5x^1
N(2)=+0.5x^0+0.5x^1
```

### The results of Order=2

- order=2
- Total Basis=3

$$
N(1)=-0.5x^1+0.5x^2
$$

$$
N(2)=+0.5x^1+0.5x^2
$$

$$
N(3)=+1x^0-1x^2
$$

### The results of order 3 are given below

- order=3
- Total Basis=4

$$
N(1)=-6.25E-02x^0+6.25E-02x^1+0.5625x^2-0.5625x^3
$$

$$
N(2)=-6.25E-02x^0-6.25E-02x^1+0.5625x^2+0.5625x^3
$$

$$
N(3)=+0.5625x^0-1.6875x^1-0.5625x^2+1.6875x^3
$$

$$
N(4)=+0.5625x^0+1.6875x^1-0.5625x^2-1.6875x^3
$$
