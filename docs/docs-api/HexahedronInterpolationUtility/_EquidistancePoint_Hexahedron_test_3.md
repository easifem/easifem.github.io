```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: i1, i2, order
  real( dfp ), allocatable :: x(:,:)
  type(String) :: astr
  order=3
  x = EquidistancePoint_Hexahedron( order=order )
  astr = "| no | $x_1$ | $x_2$ | $x_3$ |" // char_lf
  astr = astr //  mdencode( arange(1.0_DFP, (order+1.0_DFP)**3) .colconcat. TRANSPOSE(x))
  call display( astr%chars(), "xij (order="//tostring(order)//")=" // char_lf // char_lf )
end program main
```

xij (order=3)=

| no  | $x_1$    | $x_2$    | $x_3$    |
| --- | -------- | -------- | -------- |
| 1   | -1       | -1       | -1       |
| 2   | 1        | -1       | -1       |
| 3   | 1        | 1        | -1       |
| 4   | -1       | 1        | -1       |
| 5   | -1       | -1       | 1        |
| 6   | 1        | -1       | 1        |
| 7   | 1        | 1        | 1        |
| 8   | -1       | 1        | 1        |
| 9   | -0.33333 | -1       | -1       |
| 10  | 0.33333  | -1       | -1       |
| 11  | -1       | -0.33333 | -1       |
| 12  | -1       | 0.33333  | -1       |
| 13  | -1       | -1       | -0.33333 |
| 14  | -1       | -1       | 0.33333  |
| 15  | 1        | -0.33333 | -1       |
| 16  | 1        | 0.33333  | -1       |
| 17  | 1        | -1       | -0.33333 |
| 18  | 1        | -1       | 0.33333  |
| 19  | 0.33333  | 1        | -1       |
| 20  | -0.33333 | 1        | -1       |
| 21  | 1        | 1        | -0.33333 |
| 22  | 1        | 1        | 0.33333  |
| 23  | -1       | 1        | -0.33333 |
| 24  | -1       | 1        | 0.33333  |
| 25  | -0.33333 | -1       | 1        |
| 26  | 0.33333  | -1       | 1        |
| 27  | -1       | -0.33333 | 1        |
| 28  | -1       | 0.33333  | 1        |
| 29  | 1        | -0.33333 | 1        |
| 30  | 1        | 0.33333  | 1        |
| 31  | 0.33333  | 1        | 1        |
| 32  | -0.33333 | 1        | 1        |
| 33  | -0.33333 | -0.33333 | -1       |
| 34  | -0.33333 | 0.33333  | -1       |
| 35  | 0.33333  | 0.33333  | -1       |
| 36  | 0.33333  | -0.33333 | -1       |
| 37  | -0.33333 | -0.33333 | 1        |
| 38  | 0.33333  | -0.33333 | 1        |
| 39  | 0.33333  | 0.33333  | 1        |
| 40  | -0.33333 | 0.33333  | 1        |
| 41  | -1       | -0.33333 | -0.33333 |
| 42  | -1       | -0.33333 | 0.33333  |
| 43  | -1       | 0.33333  | 0.33333  |
| 44  | -1       | 0.33333  | -0.33333 |
| 45  | 1        | -0.33333 | -0.33333 |
| 46  | 1        | 0.33333  | -0.33333 |
| 47  | 1        | 0.33333  | 0.33333  |
| 48  | 1        | -0.33333 | 0.33333  |
| 49  | 0.33333  | 1        | -0.33333 |
| 50  | -0.33333 | 1        | -0.33333 |
| 51  | -0.33333 | 1        | 0.33333  |
| 52  | 0.33333  | 1        | 0.33333  |
| 53  | -0.33333 | -1       | -0.33333 |
| 54  | 0.33333  | -1       | -0.33333 |
| 55  | 0.33333  | -1       | 0.33333  |
| 56  | -0.33333 | -1       | 0.33333  |
| 57  | -0.33333 | -0.33333 | -0.33333 |
| 58  | 0.33333  | -0.33333 | -0.33333 |
| 59  | 0.33333  | 0.33333  | -0.33333 |
| 60  | -0.33333 | 0.33333  | -0.33333 |
| 61  | -0.33333 | -0.33333 | 0.33333  |
| 62  | 0.33333  | -0.33333 | 0.33333  |
| 63  | 0.33333  | 0.33333  | 0.33333  |
| 64  | -0.33333 | 0.33333  | 0.33333  |