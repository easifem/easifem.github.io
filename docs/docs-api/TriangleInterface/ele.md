# ele file

<!-- markdownlint-disable MD041 MD013 MD033 MD012 -->

```txt
- First line: <# of triangles> <nodes per triangle> <# of attributes>
- Remaining lines: <triangle #> <node> <node> <node> ... [attributes]
```

Blank lines and comments prefixed by `#' may be placed anywhere. Triangles must be numbered consecutively, starting from one or zero. Nodes are indices into the corresponding .node file. The first three nodes are the corner vertices, and are listed in counterclockwise order around each triangle. (The remaining nodes, if any, depend on the type of finite element used.)

As in .node files, the attributes are typically floating-point values of physical quantities (such as mass or conductivity) associated with the elements (triangles) of a finite element mesh. Because there is no simple mapping from input to output triangles, an attempt is made to interpolate attributes, which may result in a good deal of diffusion of attributes among nearby triangles as the triangulation is refined. Attributes do not diffuse across segments, so attributes used to identify segment-bounded regions remain intact.

In output .ele files, all triangles have three nodes each unless the -o2 switch is used, in which case subparametric quadratic elements with six nodes are generated. The fourth, fifth, and sixth nodes lie on the midpoints of the edges opposite the first, second, and third vertices.
