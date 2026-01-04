This example demonstrates the multiplication of scalar and matrix FEVariables.

- `obj1` is scalar FEVariable
- `obj2` is matrix FEVariable
- The variables `obj1`, `obj2` can be `constant`, `space`, `time`, or `spaceTime`. The `varType` of ans depends on the `varType` of `obj1` and `obj2`.

import CodeBlock from '@theme/CodeBlock';

import CodeSnippet from '!!raw-loader!./_Multiplication_test_6.F90';

<CodeBlock language="fortran">{CodeSnippet}</CodeBlock>
