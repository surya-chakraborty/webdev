/*
Backends In NextJS? yes, it's a fullstack framework
What are the pros? single codebase, no cors issues, single domain fot both fe and be
ease of delpoyment, deploy a single codebase.

Fetching in SSR components using only async fuunctions as well as async components
For loader: we just nmeed to create a loading.tsx file in the same directory folder strcuture to the page.tsx file.

API routes in nextJS: create nested folders api > user > route.ts and write async function that returns Response.json({})
and fetch on route: http://localhost:3000/api/user

*/

// import Loading from "./loading"

// To fetch in nextJS ssr components , we don't need UseEffect hooks
async function getUserDetails(){
 try {
    const response = await fetch('http://localhost:3000/api/user')
    const json = await response.json()
    console.log(json)
    //  setTimeout(() => {
    //   // console.log("5 seconds delay", 5000)
    //  })
    return json
  }catch(e){
    console.log(e)
  }
}

// nextJS do support async components
export default async function Home() {
  const userData = await getUserDetails()

  if(!userData){
    return (
      <div>
        No user data found!
      </div>
    )
  }
  return (

    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">
          <div>
          Name: {userData.name}
            {/* Surya Chakraborty */}
          </div>
          {userData.email}

        </div>

      </div>
    </div>
  );
}
