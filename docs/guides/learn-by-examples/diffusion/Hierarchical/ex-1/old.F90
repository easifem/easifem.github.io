! This program is a part of EASIFEM library
! Copyright (C) 2020-2021  Vikas Sharma, Ph.D
!
! This program is free software: you can redistribute it and/or modify
! it under the terms of the GNU General Public License as published by
! the Free Software Foundation, either version 3 of the License, or
! (at your option) any later version.
!
! This program is distributed in the hope that it will be useful,
! but WITHOUT ANY WARRANTY; without even the implied warranty of
! MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
! GNU General Public License for more details.
!
! You should have received a copy of the GNU General Public License
! along with this program.  If not, see <https: //www.gnu.org/licenses/>

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

MODULE myfunctions
USE easifemBase
IMPLICIT NONE
PRIVATE
PUBLIC :: force_function, BottomBC, TopBC, LeftBC, RightBC

CONTAINS

FUNCTION force_function(x) RESULT(ans)
  REAL(DFP), INTENT(IN) :: x(:)
  REAL(DFP) :: ans
  ans = 4.0_DFP
END FUNCTION force_function

PURE FUNCTION BottomBC(x) RESULT(ans)
  REAL(DFP), INTENT(IN) :: x(:)
  REAL(DFP) :: ans
  ans = x(1)**2
END FUNCTION BottomBC

PURE FUNCTION TopBC(x) RESULT(ans)
  REAL(DFP), INTENT(IN) :: x(:)
  REAL(DFP) :: ans
  ans = x(1)**2 + 2 * x(1)
END FUNCTION TopBC

PURE FUNCTION RightBC(x) RESULT(ans)
  REAL(DFP), INTENT(IN) :: x(:)
  REAL(DFP) :: ans
  ans = x(2)**2 + 2 * x(2)
END FUNCTION RightBC

PURE FUNCTION LeftBC(x) RESULT(ans)
  REAL(DFP), INTENT(IN) :: x(:)
  REAL(DFP) :: ans
  ans = x(2)**2
END FUNCTION LeftBC

END MODULE myfunctions

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

PROGRAM main
USE easifemBase
USE easifemClasses
USE myfunctions

TYPE(HDF5File_) :: meshfile, outfile
!! mesh in hdf5 file format
TYPE(VTKFile_) :: vtk
!! VRK File
CHARACTER(*), PARAMETER :: meshFileName = "./t1.h5"
!! mesh file name
CHARACTER(*), PARAMETER :: outfileName = "./diffusion_result.h5"
!! output file name

CHARACTER(*), PARAMETER :: engineName = "NATIVE_SERIAL"
!! solver engine Native serial

INTEGER(I4B) :: iel, maxElem, minElem, tNodes, tElements, nsd
INTEGER(I4B) :: imesh, tmesh
  !! some integers

INTEGER(I4B), ALLOCATABLE :: nptrs(:), orderSpace(:), dbcptrs(:)
  !! integer vector
  !! dbcNptrs is for node numbers of dirichlet boundary condition

REAL(DFP), ALLOCATABLE :: xij(:, :)
  !! element nodal corrdinate
  !! x(1,:) x coord of all nodes in elem
  !! x(2, :) y coord of all nodes in elem
  !! xij(:,:) is global nodal number
REAL(DFP), POINTER :: nodeCoord(:, :)
  !! nodal coordinate of domain in xiJ format
REAL(DFP), ALLOCATABLE :: ke(:, :)
  !! This is element matrix
REAL(DFP), ALLOCATABLE :: fe(:), elemForce(:)
  !! This is element vector
TYPE(Domain_) :: dom
  !! domain object
TYPE(Mesh_), POINTER :: cellmesh
  !! pointer (address) of mesh
TYPE(MatrixField_) :: tanmat
TYPE(ParameterList_) :: param

TYPE(ScalarField_) :: rhs, sol, rhs0
!! rhs0 is helper for rhs
TYPE(FEVariable_) :: fevar
!! FEVariable_ is for keeping element force vector
TYPE(MeshSelection_) :: region
!! MeshSelection is used for selecting parts of the mesh and domain
TYPE(DirichletBC_) :: dbcBottom, dbcTop, dbcRight, dbcLeft
!! MeshSelection is used for selecting parts of the mesh and domain
PROCEDURE(iface_SpaceFunction), POINTER :: func_ptr => NULL()

