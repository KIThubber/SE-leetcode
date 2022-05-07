var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')

app = express()
app.use(serveStatic(__dirname + "/"))
var port = process.env.port || 5000

var hostname="127.0.0.1"

app.listen(port, hostname, () => {
    console.log("Server running on ${port")
})