import { prisma} from "../lib/prisma.js"

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

async function main(){
    // insertData('suryaxchakraborty', 'bhdx73so-e4b', 'Surya', 'Chakraborty')
    await updateData('suryaxchakraborty', {
        firstName: 'Avi',
        lastName: 'Chakraborty'
    })
    await getUser('suryaxchakraborty')
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

    