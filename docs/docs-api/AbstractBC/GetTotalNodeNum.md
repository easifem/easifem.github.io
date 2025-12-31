# GetTotalNodeNum

Get the total node numbers stored in the boundary condition.

## Interface

```fortran
INTERFACE
  MODULE FUNCTION GetTotalNodeNum(obj, fedof) RESULT(ans)
    CLASS(AbstractBC_), INTENT(INOUT) :: obj
    !! Abstract boundary condition
    CLASS(FEDOF_), INTENT(IN) :: fedof
    !! FEDOF
    INTEGER(I4B) :: ans
    !! ans
  END FUNCTION GetTotalNodeNum
END INTERFACE
```
