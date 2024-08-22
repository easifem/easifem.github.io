# triangulate

<!-- markdownlint-disable MD041 MD013 MD033 MD012 -->

```c
void triangulate(triswitches, in, out, vorout)
char triswitches;                            
struct triangulateio in;                    
struct triangulateio out;                  
struct triangulateio vorout;
```

## triswitches

`triswitches` is a string containing the command line switches you wish to invoke. No initial dash is required. Some suggestions:

- You'll probably find it convenient to use the `z` switch so that points (and other items) are numbered from zero. This simplifies indexing, because the first item of any type always starts at index `[0]` of the corresponding array, whether that item's number is zero or one.
- You'll probably want to use the `Q` switch in your final code, but you can take advantage of Triangle's printed output (including the`V` switch) while debugging.
- If you are not using the `q`, `a`, `u`, `D`, `j`, or `s` switches, then the output points will be identical to the input points, except possibly for the boundary markers. If you don't need the boundary markers, you should use the `N` (no nodes output) switch to save memory.
- The `I` (no iteration numbers) and`g` (.off file output) switches have no effect when Triangle is compiled with `TRILIBRARY` defined.

:::note
If you do need boundary markers, but need to save memory, a good nasty trick is to set `iout->pointlist` equal to `in->pointlist` before calling `triangulate()`, so that Triangle overwrites the input points with identical copies.
:::

## in, out, vorout

- `in`, `out`, and `vorout` are descriptions of the input, the output, and the Voronoi output.

:::note
If the `v` (Voronoi output) switch is not used,`vorout` may be NULL. `in` and `out` may never be NULL.
:::

Certain fields of the input and output structures must be initialized, as described below.

## Caution regarding memory allocation

- Any input fields that Triangle will examine must be initialized.
- Furthermore, for each output array that Triangle will write to, you must either provide space by setting the appropriate pointer to point to the space you want the data written to, or you must initialize the pointer to NULL, which tells Triangle to allocate space for the results.
- The latter option is preferable, because Triangle always knows exactly how much space to allocate.
- The former option is provided mainly for people who need to call Triangle from Fortran code, though it also makes possible some nasty space-saving tricks, like writing the output to the same arrays as the input.

- Triangle will not `free()` any input or output arrays, including those it allocates itself; that's up to you.
- You should free arrays allocated by Triangle by calling the `trifree()` procedure defined below.
- By default, `trifree()` just calls the standard free() library procedure, but applications that call `triangulate()` may replace `trimalloc()` and `trifree()` in triangle.c to use specialized memory allocators.

Here's a guide to help you decide which fields you must initialize before you call triangulate().

## In

- `pointlist` must always point to a list of points; `numberofpoints` and `numberofpointattributes` must be properly set.
- `pointmarkerlist` must either be set to NULL (in which case all markers default to zero), or must point to a list of markers.

:::note
If `numberofpointattributes` is not zero, `pointattributelist` must point to a list of point attributes.
:::

- If the `r` switch is used, `trianglelist` must point to a list of triangles, and `numberoftriangles`, `numberofcorners`, and `numberoftriangleattributes` must be properly set. If `numberoftriangleattributes` is not zero, `triangleattributelist` must point to a list of triangle attributes.
- If the `a` switch is used (with no number following), `trianglearealist` must point to a list of triangle area constraints. `neighborlist` may be ignored.
- If the `p` switch is used, `segmentlist` must point to a list of segments, `numberofsegments` must be properly set, and `segmentmarkerlist` must either be set to NULL (in which case all markers default to zero), or must point to a list of markers.
- If the `p` switch is used without the `r` switch, then `numberofholes` and `numberofregions` must be properly set. If `numberofholes` is not zero, `holelist` must point to a list of holes. If `numberofregions` is not zero, `regionlist` must point to a list of region constraints.
- If the `p` switch is used, `holelist`, `numberofholes`, `regionlist`, and `numberofregions` is copied to `out`. (You can nonetheless get away with not initializing them if the `r` switch is used.)
- `edgelist`, `edgemarkerlist`, `normlist`, and `numberofedges` may be ignored.

## Out

- `pointlist` must be initialized (NULL or pointing to memory) unless the `N` switch is used.
- `pointmarkerlist` must be initialized unless the `N` or `B` switch is used.
- If `N` is not used and `in->numberofpointattributes` is not zero, `pointattributelist` must be initialized.
- `trianglelist` must be initialized unless the `E` switch is used. `neighborlist` must be initialized if the `n` switch is used. If the `E` switch is not used and (`in->numberofelementattributes` is not zero or the `A` switch is used), `elementattributelist` must be initialized. `trianglearealist` may be ignored.
- `segmentlist` must be initialized if the `p` or `c` switch is used, and the `P` switch is not used.
- `segmentmarkerlist` must also be initialized under these circumstances unless the `B` switch is used.
- `edgelist` must be initialized if the `e` switch is used. `edgemarkerlist` must be initialized if the `e` switch is used and the `B` switch is not.
- `holelist`, `regionlist`, `normlist`, and all scalars may be ignored.
-

## Vorout

`vorout` (only needed if `v` switch is used):

- `pointlist` must be initialized. If `in->numberofpointattributes` is not zero, `pointattributelist` must be initialized. `pointmarkerlist` may be ignored.
- `edgelist` and `normlist` must both be initialized. `edgemarkerlist` may be ignored.
- Everything else may be ignored.

## Final comments

- After a call to triangulate(), the valid fields of `out` and`vorout` will depend, in an obvious way, on the choice of switches used.
- Note that when the `p` switch is used, the pointers `holelist` and `regionlist` are copied from `in` to `out`, but no new space is allocated; be careful that you don't free() the same array twice.
- On the other hand, Triangle will never copy the `pointlist` pointer (or any others); new space is allocated for `out->pointlist`, or if the `N` switch is used, `out->pointlist` remains uninitialized.
- All of the meaningful `numberof` fields will be properly set; for instance,`numberofedges` will represent the number of edges in the triangulation whether or not the edges were written. If segments are not used, `numberofsegments` will indicate the number of boundary edges.
