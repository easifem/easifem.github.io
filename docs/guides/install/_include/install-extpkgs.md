EASIFEM depends upon the following external packages (`extpkgs`) that are not shipped with the source-code.

import {PesterDataTable, PesterDataButton} from "@site/src/components/PesterDataTable";
import {columns, data} from "../extpkgs/extpkgs.table.js";

<PesterDataTable
  columns={columns}
  data={data}
/>

Click on 🚀 icon to get the information about how a package has been incorporated in the EASIFEM.

More information about the external packages used in the easifem are given [here.](/guides/install/extpkgs)

Below we provide details of installing the external packages by using [easifem cli](/guides/easifemGO).

## easifem cli 

The easiest way to install the above-mentioned external packages is through `easifem` command line application (cli).

Then install external packages by using following command.

```bash
easifem install extpkgs
```

You can also install individual package by using following:

```bash
easifem install openblas superlu lis metis scotch arpack fftw gtk-fortran lapack95 sparsekit gmsh tomlf
```

- The packages will be stored at `EASIFEM_SOURCE_DIR/<pkg-name>`
- The packages will be built at `EASIFEM_BUILD_DIR/<pkg-name>`
- The packages will be installed at `EASIFEM_INSTALL_DIR/<pkg-name>`

