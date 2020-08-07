import React,{Component} from 'react';
import fire from "./Fire";
import './Login.css';
import {Link} from 'react-router-dom';
import Loginbackend from './Loginbackend';


class Login extends Component{
    constructor(props){
        super(props);
        this.state ={
            email:"",
            password:"",
            fireErrors:"",
            loginbtn:true
        };
    }

    handleChange = e => {
        this.setState({[e.target.name]:e.target.value});
    }

    login = e => {
        e.preventDefault();
        fire.auth.signInWiththeEmailAndPassword(this.state.email,this.state.password)
        .catch((error)=>{
            this.setState({fireErrors:error.message})
        });
    }

   render(){

    let errorNotification=this.state.fireErrors ?
    (<div className="Error">{this.state.fireErrors}</div>):null;
    
    return(
        <div className="container ">
            {errorNotification}
            <form className="card1 bg-white ">
                <div className="card-header bg-dark"><h2 className="text-white text-center"> <i class="fa fa-user-circle" aria-hidden="true"></i> LOGIN</h2></div>
                <div className=" card-body ">
                    <div className="form-group">
                    <label className=""><i class="fa fa-id-badge" aria-hidden="true"></i> USER ID </label>
                    <input id="txtemail" 
                    value={this.state.email} 
                    onChange={this.handleChange}
                    name="email"
                    type="email" 
                    placeholder="Ex.Example@gmail.com" 
                    className="form-control" 
                    />
                    </div>

                    <div className="form-group">
                    <label className=""><i class="fa fa-lock" aria-hidden="true"></i> PASSWORD </label>
                    <input id="txtpassword" 
                    type="password"
                    value={this.state.password} 
                    onChange={this.handleChange}
                    name="password"
                    placeholder="Ex.Sam65#@" 
                    className="form-control" 
                    />
                    </div>
                    <button id="btnlogin" onClick={this.state.login} className="btn btn-info btn-block">LOGIN <i class="fa fa-lock" aria-hidden="true"></i></button>
                    <p>DON'T HAVE AN ACCOUNT?<Link to="./Register"><span class="text-info">REGISTER HERE</span></Link></p>
                </div>
            </form>
            
        </div>
    )
   }
}

export default Login;