const buttonFunction = {
    counter: 0,

    addTitle : function(value, jsonData, jsonController){
        console.log(value); //  $("#title").val()
        jsonController.addObject('title' + this.counter, value, jsonData);
        console.log(jsonData)
        this.counter++;
        console.log(this.counter)
    },

    addDescription : function(value, jsonData, jsonController){
        console.log(value); //  
        jsonController.addObject('description' + this.counter, value, jsonData);
        console.log(jsonData);
        this.counter++;
        console.log(this.counter);
    },

    addImage: function(value, jsonData, jsonController){
        console.log(value); 
        jsonController.addObject('image' + this.counter, value, jsonData);
        console.log(jsonData);
        this.counter++;
        console.log(this.counter);
    },

    addLink : function(value, jsonData, jsonController){
        console.log(value); 
        jsonController.addObject('link' + this.counter, value, jsonData);
        console.log(jsonData);
        this.counter++;
        console.log(this.counter);
    },

}