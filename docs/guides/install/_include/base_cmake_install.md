import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

easifem uses CMake build system.
To manually install `easifem` from the source we need to perform following tasks.

1. Download the source code from git repository.
2. Configuration the project by using CMake.
3. Build by using CMake.
4. Install by using CMake.

### Step-1: Download source code

Download the source code from git repository by using **one of the methods**:

<Tabs>
<TabItem value="1" label="Git+https">

```bash
git clone https://github.com/easifem/base.git base
```

</TabItem>

<TabItem value="2" label="Git+ssh">

```bash
git clone git@github.com:easifem/base.git base
```

</TabItem>

<TabItem value="3" label="GitHub CLI">

```bash
gh repo clone easifem/base base
```

</TabItem>

<TabItem value="close" label="↢">

</TabItem>
</Tabs>

### Step-2: Configuration

After downloading the source code, enter the source directory, and make a build directory.

```bash
cd base
mkdir ./build
```

To configure the `easifemBase` library you can define following variables:

| Variable               | Type     | Options            | Default         |
| ---------------------- | -------- | ------------------ | --------------- |
| `CMAKE_BUILD_TYPE`     | `STRING` | `Release`, `Debug` | `Release`       |
| `BUILD_SHARED_LIBS`    | `BOOL`   | `ON`, `OFF`        | `ON`            |
| `CMAKE_INSTALL_PREFIX` | `PATH`   | Please specify     | `$EASIFEM_BASE` |
| `USE_OpenMP`           | `BOOL`   | `ON`, `OFF`        | `ON`            |
| `USE_PLPLOT`           | `BOOL`   | `ON`, `OFF`        | `ON`            |
| `USE_BLAS95`           | `BOOL`   | `ON`, `OFF`        | `ON`            |
| `USE_LAPACK95`         | `BOOL`   | `ON`, `OFF`        | `ON`            |
| `USE_FFTW`             | `BOOL`   | `ON`, `OFF`        | `ON`            |
| `USE_GTK`              | `BOOL`   | `ON`, `OFF`        | `OFF`           |
| `USE_ARPACK`           | `BOOL`   | `ON`, `OFF`        | `ON`            |
| `USE_SUPERLU`          | `BOOL`   | `ON`, `OFF`        | `ON`            |
| `USE_LIS`              | `BOOL`   | `ON`, `OFF`        | `ON`            |
| `USE_PARPACK`          | `BOOL`   | `ON`, `OFF`        | `OFF`           |
| `USE_METIS`            | `BOOL`   | `ON`, `OFF`*       | `OFF`           |
| `USE_SUPERLU`          | `BOOL`   | `ON`, `OFF`*       | `OFF`           |
| `USE_RAYLIB`           | `BOOL`   | `ON`, `OFF`*       | `OFF`           |
| `USE_GTK`              | `BOOL`   | `ON`, `OFF`*       | `OFF`           |
| `USE_LUA`              | `BOOL`   | `ON`, `OFF`*       | `OFF`           |
| `USE_GMSH_SDK`         | `BOOL`   | `ON`, `OFF`*       | `OFF`           |
| `USE_Int32`            | `BOOL`   | `ON`, `OFF`        | `ON`            |
| `USE_Int64`            | `BOOL`   | `ON`, `OFF`        | `ON`            |
| `USE_Real32`           | `BOOL`   | `ON`, `OFF`        | `ON`            |
| `USE_Real64`           | `BOOL`   | `ON`, `OFF`        | `ON`            |
| `USE_COLORDISP`        | `BOOL`   | `ON`, `OFF`        | `ON`            |

### Step-3 and 4: Build and Install

After configuration, you can build and install the library by using:

```bash
cmake --build ./build --target --install
```

An example of configuration step

```bash
export EASIFEM_BASE=${HOME}/.local/easifem/base
cmake -G "Ninja" -S ./ -B ./build \
-D USE_OpenMP:BOOL=ON \
-D CMAKE_BUILD_TYPE:STRING=Release \
-D BUILD_SHARED_LIBS:BOOL=ON \
-D USE_PLPLOT:BOOL=ON \
-D CMAKE_INSTALL_PREFIX:PATH=${EASIFEM_BASE} \
-D USE_BLAS95:BOOL=ON \
-D USE_LAPACK95:BOOL=ON \
-D USE_FFTW:BOOL=ON \
-D USE_GTK:BOOL=OFF \
-D USE_ARPACK:BOOL=ON \
-D USE_PARPACK:BOOL=OFF \
-D USE_LIS:BOOL=ON \
-D USE_LIS:BOOL=OFF \
-D USE_METIS:BOOL=OFF \
-D USE_Int32:BOOL=ON \
-D USE_Real64:BOOL=ON
```

