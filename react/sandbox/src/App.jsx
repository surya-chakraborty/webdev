import { useState } from "react"

function App(){
  return (
    <>
    {/* <h1>Hello React!</h1> */}
      <Counter/>
      <br />
      <Notifications/>
      <br />
    </>
  )
}



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

export default App