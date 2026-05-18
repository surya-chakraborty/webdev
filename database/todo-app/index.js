/*
Databases are used to persist data in web application, it can be of types as : sql, no-sql, graph, vector database.
We need to know about mongodb for now, which is a nosql database.
It has flexible schema structure that can scale horizontaly in multiple servers easily.
MongoDB : create a free M0 cluster server =-> create new db -> connect -> methods

Organization > Project > Cluster > Database > Collection > Documents

Mongoose Methods used : create, findone
Jwt Method used: sign and verify

*/
// Dns lookup issue on +srv connections of MongoDb on Node v24 LTS versions
const dns = require('dns')
dns.setServers(['8.8.8.8', '1.1.1.1'])

const express = require('express')
const mongoose = require('mongoose')
const { UserModel, TodoModel } = require('./db.js')
const jwt = require('jsonwebtoken')
const { auth, JWT_SECRET } = require('./auth.js')
mongoose.connect('string')

const app = express()
app.use(express.json())


// take creds from request body > create new document on usermodel
app.post('/signup', async function(req, res){
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password

    await UserModel.create({
        name: name,
        email: email,
        password: password
    })

    res.json({
        message: 'signed up'
    })
})  

// get creds from req body > find user > if exists create token using jwt.sign with id as objectid of user
app.post('/login', async function(req, res){
    const email = req.body.email
    const password = req.body.password

    const response = await UserModel.findOne({
        email: email,
        password: password
    })

    if(response){
        const token = jwt.sign({
            id: response._id.toString()
        }, JWT_SECRET)

        return res.json({
            token
        })

    }else{
        return res.status(403).json({
            message: "Incorrect Credentials!"
        })
    }

})

// create new todo from req body > send back json response as done
app.post('/todo', auth, async function(req, res){
    let description = req.body.description
    let done = req.body.done

    await TodoModel.create({
        description: description,
        done: done,
        userId: req.id
    })

    res.json({
        message: 'Todo added'
    })

})

// find all todos [array of documents] by user.id and send as response
app.get('/todos', auth, async function(req, res){
    const todos = await TodoModel.find({
        userId: req.id
    })

    res.json({
        todos
    })
})  

app.listen(3000, function(){
    console.log(`server started on: http://localhost:3000`)
})