import React, { useState, useContext } from "react";
import Button from "./Button";
import Modal from "./Modal";
import Form from "./Form";
import "./BankQuest.css";
import { DataContext } from "../contexts/dataContext";

interface Props {
  variant: string;
  questType: any
}
const BankQuest = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);
  const {
    data: { questions }
  } = useContext(DataContext);
  if (!questions) {
    return <div></div>;
  }
   const malwareQuests = props.questType.type.filter(
    (q: any) => q.type === props.variant
  )[0];

  console.log(props.questType);
  return (
    <div className="BankQuest">
      <div className="BankQuest-button">
        <Button text="Add New" handleClick={handleClick} />
      </div>
      <div className="BankQuest-list">
        <table>
          <thead>
            <tr>
              <th>Question</th>
              <th>Answer</th>
            </tr>
          </thead>
          <tbody>
              {malwareQuests && malwareQuests.questions.map((q: any) => (
              <tr key={q.id}>
                <td>{q.question}</td>
                <td>{q.answer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal isOpen={isOpen} handleClick={handleClick}>
        <Form />
      </Modal>
    </div>
  );
};

export default BankQuest;
