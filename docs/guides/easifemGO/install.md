---
title: install
sidebar_position: 3
---

## TLDR

Install subcommand is used to install plugins. 

To install external dependencies of easifem you can run following.

```bash
easifem install extpkgs
```

To install each plugin you can run following.

```bash
easifem install arpack
easifem install lapack95
```

You can also install several plugins. 

```bash
easifem install arpack lapack95 sparsekit superlu
```

You can install base and classes library using.

```bash
easifem install base classes
```

:::info
You can read more about the install subcommand [here](./install.md), where you can find  how to install command works and how to write a configuration file for a package.
:::

## Details


The `install` subcommand let you install the components of easifem.

To install a component (for example, base) first you should create a toml file (for example, base.toml) at `$HOME/.config/easifem/plugins`.

You can see some examples of plugin configuration files at [github reposity](https://github.com/easifem/config/tree/main/plugins).

After creating the plugin configuration file, you can install the component by using the following command.

```bash
easifem install base
```

The content of `base.toml` is given below.

```toml
name = "base"
buildSystem = "cmake"
isActive = true
git = 'github.com/easifem/base.git'
sourceDir = "${HOME}/Dropbox/easifem/easifem-base/"
buildDir = "${HOME}/.easifem/easifem/build/base/"
installDir = "${HOME}/.easifem/easifem/install/base/"
buildType = "Release" # "Debug", "Both"
buildSharedLibs = true
buildStaticLibs = false
usePreset = true
libName = "easifemBase"
targetName = "easifemBase"
projectName = "easifemBase"

# following  are configuration variables defined in easifemBase.
intSize = 32 # Default integer size
realSize = 64 # default real size
maxNNE = 128 # maximum number of nodes in an element to consider 
maxNodeToNode = 128 # maximum number of node to nodes.
maxNodeToElem = 128 # maximum number of node to element.

runtest = true
license = "GPL3"

# following are the build options defined for easifemBase

buildOptions = [
"-D USE_OPENMP:BOOL=ON",
"-D USE_PLPLOT:BOOL=ON",
"-D USE_BLAS95:BOOL=ON",
"-D USE_LAPACK95:BOOL=ON",
"-D USE_FFTW:BOOL=ON",
"-D USE_GTK:BOOL=OFF",
"-D USE_ARPACK:BOOL=ON",
"-D USE_PARPACK:BOOL=OFF",
"-D USE_SUPERLU:BOOL=ON",
"-D USE_LIS:BOOL=ON",
"-D USE_METIS:BOOL=OFF",
"-D USE_LUA:BOOL=ON",
"-D USE_INT32:BOOL=ON",
"-D USE_REAL64:BOOL=ON",
"-D USE_COLORDISP:BOOL=ON",
]

# following are the dependencies of easifemBase

dependencies = ["arpack", "sparsekit", "superlu", "lis", "fftw", "lapack95", "tomlf"]
```

