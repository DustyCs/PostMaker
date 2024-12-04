<?php 

require "../classes/jsonDataContr.php";

$file = $_POST['filename'];
$file_location = "/../output/";
$dataContr = new JsonDataContr($file, $file_location);
$dataContr->editData();
$dataContr->renderData();

// echo $dataContr->data[0];



?>