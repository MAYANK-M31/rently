import React,{Component} from 'react';
import fire from "./Fire";
import { render } from '@testing-library/react';
import Login from './Login';
import Home from './Home';



class Loginbackend extends Component{

    constructor(props){
        super(props);
        this.state = {
            user:null
        }
    }

    componentDidMount(){
        this.authListner();
    }

    authListner(){
        fire.auth().onauthStateChanged((user)=>{
            if(user){
                this.setstate({user});
            }else{
                this.setstate({user:null})
            }
        });
    }
        render(){
            return(
                <div>
                    {this.state.user ? (<Home/>):(<Login/>)}
                </div>
            )
        }

}

export default Loginbackend;