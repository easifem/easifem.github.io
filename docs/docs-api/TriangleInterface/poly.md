# `poly` (PSLG)

<!-- markdownlint-disable MD041 MD013 MD033 MD012 -->

Triangle: `poly` files `poly` files

```txt
- First line: <# of vertices> <dimension (must be 2)> <# of attributes> <# of boundary markers (0 or 1)>
- Following lines: <vertex #> <x> <y> \[attributes\] \[boundary marker\]
- One line: <# of segments> <# of boundary markers (0 or 1)>
- Following lines: <segment #> <endpoint> <endpoint> \[boundary marker\]
- One line: <# of holes>
- Following lines: <hole #> <x> <y>
- Optional line: <# of regional attributes and/or area constraints>
- Optional following lines: <region #> <x> <y> <attribute> <maximum area>
```

A `poly` file represents a PSLG, as well as some additional information.

:::note
PSLG stands for Planar Straight Line Graph, a term familiar to computational geometers. By definition, a PSLG is just a list of vertices and segments.
:::

A `poly` file can also contain information about holes and concavities, as well as regional attributes and constraints on the areas of triangles.

## Vertices

- The first section lists all the vertices, and is identical to the format of `node` files.
- `# of vertices` may be set to zero to indicate that the vertices are listed in a separate `node` file; `poly` files produced by Triangle always have this format. A vertex set represented this way has the advantage that it may easily be triangulated with or without segments.

## Segments

- The second section lists the segments.
- Segments are edges whose presence in the triangulation is enforced (although each segment may be subdivided into smaller edges).
- Each segment is specified by listing the indices of its two endpoints.
- This means that you must include its endpoints in the vertex list.
- Each segment, like each vertex, may have a boundary marker.

- If `q`, `a`, `u`, and `s` are NOT selected, Triangle will produce a constrained Delaunay triangulation (CDT), in which each segment appears as a single edge in the triangulation.

- If `q`, `a`, `u`, or `s` is SELECTED, Triangle will produce a conforming constrained Delaunay triangulation (CCDT), in which segments may be subdivided into smaller edges.
- If `D` is selected as well, Triangle will produce a conforming Delaunay triangulation, so every triangle is Delaunay, and not just constrained Delaunay.

## Holes

- The third section lists holes (and concavities, if c is selected) in the triangulation.
- Holes are specified by identifying a point inside each hole.
- After the triangulation is formed, Triangle creates holes by eating triangles, spreading out from each hole point until its progress is blocked by PSLG segments; you must be careful to enclose each hole in segments, or your whole triangulation might be eaten away. If the two triangles abutting a segment are eaten, the segment itself is also eaten.

:::warning
Do not place a hole directly on a segment; if you do, Triangle will choose one side of the segment arbitrarily.
:::

## Region

The optional fourth section lists regional attributes (to be assigned to all triangles in a region) and regional constraints on the maximum triangle area.

Triangle will read this section only if the `A` switch is used or the `a` switch is used without a number following it, and the `r` switch is NOT used.

Regional attributes and area constraints are propagated in the same manner as holes; you specify a point for each attribute and/or constraint, and the attribute and/or constraint will affect the whole region (bounded by segments) containing the point.

If two values are written on a line after the x and y coordinates, the first such value is assumed to be a regional attribute (but will only be applied if the `A` switch is selected), and the second value is assumed to be a regional area constraint (but will only be applied if the `a` switch is selected). You may specify just one value after the coordinates, which can serve as both an attribute and an area constraint, depending on the choice of switches. If you are using the `A` and `a` switches simultaneously and wish to assign an attribute to some region without imposing an area constraint, use a negative maximum area.

## Miscellaneous

- Blank lines and comments prefixed by `#` may be placed anywhere.
- Vertices, segments, holes, and regions must be numbered consecutively, starting from one or zero. (The choice to begin the numbering from one or zero must be consistent across all objects.)
- When a triangulation is created from a `poly` file, you must either enclose the entire region to be triangulated in PSLG segments, or use the c switch, which encloses the convex hull of the input vertex set.
- If you do not use the c switch, Triangle will eat all triangles that are not enclosed by segments; if you are not careful, your whole triangulation may be eaten away. If you do use the c switch, you can still produce concavities by the appropriate placement of holes just within the convex hull.
- An ideal PSLG has no intersecting segments, nor any vertices that lie upon segments (except, of course, the endpoints of each segment.)
- You aren't required to make your `poly` files ideal, but you should be aware of what can go wrong.
- Segment intersections are relatively safe Triangle will calculate the intersection points for you and add them to the triangulation as long as your machine's floatingpoint precision doesn't become a problem. You are tempting the fates if you have three segments that cross at the same location, and expect Triangle to figure out where the intersection point is. Thanks to floatingpoint roundoff error, Triangle will probably decide that the three segments intersect at three different points, and you will find a minuscule triangle in your output unless Triangle tries to refine the tiny triangle, uses up the last bit of machine precision, and fails to terminate at all.
- You're better off putting the intersection point in the input files, and manually breaking up each segment into two.
- Similarly, if you place a vertex at the middle of a segment, and hope that Triangle will break up the segment at that vertex, you might get lucky. On the other hand, Triangle might decide that the vertex doesn't lie precisely on the line, and you'll have a needlesharp triangle in your output or a lot of tiny triangles if you're generating a quality mesh.
- When Triangle reads a `poly` file, it also writes a `poly` file, which includes all edges that are subsegments of input segments.
- If the `c` switch is used, the output `poly` file will also include all of the edges on the convex hull.
- Hence, the output `poly` file is useful for finding edges associated with input segments and setting boundary conditions in finite element simulations.
- More importantly, you will need it if you plan to refine the output mesh, and don't want segments to be missing in later triangulations.
