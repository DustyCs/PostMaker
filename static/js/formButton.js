export const buttonFunction = {
    counter: 0,
    maintenance: true,
    titleRe: /h*http/g,
    imgRe: /png|jpg|webp/g,
    linkRe: /www|http|com/g,

    addTitle : function(value, parentClass, jsonData, jsonController){
        // console.log(this.titleRe)
        //console.log(/h*http/g.test('http'));
        // console.log(value, parentClass); //  $("#title").val()
        // Check
        // console.log(this.titleRe.test("http")) // regex
        if(!parentClass){
            parentClass = ".post-title"; // do the same thing with the other ones
        }


        var mainData = {"value": value, "type": "txt", "class":"", "parent_class": parentClass}; // works

        var test = {"id": {"value": "0"},

        "parent": {"value": true},

        "description": {"value": "The blog site is here!!! 25/11/2024! I really didn't think that I'll be able to actually push through my lazyness and do something like this but here I am!",
        
        "type":"txt", "class":"", "parent_class": ".post-content"},

        "image": {"value": "../data/images/blog-img/coming_soon.png", 
        
        "type":"img", "class":"blog-img", "parent_class": ".post-content"}, 

        "links": {"value": "No Links", 
        
        "type":"txt", "class":"", "parent_class": ".post-content"}}

        // Edit

        

        // Append
        
        jsonController.addObject('title' + this.counter, mainData, jsonData);
        this.counter++;
        console.log(jsonData)
    },

    addDescription : function(value, parentClass, jsonData, jsonController){
        var mainData = {"value": value, "type": "txt", "class":"", "parent_class": ".post-title"}
        console.log(value);
        jsonController.addObject('description' + this.counter, mainData, jsonData);
        this.counter++;
        console.log(jsonData);
    },

    addImage: function(value, parentClass, jsonData, jsonController){
        console.log(value); 
        // Convert

        // Check
        var mainData = {"value": value, "type": "img", "class":"", "parent_class": ".post-title"} 

        // Append
        jsonController.addObject('image' + this.counter, mainData, jsonData);
        this.counter++;
        console.log(jsonData);
    },

    addLink : function(value, parentClass, jsonData, jsonController){
        console.log(value); 
        
        var mainData = {"value": value, "type": "txt", "class":"", "parent_class": ".post-title"} 
        jsonController.addObject('link' + this.counter, mainData, jsonData);
        this.counter++;
        console.log(jsonData);
        
    },

}