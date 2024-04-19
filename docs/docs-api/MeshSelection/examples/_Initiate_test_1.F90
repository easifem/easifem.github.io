
PROGRAM main
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
  TYPE( MeshSelection_ ) :: obj
  type(ParameterList_) :: param

CALL FPL_INIT(); call param%Initiate()
CALL SetMeshSelectionParam(param=param, isSelectionByMeshID=.TRUE., prefix=obj%GetPrefix())
CALL obj%Initiate( param=param )

CALL obj%Add( dim=0, meshID=[1,2,3,4,5,6])
CALL obj%Add( dim=1, meshID=[2,5,6,7])
CALL obj%Add( dim=2, meshID=[1,3,5,6,8])
CALL obj%Add( dim=3, meshID=[1,8])

CALL obj%Set()

CALL obj%Display( "" )

  CALL obj%Deallocate()
  CALL param%Deallocate()
  CALL FPL_FINALIZE
END PROGRAM main
