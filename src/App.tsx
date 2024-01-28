import { 
  createBrowserRouter,  
  Route, 
  createRoutesFromElements,
  RouterProvider,

 } from 'react-router-dom'
import UserAgentInfo from './component/UserAgentInfo'
import Login from './component/authentication/Login'
import Register from './component/authentication/Registration'
import Layout from './layout/Layout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<Layout />}>
      <Route index element={<Register />} />
      <Route path='login' element={<Login />} />
      <Route path='browserinfo' element={<UserAgentInfo />} /> 
    </Route>
  )
)

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
