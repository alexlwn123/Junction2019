import React, { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";
import Form from "./Form";
import "./BankQuest.css";

const BankQuest = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => setIsOpen(!isOpen);
  return (
    <div className="BankQuest" >
        <div className="BankQuest-button" >
        <Button text="Add New" handleClick={handleClick} />
        </div>
        <div className="BankQuest-list" >
            <table>
                <tr>
                    <th>Question</th>
                    <th>Yes</th>
                    <th>No</th>
                </tr>
                <tr>
                    <td>What's your Name?</td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </div>
    
      <Modal isOpen={isOpen} handleClick={handleClick}>
        <Form label="Question" />
      </Modal>
    </div>
  );
};

export default BankQuest;
