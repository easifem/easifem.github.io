PROGRAM main
USE easifemBase
USE easifemClasses

IMPLICIT NONE

CHARACTER(*), PARAMETER :: engine = "NATIVE_SERIAL"

CHARACTER(*), PARAMETER :: filename = &
                           "../../Mesh/examples/meshdata/small_mesh.h5"

TYPE(FEDomain_) :: dom

CLASS(AbtractMesh_), POINTER :: meshptr

TYPE(MatrixField_) :: tanmat

TYPE(HDF5File_) :: meshfile

TYPE(ParameterList_) :: param

INTEGER(I4B) :: imesh, ierr, ielem
REAL(DFP), POINTER :: nodeCoord(:, :)
TYPE(RealMatrix_) :: xij, Kmat
TYPE(IntVector_) :: nptrs

CALL FPL_INIT(); CALL param%Initiate()

CALL meshfile%Initiate(filename=filename, mode="READ")
CALL meshfile%OPEN()

CALL dom%Initiate(meshfile, "")
CALL meshfile%DEALLOCATE()

CALL dom%InitiateElemSD( &
  dim=dom%getNSD(), &
  orderSpace=2_I4B * dom%getOrder(dim=dom%getNSD()), &
  quadTypeForSpace="GaussLegendre", &
  continuityTypeForSpace="H1", &
  interpolTypeForSpace="LagrangeInterpolation")

CALL SetMatrixFieldParam( &
  & param=param, &
  & name="K", &
  & matrixProp="UNSYM", &
  & spaceCompo=1, &
  & timeCompo=1, &
  & fieldType=FIELD_TYPE_NORMAL, &
  & engine=engine)

CALL tanmat%Initiate(param=param, dom=dom)

nodeCoord => dom%getNodeCoordPointer()

DO imesh = 1, dom%getTotalMesh(dim=dom%getNSD())
  meshptr => dom%getMeshPointer(dim=dom%getNSD(), entityNum=imesh)
  IF (meshptr%isEmpty()) CYCLE

  DO ielem = meshptr%getMinElemNumber(), meshptr%getMaxElemNumber()

    IF (.NOT. meshptr%isElementPresent(ielem)) CYCLE

    nptrs = meshptr%getConnectivity(ielem)

    xij = nodeCoord(1:dom%getNSD(), nptrs%val)

    CALL Set( &
      & obj=meshptr%spaceElemSD, &
      & val=xij%val, &
      & N=meshptr%spaceElemSD%N, &
      & dNdXi=meshptr%spaceElemSD%dNdXi)

    Kmat = DiffusionMatrix(test=meshptr%spaceElemSD, &
      & trial=meshptr%spaceElemSD)

    CALL tanmat%Set( &
      & globalNode=nptrs%val, &
      & VALUE=Kmat%val, &
      & storageFMT=NODES_FMT, &
      & scale=1.0_DFP, &
      & addContribution=.TRUE.)

  END DO

END DO

NULLIFY (meshptr)
CALL tanmat%DEALLOCATE()
CALL dom%DEALLOCATE()
CALL param%DEALLOCATE()
CALL FPL_FINALIZE()
END PROGRAM main
