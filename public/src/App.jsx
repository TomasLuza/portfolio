import { createBrowserRouter, RouterProvider } from "react-router"
import Landing from './landing/Landing'
import Blogs from "./landing/pages/blog/Blogs"
import Login from "./landing/pages/auth/Login"
import Dashboard from "./dashboard/Dashboard";
import { useState } from "react";
import AuthContext from "./landing/pages/auth/AuthContext";

function App() {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)

  

    const router = createBrowserRouter([
    {path:"/", element: <Landing />},
    {path:"/login", element: <Login />},
    {
      path: "/blogs",
      element: <Blogs />,
      children: [
        // { path: "project/:id", element: <Project />},
        // { path:"profile", element: <Profile />},
      ]
    },
    {path: "/dashboard", element: <Dashboard />}
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
