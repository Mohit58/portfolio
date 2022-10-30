import React,{useState,useEffect} from 'react'
import "../styles/projects.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import PacmanLoader	 from "react-spinners/PacmanLoader";
import projects from './Data';

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
    marginTop:"21rem",
  };

function Projects() {
    let [loading, setLoading] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        },1200)
    })
  
    return (
        <>
         {loading ?  <PacmanLoader color={"#feb800"} loading={true} cssOverride={override} size={25}/>
         :
        <div className="Project">
           <h1 className="heading">Projects </h1> 
           <div className="projects">
             {
                projects.map((p,index)=>{
                    let image = p.image;
                    return (
                    <a key={index} href={p.link} target="_blank" rel="noopener noreferrer">
                    <Card sx={{ maxWidth: 345 }}>
                     <CardActionArea>
                         <CardMedia
                         component="img"
                         height="140"
                         image={image}
                         alt="green iguana"
                         />
                         <CardContent>
                         <Typography gutterBottom variant="h5" component="div">
                             {p.title}
                         </Typography>
                         <Typography variant="body2" color="text.secondary">
                         {p.description}
                         </Typography>
                         </CardContent>
                     </CardActionArea>
                     </Card>
                     </a>
                     )
                })
             }
           </div>
           </div>}
           </>
    )
}

export default Projects
