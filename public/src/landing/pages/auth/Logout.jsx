import { useEffect, useContext } from "react";
import AuthContext from "../auth/AuthContext"
import { useNavigate } from "react-router";
import {Card, Typography } from "@mui/material";

function Logout(){
    const { setUser, setToken } = useContext(AuthContext);

    const navigate = useNavigate()

    useEffect(() => {
        setUser(null)
        setToken(null)

    document.cookie = "authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "userInfo=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

        setTimeout(() => {
            navigate("/")
        }, 0)

    }, [])
    return(
        <section className="m-8 flex items-center justify-center">
        <Card className="p-8">
        <Typography variant="h3" className="text-center">
        Atsijungiama...
        </Typography>
        </Card>
    </section>
    )
}

export default Logout;