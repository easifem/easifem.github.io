# Set

Set the value of user function.

## Interface

```fortran
SUBROUTINE Set(obj, scalarValue, vectorValue, matrixValue, &
                 luaScript, luaFunctionName, scalarFunction, vectorFunction, &
                   matrixFunction)

  USE BaseType, ONLY: varopt => TypeFEVariableOpt
  USE GlobalData, ONLY: CHAR_LF
  USE Display_Method, ONLY: ToString
  USE ReallocateUtility, ONLY: Reallocate

  CLASS(UserFunction_), INTENT(INOUT) :: obj
  REAL(DFP), OPTIONAL, INTENT(IN) :: scalarValue
  REAL(DFP), OPTIONAL, INTENT(IN) :: vectorValue(:)
  REAL(DFP), OPTIONAL, INTENT(IN) :: matrixValue(:, :)
  CHARACTER(*), OPTIONAL, INTENT(IN) :: luaScript
  CHARACTER(*), OPTIONAL, INTENT(IN) :: luaFunctionName
  PROCEDURE(iface_ScalarFunction), POINTER, OPTIONAL, INTENT(IN) :: &
    scalarFunction
  PROCEDURE(iface_VectorFunction), POINTER, OPTIONAL, INTENT(IN) :: &
    vectorFunction
  PROCEDURE(iface_MatrixFunction), POINTER, OPTIONAL, INTENT(IN) :: &
    matrixFunction
END SUBROUTINE Set
```
