const buttonFunction = {

    addTitle : function(value, jsonData, jsonController){
        console.log(value); //  $("#title").val()
        jsonController.addObject('title', value, jsonData);
        console.log(jsonData)
    },

}