TYPE(LinSolver_) :: linsol
INTEGER(I4B), PARAMETER :: LinSolver_name = LIS_CG
INTEGER(I4B), PARAMETER :: KrylovSubspaceSize = 50
INTEGER(I4B), PARAMETER :: maxIter_LinSolver = -1
REAL(DFP), PARAMETER :: rtol_LinSolver = 1.0D-6
REAL(DFP), PARAMETER :: atol_LinSolver = 1.0D-10
INTEGER(I4B), PARAMETER :: preconditionOption = NO_PRECONDITION
INTEGER(I4B), PARAMETER :: convergenceIn_LinSolver = convergenceInRes
INTEGER(I4B), PARAMETER :: convergenceType_LinSolver = relativeConvergence
LOGICAL(LGT), PARAMETER :: relativeToRHS = .FALSE.

CALL FPL_Init; CALL param%Initiate()
  !! This step is necessary  to initiate the ParameterList_ environment

CALL meshfile%Initiate(filename=meshFileName, mode="READ")
  !! Initiate meshfile
CALL meshfile%OPEN()
  !! open meshfile

CALL dom%Initiate(meshfile, "")
  !! initiate domain by reading info from domain/mesh file
  !! domain is store at the root

nsd = dom%GetNSD()

nodeCoord => dom%GetNodeCoordPointer()

CALL dom%InitiateNodeToNodes()

CALL Reallocate(orderSpace, dom%GetTotalMesh(dim=nsd))
orderSpace = 2_I4B
  !! just keep it 2 (for each surface mesh)
  !! dom%GetTotalMesh(dim=2) gives total number of surface
  !! mesh in domain

CALL dom%InitiateElemSD( &
  & dim=nsd, &
  & orderSpace=orderSpace, &
  & quadTypeForSpace="GaussLegendre", &
  & continuityTypeForSpace="H1", &
  & interpolTypeForSpace="LagrangeInterpolation")
  !!  At this point we only make local
  !! shape function information in reference (standard)
  !! element.

CALL SetMatrixFieldParam( &
  & param, &
  & name="K", &
  & matrixProp="UNSYM", &
  & engine="NATIVE_SERIAL", &
  & spaceCompo=1_I4B, &
  & timeCompo=1_I4B)
CALL tanmat%Initiate(param=param, dom=dom)
  !! At this point matrix field knows about the mesh (domain)

CALL tanmat%Set(VALUE=0.0_DFP)

CALL tanmat%SPY(filename="diffusion_tanmat", ext=".png")

CALL SetScalarFieldParam( &
  & param=param, &
  & name="rhs", &
  & engine="NATIVE_SERIAL")
CALL rhs%Initiate(param=param, dom=dom)
  !! At this point matrix field knows about the mesh (domain)

CALL SetScalarFieldParam( &
  & param=param, &
  & name="sol", &
  & engine="NATIVE_SERIAL")
CALL sol%Initiate(param=param, dom=dom)
  !! At this point matrix field knows about the mesh (domain)

CALL rhs%Set(0.0_DFP)
CALL sol%Set(0.0_DFP)

!----------------------------------------------------------------------------
!                                                 Bottom boundary condition
!----------------------------------------------------------------------------

! Selecting mesh region for applying boundary condition.
CALL region%Initiate(isSelectionByMeshID=.TRUE.)
CALL region%add(dom=dom, dim=nsd - 1, meshID=[1])
CALL region%set()

! DirichletBC_ condition
CALL SetDirichletBCParam( &
  & param=param, &
  & name="BottomBC", &
  & idof=1, &
  & nodalValueType=Space, &
  & useFunction=.TRUE.)

CALL dbcBottom%Initiate( &
  & param=param, &
  & boundary=region, &
  & dom=dom)
!
! Now we set the value by calling set method.
!
func_ptr => BottomBC
CALL dbcBottom%Set(SpaceFunction=func_ptr)
func_ptr => NULL()

CALL sol%applyDirichletBC(dbc=dbcBottom)

!----------------------------------------------------------------------------
!                                                 Right boundary condition
!----------------------------------------------------------------------------
!
! Selecting mesh region for applying boundary condition.
!
CALL region%DEALLOCATE()
CALL region%Initiate(isSelectionByMeshID=.TRUE.)
CALL region%add(dom=dom, dim=nsd - 1, meshID=[2])
CALL region%set()
!
! DirichletBC_ condition
!
CALL SetDirichletBCParam( &
  & param=param, &
  & name="RightBC", &
  & idof=1, &
  & nodalValueType=Space, &
  & useFunction=.TRUE.)

