const Emitter = require("events")

const emitter = new Emitter()

const callback = (data, first, second) => {
    console.log("Message: " + data)
    console.log("Arguments: " + first, second)
}

emitter.on("message", callback)

const MESSAGE = process.env.message || ''

if (MESSAGE) {
    emitter.emit("message", MESSAGE, 123)
} else {
    emitter.emit("message", "Your message is empty")
}

emitter.removeListener("message", callback)