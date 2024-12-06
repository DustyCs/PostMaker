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

    $("#addTitle").on('click', () => { buttonFunction.addTitle($("#title").val(), jsonData, jsonController)});
    $("#addDescription").on('click', () => { buttonFunction.addDescription($("#description").val(), jsonData, jsonController)});
    $("#addImage").on('click', () => { buttonFunction.addImage($("#image").val(), jsonData, jsonController)});
    $("#addLink").on('click', () => { buttonFunction.addLink($("#link").val(), jsonData, jsonController)});

    // $(".preview").load("../includes/renderData.php");
});


const jsonController = {
    addObject : function(key, data, json){
        !json[key] ? json[key] = data : json[key + 1] = data;
    }

}