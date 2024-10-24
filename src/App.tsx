import React from "react";
import { Header } from "./components/Header";
import { ListTodo } from "./components/ListTodo";
import { Todo, TodoStatus } from "./types/common";
import { useTodos } from "./hooks/useTodos";

const initialTodos: Todo[] = [
  {
    id: "1",
    title: "Тестовое задание",
    status: TodoStatus.ACTIVE,
  },
  {
    id: "2",
    title: "Прекрасный код",
    status: TodoStatus.COMPLETED,
  },
  {
    id: "3",
    title: "Покрите тестами",
    status: TodoStatus.COMPLETED,
  },
];

function App() {
  const { todos, handleUpdateStatus, handleAddTodo, handleDelete } =
    useTodos(initialTodos);

  return (
    <div className="App">
      <Header />

      <ListTodo
        onAdd={handleAddTodo}
        onChangeStatus={handleUpdateStatus}
        onDelete={handleDelete}
        todos={todos}
      />
    </div>
  );
}

export default App;
