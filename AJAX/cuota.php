<?php



$capital = $_REQUEST["capital"];
$interes= $_REQUEST["interes"];
$plazo= $_REQUEST["plazo"];



echo ($capital+($capital*$interes/100))/$plazo;
?>