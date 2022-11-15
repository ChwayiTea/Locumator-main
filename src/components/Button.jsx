import "./Button.scss";
import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
const Button = (props) => {
        //const showAlert = () => {
           // alert("You have signed up");
      //  }
    return (
        <button type= 'submit' className={`button ${props.className || ""}`}  >
            <div className="rectangle-2-5">
        <span className="learn-more">
          {props.learnMore || "Agree & Sign up"}
        </span>
            </div>
        </button>
    );
};
export default Button;
