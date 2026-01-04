This example demonstrates the Subtraction of scalar and vector FEVariables.

- `obj1` is scalar FEVariable
- `obj2` is vector FEVariable
- The variables `obj1`, `obj2` can be `constant`, `space`, `time`, or `spaceTime`.
- The `varType` of ans depends on the `varType` of `obj1` and `obj2`.

import CodeBlock from '@theme/CodeBlock';

import CodeSnippet from '!!raw-loader!./_Subtraction_test_4.F90';

<CodeBlock language="fortran">{CodeSnippet}</CodeBlock>
