import { NavLink, useNavigate } from "react-router";
import { TextField, Button } from "@mui/material"
import AuthContext from "./AuthContext";
import { useEffect, useContext, useState } from "react";

function Login(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { user, setUser, token, setToken } = useContext(AuthContext); 

    const navigate = useNavigate()

    

    useEffect(() => {
        if(user && token){
           setTimeout(() => {
            navigate("/dashboard")
           }, 0) 
        }
    }, [user, token])

    const handleSubmit = async (e) => {
        e.preventDefault()

      const response = await fetch("/api/auth/login", {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email, password})
        })

        const data = await response.json()
        

        if(!response.ok){
            console.log("Response Wasnt OK");
            
        }

        if(!data.success){
            console.log("DATA WASNT SUCCESS");
            
        }

        if(data.success){
        console.log("Loged In Successfully");
        
        const cookies = document.cookie.split("; ").reduce((acc, cookie) => {
            const [name, value] = cookie.split("=")
            acc[name] = value
            return acc
        }, {})

        const tokenFromCookie = cookies.authToken
        const userInfoFromCookie = cookies.userInfo
                
        setToken(tokenFromCookie)
        setUser(JSON.parse(decodeURIComponent(userInfoFromCookie)));
        
        setEmail("")
        setPassword("")
        
        }
    }

    return(
        <>
        <div className="flex flex-col justify-center h-screen">
          <div className="flex flex-col text-center w-[50%] m-auto">
            <h1 className="text-4xl font-bold">Sign in to Portfolio</h1>
            <form className="flex flex-col m-auto" onSubmit={handleSubmit}>
            <TextField value={email} onChange={(e) => setEmail(e.target.value)} sx={{mt: 5}} className="w-100" type="email" id="filled-basic" label="Email" variant="filled" />
            <TextField value={password} onChange={(e) => setPassword(e.target.value)} sx={{mt: 5}} className="w-100" type="password" id="filled-basic" label="Password" variant="filled" />
            <Button type="submit" sx={{mt: 5}} className="w-100 " color="black" variant="outlined">Login</Button>
            </form>

        <div className="flex flex-col gap-4 mt-10">
            <button
            className="text-blue-600 font-bold text-xl cursor-pointer" 
            onClick={() => {
             setEmail("admin@gmail.com")
             setPassword("password!")   
            }}>
            ADMIN
            </button>
            <button
            className="text-blue-600 font-bold text-xl cursor-pointer" 
            onClick={() => {
            setEmail("OWNER@gmail.com")
            setPassword("password!")
            }}
            >
            OWNER
            </button>
        </div>
          </div>

            <NavLink to="/">
            <button>GO BACK HOME</button>
            </NavLink>
        </div>
        </>
    )
}

export default Login;