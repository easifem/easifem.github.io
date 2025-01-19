import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

easifem uses CMake build system. 
To manually install `easifem` from the source we need to perform following tasks.

1. Download the source code from git repository.
2. Configuration the project by using CMake.
3. Build by using CMake.
4. Install by using CMake.

### Step-1: Download source code

<Tabs>
<TabItem value="1" label="Git+https">

```bash
git clone https://github.com/easifem/classes.git classes
```

</TabItem>

<TabItem value="2" label="Git+ssh">

```bash
git clone git@github.com:easifem/classes.git classes
```

</TabItem>

<TabItem value="3" label="GitHub CLI">

```bash
gh repo clone easifem/classes classes
```

</TabItem>

<TabItem value="close" label="↢">

</TabItem>
</Tabs>

### Step-2: Configuration

After downloading the source code, enter the source directory, and make a build directory.

```bash
cd classes
mkdir ./build
```

To configure the `easifemClasses` library you can define following variables:

| Variable               | Type     | Options            | Default            |
| ---------------------- | -------- | ------------------ | ------------------ |
| `CMAKE_BUILD_TYPE`     | `STRING` | `Release`, `Debug` | `Release`          |
| `BUILD_SHARED_LIBS`    | `BOOL`   | `ON`, `OFF`        | `ON`               |
| `CMAKE_INSTALL_PREFIX` | `PATH`   | Please specify     | `$EASIFEM_CLASSES` |


An example of configuration step is given below:

```bash
export EASIFEM_CLASSES=${HOME}/.local/easifem/classes
cmake -G "Ninja" -S ./ -B ./build \
-D CMAKE_BUILD_TYPE:STRING=Release \
-D BUILD_SHARED_LIBS:BOOL=ON \
-D CMAKE_INSTALL_PREFIX:PATH=${EASIFEM_CLASSES}
```

### Step-3 and 4: Build and Install

After configuration, you can build and install the library by using:

```bash
cmake --build ./build --target --install
```

## Build options 

### `CMAKE_BUILD_TYPE`

If `CMAKE_BUILD_TYPE` denotes the  build type of library. You can read more it at the [cmake website](https://cmake.org/cmake/help/latest/variable/CMAKE_BUILD_TYPE.html). 

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

`CMAKE_INSTALL_PREFIX` is a `PATH` option, which specifies the location of file system where `easifemClasses` library will be installed. If you have set the environment variables correctly then you can specify it to `$EASIFEM_CLASSES`, which is given by `$EASIFEM_INSTALL_DIR/easifem/classes/`

You can set this option by using `--D CMAKE_INSTALL_PREFIX:PATH=$EASIFEM_CLASSES`.

:::note Read more 
You can read about `CMAKE_INSTALL_PREFIX` at the [cmake website](https://cmake.org/cmake/help/latest/variable/CMAKE_INSTALL_PREFIX.html).
:::
