$(document).ready(function(){
    $("#select-file").change(function(){
        var file = this.files[0];
        console.log(file.name);

        // debug purpose
        $(".preview").load('../includes/jsonData.includes.php', {
            filename: file.name
        })
    })

    // $(".preview").load("../includes/renderData.php");
});
