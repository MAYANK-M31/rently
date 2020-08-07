import React from 'react';
import "./Searchnav.css";
import DiscreteSlider from "./Slider";

const Searchnav = () => {
  return (
    <div className="utilitynav">
      <div class=" dropdown show utility">
        <a class="  btn btn-outline-primary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" >
          Sort
        </a>

        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <a class="dropdown-item" href="#">Price (Asc)</a>
          <a class="dropdown-item" href="#">Price (Dsc)</a>
        </div>
      </div>
      <div class=" dropdown show utility2">
        <a class="  btn btn-outline-primary dropdown-toggle " href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" >
          Price Range
        </a>

        <div class="dropdown-menu sliderbox" aria-labelledby="dropdownMenuLink">
          <DiscreteSlider />
        </div>

      </div>

      <div class=" dropdown show utility">
        <a class="  btn btn-outline-primary  dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" >
          Type
        </a>

        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <a class="dropdown-item" href="#">Apartment)</a>
          <a class="dropdown-item" href="#">Flat</a>
          <a class="dropdown-item" href="#">Floor</a>
          <a class="dropdown-item" href="#">Independent House</a>
          <a class="dropdown-item" href="#">Bunglow</a>
          <a class="dropdown-item" href="#">Office space</a>
        </div>
      </div>

      <div class=" dropdown show utility2">

        <a class="  btn btn-outline-primary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" >
          1 BHK
        </a>

        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <a class="dropdown-item" href="#">1 BHK</a>
          <a class="dropdown-item" href="#">2 BHK</a>
          <a class="dropdown-item" href="#">3 BHK</a>
          <a class="dropdown-item" href="#">3+ BHK</a>
        </div>
        
      </div>

    </div>
  )
}

export default Searchnav;


