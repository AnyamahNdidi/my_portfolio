import React from 'react'
import {makeStyles} from "@mui/styles"

import {Box, Typography} from "@mui/material"
import img from "./img/1.png"
import img2 from "./img/2.png"


const useStyles = makeStyles((theme)=>({

    root:{
      height: "auto",
      width: "100%",
      backgroundColor:theme.palette.primary.main,
      display: "flex",
      justifyContent:"center",

      "@media (max-width: 800px)":{
       height:"auto",
       display: "flex",
       justifyContent:"center",
       alignItems:"center",
       width: "100%"
      }
      ,
   
     
      "& .all":{
        width: "75%",
        display: "flex",
        flexWrap:"wrap",

        "@media (max-width: 800px)":{
         width: "80%",
         },
      },
     
  
      "& .box1":{
        width: "40%",
      
        height:"auto",
        display: "flex",
        flexDirection:"column",
        paddingTop:"80px",
      

       "@media (max-width: 800px)":{
        width: "100%",
        height:"400px",
        paddingTop:"10px",
      }
       
      },

      "& .box2":{
        width: "60%",
         display: "flex",
        backgroundImage: 'url('+ img +')',
        height:"100%",
        backgroundRepeat:"no-repeat",
        backgroundSize:"100%",
       

        "@media (max-width: 800px)":{
          width: "100%",
          height:"400px"
        }
      },

      "& .qq":{
        width:"50%",
        height:"60px",
        marginBottom:"30px",
        display: "flex",
      justifyContent:"flex-end",

      // "& ::after": {
      //   content: '""',
      //   width: "2em",
      //   height:"10px"
      // },

        "@media (max-width: 800px)":{
          width: "100%",
        }
       
      },

      "& .any":{
        width: "100%",
        height:"200px",
        marginTop:"20px",
        
        
        "& .text1":{
     
          "& .MuiTypography-root":{
            fontSize:"90px",
            fontWeight:"700",
            color:"#F6FAF5",
            letterSpacing:"-5px",

           "@media (max-width: 800px)":{
             fontSize:"65px",
            }
          }
        },
        "& .text2":{
          "& .MuiTypography-root":{
            fontSize:"75px",
            fontWeight:"700",
            marginTop:"-60px",
            color: "#6473d3",

            "@media (max-width: 800px)":{
             fontSize:"43px",
              marginTop:"-27px",
            }
          
          }
        }
      },
      "& .divI":{
       width: "50%",
       height:"100%", 

       "@media (max-width: 800px)":{
        width: "100%",
      }
   

      },
      "& .diviII":{
       width: "40%",
       height:"80%", 
       background: "rgba( 28, 39, 128, 0.2 )",
       boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
       backdropFilter: "blur( 2px )",
      webkitBackdropFilter: "blur( 2px )",
       borderRadius: "10px",
       border: "1px solid rgba( 255, 255, 255, 0.18 )",
       paddingTop:"20px",
       display: "flex",
       justifyContent:"center",
       transform: "rotate(20deg)",
      


       "& .MuiTypography-root":{
         color:"white"
       },

       "@media (max-width: 800px)":{
        width: "100%",
      }
   

      },



    }

}))

function Home() {
  const classes = useStyles()
  return (
    <div style={{paddingTop:"60px"}}>  
    <Box className={classes.root}>
      <Box className="all">
      <Box className="box1" >
        <Box  className="qq">
          <Typography color="#96aaf6"  sx={{fontSize:"15px"}}>
           Let Your Eye Be Single So That Your Body Will Be Full Of Light. ☀️
            </Typography>
        </Box>
        <Box>
          <Typography  color="#f6faf5" sx={{fontWeight:"500", fontSize:"25px", lineHeight:"25px"}}>
          Full-Stack Developer.🔋
          </Typography>
        </Box>
        <Box className="any">
          <Box  className="text1">
          <Typography>
            Anyamah
          </Typography>
          </Box>
          <Box  className="text2">
          <Typography>
            Edwin Ndidi
          </Typography>
          </Box>
        </Box>
        <Box>
         
        </Box>
      </Box>

      <Box className="box2" >
        <Box  className="divI">
        <img src={img2}  style={{width:"100%", height:"100%", objectFit:"cover"}}/>
        </Box>
        <Box className="diviII">
            <Typography>

            class Pro {"{"}
            <br/>
                construtor(name, skillSet, stack){"{"}
                <br/>
                  this.name = name,
                  <br/>
                  this.skillSet = skillSet,
                  <br/>
                  this.stack= stack
                  <br/>
                  {"}"}
                  <br/>

                  Detaills(){"{"}
                  <br/>
                  return `this.name, this.skillSet , this.stack`
                  <br/>
                  {"}"}
                  <br/>
             {"}"}
             <br/>
             let person = new Animals("Ndidi", "javascript, etc", "MERN");
         
            </Typography>
        </Box>
        
        </Box>
</Box>
    </Box>
    </div>
  )
}

export default Home
