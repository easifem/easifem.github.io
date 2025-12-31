!> author: Vikas Sharma, Ph. D.
! date: 2025-06-11
! summary:  This program tests the ImportFromToml method of FEDomain class

PROGRAM main
USE FEDomain_Class
IMPLICIT NONE
TYPE(FEDomain_) :: dom

CHARACTER(*), PARAMETER :: tomlfilename = "./FEDomain.toml"

CALL dom%ImportFromToml(tomlName="test1", fileName=tomlfilename)
CALL dom%DisplayDomainInfo("Domain Info after ImportFromToml test1:")

END PROGRAM main
