import React from "react";
import {useState} from 'react';
import validator from 'validator';


const Form = () => {

    const [name, setName] = useState("");
    const [email, setEmail ] = useState("");
    const [message, setMessage] = useState ('');
    const [errorMessage, setErrorMessage] = useState('');


    const onChangeName = (event)=>{
      setName(event.target.value)
    }

    const onChangeEmail = (event)=>{
      setEmail(event.target.value)
    }

    const isValidName = name.length >= 5;
    const isValidEmail = validator.isEmail(email);

    function validation(e) {
      e.preventDefault();
      if (isValidName && isValidEmail) {
        setMessage(`Thanks ${name}, we will contact you as soon as possible through your email`);
        setTimeout(() => {
          setMessage('');
        }, 5000); 
      } else {
        setErrorMessage("Please verify your information");
        setTimeout(() => {
          setErrorMessage('');
        }, 3000); 
      }
    }

    const messageStyles = {
      color: "green",
      fontWeight: "bold",
    };
    
    const errorStyles = {
      color: "red",
      fontWeight: "bold",
    };

    return (
      <div>
        <form onSubmit={validation} >
          <label className="label">Name:</label>
          <input
            type="text"
            placeholder="Insert your name"
            value={name}
            onChange={onChangeName}
            className="input_form"
          />

          <label className="label">Email:</label>
          <input
            type="email"
            placeholder="Insert your email"
            value={email}
            onChange={onChangeEmail}
            className="input_form"
          />
  
          <button type="submit" className="">Send form</button>
  
          {message && <p style={messageStyles}>{message}</p> }
          {errorMessage && <p style={errorStyles}>{errorMessage}</p>}
        </form>
      </div>
    );
  };
  
  export default Form;

