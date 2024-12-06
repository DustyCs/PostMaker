const buttonFunction = {
    counter: 0,
    titleRe: / h* /g,
    imgRe: / png | jpg | webp /g,
    linkRe: / www | http | com /g,

    addTitle : function(value, jsonData, jsonController){
        console.log(value); //  $("#title").val()
        jsonController.addObject('title' + this.counter, value, jsonData);
        console.log(this.titleRe.test("http"))
        this.counter++;
        console.log(jsonData)
    },

    addDescription : function(value, jsonData, jsonController){
        console.log(value);
        jsonController.addObject('description' + this.counter, value, jsonData);
        this.counter++;
        console.log(jsonData);
    },

    addImage: function(value, jsonData, jsonController){
        console.log(value); 
        jsonController.addObject('image' + this.counter, value, jsonData);
        this.counter++;
        console.log(jsonData);
    },

    addLink : function(value, jsonData, jsonController){
        console.log(value); 
        jsonController.addObject('link' + this.counter, value, jsonData);
        this.counter++;
        console.log(jsonData);
        
    },

}