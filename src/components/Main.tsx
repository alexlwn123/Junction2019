import React, { useState } from 'react';
import Button from "./Button";
import Modal from "./Modal";
import './Main.css';

const Main = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => setIsOpen(!isOpen);
    return (
      <header className="Main-header">
        <div className="Main-title">Title</div>
        <Button text="Popup Modal" handleClick={handleClick} />
        <Modal isOpen={isOpen} handleClick={handleClick}>
          <p>Some text in the Modal..</p>
        </Modal>
        Learn Game
      </header>
    );
  };

  export default Main;