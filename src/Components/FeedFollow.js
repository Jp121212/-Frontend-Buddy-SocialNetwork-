import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './sidebar.css';
import Dialog from './Dialog.js';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import moment from 'moment';


export default function RecipeReviewCard1(props) {
  const token1 = localStorage.getItem('token'); 
  const [like,setlike] = React.useState(null);
  console.log("Prueba", props.pop2.following)
   
  const [toggle, setToggle] = React.useState(false);
  const toggleButton = (id) => setToggle(!toggle);

  const handleInputChange = (id) => {
    console.log("like id", id)
    localStorage.setItem('idPost', id);
    postAPI(like, setlike);
    toggleButton(id);
  }

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
          axios.put(`https://h5bd.herokuapp.com/postlike/${id}`, bodyParameters, config).
          then(res => {
              setlike(res.data);}).catch(err => {
              console.log(err);
              })
         }
         
        };
      
 

  return (
    <div>
      {
            props.pop2.following ?
            props.pop2.following.map((e,i)=>{
              return(
                <div key={i}>
                 
       <Card className='card'>
       <CardHeader
        avatar={
          <Avatar   alt="Photo" src={e.following.imagen}  sx={{ bgcolor: red[500] }} aria-label="recipe">
             
          </Avatar>
        }
        
        title={e.following.username}
        subheader={'@'+e.following.username}       
        
      />
      
      <CardContent >
        {e.following.post ? 
        e.following.post.map((u,i)=>{
          return(
            <div key={i} >
            <Card className='card'>
              <p className='p21'>Post by {'@'+e.following.username}</p>
              <CardContent> 
              
                
                <Typography  padding={3}  fontSize={10} fontFamily={'Verdana, Geneva, Tahoma, sans-serif'} variant="body" color="#dd8411;">
                  { moment (u.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
                </Typography>
                

  
            <Typography padding={3} fontSize={14} fontFamily={'Verdana, Geneva, Tahoma, sans-serif'} variant="body2" color="text.secondary">
              {u.content}
             
            </Typography><CardActions className='icon3'>
            <IconButton size='small' aria-label="add to favorites" >
            <FavoriteIcon onClick={()=>handleInputChange(u.id)} />{u.likes}
            </IconButton>
            <IconButton onClick={()=>handlereply(u.id)} className='icon3' aria-label="share">
            <Dialog  pop1={props.pop2}/>
            </IconButton> 
              </CardActions></CardContent>
            </Card>
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
            
            </div>
          )
        }): 'cargando'}
      </CardContent>
    </Card> 
   
     


                </div>
              )
            }):"cargando"
          }
      
       
  </div>
  );
}
