import React from "react";
//css
import "./Login.css";
import {ApiUrl} from "../services/apirest";
import axios from "axios";

class Login extends React.Component {

    state={
        form:{
            "email":"",
            "password":""
        },
        error:false,
        errorMessage:""

    }
    
    manejadorSubmit(e){
        e.preventDefault();
        
    }

    manejadorChange = async e=>{
       await this.setState({
          form:{
                ...this.state.form,
                [e.target.name]:e.target.value
          }    
       })
       console.log(this.state.form);
    }

    manejadorBoton=()=>{
        <a href="/home"></a>
    }

    render() {
        return (
        <React.Fragment>
            <body className="html">
            <div className="wrapper fadeInDown">
                <div id="formContent">
                <div className="fadeIn first">
                <img src="https://cdn-icons-png.flaticon.com/512/725/725335.png" id="icon" alt="User Icon" />
                </div>
                <form onSubmit={this.manejadorSubmit}>
                <input type="email" id="email" className="fadeIn second" name="email" placeholder="email" onChange={this.manejadorChange}/>
                <input type="password" id="password" className="fadeIn third" name="password" placeholder="password"  onChange={this.manejadorChange}/>
                <a href="/home">
                  <input type="submit" className="fadeIn fourth" value="Log in"/>
                </a>
               
                </form>
                <div id="formFooter">
                <a className="underlineHover" href="/register">Register</a> <br></br>
                <a className="underlineHover" href="#">Forgot Password?</a>
                </div>
              </div>
           </div>
           </body>
        </React.Fragment>
    )}
};

export default Login;