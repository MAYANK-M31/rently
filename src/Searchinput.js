import React from "react";


const Searchinput =(props)=>{
     return(
         <div>
           
           <form className={props.className} onSubmit={props.onSubmit}>
                        <input className="form-control" placeholder="ENTER LOCATION" value={props.value} onChange={props.handlesearch} />
                       
            </form>
                       
            
         </div>
     )
}

export default Searchinput;