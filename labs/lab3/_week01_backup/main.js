let http = require("http") //Hypertext Transfer Protocol
let fs = require("fs")
let users = require("./data.js")

const PORT = 8088

// Create the server and the multiple paths below

 var server = http.createServer((request, response) => {
    if(request.url == "/") {
        response.write("h1>NodeJS Web Server at the root</h1>")
        response.write ("<p>Welcome to the NodeJS Web Server at the root</p>")
        response.end()
    }
    if(request.url == "/users") {
        let data = JSON.stringify(users.users.id) // Is this deep enough
        response.write(data)
        response.end()

    }
    if(request.url == "/name") {
        response.writeHead(200, {"Content-Type": "text/html"})
        response.write("<article>Cem Dudu</article>")
        response.end()
    }
    if(request.url == "/userlist") {
        fs.readFile(__dirname + "/employees.json", "utf-8", (error, data) => {
            response.write(data)
            response.end()
        })
    }
}).listen(PORT)
console.log("Server started at port number : ${PORT}")