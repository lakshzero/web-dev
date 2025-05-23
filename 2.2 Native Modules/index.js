const fs = require("fs");

/*fs.writeFile("message.txt","HELLO FROM NODE JS",(err) =>{
    if(err) throw err;
    console.log("The file has been saved!");
});*/

fs.readFile("./message.txt",(err,data) =>{
    if(err) throw err;
    console.log(data.toString()); // to display actual content
});