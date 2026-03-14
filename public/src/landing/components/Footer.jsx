import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Typography from '@mui/material/Typography';
import AdbIcon from '@mui/icons-material/Adb';
import Box from '@mui/material/Box';
import { Button, Divider } from "@mui/material";

function Footer(){
       const pages = [
         {title: 'Projects', link: '/projects'},
         {title: 'Blog', link: '/blogs'},
       ];
          

    return(
        <footer className="bg-neutral-900 text-white m-auto w-full">

        <div className='flex items-center justify-between'>

        <div className='flex items-center ml-4'>

          <AdbIcon sx={{ mr: 1 }} />
          <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
          mr: 2,
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'white',
          textDecoration: 'none',
           }}>Bracket~Bender
          </Typography>
        </div>

        <div className='mr-4'>

          <Box sx={{ flexGrow: 1, display: {md: 'flex' } }}>
          {pages.map((page, index) => (
          <Button
          key={index}
          href={page.link}
          sx={{ my: 2, color: 'white', display: 'block' }}>
          {page.title}
          </Button>
          ))}
          </Box>

        </div> 

        </div>

        <Divider sx={{ borderColor: "white", m: 2}} />

        <div className="flex items-center justify-between p-6">

        <p className="ml-8"> &copy; {new Date().getFullYear()} Bracket~Bender. All rights reserved.</p>

        <div className="flex gap-2 mr-10">
        <Button
        size="small"
        endIcon={<GitHubIcon />} 
        variant="outlined"
        sx={{ borderColor: "white", 
        borderRadius: "10px", 
        color: "white"}}>
        GitHub  
        </Button>
        <Button
        size="small"
        endIcon={<InstagramIcon />}
        variant="outlined" 
        sx={{ borderColor: "white", 
        borderRadius: "10px",
        color: "white"}}>
        Instagram
        </Button>
        <Button
        size="small"
        endIcon={<LinkedInIcon />}
        variant="outlined" 
        sx={{ borderColor: "white",
        borderRadius: "10px", 
        color: "white"}}>
        Linkedin
        </Button>
        </div>

        </div>

        </footer>
    )
}

export default Footer;