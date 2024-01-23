<?php



$usu = $_REQUEST["usuario"];
$pass= $_REQUEST["password"];


if ($usu=="admin" && $pass=="1234") {
    $resultado="Usuario válido";
}else
$resultado="Usuario no válido";

echo $resultado;
?>