import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./navbar";
import { Button } from "antd";
import '../assets/mobile.css'

export const Header = () => {
  return (
    <header
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <div>
        <img src="/logo.png" alt="logo" width="150px" srcset="" />
      </div>


      <nav className="max-770" style={{ display: "inline", gap: "4px"}}>
        <Navbar />
      </nav>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link to={"/auth/register"}>
          <Button type="default">Enroll</Button>
        </Link>

        <Link to={"/auth/login"}>
          <Button type="primary">Log In</Button>
        </Link>
      </div>
    </header>
  );
};
