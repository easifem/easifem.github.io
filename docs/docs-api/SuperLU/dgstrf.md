# dgstrf

`DGSTRF` computes an LU factorization of a general sparse m-by-n matrix A using partial pivoting with row interchanges.

The factorization has the form

$$
P_{r} \cdot A = L \cdot  U,
$$

- Pr is a row-permutation matrix
- L is lower triangular with unit diagonal elements (lower trapezoidal if `A->nrow > A->ncol`)
- U is upper triangular (upper trapezoidal if `A->nrow < A->ncol`).

 See supermatrix.h for the definition of 'SuperMatrix' structure.

## Interface

```fortran
! void
! dgstrf (superlu_options_t *options, SuperMatrix *A,
!         int relax, int panel_size, int *etree, void *work, int lwork,
!         int *perm_c, int *perm_r, SuperMatrix *L, SuperMatrix *U,
!             GlobalLU_t *Glu, /* persistent to facilitate multiple factorizations */
!         SuperLUStat_t *stat, int *info)
INTERFACE
  SUBROUTINE dgstrf(options, A, relax, panel_size, etree, &
    & work, lwork, perm_c, perm_r, &
    & L, U, &
    & Glu, stat, info) &
    & BIND(C, name="dgstrf")
    IMPORT :: superlu_options_t, SuperLUStat_t, C_INT, C_PTR, &
      & SuperMatrix, GlobalLU_t, C_CHAR, C_DOUBLE
    !
    TYPE(superlu_options_t), INTENT(IN) :: options
    TYPE(SuperMatrix), INTENT(INOUT) :: A
    INTEGER(C_INT), VALUE, INTENT(IN) :: relax
    INTEGER(C_INT), VALUE, INTENT(IN) :: panel_size
    INTEGER(C_INT), INTENT(INOUT) :: etree(*)
    TYPE(C_PTR), INTENT(inout) :: work
    INTEGER(C_INT), VALUE, INTENT(IN) :: lwork
    INTEGER(C_INT), INTENT(INOUT) :: perm_c(*)
    INTEGER(C_INT), INTENT(INOUT) :: perm_r(*)
    TYPE(SuperMatrix), INTENT(INOUT) :: L
    TYPE(SuperMatrix), INTENT(INOUT) :: U
    TYPE(GlobalLU_t), INTENT(inout) :: Glu
    TYPE(SuperLUStat_t), INTENT(INOUT) :: stat
    INTEGER(C_INT), INTENT(INOUT) :: info
  END SUBROUTINE dgstrf
END INTERFACE
PUBLIC :: dgstrf
```

## options

```fortran
 (input) superlu_options_t*
```

The structure defines the input parameters to control how the LU decomposition will be performed.

## A

```fortran
(input) SuperMatrix*
```

Original matrix A, permuted by columns, of dimension `(A->nrow, A->ncol)`. The type of `A` can be:

- Stype = SLU_NCP
- Dtype = SLU_D
- Mtype = SLU_GE.

## relax

```fortran
(input) int
```

To control degree of relaxing supernodes. If the number of nodes (columns) in a subtree of the elimination tree is less than relax, this subtree is considered as one supernode, regardless of the row structures of those columns.

## `panel_size`

```fortran
panel_size (input) int
```

A panel consists of at most panel_size consecutive columns.

## etree

```fortran
(input) int*, dimension (A->ncol)
```

Elimination tree of $A^{T} \cdot A$.

:::note
etree is a vector of parent pointers for a forest whose vertices are the integers 0 to `A->ncol-1`, `etree[root]==A->ncol`. On input, the columns of A should be permuted so that the etree is in a certain postorder.
:::

## work

```fortran
(input/output) void*, size (lwork) (in bytes)
```

User-supplied work space and space for the output data structures. Not referenced if lwork = 0;

## lwork

```fortran
lwork (input) int
```

Specifies the size of work array in bytes.

- 0, allocate space internally by system malloc;
- Greater than 0: use user-supplied work array of length lwork in bytes, returns error if space runs out.
- -1: the routine guesses the amount of space needed without performing the factorization, and returns it in *info; no other side effects.

## `perm_c`

```fortran
(input) int*, dimension (A->ncol)
```

Column permutation vector, which defines the permutation matrix Pc; `perm_c[i] = j` means column i of A is in position j in $A \cdot P_{c}$.

When searching for diagonal, `perm_c[*]` is applied to the row subscripts of A, so that diagonal threshold pivoting can find the diagonal of A, rather than that of `A*Pc`.

## `perm_r`

```fortran
(input/output) int*, dimension (A->nrow)
```

Row permutation vector which defines the permutation matrix Pr, `perm_r[i] = j` means row i of A is in position j in `Pr*A`.

