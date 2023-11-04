const fs = require("fs")
const path = require("path")
const fsPromise = require("fs/promises")

// fs.mkdir(path.resolve(__dirname, 'dir', 'dir2'), (err) => {
//     if (err) {
//         console.log(err)
//         return
//     }
// })
//
// fs.rmdir(path.resolve(__dirname, 'dir'), (err) => {
//     if (err) {
//         throw err
//     }
// })

// fsPromise.writeFile(path.resolve(__dirname, 'test.txt'), 'Hello World!', (err) => {
//     if (err) {
//         throw err
//     }
// }).then(r => {
//     console.log('sss')
// })
//
// fsPromise.appendFile(path.resolve(__dirname, 'test.txt'), '\nHello World Again!', (err) => {
//     if (err) {
//         throw err
//     }
// })

const writeFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, (err) => {
            if (err) {
                return  reject(err.message)
            }
            resolve()
        })
    })
}

const appendFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => {
        fs.appendFile(path, data, (err) => {
            if (err) {
                return  reject(err.message)
            }
            resolve()
        })
    })
}

const readFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, {encoding: 'utf-8'}, (err, data) => {
            if (err) {
                return  reject(err.message)
            }
            resolve(data)
        })
    })
}

const removeFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => {
        fs.rm(path, (err) => {
            if (err) {
                return  reject(err.message)
            }
            resolve()
        })
    })
}

writeFileAsync(path.resolve(__dirname,'test.txt'), 'data')
    .then(() => appendFileAsync(path.resolve(__dirname,'test.txt'), "\n123"))
    .then(() => appendFileAsync(path.resolve(__dirname,'test.txt'), "\n123"))
    .then(() => readFileAsync(path.resolve(__dirname,'test.txt'), "\n123"))
    .then(data => console.log(data))
    .then(() => removeFileAsync(path.resolve(__dirname,'test.txt')))
    .catch(err => console.log(err))


const text = process.env.TEXT || "asd asd das"

writeFileAsync(path.resolve(__dirname, "text.txt"), text)
    .then(() => readFileAsync(path.resolve(__dirname, "text.txt")))
    .then(data => console.log(data.split(" ").length))
    .then(() => removeFileAsync(path.resolve(__dirname, "text.txt")))
    .catch(err => console.log(err))
