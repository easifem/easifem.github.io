PROGRAM main
USE MPI_Method

IMPLICIT NONE

CALL MPI_Initiate()
CALL MPI_Display("MPI: ")
CALL MPI_Deallocate()
END PROGRAM main
