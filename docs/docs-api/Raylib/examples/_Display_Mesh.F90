! This program is a part of EASIFEM library
! Expandable And Scalable Infrastructure for Finite Element Methods
! htttps://www.easifem.com
! Vikas Sharma, Ph.D., vickysharma0812@gmail.com
!
! This program is free software: you can redistribute it and/or modify
! it under the terms of the GNU General Public License as published by
! the Free Software Foundation, either version 3 of the License, or
! (at your option) any later version.
!
! This program is distributed in the hope that it will be useful,
! but WITHOUT ANY WARRANTY; without even the implied warranty of
! MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
! GNU General Public License for more details.
!
! You should have received a copy of the GNU General Public License
! along with this program.  If not, see <https: //www.gnu.org/licenses/>
!

PROGRAM main
USE easifemBase
USE Raylib
USE TriangleInterface
IMPLICIT NONE

INTEGER(I4B), PARAMETER :: screenWidth = 800
INTEGER(I4B), PARAMETER :: screenHeight = 500
REAL(REAL32) :: rotation = 0.0, x, y, width, height
TYPE(Vector2_) :: p1, p2, p3

TYPE(TriangulateIO_) :: in, mid, out, vorout
REAL(DFP), POINTER :: pointlist(:), pointattributelist(:), &
                      regionlist(:), trianglearealist(:)
INTEGER(I4B), POINTER :: pointmarkerlist(:), trianglelist(:)

INTEGER(I4B) :: numberofpoints, numberofpointattributes, numberofsegments, &
                numberofholes, numberofregions, numberoftriangles, &
                ii, i1, i2, i3

ALLOCATE (pointlist(8), pointattributelist(4), regionlist(4), pointmarkerlist(4), trianglearealist(2))

pointlist = [0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0]
pointattributelist = [0.0, 0.0, 0.0, 0.0]
pointmarkerlist = [0, 0, 0, 0]
regionlist = [0.5, 0.5, 0.0, 0.1]

CALL TriangleSetParam(obj=in, numberofpoints=4, numberofpointattributes=1, &
                 pointlist=pointlist, pointattributelist=pointattributelist, &
       pointmarkerlist=pointmarkerlist, numberofsegments=0, numberofholes=0, &
                      numberofregions=1, regionlist=regionlist)

CALL TriangleNullify(mid)
CALL TriangleNullify(vorout)
CALL triangulate("pcAenQ"//C_NULL_CHAR, in, mid, vorout)

! CALL Display(mid, "mid: ")
! RETURN

trianglearealist = [0.1, 0.1]
CALL TriangleSetParam(obj=mid, trianglearealist=trianglearealist)

CALL triangulate("prqaQ"//C_NULL_CHAR, mid, out, vorout)

CALL TriangleGetParam(obj=out, numberofpoints=numberofpoints, &
                      pointlist=pointlist, trianglelist=trianglelist, &
                      numberoftriangles=numberoftriangles)

! CALL Display(pointlist, "pointlist: ")
! CALL Display(trianglelist, "trianglelist: ")
CALL Display(out, "out: ")

CALL InitWindow(screenWidth, screenHeight, "raylib [shapes] example - basic shapes drawing")
CALL SetTargetFPS(60)

DO

  IF (WindowShouldClose()) EXIT

  CALL BeginDrawing()

  CALL ClearBackground(RAYWHITE)

  CALL DrawText("some basic shapes available on raylib", 20, 20, 20, DARKGRAY)

  DO ii = 1, numberoftriangles

    i1 = trianglelist(3 * ii - 2)
    i2 = trianglelist(3 * ii - 1)
    i3 = trianglelist(3 * ii)

    x = 400 * pointlist(2 * i1 - 1) + 100
    y = 400 * pointlist(2 * i1) + 10
    p1 = Vector2_(x, y)

    ! CALL DrawCircle(INT(x), INT(y), 2.0, VIOLET)

    x = 400 * pointlist(2 * i2 - 1) + 100
    y = 400 * pointlist(2 * i2) + 10
    p2 = Vector2_(x, y)

    ! CALL DrawCircle(INT(x), INT(y), 2.0, VIOLET)

    x = 400 * pointlist(2 * i3 - 1) + 100
    y = 400 * pointlist(2 * i3) + 10
    p3 = Vector2_(x, y)

    ! CALL DrawCircle(INT(x), INT(y), 2.0, VIOLET)

    ! CALL DrawLineV(p1, p2, DARKBLUE)
    ! CALL DrawLineV(p2, p3, DARKBLUE)
    ! CALL DrawLineV(p3, p1, DARKBLUE)

    ! CALL DrawTriangle(p1, p2, p3, VIOLET)
    CALL DrawTriangleLines(p1, p2, p3, DARKBLUE)

  END DO

  CALL EndDrawing()

END DO

CALL CloseWindow()

END PROGRAM main
