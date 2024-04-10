---
sidebar_position: 1
date: 2024-04-09 
update: 2024-04-09 
status: stable
docs: done
extpkgs: none
category: 
  - Tree
  - Container
  - DataStructures
tags: 
  - basis
  - kdtree
---

# Kdtree2

Kdtree2 is k-d tree implementation by Matthew B. Kennel. The original paper is available at [arXiv](https://arxiv.org/abs/physics/0408067).

<!-- markdownlint-disable-file MD013 MD033-->

This module provides following data types:

- [`Kdtree2_`](./Kdtree2_.md)
- [`Kdtree2Result_`](./Kdtree2Result_.md)
- [`Kdtree2Node_`](./Kdtree2Node_.md)

This module provides following routines to create tree and destroy them.

- [`kdtree2_create`](./Kdtree2Node_.md)
- [`kdtree2_destroy`](./Kdtree2_Destroy.md)

Following methods are available for getting n-nearest neighbours.

- [`kdtree2_n_nearest`](./Kdtree2_n_nearest.md)
- [`kdtree2_n_nearest_around_point`](Kdtree2_n_nearest_around_point.md)

Following methods are available for getting neighbours within radius r.

- [`kdtree2_r_nearest`](./Kdtree2_r_nearest.md)
- [`kdtree2_r_nearest_around_point`](./Kdtree2_r_nearest_around_point.md)

Following methods are available for counding points within radius r.

- [`kdtree2_r_count`](./Kdtree2_r_count.md)
- [`kdtree2_r_count_around_point`](./Kdtree2_r_count_around_point.md)
- `kdtree2_sort_results`

## All methods

import DocCardList from '@theme/DocCardList';

<DocCardList />
