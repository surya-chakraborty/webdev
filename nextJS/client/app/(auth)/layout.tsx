export default function signinLayout({
    children,
}: {
    children: React.ReactNode
}){
    return(
        <>
            <div className="mb-4">
                Login now to get 20% off
            </div>
            {children}
        </>
    )
}