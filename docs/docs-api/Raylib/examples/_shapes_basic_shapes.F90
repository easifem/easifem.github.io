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
IMPLICIT NONE

INTEGER(I4B), PARAMETER :: screenWidth = 800
INTEGER(I4B), PARAMETER :: screenHeight = 450
REAL(REAL32) :: rotation = 0.0, x, y, width, height
TYPE(Vector2_) :: p1, p2, p3

CALL InitWindow(screenWidth, screenHeight, "raylib [shapes] example - basic shapes drawing")
CALL SetTargetFPS(60)

DO

  IF (WindowShouldClose()) EXIT

  rotation = rotation + 0.2

  CALL BeginDrawing()

  CALL ClearBackground(RAYWHITE)

  CALL DrawText("some basic shapes available on raylib", 20, 20, 20, DARKGRAY)

  ! CALL DrawCircle(screenWidth / 5, 120, 35, DARKBLUE)
  !
  ! CALL DrawCircleGradient(screenWidth / 5, 220, 60, GREEN, SKYBLUE)
  ! CALL DrawCircleLines(screenWidth / 5, 340, 80, DARKBLUE)

  ! Rectangle shapes and lines
  ! CALL DrawRectangle(screenWidth / 4 * 2 - 60, 100, 120, 60, RED)
  ! CALL DrawRectangleGradientH(screenWidth / 4 * 2 - 90, 170, 180, 130, &
  !                             MAROON, GOLD)
  ! CALL DrawRectangleLines(screenWidth / 4 * 2 - 40, 320, 80, 60, ORANGE)
  ! NOTE: Uses QUADS internally, not lines

  ! Triangle shapes and lines
  p1 = Vector2_(REAL(screenWidth, kind=REAL32) / 4.0 * 3.0, 80.0)
  p2 = Vector2_(REAL(screenWidth, kind=REAL32) / 4.0 * 3.0 - 60.0, 150.0)
  p3 = Vector2_(REAL(screenWidth, kind=REAL32) / 4.0 * 3.0 + 60.0, 150.0)

  CALL DrawTriangle(p1, p2, p3, VIOLET)

  p1 = Vector2_(REAL(screenWidth, kind=REAL32) / 4.0 * 3.0, 160.0)
  p2 = Vector2_(REAL(screenWidth, kind=REAL32) / 4.0 * 3.0 - 20.0, 230.0)
  p3 = Vector2_(REAL(screenWidth, kind=REAL32) / 4.0 * 3.0 + 20.0, 230.0)
  CALL DrawTriangleLines(p1, p2, p3, DARKBLUE)

  ! Polygon shapes and lines
  ! CALL DrawPoly((Vector2) {screenWidth / 4.0F * 3, 330}, 6, 80, rotation, BROWN)
  !   CALL DrawPolyLines((Vector2) {screenWidth / 4.0F * 3, 330}, 6, 90, rotation,
  !   BROWN)
  !     CALL DrawPolyLinesEx((Vector2){screenWidth / 4.0f * 3, 330}, 6, 85, rotation, 6,
  !   BEIGE)

  ! NOTE: We draw all LINES based shapes together to optimize internal
  ! drawing, this way, all LINES are rendered in a single draw pass
  ! CALL DrawLine(18, 42, screenWidth - 18, 42, BLACK)

  CALL EndDrawing()

END DO

CALL CloseWindow()

END PROGRAM main