CALL dbcRight%Initiate( &
  & param=param, &
  & boundary=region, &
  & dom=dom)
!
! Now we set the value by calling set method.
!
func_ptr => RightBC
CALL dbcRight%Set(SpaceFunction=func_ptr)
func_ptr => NULL()

CALL sol%applyDirichletBC(dbc=dbcRight)

!----------------------------------------------------------------------------
!                                                    Top Boundary condition
!----------------------------------------------------------------------------
!
! Selecting mesh region for applying boundary condition.
!
CALL region%DEALLOCATE()
CALL region%Initiate(isSelectionByMeshID=.TRUE.)
CALL region%add(dom=dom, dim=nsd - 1, meshID=[3])
CALL region%set()
!
! DirichletBC_ condition
!
CALL SetDirichletBCParam( &
  & param=param, &
  & name="TopBC", &
  & idof=1, &
  & nodalValueType=Space, &
  & useFunction=.TRUE.)

CALL dbcTop%Initiate( &
  & param=param, &
  & boundary=region, &
  & dom=dom)
!
! Now we set the value by calling set method.
!
func_ptr => TopBC
CALL dbcTop%Set(SpaceFunction=func_ptr)
func_ptr => NULL()

CALL sol%applyDirichletBC(dbc=dbcTop)

!----------------------------------------------------------------------------
!                                                  Left boundary condition
!----------------------------------------------------------------------------
!
! Selecting mesh region for applying boundary condition.
!
CALL region%DEALLOCATE()
CALL region%Initiate(isSelectionByMeshID=.TRUE.)
CALL region%add(dom=dom, dim=nsd - 1, meshID=[4])
CALL region%set()
!
! DirichletBC_ condition
!
CALL SetDirichletBCParam( &
  & param=param, &
  & name="LeftBC", &
  & idof=1, &
  & nodalValueType=Space, &
  & useFunction=.TRUE.)

CALL dbcLeft%Initiate( &
  & param=param, &
  & boundary=region, &
  & dom=dom)
!
! Now we set the value by calling set method.
!
func_ptr => LeftBC
CALL dbcLeft%Set(SpaceFunction=func_ptr)
func_ptr => NULL()

CALL sol%applyDirichletBC(dbc=dbcLeft)

!
!--------------------------------------------------------

tMesh = dom%GetTotalMesh(dim=nsd)

