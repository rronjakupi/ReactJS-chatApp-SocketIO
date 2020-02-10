import React from "react";
import onlineIcon from "../../assets/onlineIcon.png";
import closeIcon from "../../assets/closeIcon.png";
import "./Header.css";

const Header = ({ room }) => (
  <div className="header">
    <div className="leftInnerContainer">
      <img className="onlineIcon" src={onlineIcon} alt="online image" />
      <h2>Room: {room}</h2>
    </div>
    <div className="rightInnerContainer">
      <a href="/">
        <img src={closeIcon} alt="close image" />
      </a>
    </div>
  </div>
);

export default Header;
