import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from "react";

function Blogs(){
    const [blogs, setBlogs] = useState([])

    const getData = async () => {
        const response = await fetch("/api/blogs", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }

        })

        if(!response.ok){
         console.log("Couldn't get Blogs");
        }

        const data = await response.json()
        if(!data.success){
            console.log("Could't get Blogs");  
        }
        setBlogs(data)
    }

    useEffect(() => {
        const load = async () => {
            await getData()
        }
        load()
    }, [])

    return(
        <>
        {blogs.map((blog) => (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
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
      </CardActions>
    </Card>

        ))}
        </>
    )
}

export default Blogs;