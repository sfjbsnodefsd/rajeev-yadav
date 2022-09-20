console.log("hello World!")
const http = require("http");
http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'application/json'});
    res.write(JSON.stringify({
        "name":"rajeev",
        "age":"30",
        "address":{
            "city":"mumbai",
            "state":"maharastra",
            "zip":"400066"
        }
    }));
    res.end();
}).listen(5000)