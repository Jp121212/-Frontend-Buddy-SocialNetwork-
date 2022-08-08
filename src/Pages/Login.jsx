import React from "react";
//css
import "./Login.css";
import {ApiUrl} from "../services/apirest";
import axios from "axios";

const Login = () => {
const DataPost = async (url,data) => {
   console.log('url',url);
   const response = await axios.post(url,{
        "email": data["email"],
        "password": data["password"],
   });
   return response;
}

const LogClickHandler = async (e) => {
    e.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let data = await DataPost("https://h5bd.herokuapp.com/api/v1/login",{email,password});
    console.log('data',data);
    if(data.data){
        console.log('data.data',data.data);
        if (data.data.response!='Invalid password'){
            console.log(data.data.response);
            localStorage.setItem("message",data.data.message);
            localStorage.setItem("id",data.data.id);
            localStorage.setItem("token",data.data.token);
            localStorage.setItem("email",email);
            localStorage.setItem("imagen",data.data.imagen);
            window.location.href = "/home";

            
        }
        if(data.data.response!='Invalid email'){
            console.log(data.data.response);
            localStorage.setItem("message",data.data.message);
            localStorage.setItem("email",email);
        }
        else{
            alert('Invalid password or email');
        }
    }}
return (
    <body className="html">
            <div className="wrapper fadeInDown">
                <div id="formContent">
                <div className="fadeIn first">
                <img src="https://cdn-icons-png.flaticon.com/512/725/725335.png" id="icon" alt="User Icon" />
                </div>
                <form onSubmit={LogClickHandler}>
                <input type="email" id="email" className="fadeIn second" name="email" placeholder="email"/>
                <input type="password" id="password" className="fadeIn third" name="password" placeholder="password"/>
                  <input type="submit" className="fadeIn fourth" value="Log in"/>
                

                </form>
                <div id="formFooter">
                <a className="underlineHover" href="/register">Register</a> <br></br>
                <a className="underlineHover" href="#">Forgot Password?</a>
                </div>
              </div>
           </div>
           </body>
)


};

export default Login;


