import React from "react";
import "./Header.css";
import logo from "./Images/Be_U_Logo.webp";
import { BsWhatsapp, BsApple } from "react-icons/bs";
import { GrAndroid } from "react-icons/gr";
import { MdOutlineStorage } from "react-icons/md";

export default function Header() {
  return (
    <header>
           <div className="header-part">
<div className="lines">
    <MdOutlineStorage color="red" />
</div>
        <img src={logo} alt="logo" />
      </div>
      <div className="header-part">
        <span>
          <BsWhatsapp color="green" /> Whatsapp Us
          &nbsp;
          &nbsp;
        </span>
        <div className="header-box">
          Download App&nbsp;
          <GrAndroid />
          &nbsp;
          <BsApple />
          &nbsp;
        </div>
      </div>
    </header>
  );
}
