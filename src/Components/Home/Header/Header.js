import React from "react";
import HeaderShocial from "../../Shared/HeaderShocial/HeaderShocial";
import ME from "../../../assets/me.png";

import CTA from "../CTA/CTA";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Mahmudul Hasan</h1>
        <h5 className="text-light">Full stack Developer</h5>
        <CTA />
        <HeaderShocial />
        <div className="">
          <img
            // style={{ width: "50%", margin: "0 auto" }}
            src={ME}
            alt=""
            className="me"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
