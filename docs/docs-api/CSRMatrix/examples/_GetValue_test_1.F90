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
TYPE(CSRMatrix_) :: obj
REAL(DFP), ALLOCATABLE :: mat(:, :)

CALL IMPORT(obj, "./matrixMarket/small5.mtx", SPARSE_FMT_COO)

mat = obj

BLOCK
  REAL(DFP) :: VALUE(3, 3)
  INTEGER(I4B) :: nodenum(3)
  LOGICAL(LGT) :: isok

  nodenum = [1, 2, 3]
  CALL GetValue(obj=obj, nodenum=nodenum, VALUE=VALUE)
  isok = ALL(VALUE.APPROXEQ.MAT(nodenum, nodenum))

  CALL OK(isok, "GetValue(1)")

END BLOCK

BLOCK
  REAL(DFP) :: VALUE(3, 3)
  INTEGER(I4B) :: nodenum(3)
  LOGICAL(LGT) :: isok

  nodenum = [1, 2, 3]
  CALL GetValue(obj=obj, nodenum=nodenum, VALUE=VALUE, storageFMT=FMT_DOF)
  isok = ALL(VALUE.APPROXEQ.MAT(nodenum, nodenum))

  CALL OK(isok, "GetValue(2)")

END BLOCK

BLOCK
  REAL(DFP) :: VALUE(3, 3)
  INTEGER(I4B) :: nodenum(3)
  LOGICAL(LGT) :: isok

  nodenum = [1, 2, 3]
  CALL GetValue(obj=obj, nodenum=nodenum, VALUE=VALUE, storageFMT=FMT_NODES)
  isok = ALL(VALUE.APPROXEQ.MAT(nodenum, nodenum))

  CALL OK(isok, "GetValue(3)")

END BLOCK

BLOCK
  REAL(DFP) :: VALUE
  INTEGER(I4B) :: irow, icolumn
  LOGICAL(LGT) :: isok

  irow = 4; icolumn = 5
  CALL GetValue(obj=obj, irow=irow, icolumn=icolumn, VALUE=VALUE)
  isok = VALUE.APPROXEQ.MAT(irow, icolumn)

  irow = 3; icolumn = 5
  CALL GetValue(obj=obj, irow=irow, icolumn=icolumn, VALUE=VALUE)
  isok = VALUE.APPROXEQ.MAT(irow, icolumn)

  CALL OK(isok, "GetValue(4)")
END BLOCK

BLOCK
  REAL(DFP) :: VALUE
  INTEGER(I4B) :: inode, jnode, idof, jdof
  LOGICAL(LGT) :: isok

  inode = 4; jnode = 5; idof = 1; jdof = 1
  CALL GetValue(obj=obj, iNodeNum=inode, jNodeNum=jnode, idof=idof, jdof=jdof, VALUE=VALUE)
  isok = VALUE.APPROXEQ.MAT(inode, jnode)

  CALL OK(isok, "GetValue(5)")
END BLOCK

BLOCK
  REAL(DFP) :: VALUE
  INTEGER(I4B) :: inode, jnode, idof, jdof, ivar, jvar
  LOGICAL(LGT) :: isok

  inode = 4; jnode = 5; idof = 1; jdof = 1; ivar = 1; jvar = 1
  CALL GetValue(obj=obj, iNodeNum=inode, jNodeNum=jnode, idof=idof,  &
    & jdof=jdof, ivar=ivar, jvar=jvar, VALUE=VALUE)
  isok = VALUE.APPROXEQ.MAT(inode, jnode)

  CALL OK(isok, "GetValue(6)")
END BLOCK

BLOCK
  REAL(DFP) :: VALUE(3, 3)
  INTEGER(I4B) :: inode(3), jnode(3), ivar, jvar
  LOGICAL(LGT) :: isok

  inode = [1, 2, 3]; jnode = [1, 2, 3]; ivar = 1; jvar = 1
  CALL GetValue(obj=obj, iNodeNum=inode, jNodeNum=jnode, ivar=ivar,  &
  & jvar=jvar, VALUE=VALUE)
  isok = ALL(VALUE.APPROXEQ.MAT(inode, jnode))

  CALL OK(isok, "GetValue(7)")
END BLOCK

BLOCK
  REAL(DFP) :: VALUE(3, 3)
  INTEGER(I4B) :: inode(3), jnode(3), ivar, jvar, idof, jdof
  LOGICAL(LGT) :: isok

  inode = [1, 2, 3]; jnode = [1, 2, 3]; ivar = 1; jvar = 1; idof = 1; jdof = 1
  CALL GetValue(obj=obj, iNodeNum=inode, jNodeNum=jnode, ivar=ivar,  &
    & jvar=jvar, idof=idof, jdof=jdof, VALUE=VALUE)
  isok = ALL(VALUE.APPROXEQ.MAT(inode, jnode))

  CALL OK(isok, "GetValue(8)")
END BLOCK

CALL Display(mat, "mat: ")

END PROGRAM main
