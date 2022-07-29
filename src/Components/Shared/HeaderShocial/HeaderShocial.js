import React from "react";
import { BsLinkedin } from "react-icons/bs";
// import { BsLBsGithubinkedin } from "react-icons/bsl";
import { BsFacebook } from "react-icons/bs";

const HeaderShocial = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/mahmudul-hasan-307500194/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://www.linkedin.com/in/mahmudul-hasan-307500194/"
        target="_blank"
      >
        <BsFacebook />{" "}
      </a>
      <a
        href="https://www.linkedin.com/in/mahmudul-hasan-307500194/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
    </div>
  );
};

export default HeaderShocial;
