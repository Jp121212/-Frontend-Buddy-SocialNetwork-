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
        let url = ApiUrl+"/users";
        axios.post(url,this.state.form)
        .then(res=>{
          console.log(res);
        })
    }

    render() {
        return (
        <React.Fragment>
            <div className="wrapper fadeInDown">
                <div id="formContent">
                <div className="fadeIn first">
                <img src="https://cdn-icons-png.flaticon.com/512/725/725335.png" id="icon" alt="User Icon" />
                </div>
                <form onSubmit={this.manejadorSubmit}>
                <input type="text" id="email" className="fadeIn second" name="email" placeholder="email" onChange={this.manejadorChange}/>
                <input type="password" id="password" className="fadeIn third" name="password" placeholder="password"  onChange={this.manejadorChange}/>
                <input type="submit" className="fadeIn fourth" value="Log in" onClick={this.manejadorBoton}/>
                </form>
                <div id="formFooter">
                <a className="underlineHover" href="/register">Register</a> <br></br>
                <a className="underlineHover" href="#">Forgot Password?</a>
                </div>
              </div>
           </div>
        </React.Fragment>
    )}
};

export default Login;