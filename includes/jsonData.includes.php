<?php 

require "../classes/jsonDataContr.php";

$type = $_POST['type'];
$dataContr = new JsonDataContr; 

if ($type == "select"){
    $file = $_POST['filename'];
    $file_location = "/../output/";

    $dataContr->file = $file;
    $dataContr->file_location = $file_location;
    $dataContr->setData($file, $file_location); # Test
}
    
if ($type == "run"){
    $json = filter_input(INPUT_POST, 'json');
    $decoded = json_decode($json);
    $save_location = "/../output/";
    $file_name = "test";

    $dataContr->data = $decoded; // No need to run setData since this is already the data
    $dataContr->editData();
    // Set Data URL BEFORE RUNNING RENDER DATA
    $dataContr->data_url = __DIR__ . $save_location . $file_name . ".json";
    $dataContr->renderData(); 

    ECHO var_dump($decoded) . var_dump($type);

}   

if ($type == "save"){
    
}

if ($type == "backup"){
    
}

if ($type == "maintenance"){
    $json = filter_input(INPUT_POST, 'json');
    $decoded = json_decode($json);

    ECHO var_dump($decoded) . var_dump($type);
}

// dont tohuch
// $dataContr->editData();
// $dataContr->renderData();

echo $dataContr->data[0];
// ECHO var_dump($object);



// to do 
// have the data from the form be written into the json file
// read the json file data if there is "properly readable data"
// if none then show something else



?>