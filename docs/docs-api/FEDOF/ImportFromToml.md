---
title: ImportFromToml
---

This method imports the configuration form a toml file and initiates the FEDOF instance.

The `ImportFromToml` method has two implementations:

1. `ImportFromToml1` - Imports configuration from a TOML table that's already loaded
2. `ImportFromToml2` - Imports configuration from a TOML file by name

## Interface 1

In this interface to import the data we specify the toml table and mesh.

```fortran
INTERFACE FEDOFImportFromToml
  MODULE SUBROUTINE ImportFromToml(obj, table, mesh)
    CLASS(FEDOF_), INTENT(INOUT) :: obj
    TYPE(toml_table), INTENT(INOUT) :: table
    CLASS(AbstractMesh_), TARGET, INTENT(IN) :: mesh
  END SUBROUTINE ImportFromToml
END INTERFACE FEDOFImportFromToml
```

## Interface 2

In this interface to import the data we specify the name of the toml file (or provide an instance of TxtFile), name of the key (tomlName), and mesh.

```fortran
INTERFACE FEDOFImportFromToml
  MODULE SUBROUTINE ImportFromToml(obj, tomlName, afile, &
                                        filename, printToml, mesh)
    CLASS(FEDOF_), INTENT(INOUT) :: obj
    CHARACTER(*), INTENT(IN) :: tomlName
    TYPE(TxtFile_), OPTIONAL, INTENT(INOUT) :: afile
    CHARACTER(*), OPTIONAL, INTENT(IN) :: filename
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: printToml
    CLASS(AbstractMesh_), OPTIONAL, INTENT(IN) :: mesh
  END SUBROUTINE ImportFromToml
END INTERFACE FEDOFImportFromToml
```

## Template for Import for toml file

import CodeBlock from '@theme/CodeBlock';

import CodeSnippet from '!!raw-loader!./examples/toml/_ImportFromToml_test_1.toml';

<CodeBlock language="toml">{CodeSnippet}</CodeBlock>

## Example 1

import EXAMPLE47 from "./examples/_ImportFromToml_test_1.md";

<EXAMPLE47 />

## Example 2

import EXAMPLE56 from "./examples/_ImportFromToml_test_2.md";

<EXAMPLE56 />
