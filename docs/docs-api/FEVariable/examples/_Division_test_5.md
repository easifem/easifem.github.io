This example demonstrates the DIVISION of vector and scalar FEVariables.

- `obj1` is vector FEVariable
- `obj2` is scalar FEVariable
- The variables `obj1`, `obj2` can be `constant`, `space`, `time`, or `spaceTime`.
- The `varType` of ans depends on the `varType` of `obj1` and `obj2`.

import CodeBlock from '@theme/CodeBlock';

import CodeSnippet from '!!raw-loader!./_Division_test_5.F90';

<CodeBlock language="fortran">{CodeSnippet}</CodeBlock>
