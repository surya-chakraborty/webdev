import { NextRequest, NextResponse } from "next/server";

// export async function GET(){
//     return Response.json({
//         username: 'Surya Chakraborty',
//         email: 'surya@gmail.com'
//     })
// }

export async function POST(req: NextRequest){

    console.log("request object: ", req)
    const body = await req.json()
    console.log("Response Body: ", body)

    return NextResponse.json({
        username: body.username,
        password: body.password
    })
}
