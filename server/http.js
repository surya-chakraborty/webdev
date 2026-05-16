/* Basic of Hyper Text Transfer Protocol (HTTP) : one of the protocols to communicate between client-server (grpc/webrtc, websockets)
the clinet -server totally depends upona req-response cycle, the essential parts are :
to send data - query, body{mainly json body}, headers (for metadata)
method - get, post, put, patch and delete
routes - to sperate function handlers for diffrent tasks
status code - send back from server with response for easier diagnose (200, 300, 400, 500 series)

now from server side, we have :
domain (human readble) taht resolves to a machine ip adress 
on that ip muktiple logical ports with individual node processes are running 

response can be in - plantext, html, json format back from the server 
clients can be - postman, curl, broswer, mobile app etc.
*/

/*
// calculate sum server
const express = require('express')
function calculateSum(n){
    let sum = 0
    for(let i = 1; i <= n; i++){
        sum +=i;
    }
    return sum;
    // console.log('within calculatesum fnc: ',sum)
}

const app = express()

app.get('/', function (req, res) {
    // console.log(req)
    // console.log(req.query)
    // console.log(req.query.n)
    let n = req.query.n
    // console.log(n)
    const ans = calculateSum(n)
    // console.log('Final answer: ', ans)
    res.send(ans)
})

app.listen(5000)
*/

// In memory doctor server

let users = [{
    name: 'John Doe',
    kidneys: [{
        healthy: true
    }, {
        healthy: false
    }]
}]

console.log(users[0])

const express = require('express')

const app = express()
app.use(express.json())
/*
Get - check user kidneys no and health
Post - users can add a new kidney
Put - users can replace a kidney, make it healthy
Delete - user cam remove a kidney
*/

app.get('/checkup', function(req, res) {
    let healthyKidneys = users[0].kidneys.filter((k) => {
        return k.healthy == true
    }).length
    console.log(healthyKidneys)

    res.json({
        noOfKidneys: users[0].kidneys.length,
        noOfHealthyKidneys: healthyKidneys,
        noOfUnhealthyKidneys: users[0].kidneys.length - healthyKidneys
    })
})

app.post('/kidney', function(req, res) {
    
    let noOfKidneys = users[0].kidneys.length

    if(noOfKidneys <=1 && noOfKidneys >= 0){
        users[0].kidneys.push({
            healthy: true
        })

        res.json({
        message: 'New Healthy kidney added'
    })
    }else{
        res.json({
            message: "no new kidneys can be added"
        })
    }
    
})

app.delete('/kidney', function(req, res) {
    let noOfKidneys = users[0].kidneys.length
    if(noOfKidneys <3 && noOfKidneys >= 0){
        // delete all unhealthy kidneys
        users[0].kidneys.filter((k) => {
            return k.healthy
        })
        res.json({
            message: 'One kidney deleted'
        })
    }    
})

app.put('/kidney', function(req, res) {

    let noOfKidneys = users[0].kidneys.length
    if(noOfKidneys <3 && noOfKidneys >= 0){
        users[0].kidneys.forEach(k => k.healthy= true)
    }

    res.json({
            message: 'kidney healthy updated'
    })
    
})

app.listen(3000, (err) => {
    if(err){
        console.log('err: ', err.message)
    }
    console.log('server started at port: 3000')
})

