import React from "react";
import "./Contactownermodal.css";

const Contactownermodal=()=>{
    return(
        <div class="modal  fade" id="submitmessage" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" data-backdrop="false">
            <div class="modal-dialog modal-dialog-centered  " role="document">
              <div class="modal-content">
                
                 <div className="pr-2 modalheight  ">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close" >
                    <span aria-hidden="true" >&times;</span>
                  </button>
                  <div className="mt-4 pl-4">
                      <h2 className="text-success text-center">THANK YOU!!</h2>
                      <p className="font-weight-bold mt-5 ml-3 ">We have sent the details of the owner to your mobile number.Please check your phone to contact the owner.If you have not recived the message within 30sec.TRY AGAIN</p>
                  </div>
                </div>
                <div class="modal-body ml-auto">
                <button type="button" class="btn btn-primary" data-dismiss="modal">OK</button>
                </div>
              </div>
            </div>
       </div>
    )
}

export default Contactownermodal;