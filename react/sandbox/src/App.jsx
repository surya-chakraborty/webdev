// import { useEffect, useState } from "react"
import { useState } from "react"
import Card from "./Card"
import CountDown from "./CountDown"
import UserList from "./FetchData"
import Greetings from "./Greetings"
import Modals from "./Modals"
import Togglemsg from "./Togglemsg"
import Topbar from "./Topbar"
import Collapsible from "./Collapsible"
import ClassCounter from "./ClassComponent"
import ErrorBoundary from "./ErrorBoundary"
// import { PostComponent } from "./Post.jsx"


// Made for testing out child component behaviour and fallback ui code for class based error boudary component.
const BuggyComponent = () => {
  // return (
  //   <div>
  //     Hey There 
  //   </div>
  // )
  throw new Error("I Crashed!")
}

function App(){
  const [isOpen, setIsOpen] = useState(false)
  /*
  const [count, setCount] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(c => c + 1)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])
  
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
      {/* <div>
        {count}
      </div> */}

      <div>
        <Topbar/>
        <br />
        Here's a tiny timer for you:
        <CountDown/>
        <br />
        Wanna view our proud users's ?
        Here you go:
        <UserList/>

        <br />
        Props example: 
        <Greetings name='Surya Chakraborty'/>

        <br />
        Conditional message rendering: 
        <Togglemsg/>

        <br />
        Cards using children props:
        <Card>
          <h2>Hey There</h2>
          <p>Here's then card conetnt body!</p>
        </Card>
        <Card>
          <h2>greeting from xyz</h2>
          <p>We wlcome you all in our grand meetup! </p>
        </Card>

        <br />
        modals:
        <div>
          <button onClick={function(){
            setIsOpen(true)
          }}>open modal</button>
          <Modals isOpen={isOpen} onClose={function(){
            setIsOpen(false)
          }}>
            <h1>Modal Title</h1>
            <p>There's some conetxt inside the modal</p>
          </Modals>
        </div>
      </div>

      <br />
      Collapsible:
      <div>
        <Collapsible title='section 1'>
          <p>This is the content for section-1</p>
        </Collapsible>
        <Collapsible title='section 2'>
          <p>This is the content for section-2</p>
        </Collapsible>
      </div>

      <br />
      class based component:
      <ClassCounter/>

      <br />
      error boundary class based component example:
      <ErrorBoundary>
        <BuggyComponent/>
      </ErrorBoundary>

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