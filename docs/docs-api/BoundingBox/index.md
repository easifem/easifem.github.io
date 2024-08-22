---
sidebar_position: 1
date: 2023-06-12
update: 2023-06-12
status: stable
docs: done
extpkgs: none
category:
  - Utility
tags:
  - utility
---

# BoundingBox

<!-- markdownlint-disable MD033 -->

Bounding box defines the bounding box.

import EXAMPLE20 from "./BoundingBox_.md";

<EXAMPLE20 />

## Getting started

### Getting max and min

You can get max and min by using following operators:

- `.xmin.`
- `.xmax.`
- `.ymin.`
- `.ymax.`
- `.zmin.`
- `.zmax.`

<details>
<summary>See an example</summary>
<div>

import EXAMPLE41 from "./examples/_MinMax_test_1.md";

<EXAMPLE41 />

</div>
</details>

### Getting size

We can get the diameter of the box by using the following functions:

- `GetDiameter` It returns the diameter of the box.
- `GetDiameterSqr` It returns the square of diameter of the box
- `GetRadius` It returns the radius
- `GetRadiusSqr` It returns the square of radius.

<details>
<summary>See examples</summary>
<div>

import EXAMPLE61 from "./examples/_Size_test_1.md";

<EXAMPLE61 />

</div>
</details>

## All methods

import DocCardList from '@theme/DocCardList';

<DocCardList />
