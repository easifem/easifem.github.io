# Switches

<!-- markdownlint-disable MD041 MD013 MD033 MD012 -->

## summary

For some of the command line switches described below, you may click on the switch for detailed information.

| switch | comment                                                                                                                                                                                                                                                                      |
| ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `p`    | Triangulates a Planar Straight Line Graph `poly` file.                                                                                                                                                                                                                       |
| `r`    | Refines a previously generated mesh.                                                                                                                                                                                                                                         |
| `q`    | Quality mesh generation with no angles smaller than 20 degrees. An alternate minimum angle may be specified after the `q`.                                                                                                                                                   |
| `a`    | Imposes a maximum triangle area constraint. A fixed area constraint (that applies to every triangle) may be specified after the `a`, or varying area constraints may be read from a poly file or area file.                                                                  |
| `u`    | Imposes a user-defined constraint on triangle size.                                                                                                                                                                                                                          |
| `A`    | Assigns a regional attribute to each triangle that identifies what segment-bounded region it belongs to.                                                                                                                                                                     |
| `c`    | Encloses the convex hull with segments.                                                                                                                                                                                                                                      |
| `D`    | Conforming Delaunay: use this switch if you want all triangles in the mesh to be Delaunay, and not just constrained Delaunay; or if you want to ensure that all Voronoi vertices lie within the triangulation.                                                               |
| `j`    | Jettisons vertices that are not part of the final triangulation from the output .node file (including duplicate input vertices and vertices eaten by holes).                                                                                                                 |
| `e`    | Outputs (to an edge file) a list of edges of the triangulation.                                                                                                                                                                                                              |
| `v`    | Outputs the Voronoi diagram associated with the triangulation. Does not attempt to detect degeneracies, so some Voronoi vertices may be duplicated.                                                                                                                          |
| `n`    | Outputs (to a .neigh file) a list of triangles neighboring each triangle.                                                                                                                                                                                                    |
| `g`    | Outputs the mesh to an Object File Format (.off) file, suitable for viewing with the Geometry Center's Geomview package.                                                                                                                                                     |
| `B`    | Suppresses boundary markers in the output .node, .poly, and .edge output files.                                                                                                                                                                                              |
| `P`    | Suppresses the output .poly Saves disk space, but you lose the ability to maintain constraining segments on later refinements of the mesh.file.                                                                                                                              |
| `N`    | Suppresses the output .node file.                                                                                                                                                                                                                                            |
| `E`    | Suppresses the output .ele file.                                                                                                                                                                                                                                             |
| `I`    | Suppresses mesh iteration numbers.                                                                                                                                                                                                                                           |
| `O`    | Suppresses holes: ignores the holes in the .poly file.                                                                                                                                                                                                                       |
| `X`    | Suppresses exact arithmetic.                                                                                                                                                                                                                                                 |
| `z`    | Numbers all items starting from zero (rather than one).                                                                                                                                                                                                                      |
| `o2`   | Generates second-order subparametric elements with six nodes each.                                                                                                                                                                                                           |
| `Y`    | Prohibits the insertion of Steiner points on the mesh boundary. If specified twice (-YY), it prohibits the insertion of Steiner points on any segment, including internal segments.                                                                                          |
| `S`    | Specifies the maximum number of added Steiner points.                                                                                                                                                                                                                        |
| `i`    | Uses the incremental algorithm for Delaunay triangulation, rather than the divide-and-conquer algorithm.                                                                                                                                                                     |
| `F`    | Uses Steven Fortune's sweepline algorithm for Delaunay triangulation, rather than the divide-and-conquer algorithm.                                                                                                                                                          |
| `l`    | Uses only vertical cuts in the divide-and-conquer algorithm. By default, Triangle uses alternating vertical and horizontal cuts, which usually improve the speed except with vertex sets that are small or short and wide. This switch is primarily of theoretical interest. |
| `s`    | Specifies that segments should be forced into the triangulation by recursively splitting them at their midpoints, rather than by generating a constrained Delaunay triangulation.                                                                                            |
| `C`    | Check the consistency of the final mesh. Uses exact arithmetic for checking, even if the -X switch is used. Useful if you suspect Triangle is buggy.                                                                                                                         |
| `Q`    | Quiet: Suppresses all explanation of what Triangle is doing, unless an error occurs.                                                                                                                                                                                         |
| `V`    | Verbose: Gives detailed information about what Triangle is doing. Add more `V's for increasing amount of detail.`-V' gives information on algorithmic progress and detailed statistics.                                                                                      |
| `h`    | Help: Displays complete instructions.                                                                                                                                                                                                                                        |

