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

    $("#addDescription").on('click', function(){
        console.log($("#title").val());
        jsonController.addDescription($("#title").val(), jsonData);
        console.log(jsonData);
    })

    $("#addImage").on('click', function(){
        console.log($("#title").val());
        jsonController.addImage($("#title").val(), jsonData);
        console.log(jsonData);
    })

    $("#addLink").on('click', function(){
        console.log($("#title").val());
        jsonController.addLink($("#link").val(), jsonData);
        jsonController.addObject("link", $("#link").val(), jsonData) // Clean - Works
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
    addLink : function(data, json){
        !json.link ? json.link = data : json[link + '1'] = data;
    },
    // Cleaner
    addObject : function(key, data, json){
        !json[key] ? json[key] = data : json[key + 1] = data;
    }

}