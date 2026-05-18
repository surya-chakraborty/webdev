/*
Databases are used to persist data in web application, it can be of types as : sql, no-sql, graph, vector database.
We need to know about mongodb for now, which is a nosql database.
It has flexible schema structure that can scale horizontaly in multiple servers easily.
MongoDB : create a free M0 cluster server =-> create new db -> connect -> methods

Organization > Project > Cluster > Database > Collection > Documents

*/

const express = require('express')
const mongoose = require('mongoose')
const { UserModel, TodoModel } = require('./db.js')
const jwt = require('jsonwebtoken')

const app = express()
app.use(express.json())

const auth = (req, res, next) => {
    const token = req.headers.Authorization 

    if(token){

        if(user){


        }else{
            return res.json({
                message: "unauthorized"
            })
        }
        
    }else{

        return res.json({
            message: "unauthorized"
        })
    }
}

app.post('/signup', function(req, res){

})

app.post('/login', function(req, res){

})

app.post('/todo', function(req, res){

})

app.get('/todos', function(req, res){

})

app.listen(3000, function(){
    console.log(`server started on: http://localhost:3000`)
})