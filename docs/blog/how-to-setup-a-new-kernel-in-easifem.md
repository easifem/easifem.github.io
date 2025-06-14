---
title: Setting up a new kernel using EASIFEM
description: This post provides definition of Kernel in EASIFEM and provides a step by step guide to create a new kernel.
authors:
  - vickysharma0812
  - shishiousan
tags: [kernel, guide, tutorial]
hide_table_of_contents: false
---

# Setting up a new kernel using EASIFEM

This post explains the meaning of kernel in EASIFEM platform. It also describe the steps to create a new kernel in EASIFEM.

## What is a kernel?

A kernel is a computer program written in object oriented programming paradigm which attempts to solve a partial differential equation. In easifem, the term kernel is used for solving a particular PDE.

:::note Why particular PDE?
In our experience when we focus on solving a particular PDE, we can design the kernel quickly and more efficiently. This is because the kernel has specific tasks to perform with limited number of kernel parameters. We believe that this is a good balance between flexibility, efficiency and speed of development. In the past, we have tried to create a generic PDE solver type kernel but after few years the kernel became too complex and difficult to maintain by a group of developers. Therefore, we want to define a kernel for a specific PDE.
:::

:::info Is kernel flexible?
Yes, the kernel has sufficient amount of flexibility. For example, the coefficient of PDE can be constant, spatially changing or time dependent. The boundary condition can also be constant, space, time, or space-time dependent.
:::

:::tip Kernel is blend of procedural programming and object oriented programming?
A kernel is a blend of procedural programming and object oriented programming. The procedural programming comes into the picture because a kernel is trying to solve a specific PDE by using a specific method. In this sense, the kernel's design is driven keeping procedure programming in mind. However, a kernel can solve several problems governed by the same PDE. These problems can have different types of boundary conditions and material properties. Also, we can use several numerical methods to solve the problem. In order to facilitate these objectives, we use object oriented programming.
:::

<!-- truncate -->

## Git ignore file

Add the following `.gitignore` file in the root directory of your kernel. This will help you to ignore the unnecessary files which are not required for the kernel.

<details>
<summary>Git ignore file for EASIFEM projects</summary>
<div>

```bash
*.a
*.mod
*.smod
*.o
*.out
*.i90
*.if90
*.DS_Store
*.prj
*.drawio
*.log
*.eps
*.h5
*.gp
*.msh
*.vtu
*.ipynb
*.dat
*.mtx
*.eps
*.pdf
*.geo
*.ps
*.png
*.jpg
*.plt
*.csv

*/build/
**/build
build/

_packages/
__*

log.txt
test.txt

## Obsidian related
.obsidian

# VSCode related
vscode-settings
.vscode/
settings.json

## Docusaurus related

# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
lerna-debug.log*
.pnpm-debug.log*

# Diagnostic reports (https://nodejs.org/api/report.html)
report.[0-9]*.[0-9]*.[0-9]*.[0-9]*.json

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Directory for instrumented libs generated by jscoverage/JSCover
lib-cov

# Coverage directory used by tools like istanbul
coverage
*.lcov

# nyc test coverage
.nyc_output

# Grunt intermediate storage (https://gruntjs.com/creating-plugins#storing-task-files)
.grunt

# Bower dependency directory (https://bower.io/)
bower_components

# node-waf configuration
.lock-wscript

# Compiled binary addons (https://nodejs.org/api/addons.html)
build/Release

# Dependency directories
node_modules/
jspm_packages/

# Snowpack dependency directory (https://snowpack.dev/)
web_modules/

# TypeScript cache
*.tsbuildinfo

# Optional npm cache directory
.npm

# Optional eslint cache
.eslintcache

# Optional stylelint cache
.stylelintcache

# Microbundle cache
.rpt2_cache/
.rts2_cache_cjs/
.rts2_cache_es/
.rts2_cache_umd/

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# dotenv environment variable files
.env
.env.development.local
.env.test.local
.env.production.local
.env.local

# parcel-bundler cache (https://parceljs.org/)
.cache
.parcel-cache

# Next.js build output
.next
out

# Nuxt.js build / generate output
.nuxt
dist

# Gatsby files
.cache/
# Comment in the public line in if your project uses Gatsby and not Next.js
# https://nextjs.org/blog/next-9-1#public-directory-support
# public

# vuepress build output
.vuepress/dist

# vuepress v2.x temp and cache directory
.temp
.cache

# Docusaurus cache and generated files
.docusaurus

# Serverless directories
.serverless/

# FuseBox cache
.fusebox/

# DynamoDB Local files
.dynamodb/

# TernJS port file
.tern-port

# Stores VSCode versions used for testing VSCode extensions
.vscode-test

# yarn v2
.yarn/cache
.yarn/unplugged
.yarn/build-state.yml
.yarn/install-state.gz
.pnp.*

.DS_Store
.$*

~*
```

