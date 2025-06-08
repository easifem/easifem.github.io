# GetCellOrder

The `GetCellOrder` method retrieves the polynomial order of a specified cell element.

## Interface

```fortran
MODULE SUBROUTINE obj_GetCellOrder(obj, cellOrder, tCellOrder, globalElement, islocal)
  CLASS(FEDOF_), INTENT(IN) :: obj
  !! fedof object
  INTEGER(I4B), INTENT(INOUT) :: cellOrder(:)
  !! cell order
  INTEGER(I4B), INTENT(OUT) :: tCellOrder
  !! size of data written in cellOrder
  INTEGER(I4B), INTENT(IN) :: globalElement
  !! global or local element number
  LOGICAL(LGT), OPTIONAL, INTENT(IN) :: islocal
  !! if true then globalElement is local element
END SUBROUTINE obj_GetCellOrder
```

## Description

The `GetCellOrder` method retrieves the polynomial order of a specified cell element. The polynomial order determines the degree of the basis functions used for approximation within that element, which directly impacts the accuracy and computational cost of the finite element solution.

### Parameters

- `obj` - Input, `CLASS(FEDOF_)`, FEDOF object instance
- `cellOrder` - Output, `INTEGER(I4B)(:)`, pre-allocated array to store the cell order
- `tCellOrder` - Output, `INTEGER(I4B)`, total size of data written to the `cellOrder` array (typically 1)
- `globalElement` - Input, `INTEGER(I4B)`, global or local element number
- `islocal` - Optional Input, `LOGICAL(LGT)`, if true, `globalElement` is treated as a local element number

### Implementation Details

The implementation converts the global element number to a local element number if needed, then retrieves the cell order from the internal storage:

```fortran
INTEGER(I4B) :: jj

jj = obj%mesh%GetLocalElemNumber(globalElement=globalElement, islocal=islocal)

cellOrder(1) = obj%cellOrder(jj)
tcellOrder = 1
```

## Usage Example

```fortran
! Example to get the order of a cell
INTEGER(I4B) :: order(1), tOrder
TYPE(FEDOF_) :: myDOF

! Get order for element #5
CALL myDOF%GetCellOrder(cellOrder=order, tCellOrder=tOrder, globalElement=5)
PRINT *, "Element 5 has order:", order(1)

! Get order for element #3 using local numbering
CALL myDOF%GetCellOrder(cellOrder=order, tCellOrder=tOrder, globalElement=3, islocal=.TRUE.)
PRINT *, "Local element 3 has order:", order(1)
```

## Important Notes

1. The `cellOrder` array typically only needs one element as this method returns a single value
2. The `tCellOrder` return value will typically be 1, indicating a single value written to `cellOrder`
3. In p-adaptive finite element methods, different cells may have different polynomial orders

## Related Methods

- `GetOrders` - More comprehensive method that returns cell, face, and edge orders along with their orientations
- `SetCellOrder` - Sets the polynomial order for cells
- `GetLocalElemShapeData` - Uses the cell order to determine the appropriate shape functions
- `GetQuadraturePoints` - Often needs the cell order to determine appropriate quadrature rules

The `GetCellOrder` method is important for finite element implementations that use p-adaptive methods or variable-order elements, where the polynomial degree may vary between elements to optimize computational efficiency.

## Example

import EXAMPLE81 from "./examples/_GetCellOrder_test_1.md";

<EXAMPLE81 />
