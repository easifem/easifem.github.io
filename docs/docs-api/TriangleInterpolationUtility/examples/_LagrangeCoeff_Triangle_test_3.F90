
program main
  use easifembase
  implicit none
  integer( i4b ) :: i1, i2, order, ipType
  real( dfp ), allocatable :: x(:,:), xij(:, :), coeff(:)
  integer(i4b), allocatable:: degree(:, :)
  CHARACTER( 20 ) :: layout
  order=1
  xij = RefTriangleCoord("UNIT")
  ipType=Equidistance
  layout="VEFC"
  x =InterpolationPoint_Triangle( order=order, &
    & ipType=ipType, layout=layout, xij=xij)
  degree = LagrangeDegree_Triangle(order=order)
  coeff = LagrangeCoeff_Triangle(order=order, xij=x, i = 1)
  CALL Display(mdencode(degree), "degree: ")
  CALL Display(mdencode(coeff), "coeff(1): ")
  coeff = LagrangeCoeff_Triangle(order=order, xij=x, i = 2)
  CALL Display(mdencode(coeff), "coeff(2): ")
  coeff = LagrangeCoeff_Triangle(order=order, xij=x, i = 3)
  CALL Display(mdencode(coeff), "coeff(3): ")
end program main