</div>
</details>

## Directory structure

Create following directory in the root directory of your kernel.

1. src: This directory will contain the source code of your kernel.
2. docs: This directory will contain the documentation of your kernel.
3. tests: This directory will contain the test code of your kernel.
4. examples: This directory will contain the example code and tutorials of your kernel.
5. cmake: This directory will contain the cmake files necessary to build your kernel.
6. docker: This directory will contain the docker files.
7. bin: This directory will contain the binary files of application based on your kernel
8. media: This directory will contain the figures and images used for the documentation
9. pages: This directory will contain the pages for documentation by using ford.

## Structure of `src` directory

The `src` directory will contain the following directories and files.

- `modules`: This directory contains the header files of the kernel. These header files are called modules.
- `submodules`: This directory contains the `submodules` of the kernel. These `submodules` are contains the implementation of the header files.

Let us say you want to develop a class called `Abstract1DUVSTFEM_` (note that all user defined data types end with an underscore). Then you should create a directory called `Abstract1DUVSTFEM` in the `src/modules` directory.

Now in `Abstract1DUVSTFEM` directory create another directory called `src` which will contain the header file. In this source directory you will create `Abstract1DUVSTFEM_Class.F90`.

In `Abstract1DUVSTFEM` directory create a file called `CMakeLists.txt`. The content of this is given below.

```cmake title="modules/Abstract1DUVSTFEM/CMakeLists.txt"
set(src_path "${CMAKE_CURRENT_LIST_DIR}/src/")
target_sources(${PROJECT_NAME} PRIVATE ${src_path}/Abstract1DUVSTFEM_Class.F90)
```

If you follow the above steps the src directory will look like the following.

```bash
src
├── modules
│   └── Abstract1DUVSTFEM
│       ├── CMakeLists.txt
│       └── src
│           └── Abstract1DUVSTFEM_Class.F90
└── submodules
```

Now we will implement the methods defined in `Abstract1DUVSTFEM_Class.F90` in the `src/submodules` directory. Create a directory called `Abstract1DUVSTFEM` in the `src/submodules` directory. In this directory create a file called `CMakeLists.txt`. In this directory create a directory called `src` which will contain the submodules of module `Abstract1DUVSTFEM_Class`. The structure of the directory will look like this.

The content of `CMakeLists.txt` file will be as follows.

```cmake title="submodules/Abstract1DUVSTFEM/CMakeLists.txt"
set(src_path "${CMAKE_CURRENT_LIST_DIR}/src/")
target_sources(
  ${PROJECT_NAME}
  PRIVATE ${src_path}/Abstract1DUVSTFEM_Class@ApplyDirichletBCMethods.F90
```

```bash
src
├── modules
│   └── Abstract1DUVSTFEM
│       ├── CMakeLists.txt
│       └── src
│           └── Abstract1DUVSTFEM_Class.F90
└── submodules
    ├── Abstract1DUVSTFEM
    │   └── src
    │       ├── Abstract1DUVSTFEM_Class@ApplyDirichletBCMethods.F90
    └── CMakeLists.txt
```

## Module and Submodule CMake file

In `modules` and `submodules` directory create a file called `CMakeLists.txt`. The CMake file will look like this.

