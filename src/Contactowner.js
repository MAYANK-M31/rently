import React, { Component } from "react";
import Avatar from 'react-avatar';
import "./Contactowner.css";


class Contactowner extends Component{
    constructor(props){
        super(props);
        this.state = {
    
            recipient:"" ,
            ownername:"" ,
            name:"" 
        }
    }
    

    firetext =()=>{
        fetch(`http://localhost:5000/sendtext?recipient=${this.state.recipient}&ownername=${this.props.name}&locality=${this.props.location}&price=${this.props.price}&name=${this.state.name}`)
        .catch(err => console.error(err))
        console.log(this.state.recipient)
    }

    render(props){
        return(
            <div>
                <div className="ownerinfoarea">
                <Avatar name={this.props.name} size={50} round="50px" className="avatar" />
                    <div className="ownerinfo">
                        <div className="ownername text-capitalize"><p >{this.props.name}</p></div>
                        <div className="ownerno"><p >+9184686xxxxx</p></div>
                        
                    </div>
                </div>
                
                <div className="infocont">
                    <p className="font-weight-bold">Please Share Your Contact</p>
                    <form className="form contactform">
                        <input className="text-uppercase" placeholder="Name" type="text"   onChange={e=>this.setState({name:e.target.value})}  />
                        <input className="mt-4" placeholder="Phone" type="tel" onChange={e=>this.setState({recipient:e.target.value})} />
                        <input className="mt-4" placeholder="Email" type="email" />
                    </form>
                </div>
                <button className="btn btn-primary btn-block mt-4" onClick= {this.firetext} data-toggle="modal" 
                data-target="#submitmessage" >Get Contact Detail</button>
            
            
            </div>
            
        )
    }
}

export default Contactowner;