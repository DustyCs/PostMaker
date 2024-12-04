$(document).ready(function(){
    $("#select-file").change(function(){
        var file = this.files[0];
        console.log(file);
    })

    $(".preview").load("../getData.php");
});