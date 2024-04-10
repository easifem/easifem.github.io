# Kdtree_Create

<!-- markdownlint-disable MD013 MD033 -->

Create the actual tree structure by giving an input array of data.

:::note
Input data is `input_data(1:d,1:N)`, NOT the other way around.
:::

Optional arguments: If 'dim' is specified, then the tree will only search the first 'dim' components of input_data, otherwise, dim is inferred from `SIZE(input_data,1)`.

If `sort` is true then output results will be sorted by increasing distance. The default is false, as it is faster to not sort.

If `rearrange` is true then an internal copy of the data, rearranged by terminal node, will be made for cache friendliness. The default is true, as it speeds searches, but building takes longer, and extra memory is used.

## Interface

<Tabs>
<TabItem value="interface" label="Interface" default>

```fortran
FUNCTION Kdtree2_create(input_data, dim, sort, rearrange) RESULT(mr)
  TYPE(Kdtree2_), POINTER :: mr
  INTEGER, INTENT(IN), OPTIONAL :: dim
  LOGICAL, INTENT(IN), OPTIONAL :: sort
  LOGICAL, INTENT(IN), OPTIONAL :: rearrange
  REAL(kdkind), TARGET :: input_data(:, :)
END FUNCTION
```

</TabItem>

<TabItem value="example" label="example">

import EXAMPLE19 from "./examples/_create_test1.md";

<EXAMPLE19 />

</TabItem>

<TabItem value="close" label="↢ close">

</TabItem>
</Tabs>
