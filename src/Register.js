import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Register.css';

class Register extends Component{
    constructor(props){
        super(props);

        this.state = {
            fullname:"",
            mobileno:"",
            email:"",
            password:""}
    }

    // handlefullname = (event) =>{this.setState({fullname:event.target.value})}  
    // handlemobileno = (event) =>{this.setState({mobileno:event.target.value})}
    // handleemail = (event) =>{this.setState({email:event.target.value})}
    // handlepassword = (event) =>{this.setState({password:event.target.value})}
     


    handlechange =(event) =>{this.setState({[event.target.name]:event.target.value})}

    handlesubmit = (event) => { alert(`my name is ${this.state.fullname}.my mobileno is${this.state.mobileno}
    my email is${this.state.email}.my password is${this.state.password
    }`);}
    

    render(){
        return(
            <div className="container">
                <form className="card" onSubmit ={this.handlesubmit} >
                    <div className="card-header bg-dark"><h2 className="text-white text-center"> <i class="fa fa-user-circle" aria-hidden="true"></i> REGISTER</h2></div>
                    <div className=" card-body registercardbody">
                        <div className="form-group">
                        <label className=""> <i class="fa fa-user" aria-hidden="true"></i> USER NAME </label> 
                        <input type="text" name="fullname" placeholder="Ex.ALEX CHICON" className="form-control" required 
                        value={this.state.fullname} 
                        onChange={this.handlechange}/>
                        </div>
    
                        <div className="form-group">
                        <label className=""><i class="fa fa-address-book    "></i> MOBILE NO. </label>
                        <input type="tel" name="mobileno" placeholder="+91-7214656829" className="form-control" 
                        value={this.state.mobileno}
                        onChange={this.handlechange}
                        required/>
                        </div>
    
                        <div className="form-group">
                        <label className=""><i class="fa fa-id-badge" aria-hidden="true"></i> USER ID </label>
                        <input type="email" name="email" placeholder="Ex.Example@gmail.com" className="form-control" 
                        value={this.state.email}
                        onChange={this.handlechange}
                        required/>
                        </div>
    
                        <div className="form-group">
                        <label className=""><i class="fa fa-lock" aria-hidden="true"></i> PASSWORD </label>
                        <input type="password" name="password" placeholder="Ex.Sam65#@" className="form-control" 
                        value={this.state.password}
                        onChange={this.handlechange}
                        required/>
                        </div>
                        <button className="btn btn-info btn-block">SIGNUP <i class="fa fa-lock" aria-hidden="true"></i></button>
                    </div>
                </form>
            </div>
        )
    }
    

    


    
}


    
export default Register;