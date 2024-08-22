! castle.f90
!
! Example program that renders a 3-D model loaded from file. Based on the raylib
! example `models_loading.c`.
!
! Author:  Philipp Engel
! Licence: ISC
PROGRAM main
USE, INTRINSIC :: ISO_C_BINDING
USE :: raylib
IMPLICIT NONE(TYPE, EXTERNAL)

INTEGER, PARAMETER :: SCREEN_WIDTH = 800
INTEGER, PARAMETER :: SCREEN_HEIGHT = 450

TYPE(camera3d_type) :: camera
TYPE(model_type) :: model
TYPE(texture2d_type) :: texture
TYPE(vector3_type) :: position

CALL init_window(SCREEN_WIDTH, SCREEN_HEIGHT, 'Fortran + raylib'//C_NULL_CHAR)
CALL set_target_fps(60)
CALL disable_cursor()

! Define camera to look into our 3-D world.
camera%position = vector3_type(50.0, 50.0, 50.0)
camera%TARGET = vector3_type(0.0, 10.0, 0.0)
camera%up = vector3_type(0.0, 1.0, 0.0)
camera%fov_y = 45.0
camera%projection = CAMERA_PERSPECTIVE

model = load_model('share/castle.obj'//C_NULL_CHAR)
texture = load_texture('share/castle_diffuse.png'//C_NULL_CHAR)

CALL set_model_diffuse(model, texture)

DO WHILE (.NOT. window_should_close())
  CALL update_camera(camera, CAMERA_FIRST_PERSON)

  CALL begin_drawing()
  CALL clear_background(RAYWHITE)

  CALL begin_mode3d(camera)
  CALL draw_model(model, position, 1.0, WHITE)
  CALL draw_grid(20, 10.0)
  CALL end_mode3d()

  CALL draw_text('(c) Castle 3D model by Alberto Cano'//C_NULL_CHAR, &
                 SCREEN_WIDTH - 200, SCREEN_HEIGHT - 20, 10, GRAY)
  CALL draw_fps(10, 10)
  CALL end_drawing()
END DO

CALL unload_texture(texture)
CALL unload_model(model)
CALL close_window()
CONTAINS
SUBROUTINE set_model_diffuse(model, texture)
  TYPE(model_type), INTENT(inout) :: model
  TYPE(texture2d_type), INTENT(inout) :: texture

  TYPE(material_type), POINTER :: material_ptrs(:)
  TYPE(material_map_type), POINTER :: material_map_ptrs(:)

  ! We have to add 1 to the array indices as a work-around, as we can't set
  ! the lower bounds of the pointer arrays with `c_f_pointer()`.
  CALL C_F_POINTER(model%materials, material_ptrs, [model%material_count])
        call c_f_pointer(material_ptrs(1)%maps, material_map_ptrs, [ MATERIAL_MAP_BRDF + 1 ])
  material_map_ptrs(MATERIAL_MAP_DIFFUSE + 1)%texture = texture
END SUBROUTINE set_model_diffuse
END PROGRAM main
