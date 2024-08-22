# InterpolationPoint_Triangle

<!-- markdownlint-disable MD041 MD013 MD033 MD012 -->

This routine returns the interpolation points on triangle.

## Interface

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE FUNCTION InterpolationPoint_Triangle(order, ipType, &
    & layout, xij) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: order
    !! order
    INTEGER(I4B), INTENT(IN) :: ipType
    !! interpolation point type
    REAL(DFP), OPTIONAL, INTENT(IN) :: xij(:, :)
    !! Coord of domain in xij format
    CHARACTER(*), INTENT(IN) :: layout
    !! local node numbering layout, always VEFC
    REAL(DFP), ALLOCATABLE :: ans(:, :)
    !! xij coordinates
  END FUNCTION InterpolationPoint_Triangle
END INTERFACE
```

:::info `xij`

- `xij` contains nodal coordinates of triangle in `xij` format.
- `SIZE(xij,1) = nsd`, and `SIZE(xij,2)=3`
- If `xij` is absent then unit triangle is assumed

:::

:::info ipType

- `ipType` is interpolation point type, it can take following values

- [x] `Equidistance`, uniformly/evenly distributed points
- [x] `BlythPozChebyshev`
- [x] `BlythPozLegendre`
- [x] `GaussLegendreLobatto`, which is same as `IsaacLegendre`
- [x] `GaussChebyshevLobatto`, which is same as `IsaacChebyshev`
- [x] `GaussJacobiLobatto`
- [x] `GaussUltrasphericalLobatto`
- [x] `IsaacChebyshev`
- [x] `IsaacLegendre`
- [ ] `ChenBabuska` TODO
- [ ] `Hesthaven` TODO
- [ ] `Feket` TODO

:::

:::info `layout`

- `layout` specifies the arrangement of points. The nodes are always returned in “VEFC” format (vertex, edge, face, cell). 1:3 are vertex points, then edge, and then internal nodes. The internal nodes also follow the same convention. Please read Gmsh manual on this topic.

:::

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Example of Equidistance points

<details>
<summary>Click here to see example</summary>
<div>

import EXAMPLE63 from "./examples/_InterpolationPoint_Triangle_test_1.md";

<EXAMPLE63 />

</div>
</details>

## BlythPozChebyshev

<details>
<summary>Click here to see example</summary>
<div>

import EXAMPLE71 from "./examples/_InterpolationPoint_Triangle_test_2.md";

<EXAMPLE71 />

</div>
</details>

## BlythPozLegendre

<details>
<summary>Click here to see example</summary>
<div>

import EXAMPLE79 from "./examples/_InterpolationPoint_Triangle_test_3.md";

<EXAMPLE79 />

</div>
</details>

## IsaacChebyshev

<details>
<summary>Click here to see example</summary>
<div>

import EXAMPLE87 from "./examples/_InterpolationPoint_Triangle_test_4.md";

<EXAMPLE87 />

</div>
</details>

## IssacLegendre

<details>
<summary>Click here to see example</summary>
<div>

import EXAMPLE95 from "./examples/_InterpolationPoint_Triangle_test_5.md";

<EXAMPLE95 />

</div>
</details>
