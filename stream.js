const fs = require("fs")
const path = require("path")

const stream = fs.createReadStream(path.resolve(__dirname, 'test.txt'), {encoding: "utf-8"})
stream.on("data", (chunk) => {
    console.log(chunk)
})
stream.on("end", () => {
    console.log("End")
})
stream.on("open", () => {
    console.log("Open")
})
stream.on("error", (e) => {
    console.log(e)
})

const writableStream = fs.createWriteStream(path.resolve(__dirname, 'test.txt'))
writableStream.write("hello")
writableStream.end()


const http = require("http")

http.createServer((req, res) => {
    const stream = fs.createReadStream(path.resolve(__dirname, 'test.txt'))
    stream.pipe(res)
    // stream.on("data", chunk => res.write(chunk))
    // stream.on("end", () => res.end())
})