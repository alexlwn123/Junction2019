import React, { ReactNode } from "react";
import classNames from "classnames";
import './Modal.css';

interface Props {
  children: ReactNode;
  isOpen: boolean;
  handleClick: () => any;
}
const Modal = (props: Props) => {
  return (
    <div
      className={classNames({
        Modal: true,
        "Modal-show": props.isOpen
      })}
    >
      <div className="Modal-content">
        <span className="Modal-close" onClick={props.handleClick}>
          &times;
        </span>
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
