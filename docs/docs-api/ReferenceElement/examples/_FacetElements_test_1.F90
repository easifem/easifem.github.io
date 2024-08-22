
PROGRAM main
  USE easifemBase
  TYPE( ReferenceTriangle_ ) :: obj
  TYPE( ReferenceElement_ ), ALLOCATABLE :: facetElems( : )
  INTEGER( I4B ) :: ii
  CALL Initiate( obj, nsd = 2 )
  facetElems = FacetElements( obj )
  DO ii = 1, SIZE( facetElems )
    CALL Display( facetElems( ii ),  &
      & "facetElements( " // tostring(ii) // " ) = " )
    CALL Blanklines( NOL = 2 )
  END DO
END PROGRAM main
