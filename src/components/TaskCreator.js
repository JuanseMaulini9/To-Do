import { useState } from "react";

export const TaskCreator = ({ createNewTask }) => {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask(newTask);
    setNewTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="my-2 row">
      <div className="col-9">
      <input
        type="text"
        placeholder="Enter a new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className='form-control'
      />
      </div>
      <div className="col-3">
      <button className="btn btn-primary btn-sm">Save Task</button>
      </div>
    </form>
  );
};
