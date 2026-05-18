/*
Databases are used to persist data in web application, it can be of types as : sql, no-sql, graph, vector database.
We need to know about mongodb for now, which is a nosql database.
It has flexible schema structure that can scale horizontaly in multiple servers easily.
MongoDB : create a free M0 cluster server =-> create new db -> connect -> methods

Organization > Project > Cluster > Database > Collection > Documents

Mongoose Methods used : create, findone
Jwt Method used: sign and verify

Now we need to store the hashed password using bcrypt library that uses crytographic technique with mix of random salt
to make it computationally so expensive and almost impossible to decode a hashed password.
bcrypt.hash(pass, rounds), bcrypt.compare(req.pass, user.pass)

Our app is prone to errors > if we try to sign up with email present in DB, it crasshes, way out try()catch(){} block

what about if user give us wrong email format ? perform input validation using Zod
*/
// Dns lookup issue on +srv connections of MongoDb on Node v24 LTS versions
const dns = require('dns')
dns.setServers(['8.8.8.8', '1.1.1.1'])

const express = require('express')
const mongoose = require('mongoose')
const { UserModel, TodoModel } = require('./db.js')
const jwt = require('jsonwebtoken')
const { auth, JWT_SECRET } = require('./auth.js')
const bcrypt = require('bcrypt')
const { z } = require('zod')

mongoose.connect('string')

const app = express()
app.use(express.json())

const saltRounds = 10
// take creds from request body > create new document on usermodel
app.post('/signup', async function(req, res){

    // validation request body with zod input schema validation
    const required = z.object({
        name: z.string().min(3).max(100),
        email: z.string().min(3).max(20).email(),
        password: z.string().min(5).max(20).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, {
            message: "Password must contain uppercase, lowercase, number and special character"

        })
        // password must have 1 uppercase, lowercase, numeric and special character each
    })

    const parsed = required.safeParse(req.body)
    if(!parsed.success){
        return res.json({
            message: 'Incorrect creds!',
            error: parsed.error.issues
        })
    }

    try{

        const name = req.body.name
        const email = req.body.email
        const password = req.body.password
    
        const hashedPassword = await bcrypt.hash(password, saltRounds)
    
        await UserModel.create({
            name: name,
            email: email,
            password: hashedPassword
        })
    
        res.json({
            message: 'signed up'
        })

    }catch(e){
        res.status(500).json({
            message: `Error while signing up:  ${e.message}`
        })
    }
})  

// get creds from req body > find user > if exists create token using jwt.sign with id as objectid of user
// updated strategy: find sue =r by email from db > match hashed password with req body password > if okay then go ahed an d generate token 
app.post('/login', async function(req, res){
    const email = req.body.email
    const password = req.body.password

    const response = await UserModel.findOne({
        email: email,
    })

    const passwordMatch = await bcrypt.compare(password, response.password)

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