---
title: macOS
sidebar_position: 7
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

In this section you will perform a quick installation of easifem library and run some sample programs.

Following steps are performed in this section.

- Installing `easifem` command line interface.
- Set up the environment variables by using `easifem` CLI.
- Install `easifem` library.

:::caution
It is recommended that you read (and follow) the steps given below to quickly install `easifem`. However, due to any reason, if you do not want to read the instruction given below, then just copy and paste the command given below.
:::

<Tabs>
<TabItem value="bash" label="bash/zsh" default>

<<<<<<< HEAD
=======

>>>>>>> 4d7e529d (removing conflicts in easifemGo)
<span class="badge badge--info"> For bash/zsh shell </span>

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)" && \
brew update && brew upgrade && \ 
brew install gcc gfortran libomp curl git python3 cmake ninja lapack openblas hdf5 plplot gnuplot doxygen gtk4 lua go && \
git clone https://github.com/easifem/config.git  ~/.config/easifem && \
source ~/.config/easifem/easifemvar.sh && \
easifem install extpkgs base classes
```

</TabItem>

<TabItem value="fish" label="fish">

<span class="badge badge--info"> For fish shell </span>

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)" && \
brew update && brew upgrade && \ 
brew install gcc gfortran libomp curl git python3 cmake ninja lapack openblas hdf5 plplot gnuplot doxygen gtk4 lua go && \
git clone https://github.com/easifem/config.git  ~/.config/easifem && \
source ~/.config/easifem/easifemvar.fish && \
easifem install extpkgs base classes
```

</TabItem>
</Tabs>

## Step by step building

### Step 1: Install system dependencies

```bash
brew install gcc gfortran libomp curl git python3 cmake ninja lapack openblas hdf5 plplot gnuplot doxygen gtk4 lua go
```

:::caution "Clang vs GCC"
If you are using Clang compiler then make sure to set `LDFLAGS` and `CPPFLAGS` as follows (otherwise, openmp cannot be used)

**Fish shell**

```bash
set -gx LDFLAGS "-L/opt/homebrew/opt/libomp/lib"
set -gx CPPFLAGS "-I/opt/homebrew/opt/libomp/include"
```

**Bash or Zsh shell**

```bash
export LDFLAGS="-L/opt/homebrew/opt/libomp/lib"
export CPPFLAGS="-I/opt/homebrew/opt/libomp/include"
```

:::

### Step 2: Install `easifem` CLI

> You can read more about `easifem` command line interface [here](../easifemGO)

:::caution
make sure go language is installed. If not then run `brew install go`
:::

To install `easifem` command line interface, you can use the following command.

```bash
go install github.com/easifem/easifemGO/cmd/easifem@latest
```

:::tip
To install the development version of `easifem`, you can use the following command.

```bash
go install github.com/easifem/easifemGO/cmd/easifem@dev
```

:::

Now `easifem` is installed on your system, you can check the location by using the command `which easifem`.

You can get the help by using the following command.

```bash
easifem help
```

### Step 3: Setting up environment variables

To configure easifem and to get snippets it is better to clone the git repository from `github.com/easifem/config` to `$HOME/.config/easifem` by using following.

```bash
git clone https://github.com/easifem/config.git  ~/.config/easifem
```

> You can read more more about the configuration files [here](../easifemGO/config.md).

If your active shell is `zsh` or `bash`, then please run the following command.

```bash title="for bash or zsh shell only"
# add to ~/.bashrc or ~/.zshrc
source ~/.config/easifem/easifemvar.sh
```

If your active shell is `fish`, then run the following command.

```bash title="for fish shell"
# add to ~/.config/fish/config.fish
source ~/.config/easifem/easifemvar.fish
```

<details>
<summary>Check your shell</summary>
<div>

You can check your active shell by using the following command.

```bash
echo $SHELL
```

</div>
</details>

Now, you need to modify the shell file by adding following lines.

<details>
<summary>Click here to see how to modify the shell(recommended)</summary>
<div>

If you do not want to source the `easifemvar` files every time you open a new terminal window, then please add following lines to your shell configuration.

<Tabs>

<TabItem value="1" label="Bash Shell">

If you are using `bash` shell, then you can place `easifemvar.sh` in your shell. Open `~/.bashrc` in the editor, and add the following line at the end of the file.

```bash
source ${HOME}/.config/easifem/easifemvar.sh
```

- Save the file and exit.
- Restart your terminal.

</TabItem>

<TabItem value="2" label="Zsh Shell">

If you are using the `Zsh` shell, then you can place `easifemvar.sh` in your shell. Open `~/.zshrc` file in the editor, and add the following line at the end of the file:

```bash
source ${HOME}/.config/easifem/easifemvar.sh
```

- Save the file and exit.
- Restart your terminal.

</TabItem>

<TabItem value="3" label="Fish Shell">

If you are using `Fish` shell, then you can place `easifemvar.fish` in your shell. For fish shell, open `~/.config/fish/config.fish` in the editor and add the following line at the end of the file:

```bash
source $HOME/.config/easifem/easifemvar.fish
```

- Save the file and exit.
- Restart your terminal.

</TabItem>

</Tabs>

</div>
</details>

### Step 4: install easifem

```bash
easifem install extpkgs base classes
```
