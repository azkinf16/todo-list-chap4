import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function TodoInput() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    
    const data = {
      id: Math.floor(Math.random() * 1000),
      task: input,
      complete: false,
    };

    axios.post(`http://localhost:3004/datas`, data).then(() => {
      navigate("/")
    })

    setInput("");

  };

  return (
    <div className="mt-5 w-75 mx-auto">
      <h3 className="text-capitalize text-center fw-bolder">TodoInput</h3>
      <div className="card card-body my-3 w-75 mx-auto">
        <form className="todo-form-input">
          <div className="input-group">
            <div className="input-group-prepend">
              <div
                className="input-group-text text-white p-3 rounded-0 rounded-start"
                style={{ background: "#16A3B5" }}
              >
                <i className="fa fa-book" />
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="Input/Edit Todo"
              value={input}
              onChange={onInputChange}
            />
          </div>
          <div className="d-flex justify-content-between">
            <button
              type="submit"
              className="btn btn-block btn-primary mt-3 w-100 text-white"
              onClick={onFormSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
