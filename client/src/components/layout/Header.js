import React from "react";
import { Link } from "react-router-dom";
import AuthOptions from "../auth/AuthOptions";
import logo from "../images/MMP-logo.jpg"

console.log(logo);
export default function Header() {
  return (
    <header id="header">
      <img src={logo} alt="logo" />
      <Link to="/">
        <h1 className="title">Member Manage Portal</h1>
      </Link>
      <AuthOptions />
    </header>
    
  );
}
