
import { BrowserRouter,createBrowserRouter,RouterProvider } from "react-router-dom"
import Login from './components/Login'
import Register from './components/register'
import ViewAll from "./components/viewAll"
import ViewId from "./components/viewId"
import ViewU from "./components/viewU"
import Navbar from "./components/navbar"
import Error from "./components/error"
import {ProtectedRoute,AdminProtectedRoute} from './components/Protected'
function App() {
const router=createBrowserRouter([
  { path: '/',
    element: <Login/>,},
  { path: '/register',
    element: <Register/>,},
    { path: '/viewAll',
    element:<><AdminProtectedRoute/><Navbar/><ViewAll/></>,
    },
    
     { path: '/viewId',
    element: <><AdminProtectedRoute/><Navbar/><ViewId/></>,},

   
     { path: '/*',
    element: <Error/>,},
     { path: '/viewU',
    element: <><AdminProtectedRoute/><Navbar/><ViewU/></>,},
])

  return (
    
     <RouterProvider router={router} />
    
  )
}

export default App
