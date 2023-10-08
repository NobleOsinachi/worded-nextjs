import * as React from "react";
import { Component, FunctionComponent } from "react";

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <div className="Footer">
      <h3 className="text-center">
        Copyright &copy; {new Date().getFullYear()} - All rights reserved.
        Intellectual property of Noble Osinachi.
      </h3>
    </div>
  );
};

export default Footer;
