import React from 'react';
import Menustyle from './Menu.css';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';



const Menu = () => {
    return (
        // <nav className="sticky-top"> 
        //     <div className="Menustyle" >
        //         <div className="logo"> <h1 className="text-dark">RENTLY</h1> </div>
        //         <div className='listpropertytag'><Link to='/Listproperty'><h5 className=' ml-0 p-1 mt-2  badgeborder text-dark'>List your property <span className="badge badge-danger ">FREE</span></h5></Link></div>
        //             <div className='buttondiv'>
        //                 <ul className='mt-3'>
        //                 <Link to="/"><button><li>HOME</li></button></Link>
        //                 <Link to="/About"><button><li>ABOUT</li></button></Link>
        //                 <Link to="/Contact"><button><li>CONTACT US</li></button></Link>     
        //                 </ul>
        //             </div>     
        //                 <Link to="/Login">   
        //                     <div className="Avatarlogo">
        //                         <Avatar alt="R" src="https://image.shutterstock.com/image-vector/favorite-user-icon-600w-796717591.jpg"/>
        //                     </div>
        //                 </Link> 

        //     </div>
        // </nav>
        <nav className="navbar navbar-expand-lg navbar-light bg-light navdiv ">
            <Link className="navbar-brand font-weight-bolder" ><h1 className="text-dark font-weight-bolder" >Rently</h1></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span id="icon" className="navbar-toggler-icon "></span>
            </button>

            <div className="collapse navbar-collapse   " id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto ">
                    <li className="nav-item active mt-2">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item mt-2">
                        <Link className="nav-link" to="/About">About</Link>
                    </li>
                    <li className="nav-item mt-2 ">
                        <Link className="nav-link" to="/Contact">Contact</Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link to="/Login" className="nav-link" >
                            <Avatar alt="R" src="https://image.shutterstock.com/image-vector/favorite-user-icon-600w-796717591.jpg" />
                        </Link>
                    </li>
                </ul>

            </div>
        </nav>

    )
}

export default Menu;