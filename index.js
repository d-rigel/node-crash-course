const http = require("http")
const path = require("path")
const fs = require("fs")

const server = http.createServer((req, res) => {
    // if(req.url === "/") {
    //     fs.readFile(path.join(__dirname, "public", "index.html"), (err, content) => {
    //         if (err) throw err
    //         res.writeHead(200, {"content-type": "text/html"})
    //         res.end(content)
    //     })
     
    // }

    // if(req.url === "/api/users") {
    //    const users = [
    //        {name: "John Smith", age: 40},
    //        {name: "grace Rice", age: 34}
    //    ];
    //    res.writeHead(200, {"content-type": "application/json"})
    //    res.end(JSON.stringify(users))
    // }

    //build file path
    const filePath = path.join(__dirname, "public", req.url === "/" ? "index.html" : req.url)
    res.writeHead(200, {"content-type": "text/html"});

    //Extention of file
    const extname = path.extname(filePath)

    //Initial content type
    let contentType = "text/html"

    //Check extention and set content type
    switch (extname) {
        case ".js":
            contentType = "text/javascript";
            break;
        case ".css": 
            contentType = "text/css";
            break;
        case ".json":
            contentType = "application/json";
            breake;
        case ".png":
            contentType = "image/png";
            break;
        case ".jpg":
            contentType = "image/jpg";
            break;
    }

    //Read file
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code == "ENOENT") {
                //Page not found
                fs.readFile(path.join(__dirname, "public", "404.html"), (err, content) => {
                    res.writeHead(200, { "content-type": "text/html"});
                    res.end(content, "utf-8")
                } )
            } else {
                //some server error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            } 
        } else {
            //Success
            res.writeHead(200, { "content-type": contentType});
             res.end(content, "utf-8")

        }
       
    })
    
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));























































// const http = require("http")
// const path = require("path")
// const fs = require("fs")

// const server = http.createServer((req, res) => {
//     if(req.url === "/") {
//         fs.readFile(path.join(__dirname, "public", "index.html"), (err, content) => {
//             if (err) throw err
//             res.writeHead(200, {"content-type": "text/html"})
//             res.end(content)
//         })
     
//     }

//     if(req.url === "/api/users") {
//        const users = [
//            {name: "John Smith", age: 40},
//            {name: "grace Rice", age: 34}
//        ];
//        res.writeHead(200, {"content-type": "application/json"})
//        res.end(JSON.stringify(users))
       
//     }
    
// })

// const PORT = process.env.PORT || 5000

// server.listen(PORT, () => console.log(`Server running on port ${PORT}`));



//.............................................................................................

// const http = require("http")
// const path = require("path")
// const fs = require("fs")

// const server = http.createServer((req, res) => {
//     if(req.url === "/") {
//         fs.readFile(path.join(__dirname, "public", "index.html"), (err, content) => {
//             if (err) throw err
//             res.writeHead(200, {"content-type": "text/html"})
//             res.end(content)
//         })
     
//     }

//     if(req.url === "/about") {
//         fs.readFile(path.join(__dirname, "public", "about.html"), (err, content) => {
//             if (err) throw err
//             res.writeHead(200, {"content-type": "text/html"})
//             res.end(content)
//         })
       
//     }
    
// })

// const PORT = process.env.PORT || 5000

// server.listen(PORT, () => console.log(`Server running on port ${PORT}`));




/////////////////////////////////////////////////////////////////////////////////
//Creating logger

// const Logger = require("./logger")

// const logger = new Logger()

// logger.on("message", data => console.log("Listener Called:", data))

// logger.log("i made another expression")
// logger.log("it will be easy  soon")




//Creating person class

// const Person = require("./person")
// const person1 = new Person("Nnadozie Alozie", 20)
// person1.greeting()

// const Logger = require("./logger")

// const logger = new Logger()

// logger.on("message", data => console.log("Called Listener:", data))

// logger.log("Hello world")