const http=require("http");
const fs=require("fs");
const server = http.createServer((req,res)=>{
    if(req.url=="/"){
        res.end("Welcome to the home page");
    }
    else if(req.url=="/login"){
        res.end("Here is the login page");
    }
    else if(req.url=="/signup"){
        res.end("<h1>Your sign up</h1>");
    }
    else if(req.url=="/cart"){
        res.end("<h1>Add products here</h1>");
    }
    else if(req.url=="/about"){
       fs.readFile("about.html","utf-8",(err,data)=>{
        if(err) {
            console.log("Error Found"+err);
            res.end("Error");
        }
        else{
            res.end(data);
        }

       })
    }
})

server.listen(8090,()=>{
    console.log("Server is listening on port 8090");
});