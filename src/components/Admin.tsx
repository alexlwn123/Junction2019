import React, { useState, useContext, useEffect } from "react";
import BanckQuest from "./BankQuest";
import "./Admin.css";
import { DataContext } from "../contexts/dataContext";

const Admin = () => {
  const [variant, setVariant] = useState("");
  const handleClickTab = (type: string) => () => {
    setVariant(type);
  };
  const {
    data,
    data: { questions }
  } = useContext(DataContext);

  return (
    <div className="Admin">
      <div className="Admin-side">
        <a href="/">HOME</a>
        <div className="Admin-content">
          <div className="Admin-tab Admin-tabs">Questions Groups</div>
          {questions &&
            questions.map((q: any) => (
              <div
                key={q._id}
                className="Admin-tab"
                onClick={handleClickTab(q.type)}
              >
                {q.type}
              </div>
            ))}
        </div>
      </div>
      <div className="Admin-content">
        {variant && <BanckQuest variant={variant} />}
      </div>
    </div>
  );
};

export default Admin;
