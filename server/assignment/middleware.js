const express = require('express')

const app = express()
app.use(express.json())

// even the requests on wrong datpoints and methods will get logged too
function HTTPLogger(req, res, next){
    console.log(`request recieved : on ${req.url} with ${req.method} on time: ${new Date().toISOString()}`)
    next()
}

// middlewaare to count no of request
let num = 0
function totalRequest(req, res, next){
    num += 1
    console.log('Total request received: ', num)
    next()
}

app.use(HTTPLogger)
app.use(totalRequest)

app.get('/data', function(req, res){
    console.log('Hello')
    res.json({
        message: 'Hello client!'
    })
})

app.post('/data', function(req, res){
    const data = req.body
    console.log(data)
    res.json({
        message: 'data recieved from server'
    })
})    

// Endpoint to get Total Request Count
app.get('/request-count', function(req, res){
    res.json({
        TotalRequestCountRecieved: num
    })
})

app.listen(3000, function(){
    console.log(`server started on: http://localhost:3000`)
})