
PROGRAM main
USE easifemBase
  REAL(REAL64) :: avec(10)
  INTEGER( I4B ) :: arg(10)
  CALL RANDOM_NUMBER(avec)
  avec = avec * 10
  CALL Display( avec, msg="unsorted array", advance="NO", full=.true. )
  arg = ArgSort(avec, "QuickSort" )
  CALL Display( arg, msg="arg", advance="NO", full=.true. )
  CALL Display( avec(arg), msg="QuickSort array", full=.true. )
  CALL blanklines()

  CALL RANDOM_NUMBER(avec)
  avec = avec * 10
  CALL Display( avec, msg="unsorted array", advance="NO", full=.true. )
  arg = ArgSort(avec, "HeapSort" )
  CALL Display( arg, msg="arg", advance="NO", full=.true. )
  CALL Display( avec(arg), msg="HeapSort array", full=.true. )
  CALL blanklines()

  CALL RANDOM_NUMBER(avec)
  avec = avec * 10
  CALL Display( avec, msg="unsorted array", advance="NO", full=.true. )
  arg = ArgSort(avec, "IntroSort" )
  CALL Display( arg, msg="arg", advance="NO", full=.true. )
  CALL Display( avec(arg), msg="IntroSort array", full=.true. )
  CALL blanklines()

END PROGRAM main
