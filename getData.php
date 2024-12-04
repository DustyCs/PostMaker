<?php 

$file_name = "non_array";
$json_data = file_get_contents(  __DIR__ . "/static/test_data/" . $file_name . ".json");

$data = json_decode($json_data); // objects
$data_array = json_decode($json_data, JSON_OBJECT_AS_ARRAY); // array


// ECHO $data[0]->name; // Because the json starts with an array [ ] and the objects are inside { } - test.json
ECHO $data->name; // This time the json starts with just the object { } - non_array.json
ECHO $data_array['name'];

// Write JSON

// Assoc Array
$names = [
    "John" => "Doe",
    "Johnny" => "Depth"
];

// Array

$names_only = ["John", "Johnny"];

// convert to json

$encoded_data = json_encode($names, JSON_PRETTY_PRINT); // Flag: JSON Pretty Print makes it so that the json file is much easier to read for humans

// Write data to file

file_put_contents('data.json', $encoded_data); // if file does not exist it will be made else OVERWRITTEN

?>