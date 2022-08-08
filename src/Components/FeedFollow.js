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
import './sidebar.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MessageIcon from '@mui/icons-material/Message';


export default function RecipeReviewCard1(props) {
  console.log(props)
  
 

  return (
    <div>
     {     
            props.pop2.following ?
            props.pop2.following.map((u,i)=>{
              return(
                <div key={i}>
       <Card className='card'>
       <CardHeader
        avatar={
          <Avatar   alt="Photo" src={u.following.imagen}  sx={{ bgcolor: red[500] }} aria-label="recipe">
             
          </Avatar>
        }
        
        title={u.following.username}
        
      />
      
      <CardContent>
      <Typography variant="body2" color="text.secondary">
            {
              u.following.post ?
              u.following.post.map((u,i)=>{
                return(
                  <div key={i}>
                    <Typography variant="body2" color="text.secondary">
                        {u.createdAt}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {u.content}
                    </Typography>
                  <IconButton className='icon3' aria-label="add to favorites" >
                    <FavoriteIcon />{u.likes}
                  </IconButton>
                  <IconButton className='icon3' aria-label="share">
                    <MessageIcon className='icon31'/>
                  </IconButton>

                  </div>
                )
              }):"cargando..."
            } 
        </Typography>
      </CardContent>
    </Card>
                </div>
              )
            }):"cargando"
          }   
   </div>  
  );
}
