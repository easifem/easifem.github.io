# Deallocate

The `Deallocate` method releases all allocated memory and nullifies pointers in a `FEDOF_` object, returning it to an uninitialized state. This method is essential for proper memory management to prevent memory leaks.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE DEALLOCATE (obj)
    CLASS(FEDOF_), INTENT(INOUT) :: obj
  END SUBROUTINE DEALLOCATE
END INTERFACE
```

## Parameters

- `obj` - The `FEDOF_` object to be deallocated

## Notes

- This method checks if arrays are allocated before attempting to deallocate them, preventing potential runtime errors.
- For each associated finite element pointer, it calls the `DEALLOCATE` method of the finite element object before nullifying the pointer.
- The method does not deallocate the mesh itself, as the `FEDOF_` object only maintains a pointer to the mesh, which might be used elsewhere.
- After calling this method, the `FEDOF_` object is reset to its default state and can be reused for a new initialization.

## Example Usage

```fortran
TYPE(FEDOF_) :: dof

! After using dof...
CALL dof%DEALLOCATE()

! Now dof can be reused or safely go out of scope
```

## Important Considerations

- This method should be called when the `FEDOF_` object is no longer needed to prevent memory leaks.
- It's particularly important to call this method before reinitializing an existing `FEDOF_` object to avoid memory leaks.
- The method only deallocates resources directly owned by the `FEDOF_` object; it does not deallocate the mesh or other external resources that might be referenced by pointers.
