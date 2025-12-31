PROGRAM main
USE Gmsh_Class
USE GlobalData
USE MSHFile_Class
USE HDF5File_Class
USE Display_Method

TYPE(Gmsh_) :: gmsh

CHARACTER(LEN=*), PARAMETER :: prefix = "square"
REAL(DFP), PARAMETER :: lx = 1.0_DFP
REAL(DFP), PARAMETER :: ly = 1.0_DFP
INTEGER(I4B), PARAMETER :: order = 1

REAL(DFP), PARAMETER :: meshSize = 1.0
REAL(DFP), PARAMETER :: corner(3) = 0.0_DFP
INTEGER(I4B), PARAMETER :: nnod(2) = [3, 3]
INTEGER(I4B) :: ierr
REAL(DFP) :: x, y, z, lc
CHARACTER(:), ALLOCATABLE :: suffix, title

TYPE(MSHFile_) :: mshFile
TYPE(HDF5File_) :: hdf5file

suffix = ToString(nnod(1))//"x"//ToString(nnod(2))

title = prefix//"_"//suffix

ierr = gmsh%Initialize()
ierr = gmsh%model%add(title)

x = corner(1); y = corner(2); z = corner(3); lc = meshSize
ierr = gmsh%model%geo%addPoint(x=x, y=y, z=z, meshSize=lc, tag=1)

x = x + lx; y = y; z = z; lc = lc
ierr = gmsh%model%geo%addPoint(x=x, y=y, z=z, meshSize=lc, tag=2)

x = x; y = y + ly; z = z; lc = lc
ierr = gmsh%model%geo%addPoint(x=x, y=y, z=z, meshSize=lc, tag=3)

x = corner(1); y = y; z = z; lc = lc
ierr = gmsh%model%geo%addPoint(x=x, y=y, z=z, meshSize=lc, tag=4)

ierr = gmsh%model%geo%addLine(1, 2, 1)
ierr = gmsh%model%geo%addLine(2, 3, 2)
ierr = gmsh%model%geo%addLine(3, 4, 3)
ierr = gmsh%model%geo%addLine(4, 1, 4)

ierr = gmsh%model%geo%addCurveLoop([1, 2, 3, 4], tag=1)

ierr = gmsh%model%geo%addPlaneSurface([1], 1)

ierr = gmsh%model%geo%mesh%setTransfiniteCurve(1, nnod(1), &
                                               "Progression", 1.0_DFP)
ierr = gmsh%model%geo%mesh%setTransfiniteCurve(3, nnod(1), &
                                               "Progression", 1.0_DFP)
ierr = gmsh%model%geo%mesh%setTransfiniteCurve(2, nnod(2), &
                                               "Progression", 1.0_DFP)
ierr = gmsh%model%geo%mesh%setTransfiniteCurve(4, nnod(2), &
                                               "Progression", 1.0_DFP)

ierr = gmsh%model%geo%mesh%setTransfiniteSurface(1)
ierr = gmsh%model%geo%mesh%setRecombine(2, 1)

ierr = gmsh%model%geo%synchronize()

ierr = gmsh%model%mesh%generate(2)

ierr = gmsh%model%mesh%setOrder(order)

ierr = gmsh%WRITE(title//'.msh')

ierr = gmsh%Finalize()

CALL mshFile%Initiate(filename=title//'.msh', STATUS="OLD", ACTION="READ")
CALL mshFile%OPEN()
CALL mshFile%READ()
CALL hdf5file%Initiate(title//'.h5', MODE="NEW")
CALL hdf5file%OPEN()
CALL mshFile%Export(hdf5=hdf5file, group="")
CALL mshFile%DEALLOCATE()
CALL hdf5file%DEALLOCATE()

END PROGRAM main
