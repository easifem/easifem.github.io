! This program is a part of EASIFEM library
! Expandable And Scalable Infrastructure for Finite Element Methods
! htttps://www.easifem.com
! Vikas Sharma, Ph.D., vickysharma0812@gmail.com
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
!

!> author: Vikas Sharma, Ph. D.
! date:  2024-07-29
! summary:  This program solves a diffusion problem using easifem
!
!
! linear Lagrange basis functions are used

PROGRAM main

!----------------------------------------------------------------------------
!                                                                        Use
!----------------------------------------------------------------------------

USE BaseType, ONLY: FEVariable_, iface_SpaceFunction, TypeQuadratureOpt, &
                    QuadraturePoint_, ElemShapeData_
! USE myfunctions
USE GlobalData
USE Display_Method
USE HDF5File_Class
USE VTKFile_Class
USE FEDomain_Class
USE AbstractMesh_Class
USE MatrixField_Class
USE FPL
USE ScalarField_Class
USE AbstractLinSolver_Class
USE LinSolver_Class
USE ExceptionHandler_Class
USE FEDOF_Class
USE MeshSelection_Class
USE DirichletBC_Class
USE AbstractBC_Class
USE UserFunction_Class
USE ReallocateUtility
USE QuadraturePoint_Method
USE ElemshapeData_Method
USE DiffusionMatrix_Method
USE RealVector_Method
USE CSRMatrix_Method

!----------------------------------------------------------------------------
!                                                                 Variables
!----------------------------------------------------------------------------

TYPE(HDF5File_) :: meshfile, resultfile
TYPE(VTKFile_) :: vtk

CHARACTER(*), PARAMETER :: meshfilename = "./mesh/small_tri6_mesh.h5", &
                           resultfilename = "./results/result.h5", &
                           resultvtufilename = "./results/result.vtu", &
                           meshvtufilename = "./results/mesh.vtu", &
                           engineName = "NATIVE_SERIAL", &
                           baseInterpolation = "Lagrange"

INTEGER(I4B), PARAMETER :: LinSolver_name = LIS_CG, &
                           KrylovSubspaceSize = 50, &
                           maxIter_LinSolver = -1, &
                           preconditionOption = NO_PRECONDITION, &
                           convergenceIn_LinSolver = convergenceInRes, &
                           convergenceType_LinSolver = relativeConvergence, &
                           order = 1_I4B, &
                           ipType = Equidistance, &
                           expandfactor = 2, &
                           Bottom = 1, &
                           Right = 2, &
                           Top = 3, &
                           left = 4

REAL(DFP), PARAMETER :: rtol_LinSolver = 1.0D-6, atol_LinSolver = 1.0D-10, &
             BottomBC = 0.0D0, RightBC = 10.0D0, TopBC = 0.0D0, leftBC = 0.0D0

LOGICAL(LGT), PARAMETER :: relativeToRHS = .FALSE., debug = .TRUE., &
                           isexpand = .TRUE.

!----------------------------------------------------------------------------
!                                                                 Variables
!----------------------------------------------------------------------------

INTEGER(I4B) :: iel, telements, nsd, tsize, maxnne, nrow, ncol, maxcon, &
                tdbcptrs

INTEGER(I4B), ALLOCATABLE :: nptrs(:), orderspace(:), dbcptrs(:), cellcon(:)

REAL(DFP), ALLOCATABLE :: xij(:, :), nodecoord(:, :), ke(:, :), fe(:), &
                          elemforce(:)

TYPE(ParameterList_) :: param
TYPE(FEDomain_) :: dom
TYPE(MatrixField_) :: tanmat
TYPE(ScalarField_) :: rhs, sol, rhs0
TYPE(FEVariable_) :: fevar
TYPE(FEDOF_) :: fedof
TYPE(MeshSelection_) :: region
TYPE(LinSolver_) :: linsol
TYPE(DirichletBC_) :: dbcBottom, dbcTop, dbcRight, dbcLeft
TYPE(QuadraturePoint_) :: quad
TYPE(ElemShapeData_) :: elemsd

PROCEDURE(iface_SpaceFunction), POINTER :: func_ptr => NULL()
CLASS(UserFunction_), POINTER :: func => NULL()
CLASS(AbstractMesh_), POINTER :: cellmesh

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

IF (.NOT. debug) CALL e%setQuietMode(EXCEPTION_INFORMATION, .TRUE.)

CALL FPL_Init
CALL param%Initiate()

!----------------------------------------------------------------------------
!                                                               Read mesh
!----------------------------------------------------------------------------

! Read mesh
CALL meshfile%Initiate(filename=meshfilename, mode="READ")
CALL meshfile%OPEN()

IF (debug) CALL Display("main.F90: Read meshfile")

