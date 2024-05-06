import logo from '../logo.svg';
import axios from 'axios';
import { useState, useEffect } from 'react';
import "./Home.css"
import React from 'react';
import Sidebar from '../Components/Sidebar';
import Avatar from '../Components/Avatar';
import CircularColor from '../Components/circularprogress';
import Post from './Post.jsx';
import Feed from '../Components/Feed';
import Follows from '../Components/Follow';
import Trends from '../Components/Trends';
import FeedFollow from '../Components/FeedFollow';
import Avatar1 from '../Components/Avatar1';

const User = () => {
  const [User, setUser] = React.useState(null);
  const [Users, setUsers] = React.useState(null);
  const [EstudianteActivo, setEstudianteActivo] = React.useState(null);
  const [favoritos, setFavoritos] = React.useState(JSON.parse(localStorage.getItem('favoritos')));
  const [dodi,setDodi] = useState(false);
  const [data, setData] = useState(null);
  const [Following, setFollowing] = React.useState(null);
  const [Followings, setFollowings] = React.useState(null);
  const [datos, setDatos] = React.useState(null);
  const [fetched, setFetched] = React.useState(false);
 
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
      axios.get(`http://localhost:5000/user/${id}`, config, bodyParameters).
      then((data)=> {
        setUser(data.data);
      }

      )}
   }, [User]);
    
   React.useEffect(() => { 
    const config = {
       headers: { Authorization: `Bearer ${token}` }
    };
    const bodyParameters = {
       key: 'value'
    };
     if(!Following){
     axios.get(`http://localhost:5000/user/following/${id}`, config, bodyParameters).
     then((data)=> {
       setFollowing(data.data);
     }).catch((err)=> {
     }

     )}
  }, [Followings,Following]);

  React.useEffect(() => { 
    const config = {
       headers: { Authorization: `Bearer ${token}` }
    };
    const bodyParameters = {
       key: 'value'
    };
     if(!Users){
     axios.get(`http://localhost:5000/users`, config, bodyParameters).
     then((data)=> {
       setUsers(data.data);
     }).catch((err)=> {
     }

     )}
  }, []);
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
        .post("http://localhost:5000/post", data, config, bodyParameters)
        .then((res) => {
          callback(null);
          setFetched(true);
        })
        .catch((err) => {
        });
    };
 
    const handleSubmit = () => {
      if(datos==null){
        alert("No se puede enviar un mensaje vacio")

      }else{
        postAPI(datos, setDatos);
      }
     
    };
    
  


 
   

 

  return(
    <div className='contenedorFlex' >
      <div className='Contenedor1'>
        <div className='float'>
          <Sidebar/><div className='abajo'>
         
          {
            User ?
            User.map((u,i)=>{ 
              return(
                <div key={i}>
                  <Avatar pop={u}/>
                
                </div>
              ) 

            }):<CircularColor/>
          }
        </div>
        </div>
      </div>
     
      <div className='ContenedorMain'> 
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
                <div className="border">
                    <form className="form1">
                   <input className="input4" type="text"placeholder="What's happening?" onChange={(e) => handleInputChange("content",e)} required min={8} max={255} /> 
                   {<button type="submit" className="b5" onClick={handleSubmit}>Post </button>}
                    </form>
                </div>
                
            </div> 
             
        </div>
        <div className='abajo1'>
          <p className='p22'>Your follows</p>
          {
            Following ?
            Following.map((u,i)=>{
              return(
                <div key={i}>
                  <FeedFollow pop2={u}/>
                </div>
              )
            }):<CircularColor/>
          }
        </div>
      </div>
      <div className='Contenedor3'>
        <p className='p23'>Trends for you</p>
        <Trends/>
        <div className='abajo1'>
          <p className='p22'>Who to follow</p>
          {
            Users ?
            Users.map((u,i)=>{ 
              return(
                <div key={i}>
                  <Follows pop={u}/>
                
                </div>
              ) 

            }):<CircularColor/>
          }
        </div>
        
        </div>
        
      

    </div>
  );
}
export default User;