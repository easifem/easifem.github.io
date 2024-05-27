# node file

<!-- markdownlint-disable MD041 MD013 MD033 MD012 -->

```txt
First line: <# of vertices> <dimension (must be 2)> <# of attributes> <# of boundary markers (0 or 1)>
Remaining lines: <vertex #> <x> <y> [attributes] [boundary marker]
```

- Blank lines and comments prefixed by `#' may be placed anywhere.
- Vertices must be numbered consecutively, starting from one or zero.
- The attributes, which are typically floating-point values of physical quantities (such as mass or conductivity) associated with the nodes of a finite element mesh, are copied unchanged to the output mesh.
- If -q, -a, -u, or -s is selected, each new Steiner point added to the mesh will have quantities assigned to it by linear interpolation.
- If the fourth entry of the first line is `1', the last column of the remainder of the file is assumed to contain boundary markers.
- Boundary markers are used to identify boundary vertices and vertices resting on PSLG segments.
- The .node files produced by Triangle contain boundary markers in the last column unless they are suppressed by the `B` switch.
