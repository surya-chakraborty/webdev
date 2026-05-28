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

Realtionships in sql : we can't store objects like adresses of users as a field value here, so we need to connect two tables 
lets say users and adresses with foreign key like user_id

Transactions: 
Good question to have at this point is what queries are run when the user signs up and sends both their information and their address in a single request.
Do we send two SQL queries into the database? What if one of the queries (address query for example) fails? 
This would require transactions  in SQL to ensure either both the user information and address goes in, or neither does

SQL QUERY : BEGIN; -- Start transaction

INSERT INTO users (username, email, password)
VALUES ('john_doe', 'john_doe1@example.com', 'securepassword123');

INSERT INTO addresses (user_id, city, country, street, pincode)
VALUES (currval('users_id_seq'), 'New York', 'USA', '123 Broadway St', '10001');

COMMIT;

Join: The real use of realtionships is finding rows values froma single user_id field or so from both tables 
Ex: SELECT u.id, u.username, u.email, a.city, a.pincode FROM users u JOIN adresses a ON u.id = a.user_id WHERE u.id='2'
What's the need ? reduced latency, simplify app process, transactional integrity

PostgreSQL internally:
scans rows from both tables
matches rows using ON
builds a temporary combined result
returns it
discards it after query completes
It usually does NOT create a permanent table on disk.

Types: INNER JOIN(returns only where both rows are filled for a id), LEFT JOIN(returns the full left table and matched right one), RIGHT JOIN (returns the full right table, and matched left part), FULL JOIN(returns all rows of both bthe table even if data don;t exist ina particular table for a particular id)
Mostly used: INNER and LEFT Join, right join is used for debugging/testing.
*/

const client = new Client({
    connectionString: `postgresql://neondb_owner:npg_PkoAEH2CiRY6@ep-shiny-king-aqpmv1ha.c-8.us-east-1.aws.neon.tech/neondb?sslmode=verify-full`
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

async function createAdressTable(){
   try{
     await client.connect()
     const result = await client.query(`
        CREATE TABLE adresses(
            id SERIAL PRIMARY KEY,
            user_id INTEGER NOT NULL,
            city VARCHAR(100) NOT NULL,
            state VARCHAR(255) NOT NULL,
            country VARCHAR(100) NOT NULL,
            pincode VARCHAR(20) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
        )
    `)
    console.log(result)
   }catch(err){
    console.log("Error: ", err.message)
   }finally{
        await client.end()
   }
}

async function writeAdressQuery(user_id, city, state, country, pincode){
    try{
     await client.connect()
     const queryStr = `INSERT INTO adresses(user_id, city, state, country, pincode) VALUES ($1, $2, $3, $4, $5)`
     const values = [user_id, city, state, country, pincode]
     const result = await client.query(queryStr, values)
    console.log(result.rows[0])
   }catch(err){
    console.log("Error: ", err.message)
   }finally{
        await client.end()
   }
}


async function fetchUsersAdress(user_id) {
    try{
     await client.connect()
     const queryStr = `SELECT city, state, country, pincode FROM adresses WHERE user_id=$1`
     const value = [user_id]
     const response = await client.query(queryStr, value)
     console.log(response.rows[0])
   }catch(err){
    console.log("Error: ", err.message)
   }finally{
        await client.end()
   }
}


async function insertUserandAddress(username, email, password, city, country, state, pincode){
    try {
        await client.connect();

        // Start transaction
        await client.query('BEGIN');

        // Insert user
        const insertUserText = `
            INSERT INTO users (username, email, password)
            VALUES ($1, $2, $3)
            RETURNING id;
        `;
        const userRes = await client.query(insertUserText, [username, email, password]);
        const userId = userRes.rows[0].id;

        // Insert address using the returned user ID
        const insertAddressText = `
            INSERT INTO adresses (user_id, city, country, state, pincode)
            VALUES ($1, $2, $3, $4, $5);
        `;
        await client.query(insertAddressText, [userId, city, country, state, pincode]);

        // Commit transaction
        await client.query('COMMIT');

        console.log('User and address inserted successfully');
    } catch (err) {
        await client.query('ROLLBACK'); // Roll back the transaction on error
        console.error('Error during transaction, rolled back.', err);
        throw err;
    } finally {
        await client.end(); // Close the client connection
    }
}


// createTodosTable()
// createAdressTable()
// writeAdressQuery(2, 'Las Vegas', 'California', 'USA', '100008')
// fetchUsersAdress(2)

insertUserandAddress('johnydoe', 
    'johny.doe@example.com', 
    'securepassword123', 
    'New York', 
    'USA', 
    'Washington DC', 
    '10001')