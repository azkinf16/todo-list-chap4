import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function TodoList() {
  const [data, setData] = useState([]);
  const [filData, setfilData] = useState([]);
  const [input, setInput] = useState("")
  const navigate = useNavigate();


  const getData = async () => {
    try {
      const datas = await axios.get(`http://localhost:3004/datas`);
      setData(datas.data);
      setfilData(datas.data);
      // console.log(datas);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const checkTodos = (boolean) => {
    const done = filData.filter((item) => item.complete === boolean);
    setData(done)
  };

  const deleteItem = (id) => {
    axios.delete(`http://localhost:3004/datas/${id}`).then((res) => {
      getData();
    });

    const dataNew = data.filter((item) => item.id !== id);
    setData(dataNew);
  };

  const handleDoneTask = (id) => {
    data.map((item) => {
      if (item.id === id) {
        item.complete = item.complete = !item.complete;
        axios.patch(`http://localhost:3004/datas/${id}`, item).then(() => {
          getData();
        });
      }
    });
  };

  const deleteTodo = (boolean) => {
    if (boolean === true) {
      return data.filter((item) => item.complete === true).map((item) => {
        return axios.delete(`http://localhost:3004/datas/${item.id}`).then((res) => {
          getData();
        })
      })
    } else {
      return data.map((item) => {
        return axios.delete(`http://localhost:3004/datas/${item.id}`).then((res) => {
          getData();
        })
      })
    }
  }

  const searchTodo = async (e) => {
    setInput(e.target.value);
    const search = filData.filter((e) => {
      if (input === "" ) {
        return e;
      } else if (e.task.toLowerCase().includes(input.toLowerCase())) {
        return e
      }
      
    })
    setData(search)
  }

  return (
    <div className="mb-5">
      <h3 className="text-capitalize text-center fw-bolder">TodoSearch</h3>
      <div className="card card-body my-3 w-75 mx-auto">
        <form>
          <div className="input-group w-75 pe-5">
            <div className="input-group-prepend">
              <div
                className="input-group-text text-white p-3 rounded-0 rounded-start"
                style={{ background: "#16A3B5" }}
              >
                <i className="fa fa-search" />
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="Search Todo"
              onChange={(e) => searchTodo(e)}
            />
          </div>
          <div className="d-flex justify-content-between">
            <button
              type="submit"
              className="btn btn-block btn-primary mt-3 w-75 text-white me-5"
            >
              Search
            </button>

            <button
              type="submit"
              className="btn btn-block btn-primary mt-3 w-25 text-white ms-3"
              onClick={() => navigate("/TodoInput")}
            >
              Add New Task
            </button>
          </div>
        </form>
      </div>
      <h3 className="text-capitalize text-center fw-semibold">TodoList</h3>
      <div className="d-flex w-75 mx-auto mt-4 justify-content-between">
        <button
          type="submit"
          className="btn btn-primary d-inline-block w-50 me-4 text-white"
          onClick={() => setData(filData)}
        >
          All
        </button>
        <button
          type="submit"
          className="btn btn-primary d-inline-block w-50 text-white"
          onClick={() => checkTodos(true)}
        >
          Done
        </button>
        <button
          type="submit"
          className="btn btn-primary d-inline-block w-50 ms-4 text-white"
          onClick={() => checkTodos(false)}
        >
          Todo
        </button>
      </div>
      <div className="w-75 mx-auto mt-4">
      {data.length > 0 &&
        data.map((item) => {
          return (
            <li
              className="list-group-item text-capitalize d-flex justify-content-between border ps-3 pt-3 pb-2 my-3"
              key={item.id}
            >
              <h6 className={`${item.complete ? "complete" : ""}`}>
                {item.task}
              </h6>
              <div className="todo-icon">
                <span
                  className={`mx-2 ${
                    item.complete ? "text-success" : "text-secondary"
                  }`}
                  onClick={() => handleDoneTask(item.id)}
                >
                  <i
                    className={`${
                      item.complete
                        ? "far fa-check-square icon"
                        : "far fa-square icon"
                    }`}
                  />
                </span>
                <span
                  className={`mx-2 text-warning ${
                    item.complete ? "disabled" : ""
                  }`}
                  onClick={() => navigate(`/TodoInput/${item.id}`)}
                >
                  <i className="fa fa-pen icon" />
                </span>
                <span
                  className="mx-2 pe-2 text-danger"
                  onClick={() => deleteItem(item.id)}
                >
                  <i className="fa fa-trash icon" />
                </span>
              </div>
            </li>
          );
        })}
      </div>
      <div className="d-flex w-75 mx-auto mt-4 justify-content-between">
        <button
          type="submit"
          className="btn btn-danger d-inline-block w-50 me-3 text-white"
          onClick={() => deleteTodo(true)}
        >
          Delete done tasks
        </button>
        <button
          type="submit"
          className="btn btn-danger d-inline-block w-50 ms-3 text-white"
          onClick={() => deleteTodo()}
        >
          Delete all tasks
        </button>
      </div>
    </div>
  );
}
