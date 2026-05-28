import { Client } from 'pg'
import dotenv from 'dotenv'
dotenv.config()

/*
SQL Injection: can happen in user provided fields like concatination strings
To solve the issue use SQL string $1 etc fields , it first runs the query and then loads the data by positional parameter from array
Bad practice:
const query = ` SELECT * FROM users WHERE email = '${email}'`
User input becomes executable SQL code.Attackers can inject SQL like: ' OR 1=1 --
Consequences:

* login bypass
* data leaks
* deleting tables
* modifying database data

Solution:
const query = `SELECT * FROM users WHERE email = $1`
await client.query(query, [email])
Parameterized queries separate SQL structure from user data, so input is treated only as data, not executable SQL.

*/


const client = new Client({
    connectionString: `${process.env.CONNECTION_STRING}`
})

async function insertData(){
    try{
        // connect to client first
        await client.connect()
        // const insertquery = "INSERT INTO users (username, email, password) VALUES ('surya', 'surya@gmail.com', '123456')"
        const insertquery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)"
        const res = await client.query(insertquery, [
            'Tailor Doe',
            'tailor42e6@gmail.com',
            '7u3erhd92j_e82jsn'
        ])

        console.log("Insertion Sucesss: ", res)

    }catch(err){
        console.error("Error during insertion in table: ", err)
    }finally{
        await client.end() //close connection to client
    }
}

async function getUser(email: string){
    try {
        await client.connect()
        const queryStr = `SELECT * FROM users WHERE email=$1`
        const values = [email]
        const result = await client.query(queryStr, values)
        console.log('Data Fetched: ', result.rows[0])

    }catch(err){
        console.log('Error ocuured while fetching: ', err as Error)
    }finally{
        await client.end()
    }

}

// insertData()
getUser('surya@gmail.com')
