const fs = require("fs");
let readStream = fs.ReadStream("./data.txt");
readStream.on("data",function(buffer){
    console.log(buffer.toString());
})