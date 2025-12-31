PROGRAM main
USE mpi_f08

IMPLICIT NONE

TYPE(MPI_Comm) :: comm
INTEGER :: rank, size

CALL MPI_Init()
comm = MPI_COMM_WORLD

CALL MPI_Comm_rank(comm, rank)
CALL MPI_Comm_size(comm, size)

PRINT *, "Hello from rank ", rank, " of ", size

CALL MPI_Finalize()
END PROGRAM main
