import { useState } from "react";
import { Todo, TodoStatus } from "../types/common";
import { generateId } from "../utils/generateId";

export const useTodos = (initData: Todo[]) => {
  const [todos, setTodos] = useState<Todo[]>(initData);

  const handleAddTodo = (title: string) => {
    const newTodo: Todo = {
      title,
      status: TodoStatus.ACTIVE,
      id: generateId(),
    };
    setTodos([...todos, newTodo]);
  };

  const handleUpdateStatus = (id: string, status: TodoStatus) => {
    const updatedList = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          status,
        };
      }
      return todo;
    });

    setTodos(updatedList);
  };

  const handleDelete = (id: string) => {
    const updatedList = todos.filter((todo) => todo.id !== id);
    setTodos(updatedList);
  };

  return {
    handleAddTodo,
    handleUpdateStatus,
    handleDelete,
    todos,
  };
};
