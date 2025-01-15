To install `easifem` you need to define following environment variables in your shell.

- **`EASIFEM_INSTALL_DIR`**: The location of file system where easifem  will be installed. For example, `/opt`, `${HOME}`, `/usr/local/`. Default location is `$HOME/.easifem/easifem/install/`.
- **`EASIFEM_SOURCE_DIR`**: The location of file system where the source code of easifem will be downloaded. For example, `~/.easifem/easifem/src/`.
- **`EASIFEM_BUILD_DIR`**: The location of file system where build files will be stored. These files are necessary for installation, and after installation you can remove them if you want. Always keep your build directory separated from your source and install directory. For example, `~/.easifem/easifem/build/`.

The above-mentioned environment variables are the fundamental environment variables, which are used for defining other variables as shown in the following table.

| Env-var name              | description                                                                                      | example                                         |
| :------------------------ | :----------------------------------------------------------------------------------------------- | :---------------------------------------------- |
| **`EASIFEM_INSTALL_DIR`** | Location of file system where EASIFEM library will install its components and external packages. | `~/.easifem/easifem/install/`                           |
| **`EASIFEM_SOURCE_DIR`**  | Location of file system where the source code will be downloaded.                                | `~/.easifem/easifem/src/`                               |
| **`EASIFEM_BUILD_DIR`**   | Location of file system where the build files will be stored.                                    | `~/.easifem/easifem/build/`                             |
| **`EASIFEM_BASE`**        | Location where `easifemBase` library will be installed.                                          | `EASIFEM_BASE=EASIFEM_INSTALL_DIR/base` |
| **`EASIFEM_CLASSES`**     | Location where `easifemClasses` library will be installed.                                       | `EASIFEM_INSTALL_DIR/classes`           |
| **`EASIFEM_MATERIALS`**   | Location where `easifemMaterials` library will be installed.                                     | `EASIFEM_INSTALL_DIR/materials`         |
| **`EASIFEM_KERNELS`**     | Location where `easifemKernels` library will be installed.                                       | `EASIFEM_INSTALL_DIR/kernels`           |

:::note
All these variables will be setup by using the configuration file `easifem.toml` as mentioned [here](/guides/easifemGO/config). This configuration is used by the easifem command line interface.
:::

## Automatic setup of environment variables

:::note
First, make sure you have successfully installed the `easifem` CLI as mentioned in [Step-1](install-easifem-cli).
:::

You can set up the environment variables in the configuration file `easifem.toml` as mentioned [here](/guides/easifemGO/config)

The easifem command line  application creates `easifemvar.sh` and `easifemvar.fish` files (in `~/.config/easifem/`) which adds some path to `LD_LIBRARY_PATH` path. The first is useful if your shell is bash or zsh, and the latter file is useful for fish shell. 

- For `bash` and `zsh` shell, the name of the file is `easifemvar.sh`
- For `fish` shell, the name of the file is `easifemvar.fish`.

Then, you can run following command to bring the changes in your current shell session.

<span class="badge badge--info"> For bash and zsh shell" </span>

```bash
source ${HOME}/.config/easifem/easifemvar.sh
```

<span class="badge badge--info"> For fish shell</span>

```bash
# easifem related
if test -f ~/.config/easifem/easifemvar.fish
    source ~/.config/easifem/easifemvar.fish
end
```

<details>
<summary>Click here to see how to check your SHELL</summary>
<div>

The following command will provide the information of the current shell.

```bash
echo $SHELL
```

</div>
</details>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info Modify the SHELL
Now you need to a line to your default shell, the process is described below for `Bash`, `Zsh`, and `Fish` shell.
:::

<Tabs>

<TabItem value="1" label="Bash Shell">

If you are using `Bash` shell, then you can place `easifemvar.sh` in your shell. Open `~/.bashrc` in the editor, and add the following line at the end of the file.

```bash
source ${HOME}/.config/easifem/easifemvar.sh
```

- Save the file and exit.
- Restart your terminal, and try following command.

```bash
echo $EASIFEM_INSTALL_DIR
```

</TabItem>

<TabItem value="2" label="Zsh Shell">

If you are using the `Zsh` shell, then you can place `easifemvar.sh` in your shell. Open `~/.zshrc` file in the editor, and add the following line at the end of the file:

```bash
source ${HOME}/.config/easifem/easifemvar.sh
```

- Save the file and exit.
- Restart your terminal, and try following command.

```bash
echo $EASIFEM_INSTALL_DIR
```

</TabItem>

<TabItem value="3" label="Fish Shell">

If you are using `Fish` shell, then you can place `easifemvar.fish` in your shell. For fish shell, open `~/.config/fish/config.fish` in the editor and add the following line at the end of the file:

```bash
source $HOME/.config/easifem/easifemvar.fish
```

- Save the file and exit.
- Restart your terminal, and try following command.

```bash
echo $EASIFEM_INSTALL_DIR
```

</TabItem>

<TabItem value="close" label="↢">

</TabItem>
</Tabs>