DO imesh = 1, tMesh
  cellmesh => dom%GetMeshPointer(dim=nsd, entityNum=imesh)
  IF (cellmesh%isEmpty()) CYCLE

  DO iel = cellmesh%minElemNum, cellmesh%maxElemNum
    IF (.NOT. cellmesh%isElementPresent(iel)) CYCLE

    nptrs = cellmesh%getConnectivity(iel)
      !! nptrs are in global node

      !! Get xij from nodeCoord
      !! Caution: nodeCoord has local node numbering
      !! we need to convert global nodes in nptrs to local nodes
      !! then use those local nodes to get xij from nodecoord.
    xij = nodeCoord(1:nsd, dom%GetLocalNodeNumber(nptrs))
      !! I am sorry for such conversion
      !! This will be rectified in next release of easifemClasses

    CALL Set( &
      & obj=cellmesh%spaceElemSD, &
      & val=xij, &
      & N=cellmesh%spaceElemSD%N, &
      & dNdXi=cellmesh%spaceElemSD%dNdXi &
      & )
    !! meshptr%spaceElemSD%N is shape function of solution in mesh
    !! meshptr%spaceElemSD%dNdXi is shape function's local gradient of solution in mesh
    !!
    !! In the above call N and dNdXi are for geometry's interpolation
    !! Because we are using isoparametric FEM, sol and geometry shape function
    !! are same.

    ! CALL Display(meshptr%spaceElemSD, "space element shape data: ")
    ke = DiffusionMatrix(&
      & test=cellmesh%spaceElemSD, &
      & trial=cellmesh%spaceElemSD)

    !! Time to assemble the tanmat
    CALL tanmat%set( &
      & VALUE=ke, &
      & globalNode=nptrs, &
      & addContribution=.TRUE., &
      & storageFMT=DOF_FMT)

    !! Task 2

    !! First we will make nodal values of force
    CALL Reallocate(elemForce, SIZE(nptrs))
    DO ii = 1, SIZE(elemForce)
      elemForce(ii) = force_function(x=xij(:, ii))
    END DO

    fevar = NodalVariable( &
      & val=elemForce, &
      & rank=TypeFEVariableScalar, &
      & varType=TypeFEVariableSpace)

    fe = ForceVector( &
      & test=cellmesh%spaceElemSD, &
      & c=fevar,  &
      & crank=TypeFEVariableScalar)

    CALL Display(fevar, "fevar="//CHAR_LF2)
    CALL Display(fe, "fe="//CHAR_LF2)
    CALL rhs%Set( &
      & VALUE=fe, &
      & globalNode=nptrs, &
      & scale=1.0_DFP, &
      & addContribution=.TRUE.)

  END DO
END DO

!----------------------------------------------------------------------------
!                                     Boundary condition modification in RHS
!----------------------------------------------------------------------------

!! RHS = RHS - MATVEC(tanmat, sol)
!! First lets see how to perform matvec
! CALL obj%Matvec(x, y, isTranspose, &
!     & addContribution, scale)

! CALL outfile%Initiate(filename=outfileName, mode="NEW")
!   !! Initiate outfile
! CALL outfile%OPEN()
!   !! open outfile

CALL tanmat%Matvec( &
  & x=sol, &
  & y=rhs, &
  & addContribution=.TRUE., &
  & scale=-1.0_DFP)

! We need to fix the values in rhs at dbcNptrs
! such that  lhs(dbcNptrs) = rhs(dbcNptrs)

! CALL rhs%Export(hdf5=outfile, group="/rhs-before")
CALL rhs%applyDirichletBC(dbc=dbcBottom)
CALL rhs%applyDirichletBC(dbc=dbcRight)
CALL rhs%applyDirichletBC(dbc=dbcTop)
CALL rhs%applyDirichletBC(dbc=dbcLeft)
! CALL rhs%Export(hdf5=outfile, group="/rhs-after")

!----------------------------------------------------------------------------
!                                 Boundary condition modification in tanmat
!----------------------------------------------------------------------------

! Get node numbers of the boundaries  from domain
dbcptrs = dom%GetNptrs(entityNum=[1, 2, 3, 4], dim=nsd - 1_I4B)
! CALL outfile%Write("/dbcNptrs", dbcNptrs)
! CALL convert(from=tanmat%mat, to=ke)
! CALL outfile%Write(vals=ke, dsetname="/tanmat/before")
CALL tanmat%ApplyDBC(dbcptrs)
! CALL convert(from=tanmat%mat, to=ke)
! CALL outfile%Write(vals=ke, dsetname="/tanmat/after")

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

CALL SetLinSolverParam( &
  & param=param, &
  & solverName=LinSolver_name,&
  & preconditionOption=preconditionOption)

CALL linsol%Initiate(param)
CALL linsol%set(tanmat)
CALL linsol%solve(sol=sol, rhs=rhs)

CALL vtk%InitiateVTKFile( &
  & filename="./results.vtu", &
  & mode="NEW", &
  & DataFormat=VTK_BINARY_APPENDED, &
  & DataStructureType=VTK_UnStructuredGrid)

! CALL sol%WriteData(avtk, "/sol")

DO imesh = 1, dom%getTotalMesh(dom%getNSD())
  cellmesh => dom%getMeshPointer( &
    & dim=dom%getNSD(), &
    & entityNum=imesh)
  CALL dom%getNodeCoord(nodeCoord=xij, &
    & dim=dom%getNSD(), &
    & entityNum=imesh)
  CALL cellmesh%ExportToVTK( &
    & vtkfile=vtk, &
    & nodecoord=xij, &
    & OpenTag=.TRUE., &
    & Content=.TRUE., &
    & CloseTag=.FALSE.)
  CALL vtk%WriteDataArray( &
    & location=String('node'), &
    & action=String('open'))
  nptrs = cellmesh%getNptrs()
  CALL sol%Get( &
    & globalNode=nptrs, &
    & VALUE=fe)
  CALL vtk%WriteDataArray( &
    & name=String("sol"), &
    & x=fe, &
    & numberOfComponents=1)
  CALL vtk%WriteDataArray( &
    & location=String('node'), &
    & action=String('close'))
  CALL vtk%WritePiece()
END DO

CALL vtk%DEALLOCATE()

!call amshfile%Display(msg="amshfile: " )
CALL meshfile%DEALLOCATE()
! CALL outfile%DEALLOCATE()
CALL FPL_Finalize; CALL param%DEALLOCATE()
END PROGRAM main
