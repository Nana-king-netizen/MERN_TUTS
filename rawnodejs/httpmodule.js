const http = require("http");
// creating a server

let server = http.createServer(function(request,response){
   if(request.url==="/"){
    response.write("This is the home page");
   }
   else if(request.url==="/home"){
    response.write("This is the home page");
   }
    else if(request.url==="/about"){
     response.write("This is the about page");
    }
    else if(request.url==="/contact"){
     response.write("This is the contact page");
    }
    else{
     response.write("Page not found");
   }
   response.end();
});


server.on("connection", function(){
    console.log("New connection");
})


// Listening to server

server.listen(3000,function(){
    console.log("Server is listening on port 3000");
})