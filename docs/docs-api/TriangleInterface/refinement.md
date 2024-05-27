# Refinement

<!-- markdownlint-disable MD041 MD013 MD033 MD012 -->

The `-r` switch causes a mesh (.node and .ele files) to be read and refined. If the -p switch is also used, a .poly file is read and used to specify edges that are constrained and cannot be eliminated (although they can be divided into smaller edges) by the refinement process.

When you refine a mesh, you generally want to impose tighter quality constraints. One way to accomplish this is to use -q with a larger angle, or -a followed by a smaller area than you used to generate the mesh you are refining. In order to simplify the maintenance of a sequence of successively refined meshes, all files written by Triangle have iteration numbers in their filenames; the iteration number of each mesh is one greater than that of the mesh it was created from. In the example below, the input mesh (which you saw created on the Delaunay triangulation page) has iteration number one, and consists of the files box.1.node and box.1.ele.

![box1](https://www.cs.cmu.edu/~quake/box.1.ele.gif)

This mesh is refined with an area constraint of 0.2, creating a new mesh with iteration number two. Repeating the process with smaller area constraints, iterations three and four are also created.

![box2](https://www.cs.cmu.edu/~quake/box.2.ele.gif)
![box3](https://www.cs.cmu.edu/~quake/box.3.ele.gif)
![box4](https://www.cs.cmu.edu/~quake/box.4.ele.gif)

Above, the -p switch is used to retain segment information. At each iteration, a .poly file is read and used to specify edges that are constrained and cannot be eliminated (although they can be divided into smaller edges) by the refinement process. In this example, it didn't make any difference because the mesh has no interior boundaries; however, in a mesh with interior boundaries, the -p switch is necessary to maintain these boundaries during refinement; hence, you should make a habit of using it whenever refining a mesh that was originally formed from a PSLG. If you forget, the information about interior segments will be lost for all future iterations.

You can perform finely controlled refinement by creating an .area file, which specifies a maximum area for each triangle, and use the -a switch (without a number following). Each triangle's area constraint is applied to that triangle. The constraints in an .area file are typically based on a posteriori error estimates resulting from a finite element simulation on that mesh. In the example file box.1.area, one triangle has been constrained to have area no greater than 0.02; all other triangles are left unconstrained (by assigning them negative areas).

![box-ele-a](https://www.cs.cmu.edu/~quake/box.ele.a.gif)

Note that triangle-by-triangle area constraints tend to diffuse during the meshing process; best results are obtained when the constraints vary more smoothly than in this example. When there are large variations in area constraint between adjacent triangles, you may not get the results you want.

Fixed and variable area constraints can be mixed by using the -a switch twice, once with and once without a number following.

The most powerful way to control refinement is to use the -u switch, which imposes a user-defined constraint on triangle size, which you write in C. There are two ways to use this feature. One is to edit the triunsuitable() procedure in triangle.c to encode any constraint you like, then recompile Triangle. The other is to compile triangle.c with the EXTERNAL_TEST symbol set (compiler switch -DEXTERNAL_TEST), then link Triangle against a separate object file that implements triunsuitable(). In either case, the -u switch causes the user-defined test to be applied to every triangle.

If you are refining a mesh composed of linear (three-node) elements, the output mesh will contain all the nodes present in the input mesh, in the same order, with new nodes added at the end of the .node file. However, the refinement is not hierarchical: there is no guarantee that each output element is contained in a single input element. Often, output elements will overlap two input elements, and some input edges are not present in the output mesh. Hence, a sequence of refined meshes will form a hierarchy of nodes, but not a hierarchy of elements. If you refine a mesh of higher-order elements, the hierarchical property applies only to the nodes at the corners of an element; other nodes may not be present in the refined mesh.
