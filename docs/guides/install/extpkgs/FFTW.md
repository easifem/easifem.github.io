---
sidebar_position: 5
repo: https://www.fftw.org/fftw-3.3.10.tar.gz
licenses:
  - gpl-3
tags:
  - easifemBase
  - extpkgs
---

# FFTW

FFTW is a C subroutine library for computing the discrete Fourier transform (DFT) in one or more dimensions, of arbitrary input size, and of both real and complex data (as well as of even/odd data, that is, the discrete cosine/sine transforms or DCT/DST).

The FFTW package was developed at MIT by Matteo Frigo and Steven G. Johnson.

FFTW can be downloaded from [official website](https://www.fftw.org/fftw-3.3.10.tar.gz)

## Build

```bash
url="https://www.fftw.org/fftw-3.3.10.tar.gz"
curl ${url} -L -o fftw.tar.gz
gunzip fftw.tar.gz
tar -xvf fftw.tar
cd "$pkg_dir/${pkg_name}-3.3.10"

./configure --prefix=${EASIFEM_EXTPKGS} --enable-openmp
make
make install
```

## Toml configuration for easifem

```toml
name = "fftw"
isExtPkg = true
isActive = true
buildSystem = "cmake"
git = "github.com/easifem/fftw.git"
buildType = "Release" # "Debug", "Both"
buildSharedLibs = true
buildStaticLibs = true
libName = "fftw"
runtest = true
license = "GPL3"
buildOptions = [
  "-D BUILD_TESTS:BOOL=ON",
  "-D ENABLE_OPENMP:BOOL=ON",
  "-D ENABLE_THREADS:BOOL=ON",
  "-D WITH_COMBINED_THREADS:BOOL=OFF",
  "-D ENABLE_FLOAT:BOOL=OFF",
  "-D ENABLE_LONG_DOUBLE:BOOL=OFF",
  "-D ENABLE_QUAD_PRECISION:BOOL=OFF",
  "-D ENABLE_SSE:BOOL=OFF",
  "-D ENABLE_SSE2:BOOL=OFF",
  "-D ENABLE_AVX:BOOL=OFF",
  "-D ENABLE_AVX2:BOOL=OFF",
  "-D DISABLE_FORTRAN:BOOL=OFF",
]
```
