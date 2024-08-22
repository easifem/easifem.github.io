
program main
  use easifembase
  use easifemClasses
  implicit none
  real(dfp), allocatable :: xij(:,:), avec(:)
  integer(i4b) :: ii, jj, cnt, n

    n = 101
    call reallocate(avec, n)
    call reallocate(xij, 2, int((n+1)*(n+2)/2))
    avec= linspace(0.0_DFP, 0.99_DFP, n)
    cnt=0
    do ii = 1, n
      do jj = 1, n-ii+1
        cnt=cnt+1
        xij(1,cnt) = avec(ii)
        xij(2,cnt) = avec(jj)
      end do
    end do

  BLOCK
    real(dfp), allocatable :: ans(:,:)
    integer(i4b) :: order, tdof
    type( VTKPlot_ ) :: aplot
    character(len=*), parameter :: fname="./results/test6"
    !!
    order = 1
    !!
    ans = Dubiner_Triangle(order=order, xij=xij, refTriangle="UNIT")
    call aplot%scatter3D(x=xij(1,:), y=xij(2, :), z=ans, &
      & filename=fname//"_order_"//tostring(order)//".vtp", &
      & label="P")
  END BLOCK

  BLOCK
    real(dfp), allocatable :: ans(:,:)
    integer(i4b) :: order, tdof
    type( VTKPlot_ ) :: aplot
    character(len=*), parameter :: fname="./results/test6"
    !!
    order = 2
    !!
    ans = Dubiner_Triangle(order=order, xij=xij, refTriangle="UNIT")
    call aplot%scatter3D(x=xij(1,:), y=xij(2, :), z=ans, &
      & filename=fname//"_order_"//tostring(order)//".vtp", &
      & label="P")
  END BLOCK

  BLOCK
    real(dfp), allocatable :: ans(:,:)
    integer(i4b) :: order, tdof
    type( VTKPlot_ ) :: aplot
    character(len=*), parameter :: fname="./results/test6"
    !!
    order = 3
    !!
    ans = Dubiner_Triangle(order=order, xij=xij, refTriangle="UNIT")
    call aplot%scatter3D(x=xij(1,:), y=xij(2, :), z=ans, &
      & filename=fname//"_order_"//tostring(order)//".vtp", &
      & label="P")
  END BLOCK

end program main
