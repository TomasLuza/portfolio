import { Avatar, Button, Divider } from "@mui/material"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function HeroSection(){
    return(
        <section className="bg-[url(/home/kibernetinis-bomzas/Desktop/portfolio/public/src/css/blurry-gradient-haikei.svg)] bg-local">
        <div className="flex flex-col h-120 justify-center">

        <div className="flex items-center ml-16 tracking-widest font-extrabold gap-4 text-[65px]">

        <h1>Bracket~Bender</h1>
        <Avatar
        alt="Stack~Lab"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 56, height: 56 }}
        />
        <p>-</p>

        </div>

        <p className="text-[65px] font-semibold tracking-widest text-gray-800 text-center">Full-Stack Developer</p>

        <div className="text-end mr-8">
          {/* <p className="text-[65px] font-semibold tracking-widest text-gray-800">DevOps Specialist</p> */}
          <p className="font-medium text-xl tracking-wide text-gray-800">Focused on modern web technologies and clean user experiences.</p>
        </div>

        </div>

        <div className="flex gap-10 ml-15 mb-15">
            <div className="flex gap-0.5">
              <Button variant="contained" sx={{backgroundColor: "oklch(14.5% 0 0)", borderRadius: "10px"}}>Explore My Work</Button>
              <Button variant="contained" sx={{backgroundColor: "oklch(90.5% 0.182 98.111)", borderRadius: "10px"}}>
              < PlayArrowIcon />
              </Button>
            </div>
            {/* <Button variant="outlined" sx={{ borderColor: "oklch(14.5% 0 0)", color: "oklch(14.5% 0 0)"}}>Contact Me</Button> */}
        </div>
        <Divider />
          <div className="flex flex-row justify-between p-8 mb-0">
             <div>
              <p className="text-lg text-gray-800 font-semibold">Follow Bracket~Bender : online -</p>
             </div>
             <div className="mr-10">
                <Button 
                endIcon={<GitHubIcon />} 
                variant="outlined" 
                sx={{ borderColor: "oklch(14.5% 0 0)", 
                borderRadius: "10px", 
                color: "oklch(14.5% 0 0)"}}>
                GitHub  
                </Button>
                <Button
                className="-rotate-15"
                endIcon={<InstagramIcon />}
                variant="outlined" 
                sx={{ borderColor: "oklch(14.5% 0 0)", 
                borderRadius: "10px",
                mb: 3, 
                color: "oklch(14.5% 0 0)"}}>
                Instagram
                </Button>
                <Button
                endIcon={<LinkedInIcon />}
                variant="outlined" 
                sx={{ borderColor: "oklch(14.5% 0 0)",
                borderRadius: "10px", 
                color: "oklch(14.5% 0 0)"}}>
                Linkedin
                </Button>
             </div>
          </div>
        </section>
    )
}

export default HeroSection;