import React, { useState } from 'react';
import Button from "./Button";
import Modal from "./Modal";
import './Main.css';
import Tetris from 'react-tetris-overlay';
import { Redirect, Route } from 'react-router';
import { Link } from 'react-router-dom';

interface Props {
  handleClick?: () => any;
}
const GameButton = (props: Props) => {
  return(
  <a href="/arcade" style={{textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center'}} className="Main-game-button" onClick={props.handleClick} >PLAY</a>
)}
const Main = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => setIsOpen(!isOpen);

    return (
      <div className="Main" >
        <div className="Main-row" >
          <div className="Main-top-left" ><a href="/dashboard" >DASHBOARD</a></div>
          <div className="Main-top-right"></div>
          <div className="Main-bottom-left" ></div>
          <div className="Main-bottom-right"></div>
          <div className="Main-logo"></div>
          <div className="Main-game-one">
            <div className="Main-game-one-label"></div>
          <GameButton />
          </div>
          <div className="Main-game-two">
            <div className="Main-game-two-label"></div>
          <GameButton />
          </div>
          <div className="Main-game-three">
            <div className="Main-game-three-label"></div>
          <GameButton />
          </div>
          <div className="Main-game-four">
            <div className="Main-game-four-label"></div>
          <GameButton/>
          </div>
          <div className="Main-game-three"></div>
          <div className="Main-game-four"></div>
        </div>
        <div className="" ></div>
        <div className="" ></div>
      </div>
   /*    <header className="Main-header">
        <div className="Main-title">Title</div>
        <Button text="Popup Modal" handleClick={handleClick} />
        <Modal isOpen={isOpen} handleClick={handleClick}>
          <p>Some text in the Modal..</p>
          <Tetris />
        </Modal>
        Learn Game
      </header> */
    );
  };

  export default Main;