
PROGRAM main
  USE easifemBase
  TYPE( ReferenceElement_ ), ALLOCATABLE :: facetElems( : )
  INTEGER( I4B ) :: ii
  facetElems = FacetElements(elemType=Triangle3, nsd=2)
  DO ii = 1, SIZE( facetElems )
    CALL Display( facetElems( ii ),  &
      & "facetElements( " // tostring(ii) // " ) = " )
    CALL Blanklines( NOL = 2 )
  END DO
END PROGRAM main
