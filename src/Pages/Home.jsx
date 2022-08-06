import logo from '../logo.svg';
import axios from 'axios';
import { useState, useEffect } from 'react';
import "./Home.css"
import React from 'react';
import Sidebar from '../Components/Sidebar';
import Avatar from '../Components/Avatar';
import CircularColor from '../Components/circularprogress';




const User = () => {
  const [User, setUser] = React.useState(null);
  const [Users, setUsers] = React.useState(null);
  const [EstudianteActivo, setEstudianteActivo] = React.useState(null);
  const [favoritos, setFavoritos] = React.useState(JSON.parse(localStorage.getItem('favoritos')));

   React.useEffect(() => {
     if(!User){
       axios.get(`http://localhost:5000/user/1`)
         .then((res) => {
           setUser(res.data)
          console.log(res.data)
        })
    }
   }, [])

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

      </div>
      <div className='Contenedor3'>

      </div>

    </div>
  );
}
export default User;