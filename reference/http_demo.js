const http = require("http");


//Create a server object
http.createServer((req, res) => {
    //Write a response
    res.write("this is my excellent server");
    res.end()
}).listen(5000, () => console.log("Nnadozie Server running..."))


