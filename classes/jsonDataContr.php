<?php

class JsonDataContr {
    public $data;
    private $data_url;

    function __construct($jsonName=null, $jsonLocation){
        if($jsonName){
            $this->setData($jsonName, $jsonLocation); // Does not make sense to set on construct...  CLEAN THIS
        }
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