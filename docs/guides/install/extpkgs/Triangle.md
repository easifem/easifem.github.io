# Triangle

<!-- markdownlint-disable MD041 MD013 MD033 MD012 -->

```bash title="results"
(triangle.h)                                                             
Include file for programs that call Triangle.                            
Accompanies Triangle Version 1.6                                         
July 28, 2005                                                            
Copyright 1996, 2005                                                     
Jonathan Richard Shewchuk                                                
2360 Woolsey #H                                                          
Berkeley, California  94705-1927                                         
jrs@cs.berkeley.edu
```

## How to compile Triangle

### Linux

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

### MacOSX

## How to call Triangle from another program

If you haven't read Triangle's instructions (run "triangle -h" to read them), you won't understand what follows.

Triangle must be compiled into an object file (triangle.o) with the `TRILIBRARY` symbol defined (generally by using the `-DTRILIBRARY` compiler switch). The `makefile` included with Triangle will do this for you if you run "make trilibrary". The resulting object file can be called via the procedure triangulate().

If the size of the object file is important to you, you may wish to generate a reduced version of triangle.o.

:::info
The `REDUCED` symbol gets rid of all features that are primarily of research interest. Specifically, the `-DREDUCED` switch eliminates Triangle's `-i`, `-F`, `-s`, and `-C` switches.
:::

:::note
The `CDT_ONLY` symbol gets rid of all meshing algorithms above and beyond constrained Delaunay triangulation. Specifically, the `-DCDT_ONLY` switch eliminates Triangle's `-r`, `-q`, `-a`, `-u`, `-D`, `-Y`, `-S`, and `-s` switches.
:::

:::note
These definitions (`TRILIBRARY`, `REDUCED`, `CDT_ONLY`) must be made in the makefile or in triangle.c itself. Putting these definitions in this file (triangle.h) will not create the desired effect.
:::

The calling convention for triangulate() follows.
