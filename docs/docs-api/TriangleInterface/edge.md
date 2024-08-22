# edge file

<!-- markdownlint-disable MD041 MD013 MD033 MD012 -->

```txt
*   First line: <# of edges> <# of boundary markers (0 or 1)>
*   Following lines: <edge #> <endpoint> <endpoint> \[boundary marker\]
```

- Blank lines and comments prefixed by `#` may be placed anywhere.
- Edges are numbered consecutively, starting from one or zero.
- Endpoints are indices into the corresponding [node file](node.md)

:::note
Triangle can produce edge files (use the e switch), but cannot read them.
The optional column of boundary markers is suppressed by the `B` switch.
:::

In Voronoi diagram, one also finds a special kind of edge that is an infinite ray with only one endpoint. For these edges, a different format is used:

```bash title="results"
<edge #> <endpoint> -1 <direction x> <direction y>
```

Here, the `direction` is a floating-point vector that indicates the direction of the infinite ray.
