PROGRAM main
USE easifemBase

BLOCK
  INTEGER(I4B) :: found(2, 3), want(2, 3)
  INTEGER(I4B), PARAMETER :: order = 1
  LOGICAL(LGT) :: isok

  want = RESHAPE([1, 2, 1, 3, 2, 3], [2, 3])
  CALL GetEdgeConnectivity_Triangle(con=found, order=order)
  isok = ALL(found == want)
  CALL OK(isok, "GetEdgeConnectivity_Triangle: ")
END BLOCK

BLOCK
  INTEGER(I4B) :: found(3, 3), want(3, 3)
  INTEGER(I4B), PARAMETER :: order = 2
  LOGICAL(LGT) :: isok

  want = RESHAPE([1, 2, 4, 1, 3, 6, 2, 3, 5], [3, 3])
  CALL GetEdgeConnectivity_Triangle(con=found, order=order)
  isok = ALL(found == want)
  CALL OK(isok, "GetEdgeConnectivity_Triangle: ")
  IF (.NOT. isok) THEN

    CALL Display(found, "found: ")
  END IF
END BLOCK

BLOCK
  INTEGER(I4B) :: found(2, 3), want(2, 3)
  INTEGER(I4B), PARAMETER :: order = 1
  LOGICAL(LGT) :: isok

  want = RESHAPE([1, 2, 2, 3, 3, 1], [2, 3])
  CALL GetEdgeConnectivity_Triangle(con=found, order=order, opt=2)
  isok = ALL(found == want)
  CALL OK(isok, "GetEdgeConnectivity_Triangle: ")
END BLOCK

BLOCK
  INTEGER(I4B) :: found(3, 3), want(3, 3)
  INTEGER(I4B), PARAMETER :: order = 2
  LOGICAL(LGT) :: isok

  want = RESHAPE([1, 2, 4, 2, 3, 5, 3, 1, 6], [3, 3])
  CALL GetEdgeConnectivity_Triangle(con=found, order=order, opt=2)
  isok = ALL(found == want)
  CALL OK(isok, "GetEdgeConnectivity_Triangle: ")
  IF (.NOT. isok) THEN

    CALL Display(found, "found: ")
  END IF
END BLOCK

END PROGRAM main
