---
sidebar_position: 2
--- 

# Configuration

After getting the configuring files go inside the directory.

```bash
cd ${HOME}/.config/easifem
```

There you will find a file  called `easifem.toml` with the following lines.

```bash
envName="dev"

[dev]
buildDir = "${HOME}/.easifem/easifem/build/"
installDir= "${HOME}/.easifem/easifem/install/"
sourceDir= "${HOME}/.easifem/easifem/src/"
lintDir= "${HOME}/.easifem/easifem/lint/"
buildType = "Debug" # "Debug", "Both"
buildSharedLibs = true
buildStaticLibs = false
buildSystem = "cmake"
```

Here, `envName` is the name of the active environment.

- `buildDir`: specifies the location where the build files will be stored.
- `installDir`: specifies the location where the EASIFEM will be installed.
- `sourceDir`: specifies the location where the source code of the components of EASIFEM will be stored.
- `buildType`; specifies the type of build. It can be `Debug`, `Release`, or `Both`.
- `buildSharedLibs`: specifies whether to build shared libraries or not.
- `buildStaticLibs`: specifies whether to build static libraries or not.
- `buildSystem`: specifies the build system to be used. Currently, it should be `cmake`.

You can modify `easifem.toml` as per your need. You can also add more environments in the configuration file as  shown below.

```bash
envName="release"

[dev]
buildDir = "${HOME}/.easifem/easifem/build/"
installDir= "${HOME}/.easifem/easifem/install/"
sourceDir= "${HOME}/.easifem/easifem/src/"
lintDir= "${HOME}/.easifem/easifem/lint/"
buildType = "Debug" # "Debug", "Both"
buildSharedLibs = true
buildStaticLibs = false
buildSystem = "cmake"

[release]
buildDir = "${HOME}/.easifem/easifem/build/"
installDir= "${HOME}/.easifem/easifem/install/"
sourceDir= "${HOME}/.easifem/easifem/src/"
lintDir= "${HOME}/.easifem/easifem/lint/"
buildType = "Release" # "Debug", "Both"
buildSharedLibs = true
buildStaticLibs = false
buildSystem = "cmake"
```

:::info 
When we set envName="release" in the configuration file, the active environment will be `release`.
:::
