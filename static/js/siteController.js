$(document).ready(function(){
    $("#select-file").change(function(){
        var file = this.files[0];

        console.log(file.name);

        // $.ajax({
        //     type: 'POST',
        //     url: '../includes/jsonData.includes.php',
        //     data: { filename: file.name },
        //     success: function(response){
        //         console.log(response);
        //     }
        // });

        // debug purpose
        $(".preview").load('../includes/jsonData.includes.php', {
            filename: file.name
        })
    })

    // $(".preview").load("../includes/renderData.php");
});

// Soo this would send the file itself i think... https://stackoverflow.com/questions/8599595/send-json-data-from-javascript-to-php
// Probably better to just use the file path and let php open it by itself \o_-/
// request = new XMLHttpRequest;
// request.open("POST", "/classes/jsonDataContr.php", true);
// request.setRequestHeader("Content-type", "application/json");
// request.send(".../data.json");
// ["successfully sent"];