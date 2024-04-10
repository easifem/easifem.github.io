! This program is a part of EASIFEM library
! Copyright (C) 2020-2021  Vikas Sharma, Ph.D
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
IMPLICIT NONE
TYPE(ReferenceLine_) :: obj
REAL(DFP) :: avar, xij(1, 2)

obj = ReferenceLine(nsd=1_I4B)
CALL OK(obj%domainName .EQ. "BIUNIT", "tests: ")

obj = ReferenceLine(nsd=1_I4B, domainName="UNIT")
CALL OK(obj%domainName .EQ. "UNIT", "tests: ")

obj = ReferenceLine(nsd=1_I4B, domainName="BIUNIT")
CALL OK(obj%domainName .EQ. "BIUNIT", "tests: ")

obj = ReferenceLine(nsd=1_I4B, xij=RefCoord_Line("UNIT"))
CALL OK(obj%domainName .EQ. "UNIT", "tests: ")

obj = ReferenceLine(nsd=1_I4B, xij=RefCoord_Line("BIUNIT"))
CALL OK(obj%domainName .EQ. "BIUNIT", "tests: ")

obj = ReferenceLine(nsd=1_I4B, xij=2.0_DFP * RefCoord_Line("BIUNIT"))
CALL OK(obj%domainName .EQ. "GENERAL", "tests: ")
END PROGRAM main
