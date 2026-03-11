import { useState } from "react";
import { NavLink } from "react-router";
import { TextField, Button } from "@mui/material"


function Login(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

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
        
        }

        
        

    }

    return(
        <>
        <div className="flex flex-col justify-center h-screen">
          <div className="flex flex-col text-center w-[50%] m-auto">
            <h1 className="text-4xl font-bold">Sign in to Portfolio</h1>
            <form className="flex flex-col m-auto" onSubmit={handleSubmit}>
            <TextField onChange={(e) => setEmail(e.target.value)} sx={{mt: 5}} className="w-100" type="email" id="filled-basic" label="Email" variant="filled" />
            <TextField onChange={(e) => setPassword(e.target.value)} sx={{mt: 5}} className="w-100" type="password" id="filled-basic" label="Password" variant="filled" />
            <Button type="submit" sx={{mt: 5}} className="w-100 " color="black" variant="outlined">Login</Button>
            </form>
          </div>

            <NavLink to="/">
            <button>GO BACK HOME</button>
            </NavLink>
        </div>
        </>
    )
}

export default Login;