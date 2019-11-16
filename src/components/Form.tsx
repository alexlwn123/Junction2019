import React from "react";
import Button from './Button';
import './Form.css';

interface Props {
  label: string;
}
const Form = (props: Props) => (
  <form className="Form">
    <label className="Form-label" >{props.label}</label>
    <input className="Form-input" type="text" />
    <Button text="Add" />
  </form>
);

export default Form;
