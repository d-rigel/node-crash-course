const { basename } = require("path")
const path = require("path")

//Base file name
console.log(path.basename(__filename))
// console.log(path.basename(__dirname))

//Directory name

console.log(path.dirname(__filename))

//File Extension
console.log(path.extname(__filename))

//Create path object

console.log(path.parse(__filename))
console.log(path.parse(__filename).root)

//concatenate paths
console.log(path.join(__dirname, "newFIle", "hello.html"))