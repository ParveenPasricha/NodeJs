const http = require("http")

const myServer= http.createServer((req, res)=>{
    console.log(http)
    return res.end("Create First Server");
})
myServer.listen(8080,()=>{
    console.log("server is running")
})

