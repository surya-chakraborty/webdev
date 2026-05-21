import { useEffect, useState } from "react"
// import { PostComponent } from "./Post.jsx"

function App(){
  const [count, setCount] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(c => c + 1)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])
  /*
  const [posts, setPosts] = useState([])

  const postComponents = posts.map(post => <PostComponent
  name={post.name}
  subtitle={post.subtitle}
  time={post.time}
  image={post.image}
  description={post.description}
  />)

  function addPost(){
    setPosts([...posts, {
      name: 'Surya',
      subtitle: '500 folowers',
      time: '2m ago',
      image: '',
      description: "What's truly mattern the most> yeah, that's the question I am still, looking answer for!!"
    }])
  }

  */
  return (
    <>
    {/* <h1>Hello React!</h1> */}
      {/* <Counter/>
      <br />
      <Notifications/>
      <br /> */}
     
      {/* <div style={{backgroundColor: "#dfe6e9",height: "50vh"}}>
        <button onClick={addPost}>add post</button>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <div>
            {postComponents}
          </div>
        </div>
      </div> */}
      <div>
        {count}
      </div>

    </>
  )
}


/*
const Counter = () => {
  const [count, setCount] = useState(0)
  // under the hood it returns an array with current satte and a function to update it

  function onButtonPress(){
    setCount(count + 1)
  }
  return (
    <>
      <div className="counter-app">
          <p> count : {count}</p>
          <button onClick={ onButtonPress }>
            Increase
          </button>
        </div>
    </>
  )
}

const Notifications = () => {
  return (
    <>
      <div>
        <ToggleMessage/>
        <ToggleMessage/>
        <ToggleMessage/>
      </div>
    </>
  )
}

const ToggleMessage = () => {
  const [notificationCount, setNotificationCount] = useState(0)
  return (
    <div>
      <button onClick={() => setNotificationCount(notificationCount + 1)}>
        Increase Count
      </button>
      <br></br>
      {notificationCount}
    </div>
  )

}
*/

export default App