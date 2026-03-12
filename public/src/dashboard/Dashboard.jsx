import { useContext } from "react";
import AuthContext from "../landing/pages/auth/AuthContext";
import { useNavigate } from "react-router";
import Navbar from "./components/Navbar";

function Dashboard(){
    const {user , token } = useContext(AuthContext)

    const navigate = useNavigate()

    if(!user && !token){
        setTimeout(() => {
        navigate("/")
        console.log("Prašome Prisijungti");
        }, 0)
    return;
    }
        
    return(
        <>
        <Navbar />
        <h1>Welcome Back! {user.name}</h1>
        </>
    )
}

export default Dashboard;