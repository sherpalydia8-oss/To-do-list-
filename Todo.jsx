
import { useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([
    "Task 1",
    "Task 2",
    "Task 3"
  ]);

  const [task, setTask] = useState("");

  const addTodo = () => {
    if (task.trim() === "") return;

    setTodos([...todos, task]);
    setTask("");
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const deleteAll = () => {
    setTodos([]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg">

        <h1 className="text-3xl font-bold text-center mb-6">
          My To-Do List
        </h1>

        <div className="flex gap-2 mb-5">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a task..."
            className="border p-2 rounded-lg flex-1 min-w-0"
          />

          <button
            onClick={addTodo}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          >
            Add
          </button>
        </div>

        {todos.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-gray-100 p-3 mb-3 rounded-lg"
          >
            <span>{item}</span>

            <button
              onClick={() => deleteTodo(index)}
              className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ))}

        <button
          onClick={deleteAll}
          className="bg-red-700 text-white w-full p-2 mt-3 rounded-lg hover:bg-red-800"
        >
          Delete All
        </button>

      </div>
    </div>
  );
}

export default Todo;
