// const fs = require("fs");

// Synchronous file system operations

// let data =  fs.readFileSync("./Text.txt",{encoding:"utf-8"});
//  console.log(data);
// fs.unlinkSync("./Text.txt");
// fs.writeFileSync("Text.txt","hi there");


// Async file system operations

// fs.writeFile("text.txt","hello",function(error){
//     if(!error){
//         console.log("file created");
//     }
// })

// fs.readFile("./text.txt",{encoding:"utf-8"}, function(error,data){
//     if(!error){
//         console.log(data);
//     }
// })

// fs.unlink("./text.txt",function(error){
//     if(!error){
//         console.log("file deleted");
//     }
// })


const EventEmitter = require("events");
const fs = require("fs");
const eventEmitter = new EventEmitter();

eventEmitter.on("event-1", function(content){
   fs.writeFile("test.txt",content,function(error){
    if(!error){
        console.log("file created successfully");
    }
   })
  
})

eventEmitter.on("event-2",function(){
    fs.unlink("./test.txt",function(error){
        if(!error){
            console.log("File deleted successfully");
        }
    })
})

module.exports = eventEmitter;