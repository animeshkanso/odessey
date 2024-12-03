"use client"

import { useState } from "react";

export default function TodoPage() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, { text: input, completed: false }]);
      setInput("");
    }
  };

  const toggleTodo = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <div className="flex items-center gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new todo"
          className="border px-4 py-2 rounded w-full"
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {todos.map((todo, index) => (
          <li
            key={index}
            className={`flex items-center justify-between p-2 rounded ${
              todo.completed ? "bg-green-100 line-through" : "bg-gray-100"
            }`}
          >
            <span>{todo.text}</span>
            <div className="flex gap-2">
              <button
                onClick={() => toggleTodo(index)}
                className="text-green-600 hover:underline"
              >
                {todo.completed ? "Undo" : "Complete"}
              </button>
              <button
                onClick={() => deleteTodo(index)}
                className="text-red-600 hover:underline"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
