# QuadratureVariable

This method creates a quadrature variable. The common interface is as follows.

```fortran
obj=QuadratureVariable(val,rank,vartype)
```

💎 `rank` can be

- `TypeFEVariableScalar`
- `TypeFEVariableVector`
- `TypeFEVariableMatrix`

🚀 `vartype` can be

- `TypeFEVariableConstant`
- `TypeFEVariableSpace`
- `TypeFEVariableTime`
- `TypeFEVariableSpaceTime`

You can learn more about this method from

- [[FEVariable_test_1]].
- [[FEVariable_test_2]].
- [[FEVariable_test_3]].
