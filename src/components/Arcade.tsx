import React, { useContext } from "react";
import Question from "./Question";
import "./arcade.css";

const Arcade = () => {
  return (
    <div className="Arcade">
      <div className="Arcade-machine">
      <a style={{color: 'white', position: 'absolute', top: '50px', left: '49%'}} href="/" >HOME</a>
        <div className="Arcade-content">
          <Question />
        </div>
      </div>
    </div>
  );
};

export default Arcade;
