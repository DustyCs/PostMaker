<?php

class JsonDataContr {
    public $data;
    private $filename;
    private $data_url;


    function __construct($jsonName){
        $this->setData($jsonName);
    }

    private function setData($dataName){
        $this->data_url = __DIR__ . "/../output/" . $dataName;
        $this->data =  json_decode(file_get_contents($this->data_url));
    }

    private function editData($data){
        $names_only = ["John", "Johnny"];

        $encoded_data = json_encode($data, JSON_PRETTY_PRINT);
    
        // Write data to file
    
        file_put_contents('data.json', $encoded_data);
    
    }

    private function renderData($data){
        file_put_contents('data.json', $data);
    }
    


}

function getData($dataName){
    $data =  json_decode(file_get_contents(__DIR__ . "/../output/" . $dataName));

    return $data;
}

function editData($data){
    // $data = $data;

    // Array

    $names_only = ["John", "Johnny"];

    // convert to json

    $encoded_data = json_encode($data, JSON_PRETTY_PRINT); // Flag: JSON Pretty Print makes it so that the json file is much easier to read for humans

    // Write data to file

    file_put_contents('data.json', $encoded_data); // if file does not exist it will be made else OVERWRITTEN

}



?>