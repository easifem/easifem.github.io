# Deallocate

Deallocates memory associated with an `AbstractOneDimFE_` object.

```fortran
SUBROUTINE AbstractOneDimFEDeallocate(obj)
```

- `obj` - The AbstractOneDimFE_ object to deallocate

Alternative form:

```fortran
SUBROUTINE AbstractOneDimFEDeallocate(obj)
```

Deallocates an array of `AbstractOneDimFEPointer_` objects.

- `obj` - Array of AbstractOneDimFEPointer_ to deallocate

## Interface 1

```fortran
! Method 1: Deallocate a single instance
MODULE SUBROUTINE obj_Deallocate(obj)
  CLASS(AbstractOneDimFE_), INTENT(INOUT) :: obj
END SUBROUTINE obj_Deallocate
```

- `obj`: AbstractOneDimFE_ instance to deallocate (inout)

## Interface 2

```fortran
! Method 2: Deallocate a vector of pointers
MODULE SUBROUTINE Deallocate_Ptr_Vector(obj)
  TYPE(AbstractOneDimFEPointer_), ALLOCATABLE :: obj(:)
END SUBROUTINE Deallocate_Ptr_Vector
```

- `obj`: Vector of AbstractOneDimFEPointer_ to deallocate (inout)
