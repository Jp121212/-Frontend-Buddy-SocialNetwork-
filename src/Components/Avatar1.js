import * as React from "react";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar1 from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";




export default function BadgeAvatars(props) {
  
  return (
        <div>
           <Avatar1 style={{width:"80px" ,height:"80px"}} alt="Photo" src={props.pop.imagen} />
           
        </div>
        
        
  );
}
