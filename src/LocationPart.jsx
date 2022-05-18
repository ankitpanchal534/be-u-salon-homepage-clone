import React from "react";
import "./LocationPart.css";
import locationimg from './Images/location-box.jpg'


export default function LocationPart() {
  return (
    <div>
      <br />
      <div className="part-2-text">
        <span className="part-2-h1">Salon Chain</span>
        <span className="part-2-h4">
          500+ tech enabled salons, serving you quality services across 100+
          cities
        </span>
      </div>
      <br />

      <div className="location-part">
        <div className="location-part-1">
          <span>Discover the best salons near you</span><br />
          <div className="location-input-box">
            <input placeholder="Search" className="location-input-box-search" />
             <button >SEARCH</button>
          </div>
          <div className="empty">
              </div>

          <div className="image-area">
           
              <img src={locationimg} className="location-image"  alt="image" />
              <img src={locationimg}  className="location-image" alt="image" />
              <img src={locationimg} className="location-image"  alt="image" />
              <img src={locationimg} className="location-image"  alt="image" />
              <img src={locationimg}  className="location-image" alt="image" />
              <img src={locationimg}  className="location-image" alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
}
