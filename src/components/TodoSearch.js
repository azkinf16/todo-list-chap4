import React from "react";
import { useNavigate } from "react-router-dom";

export default function TodoSearch() {
  const navigate = useNavigate();

  return (
    <div className="mt-2">
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
    </div>
  );
}
