// import { BrowserRouter, Routes, Route} from 'react-router-dom'
// import Home from './pages/Home'
// import Blogs from './pages/Blogs'
// import Contact from './pages/Contact'
// import Nopage from './pages/Nopage'
// import Layout from './pages/Layout'
import InputFocus from './InputFocus'
import Chat from './ScrollBottom'
import Stopwatch from './StopWatch'
import { useState } from 'react'
import usePrev from './customHooks/usePrev'

const App = () => {
  const [count, setCount] = useState(0)
  const prevCount = usePrev(count)
  return (
    <>
    <InputFocus/>
    <br />
    <Chat/>
    <br />
    <Stopwatch/>

    <br/>
    usePrev counter:
    <div>
      <p>Current Count: {count}</p>
      <p>Previous Count: {prevCount}</p>
      <button onClick={() => setCount(count + 1)}>Increament</button>
      <button onClick={() => setCount(count - 1)}>Decreament</button>
    </div>

    
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path='blogs' element={<Blogs/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='*' element={<Nopage/>}/>
          </Route>
        </Routes>
      </BrowserRouter> */}
      
    </>
  )
}

export default App