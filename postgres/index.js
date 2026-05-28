import { Client } from 'pg'

/*
Database and types: sql, nosql, graph, vector databases.
postgressql DB creation using neon.tech and writing Table Schema and quaries in NeonDB terminal
Doing the same using 'pg' npm-library in a node.js application

create a new client with either connection string or with all required fields as objects
const client = new Client({
    host: 'ep-something.aws.neon.tech',
    database: 'neondb',
    user: 'neondb_ownername',
    password: 'neondb_passowrd',
    ssl: true
})

connect with the client DB
client.connect()

write quaries using client
const result = await client.query('SELECT * FROM users')
console.log("users table data: ", result.rows)
console.log("row count", result.rowCount)
console.log("Fileds/Schema: ", result.fields)
*/

const client = new Client({
    connectionString: `string`
})

// create todos table using query method of client
async function createTodosTable(){
    await client.connect()
    const result = await client.query(`
        CREATE TABLE todos(
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            description VARCHAR(255) NOT NULL,
            done BOOLEAN NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        )
    `)
    console.log(result)
}

createTodosTable()