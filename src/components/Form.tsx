import React, { useState, FormEvent, useContext } from "react";
import Button from "./Button";
import "./Form.css";
import { DataContext } from "../contexts/dataContext";
import { IQuestion } from "../reducers/dataReducer";


const Form = () => {
  const [state, setState] = useState<IQuestion>({
    type: "",
    question: "",
    options: [],
    answer: ""
  });
  const [option, setOption] = useState<string>("");

  const { dataService } = useContext(DataContext);

  const handleAddOption = (e: FormEvent) => {
    e.preventDefault();
    const { value } = e.target as HTMLInputElement;
    setState({
      ...state,
      options: state.options.concat(option)
    });
  };

  const handleChange = (e: React.FormEvent): void => {
    const { name, value } = e.target as HTMLInputElement;
    setState({
      ...state,
      [name]: value
    });
  };

  const handleOptionChange = (e: React.FormEvent): void => {
    const { name, value } = e.target as HTMLInputElement;
    setOption(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dataService.addQuestion(state)
    console.log(state);
    /*   setState({
    ...state,
    type: '',
    question: '',
    options: [],
    answer: ''
  }) */
  };

  const { question, type, answer, options } = state;
  return (
    <form className="Form" onSubmit={handleSubmit}>
      <label className="Form-label" htmlFor="type">
        Type
      </label>
      <input
        className="Form-input"
        name="type"
        type="text"
        value={type}
        onChange={handleChange}
      />
      <label className="Form-label" htmlFor="question">
        Question
      </label>
      <input
        className="Form-input"
        name="question"
        type="text"
        value={question}
        onChange={handleChange}
      />
      <form onSubmit={handleAddOption}>
        <label className="Form-label" htmlFor="options">
          Options
        </label>
        <input
          className="Form-input"
          name="options"
          type="text"
          value={option}
          onChange={handleOptionChange}
        />
        {options.map((op: string, index: number) => (
          <div>
            {index + 1}- {op}
          </div>
        ))}
        <Button text="Add option" />
      </form>
      <label className="Form-label" htmlFor="answer">
        Answer
      </label>
      <input
        className="Form-input"
        name="answer"
        type="text"
        value={answer}
        onChange={handleChange}
      />
      <Button text="Add Question" />
    </form>
  );
};

export default Form;
