<?php 

require "../classes/jsonDataContr.php";

$type = $_POST['type'];

if ($type == "select"){
    $file = $_POST['filename'];
}
    
if ($type == "run"){
    $json = filter_input(INPUT_POST, 'json');
    $decoded = json_decode($json);

    ECHO var_dump($decoded) . var_dump($type);

}   


// $file_location = "/../output/";
// $dataContr = new JsonDataContr($file, $file_location); // $file is only sent if type is select in case of run the json itself should be sent
// $dataContr->editData();
// $dataContr->renderData();

// echo $dataContr->data[0];
// ECHO var_dump($object);




?>