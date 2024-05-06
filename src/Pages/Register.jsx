import React from "react";
//css
import "./Signup.css";
import {ApiUrl} from "../services/apirest";
import axios from "axios";
import img from "../Assets/buddywhite.png";

class Register extends React.Component {

    state={
        form:{
            "username":"",
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
    }

    manejadorBoton=()=>{
        let url = ApiUrl+"/Signup";
        axios.post(url,this.state.form)
        .then(res=>{
            console.log(res);
        })  
    }




      

    render() {
        return (
        <React.Fragment>
            <body className="html">
            <div className="wrapper fadeInDown">
                <div id="formContent">
                <div className="fadeIn first">
                <img src={img} id="icon" alt="User Icon" />
                </div>
                <form onSubmit={this.manejadorSubmit}>
                <input type="text" id="username" className="fadeIn second" name="username" placeholder="username" onChange={this.manejadorChange} min="5" max="20" required />
                <input type="email" id="email" className="fadeIn second" name="email" placeholder="email" onChange={this.manejadorChange}  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required/>
                <input type="password" id="password" className="fadeIn third" name="password" placeholder="password"  onChange={this.manejadorChange} min="8" max="20"  required/>
                <input type="submit" className="fadeIn fourth" value="Register" onClick={this.manejadorBoton} />
                </form>
                <div id="formFooter">
                <a className="underlineHover" href="/">Log In</a> <br></br>
                <a className="underlineHover" href="#">Forgot Password?</a>
                </div>
              </div>
           </div>
              </body>
        </React.Fragment>
    )}
};

export default Register;