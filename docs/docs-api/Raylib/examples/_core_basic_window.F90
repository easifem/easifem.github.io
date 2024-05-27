!> author: Vikas Sharma, Ph. D.
! date: 2024-05-03
! summary: basis window example using raylib

PROGRAM main
USE easifemBase
USE Raylib
IMPLICIT NONE

INTEGER(I4B), PARAMETER :: screenWidth = 800
INTEGER(I4B), PARAMETER :: screenHeight = 450

CALL InitWindow(screenWidth, screenHeight, &
                "raylib [core] example - basic window")

CALL SetTargetFPS(60)

DO
  IF (WindowShouldClose()) EXIT
  CALL BeginDrawing()
  CALL ClearBackground(RAYWHITE)
  CALL DrawText("Congrats! You created your first window!", &
                190, 200, 20, LIGHTGRAY)
  CALL EndDrawing()
END DO

CALL CloseWindow()

END PROGRAM main
