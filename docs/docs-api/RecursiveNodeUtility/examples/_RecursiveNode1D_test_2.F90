! This example is similar to example 1,
! but in this case we test domain option.

PROGRAM main
USE GlobalData
USE RecursiveNodesUtility
USE Display_Method
USE String_class
USE Test_Method

IMPLICIT NONE

REAL(DFP), ALLOCATABLE :: b(:, :)

b = RecursiveNode1D(order=3, ipType=Equidistance, &
                    domain="Unit")
CALL Display(b, "b Unit=")

b = RecursiveNode1D(order=3, ipType=Equidistance, &
                    domain="Biunit")
CALL Display(b, "b BiUnit=")

b = RecursiveNode1D(order=3, ipType=Equidistance, &
                    domain="Barycentric")
CALL Display(b, "b Barycentric=")

b = RecursiveNode1D(order=3, ipType=Equidistance, &
                    domain="Equilateral")
CALL Display(b, "b Equilateral=")

END PROGRAM main