CALL dom%Initiate(meshfile, '')

IF (debug) CALL Display("main.F90: Initiate domain")

CALL meshfile%DEALLOCATE()

nsd = dom%GetNSD()
cellmesh => dom%GetMeshPointer(nsd)

maxnne = cellmesh%GetMaxNNE()
CALL Reallocate(xij, 3, maxnne)
CALL Reallocate(ke, maxnne, maxnne)

!----------------------------------------------------------------------------
!                                                           FEDOF and Fields
!----------------------------------------------------------------------------

! initiate fedof

! Initiate1(obj, order, mesh, baseContinuity, &
! baseInterpolation, ipType, basisType, alpha, beta, lambda)

CALL fedof%Initiate(baseContinuity="H1", &
                    baseInterpolation=baseInterpolation, &
                    order=order, mesh=cellmesh, ipType=ipType)
maxcon = fedof%GetMaxTotalConnectivity()
CALL Reallocate(cellcon, maxcon)

IF (debug) CALL Display("main.F90: Initiate fedof")

! Make matrix field

! SetMatrixFieldParam(param, name, matrixProp, engine, &
! spaceCompo, timeCompo, fieldType, comm, local_n, global_n)
CALL SetMatrixFieldParam(param=param, name="K", matrixProp="UNSYM", &
                         engine=engineName, spaceCompo=1_I4B, timeCompo=1_I4B)

CALL tanmat%Initiate(param, fedof=fedof)
IF (debug) CALL Display("main.F90: Initiate tanmat")
IF (debug) CALL Display(tanmat%SIZE(), 'size of tanmat:')
IF (debug) CALL Display(tanmat%SHAPE(), 'shape of tanmat:')

CALL tanmat%Set(VALUE=0.0_DFP)
CALL tanmat%SPY(filename="./results/tanmat", ext=".svg")

CALL SetScalarFieldParam(param=param, name="rhs", engine=engineName)
CALL rhs%Initiate(param=param, fedof=fedof)
IF (debug) CALL Display("main.F90: Initiate rhs")
CALL rhs%Set(0.0_DFP)

CALL SetScalarFieldParam(param=param, name="sol", engine=engineName)
CALL sol%Initiate(param=param, fedof=fedof)
IF (debug) CALL Display("main.F90: Initiate sol")
CALL sol%Set(0.0_DFP)

!----------------------------------------------------------------------------
!                                                 Bottom boundary condition
!----------------------------------------------------------------------------

IF (debug) CALL Display("main.F90: Bottom boundary condition")

! DirichletBC_ condition
CALL SetAbstractBCParam(param=param, prefix=dbcBottom%GetPrefix(), &
      name="BottomBC", idof=1, nodalValueType=Constant, isUserFunction=.TRUE.)

CALL SetMeshSelectionParam(param=param, prefix=region%GetPrefix(), &
                           isSelectionByMeshID=.TRUE.)

CALL SetUserFunctionParam(param=param, name="Bottom", returnType=Scalar, &
                          argType=Constant)

ALLOCATE (func)
CALL func%Initiate(param)
CALL func%Set(scalarValue=BottomBC)

! Selecting mesh region for applying boundary condition.
CALL region%Initiate(param)
CALL region%add(dom=dom, dim=nsd - 1, meshID=[Bottom])
CALL region%set()

CALL dbcBottom%Initiate(param=param, boundary=region, dom=dom)

! Now we set the value by calling set method.
CALL dbcBottom%Set(userFunction=func)
func => NULL()

!----------------------------------------------------------------------------
!                                                 Top boundary condition
!----------------------------------------------------------------------------

IF (debug) CALL Display("main.F90: Top boundary condition")

CALL SetAbstractBCParam(param=param, prefix=dbcTop%GetPrefix(), &
         name="TopBC", idof=1, nodalValueType=Constant, isUserFunction=.TRUE.)

CALL SetMeshSelectionParam(param=param, prefix=region%GetPrefix(), &
                           isSelectionByMeshID=.TRUE.)

CALL SetUserFunctionParam(param=param, name="Top", returnType=Scalar, &
                          argType=Constant)

ALLOCATE (func)
CALL func%Initiate(param)
CALL func%Set(scalarValue=TopBC)

! Selecting mesh region for applying boundary condition.
CALL region%Initiate(param)
CALL region%add(dom=dom, dim=nsd - 1, meshID=[Top])
CALL region%set()

CALL dbcTop%Initiate(param=param, boundary=region, dom=dom)

! Now we set the value by calling set method.
CALL dbcTop%Set(userFunction=func)
func => NULL()

!----------------------------------------------------------------------------
!                                                 Right boundary condition
!----------------------------------------------------------------------------

IF (debug) CALL Display("main.F90: Right boundary condition")

