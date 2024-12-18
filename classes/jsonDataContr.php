<?php

class JsonDataContr {
    public $data;
    public $data_url;
    public $file;
    public $file_location;

    function __construct(){
        if($this->file){ // won't run since file is false when constructed - R?
            $this->setData($this->file, $this->file_location);
        }
    }

    public function setData($dataName, $dataLocation){
        $this->data_url = __DIR__ . $dataLocation . $dataName;
        
        if (!$this->data){
            $this->data =  json_decode(file_get_contents($this->data_url));
        }
    
    }

    public function editData(){
        // $this->data = array(
        //     "name" => "John",
        //     "surname" => "Doe"
        // );

        $this->data = json_encode($this->data, JSON_PRETTY_PRINT);
    }

    public function renderData(){
        file_put_contents($this->data_url, $this->data);
    }
}

?>