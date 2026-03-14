import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

import Navbar from "../../components/Navbar";
import Footer from '../../components/Footer';

import bgImage from "../../../css/polygon-scatter-haikei.svg"

function Projects(){
    return(
        <div className='flex flex-col min-h-screen'>

        <Navbar />

        <main className="grow w-[90%] mx-auto py-10">

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">

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

        </main>
        <Footer />

        </div>

    )
}

      
export default Projects;