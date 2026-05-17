const express = require('express')
const jwt = require('jsonwebtoken')

const app = express()
app.use(express.json())

let users = [ ] // inmemory db of array of user objects with username, password and token

const JWT_SECRET = 'Usu28c2i5dh'
/*
// helper functioon to genrate random token
function generateToken(){
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let token = ""
    for(let i = 0; i < 32; i++){
        token+= options[Math.floor(Math.random() * options.length)]
    }
    return token
}
*/

// Todo- create to basic endpoints signin and signup to do manual authentication
// stateful tokens vs stateless jwt
// tokens are satteful we need to evertime hit the db to find the user with token 
// but JSon web tokens (JWT) are stateless the token iotself contains info about the user so no find query evertime on db and no bottlenexk of time 
// and we can store the jwt in local storage 


app.post('/signup', function(req, res){
    const { username, password } = req.body
    
    users.push({
        username,
        password
    })

    res.json({
        message: 'Signed up!'
    })

})

app.post('/signin', function(req, res){
    const { username, password } = req.body

    let user = users.find((user) => {
        return user.username == username && user.password == password
    })
    console.log("user: ", user)

    if(user){
        // const token = generateToken()
        // user.token = token

        const token = jwt.sign({
            username: user.username
        }, JWT_SECRET)

        user.token = token

        return res.json({
            token
        })
        console.log("users: ", users)
    }
    else{
        return res.status(403).json({
            message: "invalid username and password"
        })
    }
})

// asuthenticated endpoint
app.get('/me', function(req, res){
    const token = req.headers.authorization
    // const user = users.find(u => u.token == token)

    userDetails = jwt.verify(token, JWT_SECRET)
    console.log(userDetails)
    const username = userDetails.username
    const user = users.find(user => user.username == username)

    if(user){
        return res.json({
            username: user.username
        })
    }

    else {
        return res.status(401).json({
            message: "unauthorized"
        })
    }
})

app.listen(3000, function(){
    console.log('server started on http://localhost:3000')
})