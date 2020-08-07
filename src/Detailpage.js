import React, { Component } from "react";
import "./Detailpage.css";
import ControlledCarousel from "./Crousaldetailpage";
import FullWidthTabs from "./Sidebar";
import FontAwesome from 'react-fontawesome';
import Contactownermodal from "./Contactownermodal";







const Detailpage = (props) => {



    return (
        <div className="maindiv" >
            {/* <Contactownermodal/> */}
            <div className="maincontainer col-lg-6 col-md-12 col-12 mb-5 ">
                <div className="col-lg-12 carouseldiv  ">
                    <ControlledCarousel image={props.location.passdata.item.images} />
                </div>

                <div className="sidedetail">
                    <FullWidthTabs ownername={props.location.passdata.item.ownername}
                        locality={props.location.passdata.item.locality}
                        price={props.location.passdata.item.price} />
                </div>
            </div>

            <div className="detailarea col-lg-6 col-12 col-md-12">
                <div className="pricedetailheader mb-4 ">
                    <p className="text-muted mt-4">Rent from<h5 className="text-dark"> &#8377;{props.location.passdata.item.price}<span className="text-muted small">/month</span></h5></p>
                    <hr className="hrruler ml-5" />
                    <p className="text-muted ml-5 mt-4 ">Security Deposit<h5 className="text-dark">Just One Month Rent</h5></p>
                </div>

                <hr />

                <div className="servicesarea">
                    <div className="banner">
                        <h6>Shipment Service Available</h6>
                    </div>
                </div>

                <div><h6 className="text-muted mt-3">DDA Flat,Flat no 30</h6></div>

                <div><p className="mt-3 propertydetail">{props.location.passdata.item.type} at &#8377;{props.location.passdata.item.price} in {props.location.passdata.item.locality}, Delhi</p></div>

                <div><h6 className="text-muted  ">Only For Family</h6></div>

                <div><h3 className="text-dark font-weight-normal mt-4">House Features</h3></div>

                <div className="featuresicon mt-4">
                    <div>
                        <div>
                            <i className="fa fa-bed fa-3x ml-2" aria-hidden="true" ></i>
                            <p className="text-muted">2 Bedroom</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <i class="fa fa-bath  fa-3x ml-3" aria-hidden="true"></i>
                            <p className="text-muted">1 Bathroom</p>
                        </div>
                    </div>
                </div>

                <div className="featuresicon mt-4">
                    <div>
                        <div className=" ">
                            <i class="fa fa-coffee fa-3x ml-3 mx-3" aria-hidden="true"></i>
                            <p className="text-muted">Food Service</p>
                        </div>
                    </div>

                    <div>
                        <div className="">
                            <i class="fa fa-wifi fa-3x ml-3 mx-3 mt-1" aria-hidden="true"></i>
                            <p className="text-muted ml-3">Free wifi</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="amentiesarea col-lg-6 col-md-12 col-12 mt-3">
                <div><h3 className="text-dark font-weight-normal">House Amenties</h3></div>
                <div className="amentiesdetailheader mb-4 ">
                    <div>
                       <i class="fa fa-home fa-3x ml-5 mx-5" aria-hidden="true"></i>
                       <p className="text-muted">8 House Amenties</p>
                    </div>
                    <div>
                        <i class="fa fa-building-o fa-3x ml-5" aria-hidden="true"></i>
                        <p className="text-muted">0 Society Amenties </p>
                   </div>
                </div>
    
                 <hr/>     
    


                <div className="amentiesbar mt-4">
                      <h5>Living Room</h5>       
                </div>

                <div className="amentiesicon mt-4 ">
                    <div className="amenties  ">
                    
                          <img src="https://nestaway-houses.akamaized.net/uploads/webp/thumb_large_95466e16-d14c-4c64-9098-f2cda0d31d5d.webp" />
                      
                    </div>

                    
                        <div className="amentiesside  ">
                           <ul>
                               <li><p className="text-muted "> <img  src="https://nestaway-assets.akamaized.net/refonte/precompiled-assets/src/assets/images/hdp/amenities/sofa-285d698ea1d06c30882057400cc6c3cc.svg"/> Sofa</p></li>
                               <li> <p className="text-muted "><img  src="https://nestaway-assets.akamaized.net/refonte/precompiled-assets/src/assets/images/hdp/amenities/wifi-f27a6eda8635254eb4d82422f36261bf.svg"/> wifi</p></li>
                               <li> <p className="text-muted "><img  src="https://nestaway-assets.akamaized.net/refonte/precompiled-assets/src/assets/images/hdp/amenities/television-1a5920ab64ed5b92abe2b0459aacaf24.svg"/>TV</p></li>
                               <li> <p className="text-muted "><img  src="https://nestaway-assets.akamaized.net/refonte/precompiled-assets/src/assets/images/hdp/amenities/washing_machine-a7d1e5158d1e60aea1d49db646a3130c.svg"/> Wash</p></li>
                               <li> <p className="text-muted "><img  src="https://nestaway-assets.akamaized.net/refonte/precompiled-assets/src/assets/images/hdp/amenities/dish_tv-126dc7f082f4f43e06590b3b2dff898d.svg"/> Dish</p></li>
                           </ul>
                        </div>
                  
                </div>

                <hr/>

                <div className="amentiesbar mt-4">
                      <h5>Bedroom</h5>       
                </div>

                <div className="amentiesicon mt-4">
                    <div className="amenties">
                     
                          <img src="https://nestaway-houses.akamaized.net/uploads/webp/thumb_large_383687d4-cc33-415e-b64f-067ce8d7a994.webp" />
                     
                    </div>

                   
                        <div className="amentiesside">
                           <ul>
                               <li><p className="text-muted "> <img  src="https://nestaway-assets.akamaized.net/refonte/precompiled-assets/src/assets/images/hdp/amenities/sofa-285d698ea1d06c30882057400cc6c3cc.svg"/> Sofa</p></li>
                               <li> <p className="text-muted "><img  src="https://nestaway-assets.akamaized.net/refonte/precompiled-assets/src/assets/images/hdp/amenities/wifi-f27a6eda8635254eb4d82422f36261bf.svg"/> wifi</p></li>
                               <li> <p className="text-muted "><img  src="https://nestaway-assets.akamaized.net/refonte/precompiled-assets/src/assets/images/hdp/amenities/television-1a5920ab64ed5b92abe2b0459aacaf24.svg"/> TV</p></li>
                               <li> <p className="text-muted "><img  src="https://nestaway-assets.akamaized.net/refonte/precompiled-assets/src/assets/images/hdp/amenities/ac-0d05c292ed64e00adb2b9ec980520662.svg"/> AC</p></li>
                               <li> <p className="text-muted "><img  src="https://nestaway-assets.akamaized.net/refonte/precompiled-assets/src/assets/images/hdp/amenities/dish_tv-126dc7f082f4f43e06590b3b2dff898d.svg"/> TV</p></li>
                           </ul>
                        </div>
                   
                </div>

                <hr/>

                <div className="amentiesbar mt-4">
                      <h5>Kitchen</h5>       
                </div>

                <div className="amentiesicon mt-4">

                    <div className="amenties">
                      
                          <img src="https://nestaway-houses.akamaized.net/uploads/webp/thumb_large_bd653359-5a65-4a1e-bf20-8d47f61cfeb7.webp" />
                      
                    </div>

                    
                        <div className="amentiesside">
                           <ul>
                               <li><p className="text-muted "><img  src="https://nestaway-assets.akamaized.net/refonte/precompiled-assets/src/assets/images/hdp/amenities/gas_stove-6ce27897813018b3f7b1d3da4b7b3c68.svg"/> Gas</p></li>
                               <li><p className="text-muted "><img  src="https://nestaway-assets.akamaized.net/refonte/precompiled-assets/src/assets/images/hdp/amenities/fridge-74a94e32bef81a1d7d2ffd5aedc30ccd.svg"/> Fridge</p></li>
                               <li><p className="text-muted "><img  src="https://nestaway-assets.akamaized.net/refonte/precompiled-assets/src/assets/images/hdp/amenities/water_filter-6fdb57424da87246836a7ad15d1ccde2.svg"/> RO</p></li>
                           </ul>
                        </div>
                   
                </div>
            </div>

            <div class="termsandconditionarea col-lg-6 col-md-12 col-12 ">
                <div className="">
                    <h4 className="font-weight-normal">Terms Of Stay</h4>
                </div>

                <div className="termsandconditionlist">
                    <ol>
                        <li> <p className="text-muted">No Pets are allowed inside the house.</p></li>
                        <li> <p className="text-muted"> Fine will be charged for late Rent.</p></li>
                        <li> <p className="text-muted"> Rent would be increased per terms of agreement post 11 months of stay. Execution charges for the revised agreement would be applicable</p></li>
                    </ol>
                </div>
            </div>



        </div>
    )

}

export default Detailpage;