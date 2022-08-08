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
import Dialog from './Dialog.js';


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
          subheader={"@"+u.following.username}
          />
          <CardContent>
            {
              u.following.post ?
              u.following.post.map((el,o)=>{
                return(
                 
                  <div key={o}>   
                  
                   <Card className='card'>
                  
                      <CardContent>
                         <Typography variant="body" color="#dd8411;" padding={3} fontSize={10} fontFamily={'Verdana, Geneva, Tahoma, sans-serif'}>
                        {el.createdAt}
                      </Typography><br></br>
                      <Typography variant="body2" color="text.secondary" padding={3} fontSize={14} fontFamily={'Verdana, Geneva, Tahoma, sans-serif'}>
                        {el.content}
                      </Typography>
                      </CardContent>
                      <CardActions   className='icon3'disableSpacing>
                      <IconButton  aria-label="add to favorites">
                        <FavoriteIcon/>{el.likes}
                      </IconButton>
                      <IconButton className='icon3' aria-label="share">
                        <Dialog pop1={props.pop2}/>
                      </IconButton>
       
                      </CardActions>
                    
                  </Card> 
                 
                  </div>
                )

              }): null
            }
          </CardContent>
          </Card>
               </div>
             )
           }):"cargando"
         }
  </div>
  );
}
