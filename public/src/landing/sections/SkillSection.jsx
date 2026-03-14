import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import ConstructionIcon from '@mui/icons-material/Construction';
import StorageIcon from '@mui/icons-material/Storage';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import LanguageIcon from '@mui/icons-material/Language';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

function SkillSection(){
  const [dense, setDense] = useState(false);
  const [value, setValue] = useState(0);


    function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: (theme.vars || theme).palette.background.paper,
}));


    return(
      <section className='bg-[url(/home/kibernetinis-bomzas/Desktop/portfolio/public/src/css/blurry-gradient-haikei.svg)] bg-local'>
    <div className='w-[90%] m-auto'>
      <h4 className='text-7xl text-gray-700 opacity-30 text-center font-semibold tracking-widest m-8'>My Skills</h4>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs centered value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Frontend" {...a11yProps(0)} />
          <Tab label="Backend" {...a11yProps(1)} />
          <Tab label="Databases" {...a11yProps(2)} />
          <Tab label="DevOps" {...a11yProps(3)} />
          <Tab label="Tools" {...a11yProps(4)} />
        </Tabs>
      </Box>

      <CustomTabPanel value={value} index={0}>
      <Grid size={{xs: 12, md: 6,}}>
      <Demo>
      <List className='bg-[url(/home/kibernetinis-bomzas/Desktop/portfolio/public/src/css/blurry-gradient-haikei.svg)] bg-local' dense={dense}> 
      <ListItem>
      <ListItemAvatar>
      <Avatar sx={{backgroundColor: "#ffdf20"}}>
      <LanguageIcon sx={{color: "#0a0a0a"}}/>
      </Avatar>
      </ListItemAvatar>
      <ListItemText primary="JavaScript"/>
      </ListItem>

      <ListItem>
      <ListItemAvatar>
      <Avatar sx={{backgroundColor: "#ffdf20"}}>
      <LanguageIcon sx={{color: "#0a0a0a"}}/>
      </Avatar>
      </ListItemAvatar>
      <ListItemText primary="React"/>
      </ListItem>

      <ListItem>
      <ListItemAvatar>
      <Avatar sx={{backgroundColor: "#ffdf20"}}>
      <LanguageIcon sx={{color: "#0a0a0a"}}/>
      </Avatar>
      </ListItemAvatar>
      <ListItemText primary="TypeScript"/>
      </ListItem>

      <ListItem>
      <ListItemAvatar>
      <Avatar sx={{backgroundColor: "#ffdf20"}}>
      <LanguageIcon sx={{color: "#0a0a0a"}}/>
      </Avatar>
      </ListItemAvatar>
      <ListItemText primary="Tailwind"/>
      </ListItem>

      <ListItem>
      <ListItemAvatar>
      <Avatar sx={{backgroundColor: "#ffdf20"}}>
      <LanguageIcon sx={{color: "#0a0a0a"}}/>
      </Avatar>
      </ListItemAvatar>
      <ListItemText primary="Sass"/>
      </ListItem>

      <ListItem>
      <ListItemAvatar>
      <Avatar sx={{backgroundColor: "#ffdf20"}}>
      <LanguageIcon sx={{color: "#0a0a0a"}}/>
      </Avatar>
      </ListItemAvatar>
      <ListItemText primary="Bootstrap"/>
      </ListItem>

      </List>
      </Demo>
      </Grid>
      </CustomTabPanel>


      <CustomTabPanel value={value} index={1}>
      <Grid size={{xs: 12, md: 6,}}>
      <Demo>
      <List className='bg-[url(/home/kibernetinis-bomzas/Desktop/portfolio/public/src/css/blurry-gradient-haikei.svg)] bg-local' dense={dense}> 
      <ListItem>
      <ListItemAvatar>
      <Avatar sx={{backgroundColor: "#ffdf20"}}>
      <DevicesOtherIcon sx={{color: "#0a0a0a"}}/>
      </Avatar>
      </ListItemAvatar>
      <ListItemText primary="Node.js"/>
      </ListItem>

      <ListItem>
      <ListItemAvatar>
      <Avatar sx={{backgroundColor: "#ffdf20"}}>
      <DevicesOtherIcon sx={{color: "#0a0a0a"}}/>
      </Avatar>
      </ListItemAvatar>
      <ListItemText primary="Express.js"/>
      </ListItem>

      <ListItem>
      <ListItemAvatar>
      <Avatar sx={{backgroundColor: "#ffdf20"}}>
      <DevicesOtherIcon sx={{color: "#0a0a0a"}}/>
      </Avatar>
      </ListItemAvatar>
      <ListItemText primary="REST APIs"/>
      </ListItem>

      </List>
      </Demo>
      </Grid>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>

      <Grid size={{xs: 12, md: 6,}}>
      <Demo>
      <List className='bg-[url(/home/kibernetinis-bomzas/Desktop/portfolio/public/src/css/blurry-gradient-haikei.svg)] bg-local' dense={dense}> 
      <ListItem>
      <ListItemAvatar>
      <Avatar sx={{backgroundColor: "#ffdf20"}}>
      <StorageIcon sx={{color: "#0a0a0a"}}/>
      </Avatar>
      </ListItemAvatar>
      <ListItemText primary="MySQL"/>
      </ListItem>

      <ListItem>
      <ListItemAvatar>
      <Avatar sx={{backgroundColor: "#ffdf20"}}>
      <StorageIcon sx={{color: "#0a0a0a"}}  />
      </Avatar>
      </ListItemAvatar>
      <ListItemText primary="NoSQL"/>
      </ListItem>

      <ListItem>
      <ListItemAvatar>
      <Avatar sx={{backgroundColor: "#ffdf20"}}>
      <StorageIcon sx={{color: "#0a0a0a"}}  />
      </Avatar>
      </ListItemAvatar>
      <ListItemText primary="Prisma ORM"/>
      </ListItem>

      </List>
      </Demo>
      </Grid>

      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>

      <Grid size={{xs: 12, md: 6,}}>
      <Demo>
      <List className='bg-[url(/home/kibernetinis-bomzas/Desktop/portfolio/public/src/css/blurry-gradient-haikei.svg)] bg-local' dense={dense}> 
      <ListItem>
      <ListItemAvatar>
      <Avatar sx={{backgroundColor: "#ffdf20"}}>
      <DeveloperModeIcon sx={{color: "#0a0a0a"}} />
      </Avatar>
      </ListItemAvatar>
      <ListItemText primary="Linux (Ubuntu)"/>
      </ListItem>

      <ListItem>
      <ListItemAvatar>
      <Avatar sx={{backgroundColor: "#ffdf20"}}>
      <DeveloperModeIcon sx={{color: "#0a0a0a"}} />
      </Avatar>
      </ListItemAvatar>
      <ListItemText primary="WSL"/>
      </ListItem>

      <ListItem>
      <ListItemAvatar>
      <Avatar sx={{backgroundColor: "#ffdf20"}}>
      <DeveloperModeIcon sx={{color: "#0a0a0a"}} />
      </Avatar>
      </ListItemAvatar>
      <ListItemText primary="Docker"/>
      </ListItem>

      <ListItem>
      <ListItemAvatar>
      <Avatar sx={{backgroundColor: "#ffdf20"}}>
      <DeveloperModeIcon sx={{color: "#0a0a0a"}} />
      </Avatar>
      </ListItemAvatar>
      <ListItemText primary="Nginx"/>
      </ListItem>

      <ListItem>
      <ListItemAvatar>
      <Avatar sx={{backgroundColor: "#ffdf20"}}>
      <DeveloperModeIcon sx={{color: "#0a0a0a"}} />
      </Avatar>
      </ListItemAvatar>
      <ListItemText primary="Apache2"/>
      </ListItem>

      </List>
      </Demo>
      </Grid>
      
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>

           <Grid size={{xs: 12, md: 6,}}>
      <Demo>
      <List className='bg-[url(/home/kibernetinis-bomzas/Desktop/portfolio/public/src/css/blurry-gradient-haikei.svg)] bg-local' dense={dense}> 
      <ListItem>
      <ListItemAvatar>
      <Avatar sx={{backgroundColor: "#ffdf20"}}>
      <ConstructionIcon sx={{color: "#0a0a0a"}} />
      </Avatar>
      </ListItemAvatar>
      <ListItemText primary="Git"/>
      </ListItem>

      <ListItem>
      <ListItemAvatar>
      <Avatar sx={{backgroundColor: "#ffdf20"}}>
      <ConstructionIcon sx={{color: "#0a0a0a"}} />
      </Avatar>
      </ListItemAvatar>
      <ListItemText primary="GitHub"/>
      </ListItem>

      <ListItem>
      <ListItemAvatar>
      <Avatar sx={{backgroundColor: "#ffdf20"}}>
      <ConstructionIcon sx={{color: "#0a0a0a"}} />
      </Avatar>
      </ListItemAvatar>
      <ListItemText primary="VS Code"/>
      </ListItem>

      </List>
      </Demo>
      </Grid>

      </CustomTabPanel>
    </Box>
    </div>
      </section>
    )
}

export default SkillSection;