<?php 

require "../classes/jsonDataContr.php";

$file = $_POST['filename'];

$test = getData($file);

echo $test->John;

?>