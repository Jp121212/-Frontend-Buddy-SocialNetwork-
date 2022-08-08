import React, { useState } from "react";
import Avatar1 from '../Components/Avatar1';
import axios from "axios";
import Button from "@mui/material/Button";
import "./post.css"
import Feed from '../Components/Feed';
import Alert from '@mui/material/Alert'; 


const App = (props) => {
    const [datos, setDatos] = React.useState(null);
    const [userss, setuserss] = React.useState(null);
    const [mensaje, setMensaje] = React.useState(null);
    const [fetched, setFetched] = React.useState(false);
    const [User, setUser] = React.useState(null);
    const [Users, setUsers] = React.useState(null);
    const [Post, setPost] = React.useState(null);
    const [Posts, setPosts] = React.useState(null);

    const id = localStorage.getItem('id');
    const token = localStorage.getItem('token');
    
    React.useEffect(() => { 
      const config = {
         headers: { Authorization: `Bearer ${token}` }
      };
      const bodyParameters = {
         key: 'value'
      };
       if(!User){
       axios.get(`https://h5bd.herokuapp.com/user/${id}`, config, bodyParameters).
       then((data)=> {
         setUser(data.data);
       }).catch((err)=> {
          console.error(err);
       }
 
       )}
    }, [Users,User]);
     
    React.useEffect(() => { 
      const config = {
         headers: { Authorization: `Bearer ${token}` }
      };
      const bodyParameters = {
         key: 'value'
      };
       if(!Post){
       axios.get(`https://h5bd.herokuapp.com/user/post/${id}`, config, bodyParameters).
       then((data)=> {
         setPost(data.data.reverse());
       }).catch((err)=> {
          console.error(err);
       }
 
       )}
    }, [Posts,Post]);

    


    React.useEffect(() => { 
      const config = {
         headers: { Authorization: `Bearer ${token}` }
      };
      const bodyParameters = {
         key: 'value'
      };
       if(!userss){
       axios.get(`http://localhost:5000/user/post/${id}`, config, bodyParameters).
       then((data)=> {
         setuserss(data.data);
       }).catch((err)=> {
          console.error(err);
       }
 
       )}
    }, [datos,userss]);

    const handleInputChange = (type, e) => {
     let id = localStorage.getItem('id');
     parseInt(id);
      let tempDatos = {
        userId: parseInt(id),
        content: datos?.content,
      };
    
        if (type === "content") {
            tempDatos.content = e.target.value;
        }
        if (type === "userId") {
            tempDatos.userId = parseInt(e.target.value);
        }
      
      setDatos(tempDatos);
      console.log(tempDatos);
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
         .post("http://127.0.0.1:5000/post", data, config, bodyParameters)
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
       }
      
     };
  
  
    
    return (
        

   

        
      <div className="App">
        
        <div>
        <div className="S2"> 
        
        
         <div className="tweetBox__input"> 
            <div className="flex">
                <div className="avatar">
                                {
                        User ?
                        User.map((u,i)=>{ 
                        return(
                            <div key={i}>
                            <Avatar1 className="avatar11" pop={u}/>
                            </div>
                        ) 

                        }):"cargando"
                    }
                </div>
               
                
            </div> 
             
        </div>
        
        </div>
        <div className="Scroll">
        <p className='p22'>Your Post hi5</p>
          {

            Post ?
            Post.map((u,i)=>{
              return(
                <div key={i}>
                 <Feed  pop1={u}/>
                </div>
              )
            }):"cargando"
          }
      
        </div>

        </div>

       
      

       
       
        
        

  
        
      </div>
    );
  };
  
  export default App;

