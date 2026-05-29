import { prisma} from "../lib/prisma.js"

/*
Advice for running scripts : instead of tsc -b and then node src/dist/script.js
use tsx: npm i -D tsx, npx tsx --version and then only use: npx tsx src/script.ts
It will run the ts file directly, no build process needed 
as the build process with the new provider = "prisma-client" instead of provider = "prisma-client-js" works horibbaly and throws too many 
errors like enum, .js extension in imports etc.
*/


async function insertData(username: string, password: string, firstName: string, lastName: string){
    const res = await prisma.user.create({
        data: {
            username,
            password,
            firstName,
            lastName
        }
    })

    console.log("Response Back: ", res)
}

interface updateParams {
    firstName: string,
    lastName: string
}

async function updateData(username: string, {
    firstName, 
    lastName
}: updateParams){
    const res = await prisma.user.update({
        where: {username},
        data: {
            firstName,
            lastName
        }
    })

    console.log(res)
}

async function getUser(username:string) {
    const res = await prisma.user.findFirst({
        where: {username}
    })

    console.log(res)
}

const addTodo = async (userId: number, title: string, description: string ) => {
    const todo = await prisma.todo.create({
        data: {
            title,
            description,
            userId
        }
    })
    console.log("Added: ", todo)
}

const getTodo = async (userId: number) => {
    const result = await prisma.todo.findMany({
        where: {
            userId: userId
        }
    })

    console.log("Todos Found for user: ", result)
}

const getTodosAndUSerDetails = async(userId: number) => {

    /* Bad Solution: Two Seperate Quaries 
    const user = await prisma.user.findUnique({
        where: {
            id: userId
        }
    })

    const todos = await prisma.todo.findMany({
        where: {
            userId
        }
    })
    // console.log("UserDetails: ", user, " and Todos: ", todos)
    */

    //  Good Solution: using Joins
    const todos = await prisma.todo.findMany({
        where:{
            userId: userId
        },
        select: {
            user: true,
            title: true,
            description: true
        }
    })

    console.log("Todos with User Details: ", todos)

}



async function main(){
    /*
    insertData('suryaxchakraborty', 'bhdx73so-e4b', 'Surya', 'Chakraborty')
    await updateData('suryaxchakraborty', {
        firstName: 'Avi',
        lastName: 'Chakraborty'
    })
    await getUser('suryaxchakraborty')
    */

    await addTodo(1, "Complete Prisma", "realtionships, joins, expressify")
    await getTodo(1)
    await getTodosAndUSerDetails(1)
}



main()
    .then(async function(){
        await prisma.$disconnect()
    })
    .catch(async function(e){
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })

    