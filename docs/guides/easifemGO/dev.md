---
sidebar_position: 4
title: dev
---

The dev subcommand is useful for developers of easifem. It allows you to rebuild base, classes library.

How to use it:

```bash
easifem dev pkgname [flags]
```

```bash
easifem  dev base
```

```bash
easifem dev classes
```

The library will not install the package. It will just build it, and show warnings and errors.
It will always build in the debug mode. We never download the project.
