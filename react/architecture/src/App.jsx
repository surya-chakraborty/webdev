import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'
import Nopage from './pages/Nopage'
import Layout from './pages/Layout'
import InputFocus from './InputFocus'
import Chat from './ScrollBottom'
import Stopwatch from './StopWatch'

const App = () => {
  return (
    <>
    <InputFocus/>
    <br />
    <Chat/>
    <br />
    <Stopwatch/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path='blogs' element={<Blogs/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='*' element={<Nopage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App