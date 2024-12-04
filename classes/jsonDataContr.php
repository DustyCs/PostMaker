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

?>