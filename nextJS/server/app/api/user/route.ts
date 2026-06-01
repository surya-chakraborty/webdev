import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(){
    const user = await prisma.user.findFirst({})
    return Response.json({
        name: user?.username,
        // email: user?.email
    })
}

export async function POST(req: NextRequest){

    // console.log("request object: ", req)
    const body = await req.json()
    const user = await prisma.user.create({
        data:{
            username:body.username,
            password: body.password
        }
    })
    console.log(user.Id)
    // console.log("Response Body: ", body)

    return NextResponse.json({
        message: 'Signed up!'
    })
}
