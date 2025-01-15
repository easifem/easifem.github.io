---
title: Ubuntu
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

In this section you will perform a quick installation of easifem library and run some sample programs.

Following steps are performed in this section.

- Installing `easifem` command line interface.
- Set up the environment variables by using `easifem` CLI.
- Install easifem library.

<Tabs>
<TabItem value="bash" label="bash/zsh" default>

It is recommended that you read (and follow) the steps given below to quickly install `easifem`. However, due to any reason, if you do not want to read the instruction given below, then just copy and paste the command given below.

<span class="badge badge--info"> For bash/zsh shell </span>

```bash
sudo apt-get update && \
sudo apt-get install -y gfortran gcc libomp-dev curl git \
python3 python3-pip cmake ninja-build \
liblapack-dev libopenblas-dev libhdf5-dev \
libplplot-dev plplot-driver-cairo libboost-all-dev \
gnuplot doxygen libgtk-4-dev lua5.4 liblua5.4-dev golang-go \ && 
git clone https://github.com/easifem/config.git  ~/.config/easifem && \
source ~/.config/easifem/easifemvar.sh && \
easifem install extpkgs base classes
```

</TabItem>

<TabItem value="fish" label="fish">

<span class="badge badge--info"> For fish shell </span>

It is recommended that you read (and follow) the steps given below to quickly install `easifem`. However, due to any reason, if you do not want to read the instruction given below, then just copy and paste the command given below.

```bash
sudo apt-get update && \
sudo apt-get install -y gfortran gcc libomp-dev curl git \
python3 python3-pip cmake ninja-build \
liblapack-dev libopenblas-dev libhdf5-dev \
libplplot-dev plplot-driver-cairo libboost-all-dev \
gnuplot doxygen libgtk-4-dev lua5.4 liblua5.4-dev golang-go \ && 
git clone https://github.com/easifem/config.git  ~/.config/easifem && \
source ~/.config/easifem/easifemvar.fish && \
easifem install extpkgs base classes
```

</TabItem>
</Tabs>

## Build from source

### Step 1: install system dependencies

```bash
sudo apt-get update && \
sudo apt-get install -y gfortran gcc libomp-dev curl git \
python3 python3-pip cmake ninja-build \
liblapack-dev libopenblas-dev libhdf5-dev \
libplplot-dev plplot-driver-cairo libboost-all-dev lua5.4 liblua5.4-dev \
gnuplot doxygen libgtk-4-dev golang-go
```

### Step 2: Install `easifem` CLI

> You can read more about easifem command line interface [here](../easifemGO)

:::caution
make sure go language is installed.
:::

```bash
go install github.com/easifem/easifemgo
```

Now `easifemgo` is installed on your system mostly at `~/go/bin/easifemgo`

:::info 
It is recommended that you make a symlink or alias of easifemgo with name easifem. In the following text `easifem`  would mean `easifemgo`
:::

Check 

```bash
easifem --help
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
