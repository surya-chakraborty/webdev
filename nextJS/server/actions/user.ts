"use server"
// server actions: acts as a simple function call and can be used in both client and server compoennts, can be integrated seamlessly with forms

import { prisma } from '@/lib/prisma'

export async function signup(username:string, password: string) {
    
    const user = await prisma.user.create({
        data:{
            
            username: username,
            password: password
        }
    })

    console.log(user.Id)

    return "Signed up!"
}