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


export default function RecipeReviewCard(props) {
  const [expanded, setExpanded] = React.useState(false);
  

  
  const [toggle, setToggle] = React.useState(false);
  const toggleButton = () => setToggle(!toggle);
  
  const Item1 = (id) => {
    console.log(id);
   
  
  
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
      <Typography variant="body" color="text.secondary">
            {u.createdAt}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {u.content}
        </Typography>
      </CardContent>
      <CardActions   className='icon3'disableSpacing>
        <IconButton onClick={toggleButton} aria-label="add to favorites">
          <FavoriteIcon onClick={()=>Item1(u.id)} style={{color: toggle ? '#FFF': '#000'}} />{u.likes}
        </IconButton>
        <IconButton className='icon3' aria-label="share">
          
          <Dialog pop1={props.pop1}/>
        </IconButton>
       
      </CardActions>
    </Card>
                </div>
              )
            }):"cargando"
          }   
   </div>
  );
}
