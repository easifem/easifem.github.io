! /*******************************************************************************************
! *
! *   raylib [models] example - Heightmap loading and drawing
! *
! *   Example originally created with raylib 1.8, last time updated with raylib 3.5
! *
! *   Example licensed under an unmodified zlib/libpng license, which is an OSI-certified,
! *   BSD-like license that allows static linking with closed source software
! *
! *   Copyright (c) 2015-2024 Ramon Santamaria (@raysan5)
! *
! ********************************************************************************************/
!
! #include "raylib.h"
!
! //------------------------------------------------------------------------------------
! // Program main entry point
! //------------------------------------------------------------------------------------
! int main(void)
! {
!     // Initialization
!     //--------------------------------------------------------------------------------------
!     const int screenWidth = 800;
!     const int screenHeight = 450;
!
!     InitWindow(screenWidth, screenHeight, "raylib [models] example - heightmap loading and drawing");
!
!     // Define our custom camera to look into our 3d world
!     Camera camera = { 0 };
!     camera.position = (Vector3){ 18.0f, 21.0f, 18.0f };     // Camera position
!     camera.target = (Vector3){ 0.0f, 0.0f, 0.0f };          // Camera looking at point
!     camera.up = (Vector3){ 0.0f, 1.0f, 0.0f };              // Camera up vector (rotation towards target)
!     camera.fovy = 45.0f;                                    // Camera field-of-view Y
!     camera.projection = CAMERA_PERSPECTIVE;                 // Camera projection type
!
!     Image image = LoadImage("resources/heightmap.png");     // Load heightmap image (RAM)
!     Texture2D texture = LoadTextureFromImage(image);        // Convert image to texture (VRAM)
!
!     Mesh mesh = GenMeshHeightmap(image, (Vector3){ 16, 8, 16 }); // Generate heightmap mesh (RAM and VRAM)
!     Model model = LoadModelFromMesh(mesh);                  // Load model from generated mesh
!
!     model.materials[0].maps[MATERIAL_MAP_DIFFUSE].texture = texture; // Set map diffuse texture
!     Vector3 mapPosition = { -8.0f, 0.0f, -8.0f };           // Define model position
!
!     UnloadImage(image);             // Unload heightmap image from RAM, already uploaded to VRAM
!
!     SetTargetFPS(60);               // Set our game to run at 60 frames-per-second
!     //--------------------------------------------------------------------------------------
!
!     // Main game loop
!     while (!WindowShouldClose())    // Detect window close button or ESC key
!     {
!         // Update
!         //----------------------------------------------------------------------------------
!         UpdateCamera(&camera, CAMERA_ORBITAL);
!         //----------------------------------------------------------------------------------
!
!         // Draw
!         //----------------------------------------------------------------------------------
!         BeginDrawing();
!
!             ClearBackground(RAYWHITE);
!
!             BeginMode3D(camera);
!
!                 DrawModel(model, mapPosition, 1.0f, RED);
!
!                 DrawGrid(20, 1.0f);
!
!             EndMode3D();
!
!             DrawTexture(texture, screenWidth - texture.width - 20, 20, WHITE);
!             DrawRectangleLines(screenWidth - texture.width - 20, 20, texture.width, texture.height, GREEN);
!
!             DrawFPS(10, 10);
!
!         EndDrawing();
!         //----------------------------------------------------------------------------------
!     }
!
!     // De-Initialization
!     //--------------------------------------------------------------------------------------
!     UnloadTexture(texture);     // Unload texture
!     UnloadModel(model);         // Unload model
!
!     CloseWindow();              // Close window and OpenGL context
!     //--------------------------------------------------------------------------------------
!
!     return 0;
! }

MODULE ImportRaylib
USE Raylib, ONLY: Camera3D_, &
                  Image_, &
                  Texture2D_, &
                  Vector3_, &
                  CAMERA_PERSPECTIVE, &
                  LoadImage, &
                  UnLoadImage, &
                  LoadTextureFromImage, &
                  InitWindow, &
                  CloseWindow, &
                  RayMesh_ => mesh_, &
                  Model_, &
                  UpdateCamera, &
                  WindowShouldClose, &
                  MATERIAL_MAP_DIFFUSE, &
                  BeginDrawing, &
                  ClearBackground, &
                  BeginMode3D, &
                  DrawModel, &
                  DrawGrid, &
                  EndMode3D, &
                  DrawTexture, &
                  DrawRectangleLines, &
                  DrawFPS, &
                  EndDrawing, &
                  SetTargetFPS, &
                  UnloadTexture, &
                  UnloadModel, &
                  CAMERA_ORBITAL, &
                  RAYWHITE, &
                  RED, &
                  GREEN, &
                  WHITE, &
                  GenMeshHeightmap, &
                  LoadModelFromMesh, &
                  Material_, &
                  SetMaterialTexture, &
                  SetModelMeshMaterial

USE GlobalData, ONLY: I4B
USE ISO_C_BINDING, ONLY: C_F_POINTER
PUBLIC

END MODULE ImportRaylib

PROGRAM main
USE ImportRaylib

IMPLICIT NONE

INTEGER(I4B), PARAMETER :: screenWidth = 800
INTEGER(I4B), PARAMETER :: screenHeight = 450
TYPE(Camera3D_) :: camera
TYPE(Image_) :: image
TYPE(Texture2D_) :: texture
TYPE(RayMesh_) :: mesh
TYPE(Model_) :: model
TYPE(Vector3_) :: mapPosition
TYPE(Material_), POINTER :: materials(:)

CALL InitWindow(screenWidth, screenHeight, "raylib [models] example - heightmap loading and drawing")

camera%position = Vector3_(18.0, 21.0, 18.0)
camera%TARGET = Vector3_(0.0, 0.0, 0.0)
camera%up = Vector3_(0.0, 1.0, 0.0)
camera%fovy = 45.0
camera%projection = CAMERA_PERSPECTIVE

image = LoadImage("share/heightmap.png")
texture = LoadTextureFromImage(image)

mesh = GenMeshHeightmap(image, Vector3_(16.0, 8.0, 16.0))
model = LoadModelFromMesh(mesh)

CALL C_F_POINTER(model%materials, materials, [1])

! void SetMaterialTexture(Material *material, int mapType, Texture2D texture);
CALL SetMaterialTexture(materials(1), MATERIAL_MAP_DIFFUSE, texture)
! void SetModelMeshMaterial(Model *model, int meshId, int materialId);
! CALL SetModelMeshMaterial(model, 0, 0)
! model%materials(1)%maps(MATERIAL_MAP_DIFFUSE)%texture = texture

mapPosition = Vector3_(-8.0, 0.0, -8.0)

CALL UnloadImage(image)

CALL SetTargetFPS(60)

DO
  IF (WindowShouldClose()) EXIT

  CALL UpdateCamera(camera, CAMERA_ORBITAL)

  CALL BeginDrawing()
  CALL ClearBackground(RAYWHITE)
  CALL BeginMode3D(camera)
  CALL DrawModel(model, mapPosition, 1.0, RED)
  CALL DrawGrid(20, 1.0)
  CALL EndMode3D()
  CALL DrawTexture(texture, screenWidth - texture%width - 20, 20, WHITE)
    CALL DrawRectangleLines(screenWidth - texture%width - 20, 20, texture%width, texture%height, GREEN)
  CALL DrawFPS(10, 10)

  CALL EndDrawing()

END DO

CALL UnloadTExture(texture)
CALL UnloadModel(model)

CALL CloseWindow()

END PROGRAM main
