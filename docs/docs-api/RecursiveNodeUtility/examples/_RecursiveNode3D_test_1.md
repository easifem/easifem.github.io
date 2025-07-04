```fortran
PROGRAM main
use easifemBase
real( DFP ), allocatable :: b( :, : )

  b = RecursiveNode3D(order=0, ipType=Equidistance)
  call Display(b, "b=")

  b = RecursiveNode3D(order=1, ipType=Equidistance)
  call Display(MdEncode(b), "b=")
```

b=

|   |   |   |   |
| - | - | - | - |
| 0 | 0 | 0 | 1 |
| 0 | 0 | 1 | 0 |
| 0 | 1 | 0 | 0 |
| 1 | 0 | 0 | 0 |

```fortran
b = RecursiveNode3D(order=2, ipType=Equidistance)
call Display(MdEncode(b), "b=")
```

b=

|   |     |   |     |     |   |     |     |     |   |
| - | --- | - | --- | --- | - | --- | --- | --- | - |
| 0 | 0   | 0 | 0   | 0   | 0 | 0.5 | 0.5 | 0.5 | 1 |
| 0 | 0   | 0 | 0.5 | 0.5 | 1 | 0   | 0   | 0.5 | 0 |
| 0 | 0.5 | 1 | 0   | 0.5 | 0 | 0   | 0.5 | 0   | 0 |
| 1 | 0.5 | 0 | 0.5 | 0   | 0 | 0.5 | 0   | 0   | 0 |

```fortran
b = RecursiveNode3D(order=3, ipType=Equidistance)
call Display(MdEncode(transpose(b)), "b=")
```

b=

|         |         |         |         |
| ------- | ------- | ------- | ------- |
| 0       | 0       | 0       | 1       |
| 0       | 0       | 0.33333 | 0.66667 |
| 0       | 0       | 0.66667 | 0.33333 |
| 0       | 0       | 1       | 0       |
| 0       | 0.33333 | 0       | 0.66667 |
| 0       | 0.33333 | 0.33333 | 0.33333 |
| 0       | 0.33333 | 0.66667 | 0       |
| 0       | 0.66667 | 0       | 0.33333 |
| 0       | 0.66667 | 0.33333 | 0       |
| 0       | 1       | 0       | 0       |
| 0.33333 | 0       | 0       | 0.66667 |
| 0.33333 | 0       | 0.33333 | 0.33333 |
| 0.33333 | 0       | 0.66667 | 0       |
| 0.33333 | 0.33333 | 0       | 0.33333 |
| 0.33333 | 0.33333 | 0.33333 | 0       |
| 0.33333 | 0.66667 | 0       | 0       |
| 0.66667 | 0       | 0       | 0.33333 |
| 0.66667 | 0       | 0.33333 | 0       |
| 0.66667 | 0.33333 | 0       | 0       |
| 1       | 0       | 0       | 0       |

```fortran
END PROGRAM main
```