CALL SetAbstractBCParam(param=param, prefix=dbcRight%GetPrefix(), &
       name="RightBC", idof=1, nodalValueType=Constant, isUserFunction=.TRUE.)

CALL SetMeshSelectionParam(param=param, prefix=region%GetPrefix(), &
                           isSelectionByMeshID=.TRUE.)

CALL SetUserFunctionParam(param=param, name="Right", returnType=Scalar, &
                          argType=Constant)

ALLOCATE (func)
CALL func%Initiate(param)
CALL func%Set(scalarValue=RightBC)

! Selecting mesh region for applying boundary condition.
CALL region%Initiate(param)
CALL region%add(dom=dom, dim=nsd - 1, meshID=[Right])
CALL region%set()

CALL dbcRight%Initiate(param=param, boundary=region, dom=dom)

! Now we set the value by calling set method.
CALL dbcRight%Set(userFunction=func)
func => NULL()

!----------------------------------------------------------------------------
!                                                 Left boundary condition
!----------------------------------------------------------------------------

IF (debug) CALL Display("main.F90: Left boundary condition")

CALL SetAbstractBCParam(param=param, prefix=dbcLeft%GetPrefix(), &
        name="LeftBC", idof=1, nodalValueType=Constant, isUserFunction=.TRUE.)

CALL SetMeshSelectionParam(param=param, prefix=region%GetPrefix(), &
                           isSelectionByMeshID=.TRUE.)

CALL SetUserFunctionParam(param=param, name="Left", returnType=Scalar, &
                          argType=Constant)

ALLOCATE (func)
CALL func%Initiate(param)
CALL func%Set(scalarValue=LeftBC)

! Selecting mesh region for applying boundary condition.
CALL region%Initiate(param)
CALL region%add(dom=dom, dim=nsd - 1, meshID=[Left])
CALL region%set()

CALL dbcLeft%Initiate(param=param, boundary=region, dom=dom)

! Now we set the value by calling set method.
CALL dbcLeft%Set(userFunction=func)
func => NULL()

!----------------------------------------------------------------------------
!                                                       Total boundary nodes
!----------------------------------------------------------------------------

tsize = 0
! tsize = tsize + dbcBottom%GetTotalNodeNum(fedof=fedof)
tsize = tsize + dbcRight%GetTotalNodeNum(fedof=fedof)
! tsize = tsize + dbcTop%GetTotalNodeNum(fedof=fedof)
tsize = tsize + dbcLeft%GetTotalNodeNum(fedof=fedof)
CALL Reallocate(dbcptrs, tsize)
tsize = 0
tdbcptrs = 0

! CALL dbcBottom%Get(fedof=fedof, nodenum=dbcptrs(tdbcptrs + 1:), tsize=tsize)
! tdbcptrs = tdbcptrs + tsize

CALL dbcRight%Get(fedof=fedof, nodenum=dbcptrs(tdbcptrs + 1:), tsize=tsize)
tdbcptrs = tdbcptrs + tsize

! CALL dbcTop%Get(fedof=fedof, nodenum=dbcptrs(tdbcptrs + 1:), tsize=tsize)
! tdbcptrs = tdbcptrs + tsize

CALL dbcLeft%Get(fedof=fedof, nodenum=dbcptrs(tdbcptrs + 1:), tsize=tsize)
tdbcptrs = tdbcptrs + tsize

!----------------------------------------------------------------------------
!                                                           Assemble system
!----------------------------------------------------------------------------

telements = cellmesh%GetTotalElements()

