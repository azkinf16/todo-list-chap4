import React from "react";

import TodoList from "./components/TodoList";

import "./App.css"

function App() {
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto cold-md-8 mt-5">
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
