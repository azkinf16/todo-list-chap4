import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoItems from "./TodoItems";

export default function TodoList({
  id,
  task,
  complete,
  handleDoneTask,
  editItem,
  deleteItem,
}) {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const datas = await axios.get(`http://localhost:3004/datas`);
      setData(datas.data);
      // console.log(datas);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const showAllTodos = () => {};

  const showDidntClearTodos = () => {
    const newDataDClear = data.filter(
      (item) => item.complete === !item.complete
    );
    setData(newDataDClear);
    // console.log(newDataDClear)
  };

  const showClearTodos = () => {
    const newDataClear = data.filter((item) => item.complete === item.complete);
    setData(newDataClear);
  };

  return (
    <div className="mb-5">
      <h3 className="text-capitalize text-center fw-semibold">TodoList</h3>
      <div className="d-flex w-75 mx-auto mt-4 justify-content-between">
        <button
          type="submit"
          className="btn btn-primary d-inline-block w-50 me-4 text-white"
          onClick={() => showAllTodos()}
        >
          All
        </button>
        <button
          type="submit"
          className="btn btn-primary d-inline-block w-50 text-white"
          onClick={() => showDidntClearTodos()}
        >
          Done
        </button>
        <button
          type="submit"
          className="btn btn-primary d-inline-block w-50 ms-4 text-white"
          onClick={() => showClearTodos()}
        >
          Todo
        </button>
      </div>
      <div className="w-75 mx-auto mt-4">
        <TodoItems key={id} id={id} task={task} complete={complete} handleDoneTask={() => handleDoneTask(id)}/>
      </div>
      <div className="d-flex w-75 mx-auto mt-4 justify-content-between">
        <button
          type="submit"
          className="btn btn-danger d-inline-block w-50 me-3 text-white"
        >
          Delete done tasks
        </button>
        <button
          type="submit"
          className="btn btn-danger d-inline-block w-50 ms-3 text-white"
        >
          Delete all tasks
        </button>
      </div>
    </div>
  );
}
