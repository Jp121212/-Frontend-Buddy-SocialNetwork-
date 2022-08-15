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

const User = () => {
  const [User, setUser] = React.useState(null);
  const [Users, setUsers] = React.useState(null);
  const [EstudianteActivo, setEstudianteActivo] = React.useState(null);
  const [favoritos, setFavoritos] = React.useState(JSON.parse(localStorage.getItem('favoritos')));
  const [dodi,setDodi] = useState(false);
  const [data, setData] = useState(null);
  const [Following, setFollowing] = React.useState(null);
  const [Followings, setFollowings] = React.useState(null);
 
  const id = localStorage.getItem('id');
  console.log(id)
  const token = localStorage.getItem('token');
  console.log(token)
  
 

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
     axios.get(`https://h5bd.herokuapp.com/user/following/${id}`, config, bodyParameters).
     then((data)=> {
       setFollowing(data.data);
     }).catch((err)=> {
        console.error(err);
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
     axios.get(`https://h5bd.herokuapp.com/users`, config, bodyParameters).
     then((data)=> {
       setUsers(data.data);
     }).catch((err)=> {
        console.error(err);
     }

     )}
  }, []);
    
  


 
   

 

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
        <Post/>
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

