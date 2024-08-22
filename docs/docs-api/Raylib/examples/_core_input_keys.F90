!> author: Vikas Sharma, Ph. D.
! date: 2024-05-03
! summary: basis window example using raylib

PROGRAM main
USE easifemBase
USE Raylib
IMPLICIT NONE

INTEGER(I4B), PARAMETER :: screenWidth = 800
INTEGER(I4B), PARAMETER :: screenHeight = 450
REAL, PARAMETER :: ballRadius = 50.0
TYPE(Vector2_) :: ballPosition

CALL InitWindow(screenWidth, screenHeight, &
                "raylib [core] example - basic window")

ballPosition = Vector2_( REAL(screenWidth, DFP)/2.0, REAL(screenHeight, DFP)/2.0 )
CALL SetTargetFPS(60)

DO
  IF (WindowShouldClose()) EXIT

  IF (IsKeyDown(KEY_RIGHT)) ballPosition%x = ballPosition%x + 2.0
  IF (IsKeyDown(KEY_LEFT)) ballPosition%x = ballPosition%x - 2.0
  IF (IsKeyDown(KEY_UP)) ballPosition%y = ballPosition%y - 2.0
  IF (IsKeyDown(KEY_DOWN)) ballPosition%y = ballPosition%y + 2.0

  CALL BeginDrawing()
  CALL ClearBackground(RAYWHITE)
  CALL DrawText("move the ball with arrow keys", 10, 10, 20, DARKGRAY); 
  CALL DrawCircleV(ballPosition, ballRadius, MAROON); 
  CALL EndDrawing()
END DO

CALL CloseWindow()

END PROGRAM main