If `options->Fact == SamePattern_SameRowPerm`, the pivoting routine will try to use the input `perm_r`, unless a certain threshold criterion is violated. In that case, perm_r is overwritten by a new permutation determined by partial pivoting or diagonal threshold pivoting.

Otherwise, perm_r is output argument;

## L

```fortran
(output) SuperMatrix*
```

The factor L from the factorization `Pr*A=L*U`; use compressed row
subscripts storage for supernodes, i.e., L has type:

- `Stype = SLU_SC`
- `Dtype = SLU_D`
- `Mtype = SLU_TRLU`

## U

```fortran
(output) SuperMatrix*
```

The factor U from the factorization `Pr*A*Pc=L*U`. Use column-wise
storage scheme, i.e., U has types:

- `Stype = SLU_NC`,
- `Dtype = SLU_D`,
- `Mtype = SLU_TRU`.

## Glu

```fortran
Glu (input/output) GlobalLU_t *
```

If `options->Fact == SamePattern_SameRowPerm`, it is an input;

The matrix A will be factorized assuming that a
factorization of a matrix with the same sparsity pattern
and similar numerical values was performed prior to this one.
Therefore, this factorization will reuse both row and column
scaling factors R and C, both row and column permutation
vectors `perm_r` and `perm_c`, and the L and U data structures
set up from the previous factorization.

Otherwise, it is an output.

## stat

```fortran
(output) SuperLUStat_t*
```

Record the statistics on runtime and floating-point operation count.
See slu_util.h for the definition of 'SuperLUStat_t'.

## info

```fortran
(output) int*
```

- `= 0:` successful exit
- `< 0:` if info = -i, the i-th argument had an illegal value
- `> 0:` if info = i, and `i` is

```txt
   <= A->ncol: U(i,i) is exactly zero. The factorization has
      been completed, but the factor U is exactly singular,
      and division by zero will occur if it is used to solve a
      system of equations.
   > A->ncol: number of bytes allocated when memory allocation
      failure occurred, plus A->ncol. If lwork = -1, it is
      the estimated amount of space needed, plus A->ncol.
```

```fortran
! *
! * Local Working Arrays:
! * ======================
! *   m = number of rows in the matrix
! *   n = number of columns in the matrix
! *
! *   xprune[0:n-1]: xprune[*] points to locations in subscript
! *        vector lsub[*]. For column i, xprune[i] denotes the point where
! *        structural pruning begins. I.e. only xlsub[i],..,xprune[i]-1 need
! *        to be traversed for symbolic factorization.
! *
! *   marker[0:3*m-1]: marker[i] = j means that node i has been
! *        reached when working on column j.
! *        Storage: relative to original row subscripts
! *        NOTE: There are 3 of them: marker/marker1 are used for panel dfs,
! *              see dpanel_dfs.c; marker2 is used for inner-factorization,
! *            see dcolumn_dfs.c.
! *
! *   parent[0:m-1]: parent vector used during dfs
! *      Storage: relative to new row subscripts
! *
! *   xplore[0:m-1]: xplore[i] gives the location of the next (dfs)
! *        unexplored neighbor of i in lsub[*]
! *
! *   segrep[0:nseg-1]: contains the list of supernodal representatives
! *        in topological order of the dfs. A supernode representative is the
! *        last column of a supernode.
! *      The maximum size of segrep[] is n.
! *
! *   repfnz[0:W*m-1]: for a nonzero segment U[*,j] that ends at a
! *        supernodal representative r, repfnz[r] is the location of the first
! *        nonzero in this segment.  It is also used during the dfs: repfnz[r]>0
! *        indicates the supernode r has been explored.
! *        NOTE: There are W of them, each used for one column of a panel.
! *
! *   panel_lsub[0:W*m-1]: temporary for the nonzeros row indices below
! *      the panel diagonal. These are filled in during dpanel_dfs(), and are
! *      used later in the inner LU factorization within the panel.
! *        panel_lsub[]/dense[] pair forms the SPA data structure.
! *        NOTE: There are W of them.
! *
! *   dense[0:W*m-1]: sparse accumulating (SPA) vector for intermediate values;
! *                       NOTE: there are W of them.
! *
! *   tempv[0:*]: real temporary used for dense numeric kernels;
! *        The size of this array is defined by NUM_TEMPV() in slu_ddefs.h.
! void
! dgstrf (superlu_options_t *options, SuperMatrix *A,
!         int relax, int panel_size, int *etree, void *work, int lwork,
!         int *perm_c, int *perm_r, SuperMatrix *L, SuperMatrix *U,
!             GlobalLU_t *Glu, /* persistent to facilitate multiple factorizations */
!         SuperLUStat_t *stat, int *info)
```
