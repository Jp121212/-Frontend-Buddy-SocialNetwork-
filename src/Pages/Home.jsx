import logo from '../logo.svg';
import axios from 'axios';
import { useState, useEffect } from 'react';
import "./Home.css"
import React from 'react';
import Sidebar from '../Components/Sidebar';



const Estudiantes = () => {
  const [Estudiante, setEstudiante] = React.useState(null);
  const [EstudianteActivo, setEstudianteActivo] = React.useState(null);
  const [favoritos, setFavoritos] = React.useState(JSON.parse(localStorage.getItem('favoritos')));

   React.useEffect(() => {
     if(!Estudiante){
       axios.get(`http://localhost:5000/users`)
         .then((res) => {
           setEstudiante(res.data)
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
        <Sidebar/>
      </div>
      <div className='ContenedorMain'>

      </div>
      <div className='Contenedor3'>

      </div>

    </div>
  );
}
export default Estudiantes;