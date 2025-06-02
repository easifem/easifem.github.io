You can install `easifemBase` by using the command line application.

```bash
easifem install base
```

The toml configuration file is given below.

```toml
name = "base"
buildSystem = "cmake"
isActive = true
git = 'github.com/easifem/base.git'
sourceDir = "${HOME}/Dropbox/easifem/easifem-base/"
buildDir = "${HOME}/.easifem/easifem/build/base/"
installDir = "${HOME}/.easifem/easifem/install/base/"
buildType = "Debug" # "Debug", "Both"
buildSharedLibs = true
buildStaticLibs = false
usePreset = true
libName = "easifemBase"
targetName = "easifemBase"
projectName = "easifemBase"

intSize = 32 # Default integer size
realSize = 64 # default real size
maxNNE = 128 # maximum number of nodes in an element to consider
maxNodeToNode = 128 # maximum number of node to nodes.
maxNodeToElem = 128 # maximum number of node to element.

runtest = true
license = "GPL3"
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

dependencies = [
  "arpack",
  "sparsekit",
  "superlu",
  "lis",
  "fftw",
  "lapack95",
  "tomlf",
]
```
