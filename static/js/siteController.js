import { buttonFunction} from "./formButton.js"

$(document).ready(function(){
    $("#select-file").change(function(){
        var file = this.files[0];
        console.log(file.name);

        // DEBUG
        // W A R N I N G -> THIS COULD CREATE/OVERWRITE FILES IF UNCOMMENTED BE CAREFUL
        // $(".preview").load('../includes/jsonData.includes.php', {
        //     filename: file.name,
        // });

        // Send Ajax Request

        // var obj ={
        //     val1: "this",
        // }

        // $.ajax({
        //     type: "POST",
        //     url: "../includes/jsonData.includes.php",
        //     data: {
        //         json: JSON.stringify(obj)
        //     },
        //     success: function(obj){
        //         console.log(obj);
        //     }
        // });

        // $(".preview").load('../includes/jsonData.includes.php');

    })

    var jsonData = new Object;

    jsonData.title = "Something";

    $("#addTitle").on('click', () => { buttonFunction.addTitle($("#title").val(), jsonData, jsonController)}); // jsonController -> CB func
    $("#addDescription").on('click', () => { buttonFunction.addDescription($("#description").val(), jsonData, jsonController)});
    $("#addImage").on('click', () => { buttonFunction.addImage($("#image").val(), jsonData, jsonController)});
    $("#addLink").on('click', () => { buttonFunction.addLink($("#link").val(), jsonData, jsonController)});

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
            }
        });
    })

    // $(".preview").load("../includes/renderData.php");
});


const jsonController = {
    addObject : function(key, data, json){
        !json[key] ? json[key] = data : json[key] = data;
    }

}