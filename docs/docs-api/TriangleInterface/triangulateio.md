# triangulateio

<!-- markdownlint-disable MD041 MD013 MD033 MD012 -->

```c
struct triangulateio {
  REAL *pointlist;                                               /* In / out */
  REAL *pointattributelist;                                      /* In / out */
  int *pointmarkerlist;                                          /* In / out */
  int numberofpoints;                                            /* In / out */
  int numberofpointattributes;                                   /* In / out */

  int *trianglelist;                                             /* In / out */
  REAL *triangleattributelist;                                   /* In / out */
  REAL *trianglearealist;                                         /* In only */
  int *neighborlist;                                             /* Out only */
  int numberoftriangles;                                         /* In / out */
  int numberofcorners;                                           /* In / out */
  int numberoftriangleattributes;                                /* In / out */

  int *segmentlist;                                              /* In / out */
  int *segmentmarkerlist;                                        /* In / out */
  int numberofsegments;                                          /* In / out */

  REAL *holelist;                        /* In / pointer to array copied out */
  int numberofholes;                                      /* In / copied out */

  REAL *regionlist;                      /* In / pointer to array copied out */
  int numberofregions;                                    /* In / copied out */

  int *edgelist;                                                 /* Out only */
  int *edgemarkerlist;            /* Not used with Voronoi diagram; out only */
  REAL *normlist;                /* Used only with Voronoi diagram; out only */
  int numberofedges;                                             /* Out only */
};
```

`triangulateio` is used to pass data into and out of the `triangulate()` procedure.

Arrays are used to store points, triangles, markers, and so forth.

:::note
In all cases, the first item in any array is stored starting at index [0]. However, that item is item number `1` unless the `z` switch is used, which is item number `0`. Hence, you may find it easier to index points (and triangles in the neighbor list) if you use the `z` switch. Unless, of course, you`re calling Triangle from a Fortran program.
:::

Description of fields (except the `numberof` fields, which are obvious):

## `pointlist` (In and out)

- An array of point coordinates.
- The first point's x coordinate is at index[0] and its y coordinate at index [1], followed by the coordinates of the remaining points.
- Each point occupies two real numbers.

## `pointattributelist` (In and out)

- An array of point attributes.
- Each point's attributes occupy `numberofpointattributes` real numbers.

## `pointmarkerlist` (In and out)

- An array of point markers
- one integer per point.

## `trianglelist` (In and out)

- An array of triangle corners.
- The first triangle's first corner is at index [0], followed by its other two corners in counterclockwise order, followed by any other nodes if the triangle represents a nonlinear element.
- Each triangle occupies `numberofcorners` integers.

## `triangleattributelist` (In and out)

- An array of triangle attributes.
- Each triangle's attributes occupy `numberoftriangleattributes` reals.

## `trianglereallist` (input only)

- An array of triangle area constraints
- one real number per triangle.
- Input only.

## `neighborlist`(output only)

- An array of triangle neighbors
- three integers per triangle.
- Output only.

## `segmentlist` (In and out)

- `segmentlist`: An array of segment endpoints.
- The first segment's endpoints are at indices [0] and [1], followed by the remaining segments.
- Two integers per segment.

## `segmentmarkerlist` (In and out)

- `segmentmarkerlist`: An array of segment markers
- one int per segment.

## `holelist` (input only)

- `holelist`: An array of holes.
- The first hole's x and y coordinates are at indices [0] and [1], followed by the remaining holes.
- Two real numbers per hole.
- Input only, although the pointer is copied to the output structure for your convenience.

## `regionalist` (input only)

- `regionlist`: An array of regional attributes and area constraints.
- Four real numbers per area constraint.

| index | comment            |
| ----- | ------------------ |
| 0     | x coordinate       |
| 1     | y coordinate       |
| 2     | regional attribute |
| 3     | maximum area       |

:::note
Each regional attribute is used only if you select the `A` switch, and each area constraint is used only if you select the `a` switch (with no number following), but omitting one of these switches does not change the memory layout.
:::

Input only, although the pointer is copied to the output structure for your convenience.

## `edgelist` (output only)

- `edgelist`: An array of edge endpoints. The first edge's endpoints are at indices [0] and [1], followed by the remaining edges.
- Two integers per edge.
- Output only.

## `edgemarkerlist` (output only)

`edgemarkerlist`: An array of edge markers; one int per edge. Output only.

## `normlist` (output only)

- `normlist`: An array of normal vectors, used for infinite rays in Voronoi diagrams.
- The first normal vector's x and y magnitudes are at indices [0] and [1], followed by the remaining vectors.
- For each finite edge in a Voronoi diagram, the normal vector written is the zero vector.
- Two real numbers per edge.
- Output only.
