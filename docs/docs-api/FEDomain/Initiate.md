# Initiate

This method initiates an instance of domain by reading the mesh-file in HDF5File_ format.

## Interface

<Tabs>
<TabItem value="interface" label="Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE Initiate(obj, hdf5, group)
    CLASS(FEDomain_), INTENT(INOUT) :: obj
    !! DomainData object
    TYPE(HDF5File_), INTENT(INOUT) :: hdf5
    !! HDF5 file
    CHARACTER(*), INTENT(IN) :: group
    !! Group name (directory name)
  END SUBROUTINE Initiate
END INTERFACE
```

</TabItem>

<TabItem value="example" label="example">

import EXAMPLE7 from "./examples/_Initiate_test_1.md";

<EXAMPLE7 />

</TabItem>

<TabItem value="close" label="↢ close">

</TabItem>
</Tabs>

