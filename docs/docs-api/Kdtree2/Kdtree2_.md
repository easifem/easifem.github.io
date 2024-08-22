---
sidebar_position: 2
---

# Structure

The structure of `Kdtree2_` is given below.

```fortran
TYPE :: Kdtree2_
  ! Global information about the tree, one per tree
  INTEGER :: dimen = 0, n = 0
  ! dimensionality and total # of points
  REAL(kdkind), POINTER :: the_data(:, :) => NULL()
  ! pointer to the actual data array
  !
  !  IMPORTANT NOTE:  IT IS DIMENSIONED   the_data(1:d,1:N)
  !  which may be opposite of what may be conventional.
  !  This is, because in Fortran, the memory layout is such that
  !  the first dimension is in sequential order.  Hence, with
  !  (1:d,1:N), all components of the vector will be in consecutive
  !  memory locations.  The search time is dominated by the
  !  evaluation of distances in the terminal nodes.  Putting all
  !  vector components in consecutive memory location improves
  !  memory cache locality, and hence search speed, and may enable
  !  vectorization on some processors and compilers.

  INTEGER, POINTER :: ind(:) => NULL()
  ! permuted index into the data, so that indexes[l..u] of some
  ! bucket represent the indexes of the actual points in that
  ! bucket.
  LOGICAL :: sort = .FALSE.
  ! do we always sort output results?
  LOGICAL :: rearrange = .FALSE.
  REAL(kdkind), POINTER :: rearranged_data(:, :) => NULL()
  ! if (rearrange .eqv. .true.) then rearranged_data has been
  ! created so that rearranged_data(:,i) = the_data(:,ind(i)),
  ! permitting search to use more cache-friendly rearranged_data, at
  ! some initial computation and storage cost.
  TYPE(Kdtree2Node_), POINTER :: root => NULL()
  ! root pointer of the tree
END TYPE Kdtree2_
```
