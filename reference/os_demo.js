const os = require("os")

//platform
console.log(os.platform())

//CPU arch
console.log(os.arch())

//CPU Core Info
console.log(os.cpus())

//Free Memory
console.log(os.freemem())

//Total Memory
console.log(os.totalmem())

console.log(os.homedir())

//Window type
console.log(os.type())

//release
console.log(os.release())

//uptime
console.log(os.uptime())

//userInfo
console.log(os.userInfo())
console.log(os.userInfo().username)

console.log(os)

