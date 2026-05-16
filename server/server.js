/* 
HTTP deep dive topics : headers, query params, middlewares, auth etc.
Headers can be from bothbside request and reponse 
It generally contains - authorization, content0type, referer

query params synatx in url : http://localhost:3000/divide?a=8&b=40

There are mainly three ways a browser can call a HTTP server - 
through bydefault search bar (get request always), 
through forms (get or Post request in submission), 
Javascript in backgroud (fetch request : get, post, put, delete etc)

Middleware - are functions that have access to req, res objects and to the next() function to be excetued.
It can perform : chnage the req, res object, end the res-res cycle, call the next middleware function in the stack.

Commonly used middleares : express.json(), cors, rate limiter, request logger etc.
To fix cors issue eaaither we use the cors middleware or serve both the frontend and bcakedn from the same domain and port

*/
const express = require('express')
const cors = require('cors')

const app = express()

// build in express middleware that parse the jsin body to js object using bodyparser under the hood
app.use(express.json())
app.use(cors())

// middleware
// app.use(function(req, res, next){
//     if(req.query.a > 100 || req.query.b > 100){
//         res.json({
//             message: 'Bigger values not allowed'
//         })
//     }
//     console.log("Request Recieved")
//     next()
// })


// route specific middleware
function logrequest (req, res, next){
    console.log(`request made to: ${req.url}`)
    next()
}

app.get('/special', logrequest, function(req, res){
    res.send('This route uses route-specific middleware')
})


app.post('/data', function(req, res){
    const data = req.body
    console.log(req)
    console.log(data)

    res.json({
        message: 'data received',
        data
    })
})

app.post('/calculate', function(req, res){
    const data = req.body
    console.log(data)

    res.json({
        result: body.a + body.b
    })
})


app.get('/sum', function(req, res){
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)

    res.json({
        answer: a + b
    })
})

app.get('/multiply', function(req, res){
    const a = req.query.a
    const b = req.query.b

    res.json({
        answer: a * b
    })
})

app.get('/divide', function(req, res){
    const a = req.query.a
    const b = req.query.b

    res.json({
        answer: a / b
    })
})

app.get('/subtract', function(req, res){
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)

    res.json({
        answer:  a - b
    })
})

// To avoid cors error easily - serving the frontend from the same domain
// Find the html apge on : http://localhost:3000/ (Get Request)
app.get('/', function(req, res){
    res.sendFile(__dirname + "/fetch.html")
})

app.listen(3000)