## Build options

### `CMAKE_BUILD_TYPE`

If `CMAKE_BUILD_TYPE` denotes the build type of library. You can read more it at the [cmake website](https://cmake.org/cmake/help/latest/variable/CMAKE_BUILD_TYPE.html).

This variable is string type and it can take following values:

- `Release`: If `CMAKE_BUILD_TYPE` is set to `Release`, then highly optimized version of `easifemBase` is built without any debugging facility. This option should be used by the users of easifem.
- `Debug`: If `CMAKE_BUILD_TYPE` is set to `Debug`, then library is built with debugging facility. This is useful for developer of easifem. No optimization, asserts enabled, [custom debug (output) code enabled],
  debug info included in executable (so you can step through the code with a
  debugger and have address to source-file:line-number translation).
- `RelWithDebInfo`: optimized, with debug info, but no debug (output) code or asserts.
- `MinSizeRel`: same as Release but optimizing for size rather than speed.

You can set this option by using `--D CMAKE_BUILD_TYPE:STRING=Release`.

### `BUILD_SHARED_LIBS`

If `BUILD_SHARED_LIBS` is set to `ON`, then position independent code (PIC) shared library will be built. Otherwise, a static library will be built.

:::note Read more
You can read more about `BUILD_SHARED_LIBS` at the [cmake website](https://cmake.org/cmake/help/latest/variable/BUILD_SHARED_LIBS.html).
:::

You can set this option by using `--D BUILD_SHARED_LIBS:BOOL=ON`.

### `CMAKE_INSTALL_PREFIX`

`CMAKE_INSTALL_PREFIX` is a `PATH` option, which specifies the location of file system where `easifemBase` library will be installed. If you have set the environment variables correctly then you can specify it to `$EASIFEM_BASE`, which is given by `$EASIFEM_INSTALL_DIR/easifem/base/`

You can set this option by using `--D CMAKE_INSTALL_PREFIX:PATH=$EASIFEM_BASE`.

:::note Read more
You can read about `CMAKE_INSTALL_PREFIX` at the [cmake website](https://cmake.org/cmake/help/latest/variable/CMAKE_INSTALL_PREFIX.html).
:::

### `USE_OpenMP`

- `USE_OpenMP` if set to `ON`, the `easifemBase` library is built with `OpenMP` with shared memory parallelization.
- The default value is `ON`
- You can set this option by using `--D USE_OpenMP:BOOL=ON`.

### `USE_PLPLOT`

- If `USE_PLPLOT` is set to `ON`, then `PlPlot` library will be used for plotting figures. If you have set this option to `ON` then make sure you have downloaded `PlPlot` library while [building system requirements](./install-system-requirements).
- In case `USE_PlPLOT` is set to `OFF`, then `PlPlot` library will not be used for plotting figures. In this case, plotting may not be possible from `easifem` library.
- The default value is `ON`
- You can set this option by using `--D USE_PLPLOT:BOOL=ON`.

### `USE_BLAS95`

- If `USE_BLAS95` is set to `ON`, then FORTRAN-95 interface to `BLAS` library will be used. In external packages if you have installed `BLAS95` library, then you can set this option to `ON`, otherwise set it to `OFF`.
- The default value is `ON`
- You can set this option by using `--D USE_BLAS95:BOOL=ON`.

### `USE_LAPACK95`

- If `USE_LAPACK95` is set to `ON`, then FORTRAN-95 interface to `LAPACK` library will be used. In external packages if you have installed `LAPACK95` library, then you can set this option to `ON`, otherwise set it to `OFF`.
- The default value is `ON`
- You can set this option by using `--D USE_LAPACK95:BOOL=ON`.

### `USE_FFTW`

- If `USE_FFTW` is set to `ON`, then `FFTW` library will be used for Fast Fourier Transform. `FFTW` stands for Fast Fourier Library in the West. In external packages if you have installed `FFTW` library, then you can set this option to `ON`, otherwise set it to `OFF`.
- The default value is `ON`
- You can set this option by using `--D USE_FFTW:BOOL=ON`.

### `USE_GTK`

- If `USE_GTK` is set to `ON`, then `GTK` library will be used for making Graphic User Interfaces. In external packages if you have installed `gtk4` library, then you can set this option to `ON`, otherwise set it to `OFF`.
- The default value is `OFF`
- You can set this option by using `--D USE_GTK:BOOL=OFF`.

### `USE_ARPACK`

- If `USE_ARPACK` is set to `ON`, then `ARPACK` library will be used for computing eigenvalues and eigenvectors of sparse matrices. In external packages if you have installed `arpack` library, then you can set this option to `ON`, otherwise set it to `OFF`.
- The default value is `ON`
- You can set this option by using `--D USE_ARPACK:BOOL=ON`.

### `USE_SUPERLU`

- If `USE_SUPERLU` is set to `ON`, then `superlu` library will be used for linear solver. In external packages if you have installed `superlu` library, then you can set this option to `ON`, otherwise set it to `OFF`.
- The default value is `ON`
- You can set this option by using `--D USE_SUPERLU:BOOL=ON`.

### `USE_LIS`

- If `USE_LIS` is set to `ON`, then `LIS` library will be used for solving system of linear equations by using iterative methods. In external packages if you have installed `lis` library, then you can set this option to `ON`, otherwise set it to `OFF`.
- The default value is `ON`
- You can set this option by using `--D USE_LIS:BOOL=ON`.

### `USE_PARPACK`

- If `USE_PARPACK` is set to `ON`, then parallel `ARPACK` library called `PARPACK` will be used for computing the eigenvalues and eigenvectors of large sparse matrices. In external packages if you have installed `parpack` library, then you can set this option to `ON`, otherwise set it to `OFF`.
- The default value is `OFF`
- You can set this option by using `--D USE_PARPACK:BOOL=OFF`.

### `USE_METIS`

- If `USE_METIS` is set to `ON`, then `METIS` library will be used for graph partitioning. In external packages if you have installed `metis` library, then you can set this option to `ON`, otherwise set it to `OFF`.
- The default value is `OFF`
- You can set this option by using `--D USE_METIS:BOOL=OFF`.

### `USE_SUPERLU`

- If `USE_SUPERLU` is set to `ON`, then `superlu` library will be used for linear solver. In external packages if you have installed `superlu` library, then you can set this option to `ON`, otherwise set it to `OFF`.
- The default value is `ON`
- You can set this option by using `--D USE_SUPERLU:BOOL=ON`.

### `USE_RAYLIB`

- If `USE_RAYLIB` is set to `ON`, then `raylib` library will be used for making Graphic User Interfaces. In external packages if you have installed `raylib` library, then you can set this option to `ON`, otherwise set it to `OFF`.
- The default value is `OFF`
- You can set this option by using `--D USE_RAYLIB:BOOL=ON`.

### `USE_GTK`

- If `USE_GTK` is set to `ON`, then `GTK` library will be used for making Graphic User Interfaces. In external packages if you have installed `gtk4` library, then you can set this option to `ON`, otherwise set it to `OFF`.
- The default value is `OFF`
- You can set this option by using `--D USE_GTK:BOOL=ON`.

### `USE_LUA`

- If `USE_LUA` is set to `ON`, then `lua` library will be used for scripting. In external packages if you have installed `lua` library, then you can set this option to `ON`, otherwise set it to `OFF`.
- The default value is `OFF`
- You can set this option by using `--D USE_LUA:BOOL=ON`.

An example of configuration step is given below:

### `USE_GMSH_SDK`

- If `USE_GMSH_SDK` is set to `ON`, then `Gmsh` library will be used for meshing. In external packages if you have installed `Gmsh` library, then you can set this option to `ON`, otherwise set it to `OFF`.
- The default value is `OFF`
- You can set this option by using `--D USE_GMSH_SDK:BOOL=ON`.

### `USE_Int32`

- If `USE_Int32` is set to `ON`, then 32-bit integer numbers will be used as default integers. Please do not set this to `OFF`.
- The default value is `ON`
- You can set this option by using `--D USE_Int32:BOOL=ON`.

### `USE_Int64`

- If `USE_Int64` is set to `ON`, then 64-bit integer numbers will be used as default integers. By default it is set to `OFF`.
- The default value is `OFF`
- You can set this option by using `--D USE_Int64:BOOL=ON`.

### `USE_Real32`

- If `USE_Real32` is set to `ON`, then 32-bit real numbers will be used as default real numbers.
- The default value is `OFF`
- You can set this option by using `--D USE_Real32:BOOL=ON`.

### `USE_Real64`

- If `USE_Real64` is set to `ON`, then 64-bit real numbers will be used as default real numbers. Please do not set this to `OFF`.
- The default value is `ON`
- You can set this option by using `--D USE_Real64:BOOL=ON`.

### `USE_COLORDISP`

- If `USE_COLORDISP` is set to `ON`, then display in terminal will be colored.
- The default value is `ON`
- You can set this option by using `--D USE_COLORDISP:BOOL=ON`.
