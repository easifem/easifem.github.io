# Boundary markers

<!-- markdownlint-disable MD041 MD013 MD033 MD012 -->

- Boundary markers are tags used mainly to identify which output vertices and edges are associated with which PSLG segment and which vertices and edges occur on a triangulation boundary.

- An everyday use is determining where boundary conditions should be applied to a finite element mesh. Using the B switch, you can prevent boundary markers from being written into files produced by Triangle.

The boundary marker associated with each segment in an output .poly file and each edge in an output .edge file is chosen as follows:

- If an output edge is part or all of a PSLG segment with a nonzero boundary marker, then the edge is assigned the same marker as the segment.
- Otherwise, if the edge occurs on a boundary of the triangulation (including boundaries of holes), the edge is assigned the marker one (1).
- Otherwise, the edge is assigned the marker zero (0).

The boundary marker associated with each vertex in an output .node file is chosen as follows:

- If a vertex is assigned a nonzero boundary marker in the input file, then it is assigned the same marker in the output .node file. Otherwise, the vertex is assigned the same marker if the vertex lies on a PSLG segment (including the segment's endpoints) with a nonzero boundary marker. If the vertex lies on several such segments, one of the markers is chosen arbitrarily. Otherwise, if the vertex occurs on a triangulation boundary, then the vertex is assigned marker one (1). Otherwise, the vertex is assigned the marker zero (0).

- If you want Triangle to determine which vertices and edges are on the boundary, assign them the boundary marker zero (or use no markers at all) in your input files.
- All boundary vertices, edges, and segments in the output files will be assigned the value one.
