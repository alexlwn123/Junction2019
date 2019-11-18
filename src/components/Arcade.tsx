import React, { useContext, ReactNode } from "react";
import Question from "./Question";
import "./arcade.css";

interface Props {
  children: ReactNode;
}
const Arcade = (props: Props) => {
  return (
    <div className="Arcade">
      <div className="Arcade-machine">
      <a style={{color: 'white', position: 'absolute', top: '50px', left: '49%'}} href="/" >HOME</a>
      <a style={{color: 'white', position: 'absolute', top: '50px', left: '26%'}} href="/pacman" >PACMAN</a>
      <a style={{color: 'white', position: 'absolute', top: '50px', left: '68%'}} href="/quizz" >QUIZZ</a>
        <div className="Arcade-content">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Arcade;
