
program main
  use easifembase
  implicit none
  integer( i4b ) :: i1, i2, order, ipType
  real( dfp ), allocatable :: x(:,:), xij(:, :)
  CHARACTER( 20 ) :: layout
  order=5
  xij = RefTriangleCoord("UNIT")
  ipType=IsaacLegendre
  layout="VEFC"
  x =InterpolationPoint_Triangle( order=order, &
  & ipType=ipType, layout=layout, xij=xij)
  call display( Mdencode(TRANSPOSE(x)), "xij (order="//tostring(order)//")=" )
  call blanklines(nol=2)
end program main
