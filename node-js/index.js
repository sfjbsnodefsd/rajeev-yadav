console.log("hello World!")
const http = require("http");
http.createServer((req,res)=>{
    res.write("Server is running");
    // res.statusCode(200);
    res.end();
}).listen(5000)