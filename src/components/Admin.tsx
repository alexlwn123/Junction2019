import React, { useState, useContext, useEffect } from "react";
import BanckQuest from './BankQuest';
import "./Admin.css";
import { DataContext } from "../contexts/dataContext";

const Admin = () => {
  const[variant, setVariant] = useState('')
  const handleClickTab = (type: string) => () => {
    setVariant(type)
  };
  const {
    data, data: { questions }, dataService
  } = useContext(DataContext);

  useEffect(() => {
    dataService.getQuestions()
  },[])
  const questType = () => {
    let arr: any = {
      type: [],
      questions: []
    }
    for(let i = 0; i < questions.length; i++) {
      if(!arr.includes(questions[i].type)) {
        arr.type.push(questions[i].type)
      }
      arr.questions.push([i]);
    }
    return arr
  }
  console.log(questions)
  return (
    <div className="Admin">
      <div className="Admin-side">
          <div className="Admin-tab Admin-tabs"  >Questions Groups</div>
{/*           {questType().type.map((q: any) => 
          <div key={q} className="Admin-tab" onClick={handleClickTab(q)}>{q}</div>)} */}
      </div>
      <div className="Admin-content" >
       {variant && <BanckQuest variant={variant} questType={questType} />}
      </div>
    </div>
  );
};

export default Admin;
