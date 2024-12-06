<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/static/css/master.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script src="/static/js/jquery-3.7.1.min.js"></script>
    <script type="module" src="/static/js/siteController.js"></script>
    <!-- <script src="/static/js/formButton.js"></script>  --> 
     <!-- ^ somehow managed to make it work by adding type module \_o_0_/ -->
    <title>Document</title>
</head>
<body>
    <div class="container">
        <div class="main-previewer">
            <div class="preview">
                
            </div>
        </div>
        <div class="interface">
            <div class="file-interface">
                <form action="" class="file-form">
                    <div class="file-selection file-input">
                        <label for="select-file" id="select-input">SELECT FILE</label>
                        <input type="file" id="select-file">
                    </div>
                    <div class="file-saver file-input">
                        SAVE FILE
                    </div>
                </form>
            </div>
            <div class="main-interface">
                <div class="interface-forms">
                    <form action="" class="main-form">
                        <div class="title input-form">
                            <label for="title">Add Title</label>
                            <input type="text" name="" id="title">
                            <input type="button" value="Create Title" id="addTitle">
                        </div>
                        <div class="description input-form">
                            <label for="description">Add Description</label>
                            <input type="text" name="" id="description">
                            <input type="button" value="Create Description" id="addDescription">
                        </div>
                        <div class="image input-form">
                            <label for="image">Add Image</label>
                            <input type="file" name="" id="image">
                            <input type="button" value="Add Image" id="addImage">
                        </div>
                        <div class="links input-form">
                            <label for="links">Add Links</label>
                            <input type="text" name="" id="link">
                            <input type="button" value="Add Links" id="addLink">
                        </div>
                    </form>
                </div>
                <div class="file-backup">
                    <button id="file-run">RUN</button>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
