
PROGRAM main
  USE easifemBase
  TYPE( ReferenceTriangle_ ) :: obj
  TYPE( ReferenceElement_ ) :: facetElems( 3 )
  INTEGER( I4B ) :: ii
  CALL Initiate( obj, nsd = 2 )
  CALL GetFacetElements(obj, facetElems)
  DO ii = 1, SIZE( facetElems )
    CALL Display( facetElems( ii ),  &
      & "facetElements( " // tostring(ii) // " ) = " )
    CALL Blanklines( NOL = 2 )
  END DO
END PROGRAM main
