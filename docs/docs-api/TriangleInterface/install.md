# How easifem builds Triangle

<!-- markdownlint-disable MD041 MD013 MD033 MD012 -->

## Linux

Following make file is used for compiling Triangle on Linux.

```make
SRC = ./
BIN = ./
CC = cc
FC = gfortran
CSWITCHES = -O3 -DLINUX
TRILIBDEFS = -DTRILIBRARY 
RM = /bin/rm

all: $(BIN)tricall

trilibrary: $(BIN)triangle.o

$(BIN)triangle.o: $(SRC)triangle.c $(SRC)triangle.h
$(CC) $(CSWITCHES) $(TRILIBDEFS) -c -o $(BIN)triangle.o $(SRC)triangle.c

distclean:
$(RM)  $(BIN)triangle.o  $(BIN)report.o $(BIN)tricall
```

## MacOSX
