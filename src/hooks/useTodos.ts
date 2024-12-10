import { useState } from "react";
import { FilterType, Todo, TodoStatus } from "../types/common";
import { generateId } from "../utils/generateId";

export const useTodos = (initData: Todo[]) => {
  const [todos, setTodos] = useState<Todo[]>(initData);
  const [filter, setFilter] = useState<FilterType>("All");


  const handleAddTodo = (title: string) => {
    const newTodo: Todo = {
      title,
      status: TodoStatus.ACTIVE,
      id: generateId(),
    };
    setTodos([newTodo, ...todos]);
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

  const handleClearCompleted = () => {
    const updatedList = todos.filter((todo) => todo.status !== TodoStatus.COMPLETED);
    setTodos(updatedList);
  }

  const handleChangeFilter = (filter: FilterType) => {
    setFilter(filter);
  }

  return {
    todos,
    filter,
    handleAddTodo,
    handleUpdateStatus,
    handleDelete,
    handleClearCompleted,
    handleChangeFilter,
  };
};
