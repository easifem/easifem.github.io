This example demonstrates the DIVISION of matrix and scalar FEVariables.

- `obj1` is matrix FEVariable
- `obj2` is scalar FEVariable
- The variables `obj1`, `obj2` can be `constant`, `space`, `time`, or `spaceTime`.
- The `varType` of ans depends on the `varType` of `obj1` and `obj2`.

import CodeBlock from '@theme/CodeBlock';

import CodeSnippet from '!!raw-loader!./_Division_test_7.F90';

<CodeBlock language="fortran">{CodeSnippet}</CodeBlock>
