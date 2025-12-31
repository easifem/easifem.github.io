! Initiate an instance of `SolidMaterial_`.

PROGRAM main
USE SolidMaterial_Class
USE GlobalData
IMPLICIT NONE

CHARACTER(*), PARAMETER :: tomlFileName = "./toml/SolidMaterial1.toml"
CHARACTER(*), PARAMETER :: tomlName = "solid"
TYPE(SolidMaterial_) :: obj

CALL obj%ImportFromToml(tomlName="solid", filename=tomlFileName)
CALL obj%Display("obj:")

END PROGRAM main
