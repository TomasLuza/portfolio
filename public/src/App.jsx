import { createBrowserRouter, RouterProvider } from "react-router"
import Landing from './landing/Landing'
import Login from "./landing/pages/auth/Login"
import Logout from "./landing/pages/auth/Logout";
import Projects from "./landing/pages/projects/Projects";
import Blogs from "./landing/pages/blog/Blogs"
import Dashboard from "./dashboard/Dashboard";
import AdminBlogs from "./dashboard/pages/AdminBlogs/AdminBlogs";
import {useState, useEffect} from "react";
import AuthContext from "./landing/pages/auth/AuthContext";

function App() {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)

  useEffect(() => {
    const cookies = document.cookie.split("; ").reduce((acc, cookie) => {
      const [name, value] = cookie.split("=")
      acc[name] = value
      return acc
    }, {})

      const tokenFromCookie = cookies.authToken
      const userInfoFromCookie = cookies.userInfo
                

      if(tokenFromCookie && userInfoFromCookie){
        setTimeout(() => {
          setToken(tokenFromCookie)
          setUser(JSON.parse(decodeURIComponent(userInfoFromCookie)));
        }, 0)
      }

  }, [])


    const router = createBrowserRouter([
    // LANDING
    {path:"/", element: <Landing />},
    // AUTH ROUTES
    {path:"/login", element: <Login />},
    {path:"/logout", element: <Logout />},
    // LANDING ROUTES
    {path: "/projects", element: <Projects />},
    {path: "/blogs", element: <Blogs />,},
    // ADMIN ROUTES
    {path: "/dashboard", element: <Dashboard />},
    {path: "/admin/blogs", element: <AdminBlogs />},
  ])


  return (
    <>
    <AuthContext.Provider value={{user, setUser, token, setToken}}>
          <RouterProvider router={router} />
    </AuthContext.Provider>
    </>
  )
}

export default App
