import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <p className="a">회원소개</p>
        <p className="a">이용약관</p>
        <p className="a">개인정보처리방침</p>
        <p className="a">고객센터</p>
      </div>
      <main className="main-footer">
        네편 현답 © 2023. All rights reserved.
      </main>
    </div>
  );
};

export default Footer;
