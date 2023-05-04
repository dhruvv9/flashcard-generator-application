/*in this file we are making the header of our website header contains the image of Almabetter logo which we are using
in our website because we are able to make this web with the help of Almabetter */
import React from "react";
import logo from "../assets/BrandLogo.png";

const Header = () => {
  return (
    <div className=" shadow-lg shadow-zinc-400 bg-white ">
      <img className=" pt-3 pb-2 ml-5 sm:w-auto " src={logo} alt="logo" />
    </div>
  );
};

export default Header;
