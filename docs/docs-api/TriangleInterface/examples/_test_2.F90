PROGRAM main
USE TriangleInterface
USE easifemBase

TYPE(TriangulateIO_) :: in, mid, out, vorout
REAL(DFP), TARGET :: pointlist(0:7), pointattributelist(0:3), &
                     regionlist(0:3), trianglearealist(0:1)

INTEGER(I4B), TARGET :: pointmarkerlist(0:3)

pointList = [0.0, 0.0, 1.0, 0.0, 1.0, 10.0, 0.0, 10.0]
pointattributelist = [0.0, 1.0, 11.0, 10.0]
pointMarkerList = [0, 2, 0, 0]

regionlist = [0.5, 5.0, 7.0, 0.1]

CALL TriangleSetParam(obj=in, numberofpoints=4, numberofpointattributes=1, &
                 pointlist=pointlist, pointattributelist=pointattributelist, &
       pointmarkerlist=pointmarkerlist, numberofsegments=0, numberofholes=0, &
                      numberofregions=1, regionlist=regionlist)

CALL TriangleNullify(mid)
CALL TriangleNullify(vorout)

CALL triangulate("pczAevnQ"//C_NULL_CHAR, in, mid, vorout)

trianglearealist = [3.0, 1.0]
CALL TriangleSetParam(obj=mid, trianglearealist=trianglearealist)

CALL triangulate("prazQ", mid, out, vorout)

CALL Display("Refined triangle")

CALL Display(out, "out: ")

CALL C_Free(mid%pointlist)
! CALL TriangleFree(in%pointattributelist)
! CALL TriangleFree(in%pointmarkerlist)
! CALL TriangleFree(in%regionlist)
END PROGRAM main