```cmake title="modules/CMakeLists.txt"
# AbstractSTFEM
include(${CMAKE_CURRENT_LIST_DIR}/Abstract1DUVSTFEM/CMakeLists.txt)
```

```cmake title="submodules/CMakeLists.txt"
# AbstractSTFEM
include(${CMAKE_CURRENT_LIST_DIR}/Abstract1DUVSTFEM/CMakeLists.txt)
```

Now the structure of the `src` directory will look like this.

```bash
src
├── modules
│   ├── Abstract1DUVSTFEM
│   │   ├── CMakeLists.txt
│   │   └── src
│   │       └── Abstract1DUVSTFEM_Class.F90
│   └── CMakeLists.txt
└── submodules
    ├── Abstract1DUVSTFEM
    │   ├── CMakeLists.txt
    │   └── src
    │       ├── Abstract1DUVSTFEM_Class@ApplyDirichletBCMethods.F90
    ├── CMakeLists.txt
```

Now we need to write the main `CMakeLists.txt` file in the root of our project. That is, the parent directory of `src` directory. We will describe the content of this file in another blog post.

<details>
<summary>Click here to see the content</summary>
<div>

```cmake title="CMakeLists.txt"
cmake_minimum_required(VERSION 3.20.0 FATAL_ERROR)
set(PROJECT_NAME "easifemOneDimElasticity")
project(${PROJECT_NAME})

enable_language(Fortran C CXX)

set(VERSION_MAJOR "25")
set(VERSION_MINOR "04")
set(VERSION_BugFix "1")
set(PROJECT_VERSION ${VERSION_MAJOR}.${VERSION_MINOR}.${VERSION_BugFix})

set(CMAKE_PROJECT_DESCRIPTION
    "${PROJECT_NAME} is  part of EASIFEM platform.
    EASIFEM: Expandable and Scalable Infrastructure for Finite Element Methods.
    This program solves one dimensional wave propogation problems using finite element
    methods including space-time finite element methods.
    ")

set(CMAKE_PROJECT_HOMEPAGE_URL "https://www.easifem.com")

set(TARGETS_EXPORT_NAME "${PROJECT_NAME}Targets")
set(namespace "${PROJECT_NAME}")

include(CMakePrintHelpers)
include(FortranCInterface)

FortranCInterface_VERIFY()

list(APPEND TARGET_COMPILE_DEF "-DUSE_CMAKE")

# find my cmake modules here...
list(APPEND CMAKE_MODULE_PATH ${CMAKE_CURRENT_SOURCE_DIR}/cmake/Modules)

# check error
if(" ${CMAKE_CURRENT_SOURCE_DIR}" STREQUAL " ${CMAKE_CURRENT_BINARY_DIR}")
  message(
    FATAL_ERROR
      "[ERROR] :: Build directory and Source directory cannot be same.")
endif()

# make directories include(${PROJECT_SOURCE_DIR}/cmake/makeDirs.cmake)
#
include(GNUInstallDirs)

set(CMAKE_Fortran_MODULE_DIRECTORY
    ${CMAKE_CURRENT_BINARY_DIR}/${CMAKE_INSTALL_INCLUDEDIR})

set(CMAKE_LIBRARY_OUTPUT_DIRECTORY
    ${CMAKE_CURRENT_BINARY_DIR}/${CMAKE_INSTALL_LIBDIR})

set(CMAKE_ARCHIVE_OUTPUT_DIRECTORY
    ${CMAKE_CURRENT_BINARY_DIR}/${CMAKE_INSTALL_LIBDIR})

set(CMAKE_RUNTIME_OUTPUT_DIRECTORY
    ${CMAKE_CURRENT_BINARY_DIR}/${CMAKE_INSTALL_BINDIR})

set(INSTALL_LIBDIR
    ${CMAKE_INSTALL_LIBDIR}
    CACHE PATH "Installation location of lib")

set(INSTALL_INCLUDEDIR
    ${CMAKE_INSTALL_INCLUDEDIR}
    CACHE PATH "Installation location of module files")

set(INSTALL_BINDIR
    ${CMAKE_INSTALL_BINDIR}
    CACHE PATH "Installation location of binary files")

if(WIN32 AND NOT CYGWIN)
  set(DEF_INSTALL_CMAKEDIR CMake)
else()
  set(DEF_INSTALL_CMAKEDIR share/cmake/${PROJECT_NAME})
endif()

set(INSTALL_CMAKEDIR
    ${DEF_INSTALL_CMAKEDIR}
    CACHE PATH "Installation directory for CMake files")

foreach(p LIB BIN INCLUDE CMAKE)
  file(TO_NATIVE_PATH ${CMAKE_INSTALL_PREFIX}/${INSTALL_${p}DIR} _path)
  message(STATUS "Installing ${p} componenets to ${_path}")
endforeach()

option(BUILD_SHARED_LIBS "Build shared library" ON)

if(BUILD_SHARED_LIBS)
  message(STATUS "${PROJECT_NAME} will be built as a shared library.")
  add_library(${PROJECT_NAME} SHARED "")
  set_property(TARGET ${PROJECT_NAME} PROPERTY POSITION_INDEPENDENT_CODE TRUE)
else()
  message(STATUS "${PROJECT_NAME} will be built as a static library.")
  add_library(${PROJECT_NAME} STATIC "")
endif()

message(
  STATUS
    "[INFO] :: Is the Fortran compiler loaded? ${CMAKE_Fortran_COMPILER_LOADED}"
)

if(CMAKE_Fortran_COMPILER_LOADED)
  message(STATUS "[INFO] :: Fortran compiler: ${CMAKE_Fortran_COMPILER_ID}")
  message(
    STATUS
      "[INFO] :: Fortran compiler version is: ${CMAKE_Fortran_COMPILER_VERSION}"
  )
endif()

if(NOT CMAKE_BUILD_TYPE)
  set(CMAKE_BUILD_TYPE
      Release
      CACHE STRING "Build type" FORCE)
endif()

if(${CMAKE_Fortran_COMPILER_ID} STREQUAL "GNU" OR Fortran_COMPILER_NAME MATCHES
                                                  "gfortran*")

  list(
    APPEND
    FORTRAN_FLAGS
    "-ffree-form"
    "-ffree-line-length-none"
    "-std=f2018"
    "-fimplicit-none"
    "-fno-range-check")

  list(APPEND FORTRAN_FLAGS_RELEASE "-O3")

  if(APPLE)
    list(
      APPEND
      FORTRAN_FLAGS_DEBUG
      "-fbounds-check"
      "-g"
      "-fbacktrace"
      "-Wextra"
      "-Wall"
      # "-fprofile-arcs"
      "-ftest-coverage"
      "-Wimplicit-interface")

  else()
    list(
      APPEND
      FORTRAN_FLAGS_DEBUG
      "-fbounds-check"
      "-g"
      "-fbacktrace"
      "-Wextra"
      "-Wall"
      # "-fprofile-arcs"
      "-ftest-coverage"
      "-Wimplicit-interface")
  endif()

elseif(${CMAKE_Fortran_COMPILER_ID} STREQUAL "Intel" OR Fortran_COMPILER_NAME
                                                        MATCHES "ifort*")
  list(APPEND FORTRAN_FLAGS "-r8" "-W1")
  list(APPEND FORTRAN_FLAGS_RELEASE "-O3")
  list(
    APPEND
    FORTRAN_FLAGS_DEBUG
    "-O0"
    "-traceback"
    "-g"
    "-debug all"
    "-check all"
    "-ftrapuv"
    "-warn"
    "nointerfaces")

elseif(${CMAKE_Fortran_COMPILER_ID} STREQUAL "XL" OR Fortran_COMPILER_NAME
                                                     MATCHES "xlf*")

  list(APPEND FORTRAN_FLAGS "-q64" "-qrealsize=8" "-qsuffix=f=f90:cpp=f90")
  list(APPEND FORTRAN_FLAGS_RELEASE "-O3" "-qstrict")
  list(APPEND FORTRAN_FLAGS_DEBUG "-O0" "-g" "-qfullpath" "-qkeepparm")

else()
  message(ERROR "[ERROR] :: No optimized Fortran compiler flags are known")
endif()

cmake_print_variables(FORTRAN_FLAGS)
cmake_print_variables(FORTRAN_FLAGS_RELEASE)
cmake_print_variables(FORTRAN_FLAGS_DEBUG)

# include(${PROJECT_SOURCE_DIR}/cmake/targetCompileOpts.cmake)
target_compile_options(
  ${PROJECT_NAME}
  PRIVATE ${TARGET_COMPILE_OPT} ${FORTRAN_FLAGS}
          "$<$<CONFIG:Debug>:${FORTRAN_FLAGS_DEBUG}>"
          "$<$<CONFIG:Release>:${FORTRAN_FLAGS_RELEASE}>")

# include(${PROJECT_SOURCE_DIR}/cmake/targetIncludeDirs.cmake)
target_include_directories(
  ${PROJECT_NAME} PUBLIC $<BUILD_INTERFACE:${CMAKE_Fortran_MODULE_DIRECTORY}>
                         $<INSTALL_INTERFACE:${INSTALL_INCLUDEDIR}>)

# include(${PROJECT_SOURCE_DIR}/cmake/targetProperties.cmake) target properties
set_target_properties(
  ${PROJECT_NAME}
  PROPERTIES POSITION_INDEPENDENT_CODE 1
             SOVERSION ${VERSION_MAJOR}
             OUTPUT_NAME ${PROJECT_NAME}
             LIBRARY_OUTPUT_DIRECTORY ${CMAKE_LIBRARY_OUTPUT_DIRECTORY}
             ARCHIVE_OUTPUT_DIRECTORY ${CMAKE_LIBRARY_OUTPUT_DIRECTORY}
             RUNTIME_OUTPUT_DIRECTORY ${CMAKE_RUNTIME_OUTPUT_DIRECTORY}
             MACOSX_RPATH ON
             WINDOWS_EXPORT_ALL_SYMBOLS ON)

# include(${PROJECT_SOURCE_DIR}/cmake/targetCompileDefs.cmake)
option(USE_REAL32 OFF)
option(USE_REAL64 ON)

if(USE_REAL32)
  list(APPEND TARGET_COMPILE_DEF "-DUSE_Real32")
endif()

if(USE_REAL64)
  list(APPEND TARGET_COMPILE_DEF "-DUSE_Real64")
endif()

option(USE_INT32 ON)
if(USE_INT32)
  list(APPEND TARGET_COMPILE_DEF "-DUSE_Int32")
endif()

option(USE_INT64 OFF)
if(USE_INT64)
  list(APPEND TARGET_COMPILE_DEF "-DUSE_Int64")
endif()

list(APPEND TARGET_COMPILE_DEF "-D${CMAKE_HOST_SYSTEM_NAME}_SYSTEM")

# DEFINE DEBUG
if(${CMAKE_BUILD_TYPE} STREQUAL "Debug")
  list(APPEND TARGET_COMPILE_DEF "-DDEBUG_VER")
endif()

# include(${PROJECT_SOURCE_DIR}/cmake/install.cmake) Installation
install(
  DIRECTORY ${CMAKE_Fortran_MODULE_DIRECTORY}
  DESTINATION "./"
  COMPONENT "${PROJECT_NAME}")

install(
  EXPORT ${TARGETS_EXPORT_NAME}
  FILE "${TARGETS_EXPORT_NAME}.cmake"
  NAMESPACE ${namespace}::
  DESTINATION ${INSTALL_CMAKEDIR}
  COMPONENT "${PROJECT_NAME}")

include(CMakePackageConfigHelpers)

write_basic_package_version_file(
  "${CMAKE_CURRENT_BINARY_DIR}/${PROJECT_NAME}ConfigVersion.cmake"
  VERSION "${PROJECT_VERSION}"
  COMPATIBILITY AnyNewerVersion)

configure_package_config_file(
  ${CMAKE_CURRENT_SOURCE_DIR}/cmake/Config.cmake.in
  ${CMAKE_CURRENT_BINARY_DIR}/${PROJECT_NAME}Config.cmake
  INSTALL_DESTINATION ${INSTALL_CMAKEDIR}
  PATH_VARS INSTALL_INCLUDEDIR)

install(
  FILES "${CMAKE_CURRENT_BINARY_DIR}/${PROJECT_NAME}Config.cmake"
        "${CMAKE_CURRENT_BINARY_DIR}/${PROJECT_NAME}ConfigVersion.cmake"
  DESTINATION ${INSTALL_CMAKEDIR}
  COMPONENT "${PROJECT_NAME}-dev")

# linking easifemClasses, 
# this easifemClasses library is already linked with easifemBase
# so no need to link with easifemBase again.
find_package(easifemClasses REQUIRED)
if(easifemBase_FOUND)
  message(STATUS "FOUND easifemClasses")
else()
  message(ERROR "NOT FOUND easifemClasses")
endif()
target_link_libraries(${PROJECT_NAME} PUBLIC easifemClasses::easifemClasses)

# Add source files
include(src/modules/CMakeLists.txt)
include(src/submodules/CMakeLists.txt)

# this should be in the end.
target_compile_definitions(${PROJECT_NAME} PUBLIC ${TARGET_COMPILE_DEF})
message(STATUS "[INFO] :: Compiler definition : ${TARGET_COMPILE_DEF}")

install(
  TARGETS ${PROJECT_NAME} ${C_PROJECTS}
  EXPORT ${TARGETS_EXPORT_NAME}
  COMPONENT "${PROJECT_NAME}"
  ARCHIVE DESTINATION ${INSTALL_LIBDIR}
  RUNTIME DESTINATION ${INSTALL_BINDIR}
  LIBRARY DESTINATION ${INSTALL_LIBDIR})

# include(${PROJECT_SOURCE_DIR}/cmake/packaging.cmake)
```

