---
sidebar_position: 3
sidebar_title: "Kdtree2Node_"
---

# Kdtree2Node

It denotes a node of `Kdtree2_` k-d tree.

```fortran
TYPE :: Kdtree2Node_
  PRIVATE
  INTEGER :: cut_dim
  ! the dimension to cut
  REAL(kdkind) :: cut_val
  ! where to cut the dimension
  REAL(kdkind) :: cut_val_left, cut_val_right
  ! improved cutoffs knowing the spread in child boxes.
  INTEGER :: l, u
  TYPE(Kdtree2Node_), POINTER :: left, right
  TYPE(interval), POINTER :: box(:) => NULL()
  ! child pointers
  ! Points included in this node are indexes[k] with k \in [l,u]
END TYPE Kdtree2Node_
```
