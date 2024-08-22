# Kdtree2_Destroy

Destroy the k-d tree.

:::note
Deallocates all memory for the tree, except input data matrix
:::

```fortran
SUBROUTINE Kdtree2_Destroy(tp)
  TYPE(Kdtree2_), POINTER :: tp
END SUBROUTINE Kdtree2_Destroy
```
