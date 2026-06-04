export default async function CatchSegment ({params} : {
    params: Promise<{
        slug: string[]
    }>
}){
    const { slug } = await params
    return <div>
        {JSON.stringify(slug)}
    </div>
}

// Catch-All Segment : A folder or file in the form /docs/[...slug] will match all segments in that position (e.g., /docs/anything/here will be matched by [...slug]).
// Use case - Recursive folders. For example
// For exmaple: app.codingSchool.com/courses/3/1
// with folder strcuture as: courses/[...slug]/page.tsx
// Slug : ['3', '1']

// Catch-All Optional: [[...slug]]
// It will work for both /docs/ as well as docs/anything/here