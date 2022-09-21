import React from "react";

export default function TodoInput() {
  return (
    <div className="mt-5 w-75 mx-auto">
      <h3 className="text-capitalize text-center fw-bolder">TodoInput</h3>
      <div className="card card-body my-3 w-75 mx-auto">
        <form>
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
            />
          </div>
          <div className="d-flex justify-content-between">
            <button
              type="submit"
              className="btn btn-block btn-primary mt-3 w-100 text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