## `p`

- Reads a Planar Straight Line Graph (.poly) file, which can specify points, segments, holes, regional attributes, and area constraints.
- Will generate a constraint Delaunay triangulation (CDT) fitting the input
- if `-s`, `-q`, `-a`, or `-u` is used, then it generates a conforming constrained Delaunay triangulation (CCDT).
- If `-D` is used, Triangle generates a conforming Delaunay triangulation, so every triangle is Delaunay.
- If `-r` is used with -p, the refined mesh will preserve the segments of the coarse mesh it was generated from.
- If `-p` is not used, Triangle reads a .node file by default.

## r

- Refines a previously generated mesh.
- The mesh is read from a .node file and an .ele file.
- If -p is also used, a .poly file is read and used to constrain segments in the mesh.
- If -a is also used (with no number following), an .area file is read and used to impose area constraints on the mesh.
- The iteration number of the new mesh is one greater than that of the old mesh.

## q

- Quality mesh generation by my variant of a hybrid of Jim Ruppert's Delaunay refinement algorithm and Paul Chew's Delaunay refinement algorithm. (Ruppert's paper describing his algorithm, and my papers describing my variations, are available from the Research Credit page.)
- Adds vertices to the mesh to ensure that no angle smaller than 20o occurs. Clearly, small angles between input segments cannot be eliminated; usually, all other small angles are.
- An alternative minimum angle may be specified after the `q'. For instance, -q14.3 specifies a minimum angle of 14.3o. If the minimum angle is 20.7o or smaller, the triangulation algorithm is theoretically guaranteed to terminate (assuming infinite precision arithmetic - Triangle may fail to terminate if you run out of precision).
- In practice, the algorithm often succeeds for minimum angles up to 33o. It usually doesn't terminate for angles above 34o.
- For some meshes, however, it may be necessary to reduce the minimum angle to well below 20o to avoid problems associated with insufficient floating-point precision.

## a

- Imposes a maximum triangle area.
- If a number follows the `a`, no triangle will be generated whose area is larger than that number.
- For instance, `-a2.5` specifies that no triangle should have area greater than 2.5.
- If no number is specified after the `a`, an .area file (if -r is used) or .poly file (if -r is not used) specifies a set of maximum area constraints.
- An .area file contains a separate area constraint for each triangle, and is useful for refining a finite element mesh based on a posteriori error estimates.
- A .poly file can optionally contain an area constraint for each segment-bounded region, thereby controlling triangle densities in a first triangulation of a PSLG.
- You can impose both a fixed area constraint and a varying area constraint by invoking the -a switch twice, once with and once without a number following.

## A

- Assigns an additional attribute to each triangle that identifies what segment-bounded region each triangle belongs to. (See the .ele file format description for a description of triangle attributes.)
- Attributes are assigned to regions by the .poly file; see the .poly file format description for details.
- If a region is not explicitly marked by the .poly file, triangles in that region are assigned an attribute of zero.

:::note
The -A switch has an effect only when the -p switch is used and the -r switch is not.
:::

## u

- Imposes a user-defined constraint on triangle size, somewhat like the -a switch, but you write C code that examines a triangle's coordinates and area, and decides whether to refine the triangle or not.
- There are two ways to use this feature. The first is to edit the triunsuitable() procedure in triangle.c to encode any constraint you like, then recompile Triangle.
- The second way to use this feature is to compile triangle.c with the EXTERNAL_TEST symbol set (compiler switch -DEXTERNAL_TEST), then link Triangle against a separate object file that implements triunsuitable().
- In either case, the -u switch causes the user-defined test to be applied to every triangle.

## c

- Creates segments on the convex hull of the triangulation.
- If you are triangulating a vertex set, this switch causes a .poly file to be written, containing all edges in the convex hull.
- If you are triangulating a PSLG, this switch specifies that the whole convex hull of the PSLG should be triangulated, regardless of what segments the PSLG has.
- If you do not use this switch when triangulating a PSLG, it is assumed that you have identified the region to be triangulated by surrounding it with segments of the input PSLG.
- Beware: if you are not careful, this switch can cause the introduction of an extremely thin angle between a PSLG segment and a convex hull segment, which can cause overrefinement.
- If you are refining a mesh, this switch works differently; it generates the set of boundary edges of the mesh, including boundaries of holes. (This is useful if no .poly file was read.)
