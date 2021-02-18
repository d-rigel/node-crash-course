const fs = require("fs")
const { join, dirname } = require("path")
const path = require("path")

//create a file

// fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
//     if (err) throw err
//     console.log("Folder created...")
// })

//Create and write to file

// fs.writeFile(path.join(__dirname, "/test", "hello.txt"), "Hello world!", err => {
//     if (err) throw err 
//     console.log("File written to...");

//     //appendfile
//     fs.appendFile(path.join(__dirname, "/test", "hello.txt"), " i love node.js", err => {
//         if (err) throw err 
//         console.log("File written to...")
//     })
// })


//Read file

// fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
//     if (err) throw err
//     console.log(data)
    
// })

//Rename file

// fs.rename(path.join(__dirname, "/test", "hello.txt"), "myFile.txt", err => {
//     if (err) throw err
//     console.log("File renamed")
// })

//Rename /second method

// fs.rename(path.join(__dirname, "/test", "hello.txt"), path.join(__dirname, "/test", "prove.txt"), err => {
//     if(err) throw err
//     console.log("File renamed")
// })

fs.readFile(path.join(__dirname, "/test", "prove.txt"), "utf8", (err, data) => {
    if(err) throw err
    console.log(data)
})




