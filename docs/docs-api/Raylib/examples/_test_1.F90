! julia.f90
!
! Example program that renders animated Julia set, using the GLSL 3.30 shader
! `share/julia.fs`. Based on the raylib example `shaders_julia_set.c`.
!
! Author:  Philipp Engel
! Licence: ISC

PROGRAM main
USE, INTRINSIC :: ISO_C_BINDING
USE Raylib
IMPLICIT NONE

INTEGER, PARAMETER :: SCREEN_WIDTH = 800
INTEGER, PARAMETER :: SCREEN_HEIGHT = 450

INTEGER :: inc_speed
INTEGER :: c_idx
INTEGER :: offset_idx
INTEGER :: zoom_idx

LOGICAL :: PAUSE
LOGICAL :: controls

REAL(kind=C_FLOAT) :: amount
REAL(kind=C_FLOAT) :: points(2, 6)
REAL(kind=C_FLOAT), TARGET :: c(2)
REAL(kind=C_FLOAT), TARGET :: offset(2)
REAL(kind=C_FLOAT), TARGET :: zoom
REAL(kind=C_FLOAT), TARGET :: screen_dims(2)

TYPE(render_texture2d_type) :: TARGET
TYPE(shader_type) :: shader
TYPE(vector2_type) :: mouse_pos
TYPE(vector2_type) :: offset_speed

! Points of interest.
points = RESHAPE([-0.348827, 0.607167, &
                  -0.786268, 0.169728, &
                  -0.800000, 0.156000, &
                  0.285000, 0.000000, &
                  -0.835000, -0.232100, &
                  -0.701760, -0.384200], [2, 6])