DO iel = 1, telements
  ! Get quadrature points
  ! MODULE SUBROUTINE obj_GetQuadraturePoints1(obj, quad, globalElement, &
  ! quadratureType, order, alpha, beta, lambda, islocal)
  CALL fedof%GetQuadraturePoints1(quad=quad, globalElement=iel, &
                             quadratureType=TypeQuadratureOpt%GaussLegendre, &
                                  order=2 * order, islocal=.TRUE.)

  ! Get LocalElemshapeData
  ! MODULE SUBROUTINE obj_GetLocalElemShapeData(obj, globalElement, elemsd, &
  ! quad, islocal)
  CALL fedof%GetLocalElemShapeData(globalElement=iel, elemsd=elemsd, &
                                   quad=quad, islocal=.TRUE.)

  ! Get xij
  CALL cellmesh%GetNodeCoord(nodecoord=xij, nrow=nrow, ncol=ncol, &
                             globalElement=iel, islocal=.TRUE.)
  IF (debug) CALL Display(xij, 'xij: ')

  ! GetGlobalElemShapeData
  ! MODULE SUBROUTINE obj_GetGlobalElemShapeData(obj, globalElement, elemsd, &
  ! xij, geoElemsd, islocal)
  CALL fedof%GetGlobalElemShapeData(globalElement=iel, elemsd=elemsd, &
                                    xij=xij, islocal=.TRUE.)

  IF (debug) CALL Display(elemsd%Js, 'elemsd%Js: ')

  CALL DiffusionMatrix_(test=elemsd, trial=elemsd, ans=ke, nrow=nrow, &
                        ncol=ncol)
  IF (debug) CALL Display(ke(1:nrow, 1:ncol), 'ke: ')

  ! Get connectivity from fedof
  ! SUBROUTINE obj_GetConnectivity_(obj, ans, tsize, opt, globalElement, &
  ! islocal)
  CALL fedof%GetConnectivity_(globalElement=iel, islocal=.TRUE., &
                              ans=cellcon, tsize=tsize, opt="A")

  IF (debug) CALL display(cellcon(1:tsize), 'cellcon: ')

  ! SUBROUTINE obj_Set1(obj, globalNode, islocal, VALUE, storageFMT, &
  ! scale, addContribution)
  CALL tanmat%Set(globalNode=cellcon(1:tsize), islocal=.TRUE., &
                  VALUE=ke(1:nrow, 1:ncol), storageFMT=DOF_FMT, &
                  scale=1.0_DFP, addContribution=.TRUE.)

END DO

!----------------------------------------------------------------------------
!                                                             ApplyBC to sol
!----------------------------------------------------------------------------

IF (debug) CALL Display("main.F90: ApplyBC to sol")
! CALL sol%ApplyDirichletBC(dbc=dbcBottom)
CALL sol%ApplyDirichletBC(dbc=dbcRight)
! CALL sol%ApplyDirichletBC(dbc=dbcTop)
CALL sol%ApplyDirichletBC(dbc=dbcLeft)
IF (debug) CALL Display("main.F90: DONE ApplyBC to sol")

!----------------------------------------------------------------------------
!                                                               Update RHS
!----------------------------------------------------------------------------

! SUBROUTINE obj_Matvec2(obj, x, y, isTranspose, &
! addContribution, scale)

IF (debug) CALL Display("main.F90: ApplyBC to rhs")
CALL tanmat%Matvec(x=sol, y=rhs, addContribution=.TRUE., scale=-1.0_DFP)
! CALL rhs%ApplyDirichletBC(dbc=dbcBottom)
CALL rhs%ApplyDirichletBC(dbc=dbcRight)
! CALL rhs%ApplyDirichletBC(dbc=dbcTop)
CALL rhs%ApplyDirichletBC(dbc=dbcLeft)
IF (debug) CALL Display("main.F90: DONE ApplyBC to rhs")

!----------------------------------------------------------------------------
!                                         Apply boundary condition to tanmat
!----------------------------------------------------------------------------

CALL tanmat%ApplyDBC(dbcptrs=dbcptrs)
IF (debug) CALL Display("main.F90: Done ApplyDBC in tanmat")

!----------------------------------------------------------------------------
!                                                               Solve system
!----------------------------------------------------------------------------

CALL SetAbstractLinSolverParam(param=param, solverName=LinSolver_name, &
           preconditionOption=preconditionOption, prefix=linsol%GetPrefix(), &
                               engine=engineName)

CALL linsol%Initiate(param)
IF (debug) CALL Display("main.F90: Initiate linsol")

CALL linsol%Set(tanmat)
IF (debug) CALL Display("main.F90: set tanmat in linsol")

CALL linsol%Solve(sol=sol, rhs=rhs)
IF (debug) CALL Display("main.F90: Done solve")

!----------------------------------------------------------------------------
!                                                               Write results
!----------------------------------------------------------------------------

CALL vtk%InitiateVTKFile(filename=meshvtufilename, mode="NEW", &
       DataFormat=VTK_BINARY_APPENDED, DataStructureType=VTK_UnStructuredGrid)
IF (debug) CALL Display("main.F90: Initiate meshvtufilename")

CALL cellmesh%ExportToVTK(vtk=vtk)
IF (debug) CALL Display("main.F90: Export mesh to vtk")
CALL vtk%CLOSE()

CALL vtk%DEALLOCATE()

CALL vtk%InitiateVTKFile(filename=resultvtufilename, mode="NEW", &
       DataFormat=VTK_BINARY_APPENDED, DataStructureType=VTK_UnStructuredGrid)
IF (debug) CALL Display("main.F90: Initiate resultvtufilename")

CALL sol%WriteData(vtk=vtk)
IF (debug) CALL Display("main.F90: Export result to vtk")

! CALL sol%WriteData(vtk=vtk)
! IF (debug) CALL Display("main.F90: Write sol")

CALL param%DEALLOCATE()
CALL FPL_Finalize

END PROGRAM main
