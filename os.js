const os = require('os')
const cluster = require('cluster')

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus().length);

const cpus = os.cpus()

if (cluster.isMaster) {
    for (let i = 0; i < cpus.length - 4; i++) {
       cluster.fork()
    }

    cluster.on("exit", (worker, code, signal) => {
        console.log(process.pid + " was killed")

        if (code === "") {
            cluster.fork()
        } else {
            console.log("Worker is dead")
        }
    })
} else {
    console.log(process.pid)

    setInterval(() => console.log(process.pid, " is still working"), 5000)
}