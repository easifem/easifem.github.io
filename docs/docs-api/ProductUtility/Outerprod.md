# Outerprod

<!-- markdownlint-disable MD041 MD013 MD033 MD012 -->

This method performs outer product of arrays of various ranks ranging from 1 to 4.

Calling example:

```fortran
c = Outerprod(a, b)
```

Following operations are performed at present.

$$
c(:,:)=a(:) \otimes b(:)
$$

$$
c(:,:,:)=A(:,:) \otimes b(:)
$$

$$
c(:,:,:,:)=A(:,:) \otimes (b(:)\otimes c(:))
$$

$$
c(:,:,:,:)=A(:,:,:) \otimes b(:)
$$

You can learn more about this from following example:

<Tabs>
<TabItem value="example" label="️܀ See example">

import EXAMPLE7 from "./examples/_Outerprod_test_1.md";

<EXAMPLE7 />

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>
