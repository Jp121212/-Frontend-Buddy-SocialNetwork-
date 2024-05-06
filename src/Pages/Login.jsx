import React from "react";
//css
import "./Login.css";
import axios from "axios";
import img  from '../Assets/buddywhite.png'

const Login = () => {
const DataPost = async (url,data) => {
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
    let data = await DataPost("http://localhost:5000/api/v1/login",{email,password});
    if(data.data){
        if (data.data.response!='Invalid password'){
            localStorage.setItem("message",data.data.message);
            localStorage.setItem("id",data.data.id);
            localStorage.setItem("token",data.data.token);
            localStorage.setItem("email",email);
            localStorage.setItem("imagen",data.data.imagen);
            window.location.href = "/home";

            
        }
        if(data.data.response!='Invalid email'){
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
                <img className="ImgLog" src={img} id="icon" alt="User Icon" />
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


