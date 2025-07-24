import React from "react";
import { Link } from "react-router-dom";
import yoursideLogo from "../../assets/yourside-signup-logo.svg";
import "./Headers.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <img src={yoursideLogo} alt="YourSide Logo" />
        </Link>
        <nav className="header-menu">
          <Link to="/" className="menu-item">
            홈
          </Link>
          <Link to="/notice" className="menu-item">
            공지사항
          </Link>
          <Link to="/feature1" className="menu-item">
            내 계약서 검토
          </Link>
          <Link to="/feature2" className="menu-item">
            내 근로 정리
          </Link>
          <Link to="/postcreate" className="menu-item">
            네편 현답
          </Link>
          <Link to="/login" className="login-button">
            로그인
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
