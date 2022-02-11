import React,{useState} from 'react'
import {AppBar, Toolbar, Tabs, Tab,Typography,useMediaQuery, useTheme} from "@mui/material"
import {makeStyles} from "@mui/styles"
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeMaxIcon from '@mui/icons-material/HomeMax';
import BiotechIcon from '@mui/icons-material/Biotech';
import CodeIcon from '@mui/icons-material/Code';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import DrawerComp from './DrawerComp';


const userStyles = makeStyles({
  logo:{
   
    padding:"10px",
    fontWeight:"600"
  },
  text:{
     fontSize:"35px"
  },
  icon:{
    width:"100px",
    display:"flex",
    alignItems:"center",
    justifyContent:"space-around",
    // marginLeft:"auto"

  },
  tool:{
    display: "flex",
    width:"50%",
    alignItems:"center",


   "@media (max-width: 600px)":{
      width: "100%",
    }

  }
})

function Header() {
  const theme = useTheme()
  console.log(theme)
  const isMatch = useMediaQuery(theme.breakpoints.down("md"))
  console.log(isMatch)
  const classes = userStyles()
  const [value, setValue] = useState()
  return (
    <div>
      <AppBar color="primary"  sx={{height:"60px"}} >
        <Toolbar  sx={{display:"flex",justifyContent:"space-around", alignItems:"center", }}>
          <div className={classes.tool}>
          <div className={classes.logo}>
            <Typography sx={{fontSize:"25px", paddingRight:"15px"}}>Malush.</Typography>
          </div>
          {
            isMatch ? (
              <>
               <DrawerComp/>
              </>
            ) : (
              <>
              <Tabs sx={{height:"55px", marginTop:"-20px" }} textColor="white" value={value} onChange={(e, value)=>  setValue(value)} indicatorColor="secondary">
            
            <Tab icon={<HomeMaxIcon/>}  iconPosition="start" label="Home" />
            <Tab icon={<BiotechIcon/>}  iconPosition="start" label="Bio"/>
            <Tab icon={<CodeIcon />}  iconPosition="start" label="Works"/>
            <Tab icon={<ConnectWithoutContactIcon/>}  iconPosition="start" label="Contact"/>
          </Tabs>
              </>
            )
          }

          
          </div>

          {
            isMatch ? (<></>) : (
              <div className={classes.icon}>
              <GitHubIcon/>
              <FacebookIcon/>
              <LinkedInIcon/>
            </div>
            )
          }

           
        </Toolbar>
     
      </AppBar>
    </div>
  )
}

export default Header

