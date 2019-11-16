import React from 'react';
import './Button.css';
interface Props {
    text: string;
    handleClick?: () => any;
}
const Button = (props: Props) => <button className="Button" type="submit" onClick={props.handleClick} >{props.text}</button>

export default Button;