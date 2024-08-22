PROGRAM main
USE easifemBase

BLOCK
  INTEGER(I4B) :: con(2, 3)
  CALL GetEdgeConnectivity_Triangle(con=con, order=1)
  CALL Display(con, "GetEdgeConnectivity(order=2)")
END BLOCK

BLOCK
  INTEGER(I4B) :: con(3, 3)
  CALL GetEdgeConnectivity_Triangle(con=con, order=2)
  CALL Display(con, "GetEdgeConnectivity(order=2)")
END BLOCK

BLOCK
  INTEGER(I4B) :: con(2, 3)
  CALL GetEdgeConnectivity_Triangle(con=con, order=1, opt=2)
  CALL Display(con, "GetEdgeConnectivity(order=2)")
END BLOCK

BLOCK
  INTEGER(I4B) :: con(3, 3)
  CALL GetEdgeConnectivity_Triangle(con=con, order=2, opt=2)
  CALL Display(con, "GetEdgeConnectivity(order=2)")
END BLOCK
END PROGRAM main
