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
 
  useEffect(() => {
    console.log("ID recibida otro componente:",dodi.id);
    setData(dodi);
    
  },[dodi]); 


   React.useEffect(() => {
     if(!User){
       axios.get(`http://localhost:5000/user/2`)
         .then((res) => {
           setUser(res.data)
          console.log(res.data)
        })
    }
   }, [])

   React.useEffect(() => {
    if(!Following){
      axios.get("http://127.0.0.1:5000/following/2")
        .then((data)=> {
          setFollowing(data.data.reverse());
        })
        .catch((err)=> {
          console.error(err);
        })
    }
   
    
  }, [Followings, Following]);


   React.useEffect(() => {
    if(!Users){
      axios.get(`http://localhost:5000/users`)
        .then((res) => {
          setUsers(res.data)
         console.log(res.data)
       })
   }
  }, [])

   

  // const manejarClickLista = (id) => {
  //   setEstudianteActivo(Estudiante.find((el) => el.id === id));
  // }

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