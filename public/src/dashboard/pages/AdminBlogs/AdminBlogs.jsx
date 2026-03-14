import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AuthContext from '../../../landing/pages/auth/AuthContext';
import { useContext, useEffect, useState } from "react";
import Navbar from "../../components/Navbar";

import bgImage from "../../../css/polygon-scatter-haikei.svg"


    function AdminBlogs(){
    const { user, token } = useContext(AuthContext)
    const [blogs, setBlogs] = useState([])      
      
    const getData = async () => { 
    
        const response = await fetch("/api/admin/blogs", {
            method: "GET",
            headers: {
              "Authorization": `Bearer ${token}`,
              "Content-Type": "application/json",
            }
        })

        const data = await response.json()
        setBlogs(data)
    }
    
    useEffect(() => {
      if(!user && !token) return;

      getData()
   
    }, [user, token])

    return(
         <div className='flex flex-col min-h-screen'>

        <Navbar />

        <main className="grow w-[90%] mx-auto py-10">

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">

        {blogs.map((blog) => (
        <Card key={blog.id} sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={bgImage}
        title={blog.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {blog.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         {blog.content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
        <p>{blog.published ? "Published" : "Not-Published"}</p>
      </CardActions>
    </Card>
        ))}

        </div>

        </main>

        </div>
    )
}

export default AdminBlogs;