</div>
</details>

The above see make file needs `Config.cmake.in` file. The content of this file is given below.

```cmake title="Config.cmake.in"
@PACKAGE_INIT@

FIND_PACKAGE(easifemClasses REQUIRED)

set_and_check(
  "@PROJECT_NAME@_INCLUDE_DIR" "@PACKAGE_INSTALL_INCLUDEDIR@")

include(
  "${CMAKE_CURRENT_LIST_DIR}/@TARGETS_EXPORT_NAME@.cmake")

check_required_components(
    "@PROJECT_NAME@"
  )
```

## Configuration for easifem CLI.

Now that we have added the source code and setup the CMake files. We need to specify the toml configuration files for the kernel, so that we can build and install easifemOneDimElasticity kernel using easifem CLI. To do so, create a file called `oneDimElasticity.toml` in the directory where easifem plugins are kept. In our case it is kept at `~/.config/easifem/plugins/oneDimElasticity.toml`. The content of this file is given below.

```toml title="oneDimElasticity.toml"
name = "oneDimElasticity"
isActive = true
buildSystem = "cmake"
git = 'github.com/easifem/oneDimElasticity.git'
sourceDir = "${HOME}/Dropbox/easifem/oneDimElasticity"
installDir = "${HOME}/.easifem/install/oneDimElasticity/"
buildType = "Debug"
buildSharedLibs = true
buildStaticLibs = true
libName = "easifemOneDimElasticity"
targetName = "easifemOneDimElasticity"
projectName = "easifemOneDimElasticity"

runtest = true
license = "GPL3"
# buildOptions = [ "-D USE_GMSH_SDK:BOOL=ON"]

dependencies = ["classes"]
```

## Building the kernel by using easifem CLI

To build the kernel using easifem CLI, run the following command.

```bash
easifem dev oneDimElasticity
```

## Installing the kernel by using easifem CLI

To install the kernel using easifem CLI, run the following command.

```bash
easifem install oneDimElasticity
```

To install the kernel with downloading the files from git, that is, by using the local source files, use the following command. In this case you must specify the sourceDir option in the above toml file.

```bash
easifem install oneDimElasticity --no-download
```
