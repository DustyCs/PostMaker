<?php 

require "../classes/jsonDataContr.php";

$file = $_POST['filename'];

$test = getData($file);

$dataContr = new JsonDataContr($file);

echo $dataContr->data->John;

echo $test->John;

?>