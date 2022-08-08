import * as React from "react";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import axios from "axios";


const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 30,
  height: 30,
  border: `1px solid ${theme.palette.background.paper}`
}));

export default function BadgeAvatars(props) {


        

   const Item1 = (id) => {
      console.log(id);
      
    
  }
  const [pop, setPop] = React.useState(null);
  const [pops, setPops] = React.useState(null);
  
 


  return (
    <Card style={{backgroundColor: "black" }} className="cardb">
    <Stack   direction="row" spacing={2}>
      
        
      
        <Avatar  alt="Photo" src={props.pop.imagen} />
         <div className="p4">{props.pop.username}<br></br><p className="p5">@{props.pop.username}</p> <button onClick={()=>Item1(props.pop.id)} className="bt5" id="bt">Follow</button></div>
    
      
    </Stack></Card>
  );
}