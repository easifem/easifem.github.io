# KernelBC

This class deals with the boundary conditions in the kernel.

## Structure

```fortran
TYPE KernelBC_
  INTEGER(I4B) :: tdbc = 0
  !! total Dirichlet boundary conditions

  INTEGER(I4B) :: tnbc = 0
  !! total Neumann boundary conditions

  INTEGER(I4B) :: tnbcPointSource = 0
  !! total Neumann boundary conditions

  INTEGER(I4B) :: twdbc = 0
  !! total weak Dirichlet boundary conditions

  INTEGER(I4B) :: tnitscheLocalID = 0
  !! total nitsche local id

  LOGICAL(LGT) :: isNitsche = .FALSE.
  !! If true, then it means weak dirichlet boundary condition is used.
  !! This variable is set in Initiate method
  !! This variable is set to true if the tWeakDirichletBC
  !! is greater than zero, otherwise it is set to false

  LOGICAL(LGT) :: isSymNitsche = .TRUE.
  !! Sym or unsymmetric Nitsche formulation

  REAL(DFP) :: nitscheAlpha = 100.0
  !! coefficient for nitsche formulation

  REAL(DFP) :: nitscheType = TypeKernelNitscheOpt%sym
  !! -1.0 for symmetric formulation
  !! 1.0 for skew symmetric formulation

  TYPE(DirichletBCPointer_), ALLOCATABLE :: dbc(:)
  !! Dirichlet boundary condition for displacement

  TYPE(NeumannBCPointer_), ALLOCATABLE :: nbc(:)
  !! Neumann boundary condition for displacement

  TYPE(NeumannBCPointer_), ALLOCATABLE :: nbcPointSource(:)
  !! Neumann boundary condition for displacement

  TYPE(NitscheBCPointer_), ALLOCATABLE :: wdbc(:)
  !! Weak dirichlet boundary condition for displacement

  INTEGER(I4B), ALLOCATABLE :: nitscheLocalID(:)
  !! nitscheLocalID is a mapping from global mesh-id (of dimension
  !! nsd-1), to local id.
  !! If nitscheLocalID(meshID) = 0, then it means
  !! meshID of dimension nsd-1 is not a nitsche boundary.
  !! This mapping is used to access entries in nitscheFacetToCell.

  TYPE(DomainConnectivityPointer_), ALLOCATABLE :: nitscheFacetToCell(:)
  !! Nitsche facet to cell data connectivity information
  !! We form FacetToCellData for each Nitsche boundary
  !! The size of nitscheFacetToCell is same as the
  !! total number of boundaries (mesh-ids) in wdbcForDisplacement
  !! This data is initiated in Set Method

END TYPE KernelBC_
```
