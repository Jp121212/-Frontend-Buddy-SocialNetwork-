import * as React from "react";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#dd8411;",
    color: "#dd8411;",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""'
    }
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0
    }
  }
}));

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 30,
  height: 30,
  border: `1px solid ${theme.palette.background.paper}`
}));

export default function BadgeAvatars(props) {
  return (
    <Stack direction="row" spacing={2}>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        variant="dot"
        
      >
        <Avatar  alt="Photo" src={props.pop.imagen} />
       
      </StyledBadge> 
         <div className="p1">{props.pop.username}<br></br><p className="p2">@{props.pop.username}</p></div>
    
      
    </Stack>
  );
}
