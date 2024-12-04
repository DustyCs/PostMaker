$(document).ready(function(){
    $("#select-file").change(function(){
        var file = this.files[0];
        console.log(file.name);

        // debug purpose
        // W A R N I N G -> THIS COULD CREATE/OVERWRITE FILES IF UNCOMMENTED BE CAREFUL
        // $(".preview").load('../includes/jsonData.includes.php', {
        //     filename: file.name
        // })

    })

    var jsonData = new Object;

    jsonData.title = "Something";

    // console.log(jsonData);

    $("#addTitle").on('click', function(){
        console.log($("#title").val());
        jsonController.addTitle($("#title").val(), jsonData);
        console.log(jsonData);
    })

    // $(".preview").load("../includes/renderData.php");
});

// STILL DRY 
// NEED CLEANING
// Need a way to increment the object key
const jsonController = {
    addTitle : function(data, json){
        !json.title ? json.title = data : json["title" + 1] = data;
    },
    addDescription : function(data, json){
        !json.description ? json.description = data : json[description + '1'] = data;
    },
    addImage : function(data, json){
        !json.image ? json.image = data : json[image + '1'] = data;
    },
    addLinks : function(data, json){
        !json.link ? json.link = data : json[link + '1'] = data;
    }

}