# neigh file

<!-- markdownlint-disable MD041 MD013 MD033 MD012 -->

```bash title="results"
First line: <# of triangles> <# of neighbors per triangle (always 3)>
Following lines: <triangle #> <neighbor> <neighbor> <neighbor>
```

- Blank lines and comments prefixed by `#` may be placed anywhere.
- Triangles are numbered consecutively, starting from one or zero.
- Neighbors are indices into the corresponding .ele file.
- An index of -1 indicates no neighbor (because the triangle is on an exterior boundary).
- The first neighbor of triangle i is opposite the first corner of triangle i, and so on.

Triangle can produce .neigh files (use the -n switch), but cannot read them.
