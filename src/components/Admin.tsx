import React, { useState } from "react";
import BanckQuest from './BankQuest';
import "./Admin.css";

const Admin = () => {
  const[showQuestion, setShowQuestion] = useState(false);
  const handleClickTab = () => setShowQuestion(!showQuestion);

  return (
    <div className="Admin">
      <div className="Admin-side">
          <div className="Admin-tab" onClick={handleClickTab} >Questions</div>
      </div>
      <div className="Admin-content" >
       {showQuestion && <BanckQuest />}
      </div>
    </div>
  );
};

export default Admin;
