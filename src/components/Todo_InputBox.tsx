/** @format */

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Input.css";
interface TypeInput{
  InputValue: string,
  setInputValue:Function
}
const Input: React.FC=()=>{
//useState for handling the input
  const [InputValue, setInputValue] = useState<string>("");
  
  const InputValueHandler:Function=(e:any)=>{
    setInputValue(e.target.value);
  }
  return (
    <div className="input-container">
      <input
      type="text"
      placeholder="Enter Todos" 
      className="input"
      value={InputValue}
      onChange={(e:any)=>InputValueHandler}
      />
      <div className="SearchIconContainer">
        <button
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            fontSize: "20px",
          }}
        >
          <span>Add</span>
          <span>
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Input;
