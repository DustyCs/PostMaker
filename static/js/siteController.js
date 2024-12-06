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

    // R
    // $("#addTitle").on('click', function(){
    //     console.log($("#title").val());
    //     jsonController.addObject("title", $("#title").val(), jsonData)
    //     console.log(jsonData);
    // })

    // $("#addDescription").on('click', function(){
    //     console.log($("#description").val());
    //     jsonController.addObject("description", $("#description").val(), jsonData)
    //     console.log(jsonData);
    // })

    // $("#addImage").on('click', function(){
    //     console.log($("#image").val());
    //     jsonController.addObject("image", $("#image").val(), jsonData)
    //     console.log(jsonData);
    // })

    // $("#addLink").on('click', function(){
    //     console.log($("#link").val());
    //     jsonController.addObject("link", $("#link").val(), jsonData) // Clean - Works
    //     console.log(jsonData);
    // })

    // $(".preview").load("../includes/renderData.php");
});


const jsonController = {
    addObject : function(key, data, json){
        !json[key] ? json[key] = data : json[key + 1] = data;
    }

}