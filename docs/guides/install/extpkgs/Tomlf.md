---
repo: https://github.com/toml-f/toml-f
licenses:
  - Apache-2.0, MIT
tags:
  - easifemBase
  - extpkgs
title: Toml-f
---

A TOML parser implementation for data serialization and deserialization in Fortran.

## Toml configuration for easifem

```toml
name = "tomlf"
isExtpkg = true
isActive = true
buildSystem = "cmake"
git = 'github.com/toml-f/toml-f/'
buildType = "Release" # "Debug", "Both"
buildSharedLibs = true
buildStaticLibs = false
libName = "tomlf"
runtest = true
license = "GPL3"
buildOptions = [""]
```
