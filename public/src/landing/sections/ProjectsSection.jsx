import { Button } from "@mui/material";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

import bgImage from "../../css/polygon-scatter-haikei.svg"

function ProjectsSection(){
    return(
        <section>

            <div className="flex items-center justify-between p-8">

            <h4 className="text-gray-700 text-5xl tracking-wider opacity-30 font-bold">Featured Projects</h4>

            <div className="flex gap-0.5">
              <Button variant="contained" sx={{backgroundColor: "oklch(14.5% 0 0)", borderRadius: "10px"}}>View Works</Button>
              <Button variant="contained" sx={{backgroundColor: "oklch(90.5% 0.182 98.111)", borderRadius: "10px"}}>
              < ArrowOutwardIcon sx={{color: "oklch(14.5% 0 0)"}} />
              </Button>
            </div>

            </div>

            <div className="flex w-[80%] m-auto gap-8 p-8">
            <Card className="shadow-2xl" sx={{ maxWidth: 345 }}>

            <CardActionArea>

            <CardMedia
            component="img"
            height="140"
            image={bgImage}
            alt="green iguana"
            />

            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Lizard
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
            </Typography>
            </CardContent>

            </CardActionArea>
            </Card>

            <Card sx={{ maxWidth: 345 }}>

            <CardActionArea>

            <CardMedia
            component="img"
            height="140"
            image={bgImage}
            alt="green iguana"
            />

            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Lizard
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
            </Typography>
            </CardContent>

            </CardActionArea>
            </Card>

            <Card sx={{ maxWidth: 345 }}>

            <CardActionArea>

            <CardMedia
            component="img"
            height="140"
            image={bgImage}
            alt="green iguana"
            />

            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Lizard
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
            </Typography>
            </CardContent>

            </CardActionArea>
            </Card>
           
            </div>

            

        </section>
    )
}

export default ProjectsSection;