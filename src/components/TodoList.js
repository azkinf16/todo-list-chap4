import React from "react";

export default function TodoList() {
  return (
    <>
      <h3 className="text-capitalize text-center fw-semibold">TodoList</h3>
      <div className="d-flex w-75 mx-auto mt-4 justify-content-between">
        <button
          type="submit"
          className="btn btn-primary d-inline-block w-50 me-4 text-white"
        >
          All
        </button>
        <button
          type="submit"
          className="btn btn-primary d-inline-block w-50 text-white"
        >
          Done
        </button>
        <button
          type="submit"
          className="btn btn-primary d-inline-block w-50 ms-4 text-white"
        >
          Todo
        </button>
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
    </>
  );
}
