import { buttonFunction} from "./formButton.js"

$(document).ready(function(){
    var jsonData = new Object;

    jsonData.id = {"value": "0"};
    jsonData.parent = {"value": true};

    $("#addTitle").on('click', () => { buttonFunction.addTitle($("#title").val(), $("#title_parent").val(), jsonData, jsonController)}); // jsonController -> CB func
    $("#addDescription").on('click', () => { buttonFunction.addDescription($("#description").val(), $("#title_parent").value, jsonData, jsonController)});
    $("#addImage").on('click', () => { buttonFunction.addImage($("#image").val(), $("#title_parent").val(), jsonData, jsonController)});
    $("#addLink").on('click', () => { buttonFunction.addLink($("#link").val(), $("#title_parent").val(), jsonData, jsonController)});

    $("#select-file").change(function(){
        var file = this.files[0];
        console.log(file.name);

        // DEBUG
        // W A R N I N G -> THIS COULD CREATE/OVERWRITE FILES IF UNCOMMENTED BE CAREFUL
        // $(".preview").load('../includes/jsonData.includes.php', {
        //     filename: file.name,
        // });

        // $(".preview").load('../includes/jsonData.includes.php');

    })

    $("#file-run").on('click', function(){
        $.ajax({
            type: "POST",
            url: "../includes/jsonData.includes.php",
            data: {
                json: JSON.stringify(jsonData),
                type: "run"
            },
            success: function(jsonData){
                console.log(jsonData);
            },
            error: function(error){
                console.log(error);
            }
        });
    })

    

    // $(".preview").load("../includes/renderData.php");
});

const jsonController = {
    addObject : function(key, data, json){
        !json[key] ? json[key] = data : json[key] = data; // doesn't do shit since it can't see the counter \_o_0_/
    }

}