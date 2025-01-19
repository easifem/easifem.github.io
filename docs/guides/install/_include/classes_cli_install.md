You can install `easifemClasses` by using the command line application.

```bash
easifem install classes
```

:::note Install both base and classes
You can install both `easifemBase` and `easifemClasses` by using the command line application.

```bash
easifem install easifem
```

:::

To install easifemClasses by using you need toml configuration file. The toml configuration file is given below.

:::note Learn more about configuration
- You can read more about the toml configuration file [here](/guides/easifemGO/config).
- The most recent toml configuration file is located at [git repository](https://github.com/easifem/config/blob/main/plugins/classes.toml).
:::

```toml
name = "classes"
isActive = true
buildSystem = "cmake"
git = 'github.com/easifem/classes.git'
sourceDir = "${HOME}/Dropbox/easifem/easifem-classes/"
buildDir = "${HOME}/.easifem/easifem/build/classes/"
installDir = "${HOME}/.easifem/easifem/install/classes/"
buildType = "Debug"
buildSharedLibs = true
buildStaticLibs = false
libName = "easifemClasses"
targetName = "easifemClasses"
projectName = "easifemClasses"

param.MAX_NODE_TO_NODE = 256
param.MAX_NODE_TO_ELEM = 128

runtest = true
license = "GPL3"

# cmakePrefixPath=["${HOME}/.easifem/easifem/install/base/"]
# buildOptions = []

dependencies = ["base"]
```
