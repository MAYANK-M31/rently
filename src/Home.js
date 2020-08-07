import React, { Component } from 'react';
import house from './house.jpg';
import './Home.css';
import { Form } from 'react-bootstrap';
import {Link} from 'react-router-dom';



class Home extends Component{
  constructor(props){
    super(props);
    this.state={
      search:""
    }
  }
  render(){
    return(
      <div className="Homestyle">
        <Form.Group className="formgrp" controlId="location">
          <div className="searchbardiv" >
          <Form.Control id="searchbar" type="text" placeholder="Search for Landmark or Location" value={this.state.search} onChange={(e)=>this.setState({search:e.target.value})}  />
          </div>
           
            <div className="buttondiv" >
            <Link to={{pathname:"/Searchpage",passdata:this.state.search}}><button className='btn btn-warning btn-block mt-2 buttonwidth'>SEARCH </button> </Link>
            </div>
            
        </Form.Group>
        
      </div>
    )
  }
}

  export default Home;