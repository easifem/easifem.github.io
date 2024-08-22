# Addition

<!-- markdownlint-disable MD041 MD013 MD033 MD012 -->

Addition operator `+` for `FEVariable`.

- Add two instance of `FEVariable`.
- A quadrature variable can be added to only a quadrature variable, unless one of the variable is constant.
- A nodal variable can be added to only a nodal variable, unless one of the variable is a constant.
- The rank of `obj1` and `obj2` should be the same, if none of the `obj1` and `obj2` are scalars.
- A Scalar `FEVariable` can be added to a Vector and Matrix `FEVariable`.

| Defined on    | obj1      | obj2      | result    |
| ------------- | --------- | --------- | --------- |
| NodalVariable | constant  | constant  | constant  |
|               | constant  | space     | space     |
|               | constant  | time      | time      |
|               | constant  | spacetime | spacetime |
|               | space     | constant  | space     |
|               | space     | space     | space     |
|               | time      | constant  | time      |
|               | time      | time      | time      |
|               | spacetime | constant  | spacetime |
|               | spacetime | spacetime | spacetime |

You can learn more about this method from the following pages

## Examples 1

This example shows the use of addition operator for scalar nodal variable.

- Constant + Constant
- Space + Constant
- Time + Constant
- SpaceTime + Constant

<details>
<summary>Click here to example</summary>
<div>

import EXAMPLE41 from "./examples/_Addition_test_1.md";

<EXAMPLE41 />

</div>
</details>

## Example 2

- [[FEVariable_test_11a]] Scalar, Nodal Variable
- [[FEVariable_test_11b]] Scalar, Nodal Variable
- [[FEVariable_test_11c]] Scalar, Quadrature Variable
- [[FEVariable_test_11d]] Scalar, Quadrature Variable

- [[FEVariable_test_12a]] Vector, Nodal Variable
- [[FEVariable_test_12b]] Vector, Nodal Variable
- [[FEVariable_test_12c]] Vector, Quadrature Variable
- [[FEVariable_test_12d]] Vector, Quadrature Variable

- [[FEVariable_test_13a]] Matrix, Nodal Variable
- [[FEVariable_test_13b]] Matrix, Nodal Variable
- [[FEVariable_test_13c]] Matrix, Quadrature Variable
- [[FEVariable_test_13d]] Matrix, Quadrature Variable

```cpp
```
