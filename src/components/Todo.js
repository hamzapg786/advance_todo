import { useState } from "react";

const Todo = () => {
  const [input, setinput] = useState();

  const inputHandler = (event) => {
    setinput(event.target.value);
  };

  const todoHandler = () => {
    console.log(setinput);
  };

  return (
    <div className="container">
      <div className="username__todo">
        <label>Username</label>
        <input type="text" value={input} onChange={inputHandler} />
      </div>
      <button type="submit" onClick={todoHandler}>
        Add todo
      </button>
      <div class="username__todo">
        <label>Age</label>
        <input type="text" />
      </div>
    </div>
  );
};

export default Todo;
