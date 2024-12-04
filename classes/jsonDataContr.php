<?php

// getting the url seems pointless now since i can't find a way without having to deal with security 

// $file_name = $_POST["filename"];
// $json_data = file_get_contents(  __DIR__ . "/static/test_data/" . $file_name . ".json");

// $data = json_decode($json_data); // objects
// $data_array = json_decode($json_data, JSON_OBJECT_AS_ARRAY); // array


// // ECHO $data[0]->name; // Because the json starts with an array [ ] and the objects are inside { } - test.json
// ECHO $data->name; // This time the json starts with just the object { } - non_array.json
// ECHO $data_array['name'];

// $str_json = file_get_contents('php://input');


function getData($dataName){
    $data =  file_get_contents(__DIR__ . "/../output/" . $dataName);
    $data = json_decode($data);

    return $data;
}




?>