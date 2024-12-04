<?php

class JsonDataContr {
    public $data;
    private $data_url;

    function __construct($jsonName, $jsonLocation){
        $this->setData($jsonName, $jsonLocation);
    }

    private function setData($dataName, $dataLocation){
        $this->data_url = __DIR__ . $dataLocation . $dataName;
        $this->data =  json_decode(file_get_contents($this->data_url));
    }

    public function editData(){
        $this->data = array(
            "name" => "John",
            "surname" => "Doe"
        );
        $this->data = json_encode($this->data, JSON_PRETTY_PRINT);
    }

    public function renderData(){
        file_put_contents($this->data_url, $this->data);
    }
}

// function getData($dataName){
//     $data =  json_decode(file_get_contents(__DIR__ . "/../output/" . $dataName));

//     return $data;
// }

// function editData($data){
//     // $data = $data;

//     // Array

//     $names_only = ["John", "Johnny"];

//     // convert to json

//     $encoded_data = json_encode($data, JSON_PRETTY_PRINT); // Flag: JSON Pretty Print makes it so that the json file is much easier to read for humans

//     // Write data to file

//     file_put_contents('data.json', $encoded_data); // if file does not exist it will be made else OVERWRITTEN

// }



?>