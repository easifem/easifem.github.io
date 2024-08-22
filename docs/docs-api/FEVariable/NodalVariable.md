# NodalVariable

This method creates a nodal variable. The common interface is as follows.

```fortran
obj=NodalVariable(val,rank,vartype)
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

You can learn more about this method from [[FEVariable_test_1]].
