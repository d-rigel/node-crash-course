const EventEmitter = require("events")

//Create a class
class MyEmitter extends EventEmitter {}

//Init a class object
const myEmitter = new MyEmitter()

//Create eventListener
myEmitter.on("event", () => console.log("Event Fired"))

//Init event
myEmitter.emit("event")
myEmitter.emit("event")
myEmitter.emit("event")
myEmitter.emit("event")