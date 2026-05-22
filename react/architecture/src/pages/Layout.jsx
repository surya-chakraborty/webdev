import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <div>
        <h1>Header Of website: welcome back!</h1>
        <Outlet/>
        <h4>Footer: Thank you for visiting us!</h4>
    </div>
  )
}

export default Layout