import { NavLink, Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div className='root-layout'>
      <header>
        <nav>
          <h1>Challenge</h1>
          <NavLink to="/">Register</NavLink>
          <NavLink to="login">Login</NavLink>
          <NavLink to="browserinfo">User-Agent</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
