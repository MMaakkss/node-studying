const path = require("path")
console.log(path.join("first", "second"))
// console.log(path.resolve("firs", "second"))

const fullPath = path.resolve("first", "second.html")
// console.log(path.parse(fullPath))
console.log(path.sep)
console.log(path.isAbsolute("first/second"))
console.log(path.basename(fullPath))
console.log(path.extname(fullPath))

const siteUrl = "http://localhost:8080/users?id=5123"

const url = new URL(siteUrl)

console.log(url)