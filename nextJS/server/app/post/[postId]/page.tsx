
// dynamic routes [params], wait param as it's a promise then fetch and render on ui
export default async function Post({ params }: {
    params:Promise<{
        postId: string
    }>
}){
    const { postId } = await params
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    const data = await res.json()
    console.log(data)
    return (
        <>
        <div>
            <h1>Title: 
                <b>{data.title}</b>
            </h1>
            <br />
            <h1>{data.body}</h1>
        </div>
        </>
    )
}