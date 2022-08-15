import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton } from '@mui/material';
import MessageIcon from '@mui/icons-material/Message';
import axios from 'axios';

export default function AlertDialog(props) {
 
  const [open, setOpen] = React.useState(false);
  const id = localStorage.getItem('id');
  const token = localStorage.getItem('token');
  const [datos, setDatos] = React.useState(null);
  const [fetched, setFetched] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }




   const handleInputChange = (type, e) => {

     const ids = localStorage.getItem('idComment');
     let tempDatos = {
       userId: parseInt(id),
       content: datos?.content,
       postId: parseInt(ids),
     };
  
       if (type === "content") {
           tempDatos.content = e.target.value;
       }
       if (type === "userId") {
           tempDatos.userId = parseInt(e.target.value);
      }
      if (type === "postId") {
            tempDatos.postId = parseInt(e.target.value);
      }
    
     setDatos(tempDatos);
     console.log(tempDatos)
     ;
   };
   const postAPI = (data, callback) => {
    const finalData = JSON.stringify(data);
     const config = {
         headers: { Authorization: `Bearer ${token}` }
     }
     const bodyParameters = {
         key: 'value'
     }
      console.log({ data });
      axios
        .post("https://h5bd.herokuapp.com/comments", data, config, bodyParameters)
        .then((res) => {
          callback(null);
          setFetched(true);
        })
        .catch((err) => {
          console.error(err);
        });
    };
 
    const handleSubmit = () => {
      if(datos==null){
        alert("No se puede enviar un mensaje vacio")

      }else{
        postAPI(datos, setDatos);
        handleClose();
        
      }
     
    };
 


   

  return (
    <div>
       <IconButton onClick={handleClickOpen} className='icon3' aria-label="share">
          <MessageIcon className='icon1'/>
        </IconButton>
      <Dialog className='dialog'
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className='flex-1'>
         <img className="icon10"src={props.pop1.imagen}></img>
         <p className='p20'>{props.pop1.username}</p>
        </div>
        
        
        
        <DialogContent>
            <div className='wi'>
               <input placeholder='Hi5 your reply' className='input1' type="text" onChange={(e) => handleInputChange("content",e)} required min={8} max={255} /> 
            </div>
           
        </DialogContent>
        <DialogActions>
          <button className='b68' onClick={handleClose}>close</button>
          <button className='b67' onClick={handleSubmit} autoFocus>
            comment
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
