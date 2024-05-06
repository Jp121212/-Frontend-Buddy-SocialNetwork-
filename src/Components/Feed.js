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
import './sidebar.css';
import moment from 'moment';


export default function RecipeReviewCard(props) {
  const token1 = localStorage.getItem('token'); 
  const [like,setlike] = React.useState(null);
  console.log("id", props.pop1)

  
  const [toggle, setToggle] = React.useState(false);
  const toggleButton = (id) => setToggle(!toggle);

  const handleInputChange = (id) => {
    console.log("like id", id)
    localStorage.setItem('idPost', id);
    postAPI(like, setlike);
    toggleButton(id);
  };

  const handlereply = (id1) => {
    console.log("reply id", id1)
    localStorage.setItem('idComment', id1);
  }


 const postAPI = () => {
     const id = localStorage.getItem('idPost');
       const config = {
           headers: { Authorization: `Bearer ${token1}` }
       };
       const bodyParameters = {
           key: 'value'
       };
       if(!like){
        axios.put(`http://localhost:5000/postlike/${id}`, bodyParameters, config).
        then(res => {
            setlike(res.data);}).catch(err => {
            console.log(err);
            })
       }
       
      };

 
  
  
   
  
  

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
           { moment (u.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
   
        </Typography>
        <Typography padding={3} fontSize={14} fontFamily={'Verdana, Geneva, Tahoma, sans-serif'} variant="body2" color="text.secondary">
          {u.content}
        </Typography>
      </CardContent>
      <CardActions   className='icon3'disableSpacing>
        <IconButton size="small" aria-label="add to favorites" >
          <FavoriteIcon onClick={()=>handleInputChange(u.id)} />{u.likes}
        </IconButton>
        <IconButton onClick={()=>handlereply(u.id)} className='icon3' aria-label="share">
         <Dialog  pop1={props.pop1}/>
        </IconButton>
       
      </CardActions> 
      <CardContent>
            <p className='p21'>Replys</p>
             {u.comments ? 
             u.comments.map((e,i)=>{
              return(
                <div className='' key={i}><Card style={{backgroundColor: "black" }} className="card11"> 
                   <CardHeader avatar={
                      <Avatar   alt="Photo" src={e.user.imagen}  sx={{ bgcolor: red[500] }} aria-label="recipe">
                   </Avatar>
                    }
                    
                    title={
                      <Typography  fontSize={12} fontFamily={'Verdana, Geneva, Tahoma, sans-serif'} variant="body2" color="orange">
                        {'@'+e.user.username}
                      </Typography>
                    }
                    subheader={
                      <Typography  fontSize={10} fontFamily={'Verdana, Geneva, Tahoma, sans-serif'} variant="body2" color='white'>
                        { moment (e.user.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
                      </Typography>
                    }
                      
                    />
                  <Typography padding={3} fontSize={12} fontFamily={'Verdana, Geneva, Tahoma, sans-serif'} variant="body2" color="#ffff">
                   {e.content}
                  </Typography>
                  </Card>
                    <div>
                   </div>
                 </div> 
              )
             }):null}
            </CardContent>
    </Card> 
   
     


                </div>
              )
            }):"cargando"
          }   
   </div>
  );
}
