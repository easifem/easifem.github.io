---
sidebar_position: 4
sidebar_title: "Kdtree2Result_"
---

# Kdtree2Result

It contains the pair of value and index.

```fortran
TYPE Kdtree2Result_
  REAL(kdkind) :: dis !=0.0
  INTEGER :: idx !=-1   Initializers cause some bugs in compilers.
END TYPE Kdtree2Result_
```