CALL init_window(SCREEN_WIDTH, SCREEN_HEIGHT, 'Fortran + raylib'//C_NULL_CHAR)
CALL set_target_fps(60)

! Load julia set shader. Passing `NULL` for vertex shader forces
! usage of internal default vertex shader.
shader = load_shader(C_NULL_CHAR, 'share/julia.fs'//C_NULL_CHAR)

! Create a RenderTexture2D to be used for render to texture.
TARGET = load_render_texture(get_screen_width(), get_screen_height())

! Constant `c` to use in `z^2 + c`.
c = [points(1, 1), points(2, 1)]

! Offset and zoom to draw the Julia set at (centered on screen and
! default size.
offset = [-1.0 * (get_screen_width() / 2), &
          -1.0 * (get_screen_height() / 2)]
offset_speed = vector2_type(0.0, 0.0)

zoom = 1.0

! Get variable (uniform) locations on the shader to connect with the
! program. If uniform variable could not be found in the shader, function
! returns -1.
c_idx = get_shader_location(shader, 'c'//C_NULL_CHAR)
offset_idx = get_shader_location(shader, 'offset'//C_NULL_CHAR)
zoom_idx = get_shader_location(shader, 'zoom'//C_NULL_CHAR)

screen_dims = [REAL(get_screen_width()), REAL(get_screen_height())]

CALL set_shader_value(shader, &
                     get_shader_location(shader, 'screenDims'//C_NULL_CHAR), &
                      C_LOC(screen_dims), &
                      SHADER_UNIFORM_VEC2)

CALL set_shader_value(shader, c_idx, C_LOC(c), SHADER_UNIFORM_VEC2)
CALL set_shader_value(shader, offset_idx, C_LOC(offset), SHADER_UNIFORM_VEC2)
CALL set_shader_value(shader, zoom_idx, C_LOC(zoom), SHADER_UNIFORM_FLOAT)

inc_speed = 0
controls = .TRUE.
PAUSE = .FALSE.

DO WHILE (.NOT. window_should_close())
        if (is_key_pressed(KEY_ONE)  .or. is_key_pressed(KEY_TWO)  .or. is_key_pressed(KEY_THREE) .or. &
            is_key_pressed(KEY_FOUR) .or. is_key_pressed(KEY_FIVE) .or. is_key_pressed(KEY_SIX)) then
    IF (is_key_pressed(KEY_ONE)) THEN
      c = points(:, 1)
    ELSE IF (is_key_pressed(KEY_TWO)) THEN
      c = points(:, 2)
    ELSE IF (is_key_pressed(KEY_THREE)) THEN
      c = points(:, 3)
    ELSE IF (is_key_pressed(KEY_FOUR)) THEN
      c = points(:, 4)
    ELSE IF (is_key_pressed(KEY_FIVE)) THEN
      c = points(:, 5)
    ELSE IF (is_key_pressed(KEY_SIX)) THEN
      c = points(:, 6)
    END IF

    CALL set_shader_value(shader, c_idx, C_LOC(c), SHADER_UNIFORM_VEC2)
  END IF

  IF (is_key_pressed(KEY_SPACE)) PAUSE = .NOT. PAUSE
  IF (is_key_pressed(KEY_F1)) controls = .NOT. controls

  IF (.NOT. PAUSE) THEN
    IF (is_key_pressed(KEY_RIGHT)) THEN
      inc_speed = inc_speed + 1
    ELSE IF (is_key_pressed(KEY_LEFT)) THEN
      inc_speed = inc_speed - 1
    END IF

    IF (is_mouse_button_down(MOUSE_BUTTON_LEFT) .OR. &
        is_mouse_button_down(MOUSE_BUTTON_RIGHT)) THEN
     IF (is_mouse_button_down(MOUSE_BUTTON_LEFT)) zoom = zoom + (zoom * 0.003)
    IF (is_mouse_button_down(MOUSE_BUTTON_RIGHT)) zoom = zoom - (zoom * 0.003)

      mouse_pos = get_mouse_position()

      offset_speed%x = mouse_pos%x - (SCREEN_WIDTH / 2)
      offset_speed%y = mouse_pos%y - (SCREEN_HEIGHT / 2)

      ! Slowly move camera to target offset.
      offset(1) = offset(1) + get_frame_time() * offset_speed%x * 0.8
      offset(2) = offset(2) + get_frame_time() * offset_speed%y * 0.8
    ELSE
      offset_speed = vector2_type(0.0, 0.0)
    END IF

    amount = get_frame_time() * inc_speed * 0.0005
    c = c + amount

    CALL set_shader_value(shader, c_idx, C_LOC(c), SHADER_UNIFORM_VEC2)
 CALL set_shader_value(shader, offset_idx, C_LOC(offset), SHADER_UNIFORM_VEC2)
    CALL set_shader_value(shader, zoom_idx, C_LOC(zoom), SHADER_UNIFORM_FLOAT)
  END IF

  ! Enable drawing to texture.
  CALL begin_texture_mode(TARGET)
  CALL clear_background(BLACK)

  ! Draw a rectangle in shader mode to be used as shader canvas.
  ! Rectangle uses font white character texture coordinates, so shader
  ! can not be applied here directly because input vertexTexCoord do
  ! not represent full screen coordinates (space where want to apply
  ! shader).
  CALL draw_rectangle(0, 0, get_screen_width(), get_screen_height(), BLACK)
  CALL end_texture_mode()

  CALL begin_drawing()
  CALL clear_background(BLACK)

  ! Draw the saved texture and rendered julia set with shader.  We do
  ! not invert texture on Y, already considered inside shader.
  CALL begin_shader_mode(shader)
  ! WARNING: If FLAG_WINDOW_HIGHDPI is enabled, HighDPI monitor
  ! scaling should be considered when rendering the RenderTexture2D
  ! to fit in the HighDPI scaled Window.
 CALL draw_texture_ex(TARGET%texture, vector2_type(0.0, 0.0), 0.0, 1.0, WHITE)
  CALL end_shader_mode()

  IF (controls) THEN
                call draw_text('Press Mouse buttons right/left to zoom in/out and move' // c_null_char, 10, 15, 10, RAYWHITE)
                call draw_text('Press KEY_F1 to toggle these controls' // c_null_char, 10, 30, 10, RAYWHITE)
                call draw_text('Press KEYS [1 - 6] to change point of interest' // c_null_char, 10, 45, 10, RAYWHITE)
                call draw_text('Press KEY_LEFT | KEY_RIGHT to change speed' // c_null_char, 10, 60, 10, RAYWHITE)
                call draw_text('Press KEY_SPACE to pause movement animation' // c_null_char, 10, 75, 10, RAYWHITE)
  END IF
  CALL end_drawing()
END DO

CALL unload_shader(shader)
CALL unload_render_texture(TARGET)
CALL close_window()
END PROGRAM main
