import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function TodoItems() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const datas = await axios.get(`http://localhost:3004/datas`);
      if (datas.data) {
        setData(datas.data);
      }
      console.log(datas);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

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

  return (
    <div className="my-5 py-2">
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
                  onClick={() => navigate(`/TodoInput/:${item.id}`)}
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
  );
}
