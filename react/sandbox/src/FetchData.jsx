import { useEffect, useState } from 'react'

// Handelling lists in react : while rendering lists in react , each lis items 
// needs a unqiue key prop to track chnages efficiently in React
const UserList = () => {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        console.log('UserList Mounted')
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                const json = await response.json()
                console.log("fetched data:" , json[1].name)
                setUsers(json)
            }catch(err){
                console.error("Error fetching data: ", err)
            }finally{
                setLoading(false)
            }
        }

        fetchData()

    }, [])

    if(loading) {
        return <div>Loading....</div>
    }
  return (
    <div>
        <ul>
            {users.map(user => {
                return <li key={user.id}>
                    {console.log("username: ", user.name)}
                    {user.name}
                </li>
            })}
        </ul>
    </div>
  )
}

export default UserList