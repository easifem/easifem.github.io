- In this example `ipType=GaussChebyshevLobatto`

```fortran
PROGRAM main
use easifemBase
real(DFP), allocatable :: b( :, : )
integer(i4b), parameter :: ipType=GaussChebyshevLobatto
```

```fortran
b = RecursiveNode1D(order=0, ipType=ipType)
call Display(MdEncode(b), "b="//char_lf)
```

b=

|     |
| --- |
| 0.5 |
| 0.5 |

```fortran
b = RecursiveNode1D(order=1, ipType=ipType)
call Display(MdEncode(b), "b="//char_lf)
```

b=

|   |   |
| - | - |
| 0 | 1 |
| 1 | 0 |

```fortran
b = RecursiveNode1D(order=2, ipType=ipType)
call Display(MdEncode(b), "b="//char_lf)
```

b=

|             |     |             |
| ----------- | --- | ----------- |
| 1.11022E-16 | 0.5 | 1           |
| 1           | 0.5 | 1.11022E-16 |

```fortran
b = RecursiveNode1D(order=4, ipType=ipType)
call Display(MdEncode(b), "b="//char_lf)
```

b=

|   |         |     |         |   |
| - | ------- | --- | ------- | - |
| 0 | 0.14645 | 0.5 | 0.85355 | 1 |
| 1 | 0.85355 | 0.5 | 0.14645 | 0 |

```fortran
END PROGRAM main
```
