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

  const [toggle, setToggle] = React.useState(false);
  const id = localStorage.getItem("id");
  const token = localStorage.getItem('token'); 
  const [datos, setDatos] = React.useState(null);
  const [fetched, setFetched] = React.useState(false);
   
  const handleInputChange = () => {
     postAPI(datos, setDatos);
   };

 


  const postAPI = (callback) => {  
    let id = localStorage.getItem('id');
    parseInt(id);  
    let data = {
       followerId: parseInt(id),
       followingId: parseInt(props.pop.id),
     };
    const finalData = JSON.stringify(data);
     const config = {
         headers: { Authorization: `Bearer ${token}` }
     }
     const bodyParameters = {
         key: 'value'
     }
      console.log({ data });
      axios
        .post(`https://h5bd.herokuapp.com/follows`, data, config, bodyParameters)
        .then((res) => {
          callback(null);
          setFetched(true);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  
     
    

  

  const [pop, setPop] = React.useState(null);
  const [pops, setPops] = React.useState(null);
  
 


  return (
    <Card style={{backgroundColor: "black" }} className="cardb">
    <Stack   direction="row" spacing={2}>
      
        
      
        <Avatar  alt="Photo" src={props.pop.imagen} />
         <div className="p4">{props.pop.username}<br></br><p className="p5">@{props.pop.username}</p> <button id="bt" onClick={()=>handleInputChange(props.pop.id)} style={{background: toggle ? '#FFFF': '#dd8411' , fontFamily: 'verdana', padding: '1px', fontSize: '12px', borderRadius: '5px',marginTop: '10px'}}>Follow</button></div>
         
      
    </Stack></Card>
  );
}