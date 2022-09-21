import React from "react";
import Data from "../assets/data.json";

export default function TodoItems() {
  return (
    <div className="my-5 py-2">
      {Data.length > 0 &&
        Data.map((item) => {
          return (
            <li className="list-group-item text-capitalize d-flex justify-content-between border ps-3 pt-3 pb-2 my-3">
              <h6>{item.task}</h6>
              <div className="todo-icon">
                <span className="mx-2 text-warning">
                  <i className="fa fa-pen icon" />
                </span>
                <span className="mx-2 pe-2 text-danger">
                  <i className="fa fa-trash icon" />
                </span>
              </div>
            </li>
          );
        })}
    </div>
  );
}
