
program main
  use easifembase
  implicit none
  integer( i4b ) :: i1, i2, order, ipType
  real( dfp ), allocatable :: x(:,:), xij(:, :), coeff(:), V(:, :)
  integer(i4b), allocatable:: degree(:, :), ipiv(:)
  CHARACTER( 20 ) :: layout
  order=1
  xij = RefTriangleCoord("UNIT")
  ipType=Equidistance
  layout="VEFC"
  x =InterpolationPoint_Triangle( order=order, &
    & ipType=ipType, layout=layout, xij=xij)
  degree = LagrangeDegree_Triangle(order=order)
  V = LagrangeVandermonde(order=order, xij=x, elemType=Triangle)
  call reallocate(ipiv, size(x, 2) )
  CALL GetLU(A=V, IPIV=ipiv)
  coeff = LagrangeCoeff_Triangle(order=order, i = 1, V=V, ipiv=ipiv)
  CALL Display(mdencode(degree), "degree: ")
  CALL Display(mdencode(coeff), "coeff(1): ")
  coeff = LagrangeCoeff_Triangle(order=order, i = 2, V=V, ipiv=ipiv)
  CALL Display(mdencode(coeff), "coeff(2): ")
  coeff = LagrangeCoeff_Triangle(order=order, i = 3, V=V, ipiv=ipiv)
  CALL Display(mdencode(coeff), "coeff(3): ")
end program main
