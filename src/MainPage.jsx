import React from "react";
import "./MainPage.css";
import {IoIosArrowDown} from 'react-icons/io'
import SalonChain from './Images/ic_salon_chain.png'
import salonhome from './Images/ic_salonathome.png'
import productshop from './Images/ic_productshop.png'


export default function MainPage() {
  return (
    <main>
      <div className="empty"></div>
      <div className="headings">
        <span className="big-text">
          One <b>Platform</b>
        </span>
        <span className="big-text-2">For all your salon needs</span>
      </div>
      <div className="products-div">
        <div className="product-part box-1">
        
            <span className="big-content-text">Salon Chain</span>
            <span className="big-content-span">500+ Salons | 100+ Cities</span>
            <span><IoIosArrowDown className="down-arrow"/></span>
          <div className="product-part-image first">
            <img src={SalonChain} alt="SalonChain Image" className="products-images products-images-first"/>
          </div>
        </div>
        <div className="product-part box-2">
        <span className="big-content-text">Salon at Home</span>
            <span className="big-content-span">1,000+ Partners</span>
            <span><IoIosArrowDown  className="down-arrow" /></span>
            <div className="product-part-image">
            <img src={salonhome} alt="SalonChain Image" className="products-images"/>
          </div>
        </div>
        <div className="product-part box-3">
        <span className="big-content-text">Products Shop</span>
            <span className="big-content-span">1000+ SKU's</span>
            <span><IoIosArrowDown  className="down-arrow"/></span>
            <div className="product-part-image">
            <img src={productshop} alt="SalonChain Image" className="products-images"/>
          </div>
        </div>
       
      </div>
     
    </main>
  );
}
