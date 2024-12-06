const buttonFunction = {

    addTitle : function(value, jsonData, jsonController){
        console.log(value); //  $("#title").val()
        jsonController.addObject('title', value, jsonData);
        console.log(jsonData)
    },

    addDescription : function(value, jsonData, jsonController){
        console.log(value); //  
        jsonController.addObject('description', value, jsonData);
        console.log(jsonData)
    },

    addImage: function(value, jsonData, jsonController){
        console.log(value); 
        jsonController.addObject('image', value, jsonData);
        console.log(jsonData)
    },

    addLink : function(value, jsonData, jsonController){
        console.log(value); 
        jsonController.addObject('link', value, jsonData);
        console.log(jsonData)
    },

}