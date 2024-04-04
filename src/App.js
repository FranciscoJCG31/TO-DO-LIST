import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const addTodo = (todo) => {
    const todoObj = {
      id: Math.random().toString(36).substr(2, 9),
      content: todo,
    };
    setList([...list, todoObj]);
    setInput("");
  };

  const removeTodo = (id) => {
    const newListTodos = list.filter((todo) => todo.id !== id);
    setList(newListTodos);
  };

  return (
    <div className="container mt-3">
      <h3 className="text-center text-info">TO DO LIST</h3>
      <div className="col-md-8 d-flex gap-1">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="form-control mx-auto"
          type="text"
          placeholder="Enter a todo"
        />
        <button className="btn btn-info w-50" onClick={() => addTodo(input)}>
          Añadir
        </button>
      </div>

      <div className="col-md-8">
        {list.map((item) => (
          <div
            key={item.id}
            className="bg-info p-2 mt-2 d-flex gap-2 justify-content-between"
          >
            {item.content}
            <button
              className="btn btn-danger m-2"
              onClick={() => removeTodo(item.id)}
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
