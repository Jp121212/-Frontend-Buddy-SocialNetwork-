import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Dialog from './Dialog.js';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MessageIcon from '@mui/icons-material/Message';
import axios from 'axios';


export default function RecipeReviewCard(props) {
  const [expanded, setExpanded] = React.useState(false);
  const token = localStorage.getItem('token'); 
  const [datos, setDatos] = React.useState(null);
  const [fetched, setFetched] = React.useState(false);
  console.log("Este3", props.pop1)

  const id = props.pop1.id;
  const [toggle, setToggle] = React.useState(false);
  const toggleButton = () => setToggle(!toggle);


  const toggle12 = (id) => {
    setToggle(!toggle);
  }
   
  const handleInputChange = () => {
    postAPI(datos, setDatos);
  };




 const postAPI = (callback) => {  
   let id = localStorage.getItem('id');
   parseInt(id);  
   let data = {
      
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
       .put(`https://h5bd.herokuapp.com/postlike/2`, data, config, bodyParameters)
       .then((res) => {
         callback(null);
         setFetched(true);
       })
       .catch((err) => {
         console.error(err);
       });
   }
  
  
   
  
  

  return (
    <div>
     {     
            props.pop1.post ?
            props.pop1.post.map((u,i)=>{
              return(
                <div key={i}>
       <Card className='card'>
       <CardHeader
        avatar={
          <Avatar   alt="Photo" src={props.pop1.imagen}  sx={{ bgcolor: red[500] }} aria-label="recipe">
             
          </Avatar>
        }
        
        title={props.pop1.username}
        
      />
      
      <CardContent >
      <Typography padding={3}  fontSize={10} fontFamily={'Verdana, Geneva, Tahoma, sans-serif'} variant="body" color="#dd8411;">
            {u.createdAt}
        </Typography>
        <Typography padding={3} fontSize={14} fontFamily={'Verdana, Geneva, Tahoma, sans-serif'} variant="body2" color="text.secondary">
            {u.content}
        </Typography>
      </CardContent>
      <CardActions   className='icon3'disableSpacing>
        <IconButton onClick={toggle12} aria-label="add to favorites">
          <FavoriteIcon onClick={()=>handleInputChange(props.pop1.id)} style={{color: toggle ? '#FFF': '#000'}} />{u.likes}
        </IconButton>
        <IconButton className='icon3' aria-label="share">
          <Dialog pop1={props.pop1}/>
        </IconButton>
       
      </CardActions> 
      <Card>
      <CardContent>
      <Typography padding={3} fontSize={14} fontFamily={'Verdana, Geneva, Tahoma, sans-serif'} variant="body2" color="text.secondary">
            {
              u.comments.map((u,i)=>{
                return(
                  <div key={i}>
                    <Typography padding={3} fontSize={14} fontFamily={'Verdana, Geneva, Tahoma, sans-serif'} variant="body2" color="text.secondary">
                      {u.content}
                    </Typography>
                  </div>
                )
              })
            }
        </Typography>
      </CardContent>
      </Card>
    </Card>
     


                </div>
              )
            }):"cargando"
          }   
   </div>
  );
}
