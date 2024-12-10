import { FC, useMemo } from "react";
import { Box, Stack } from "@mui/material";
import clsx from "clsx";

import { FilterType, Todo, TodoStatus } from "../../types/common";
import { TodoItem } from "../TodoItem";
import { TodoCreator } from "../TodoCreator";
import { BottomPanel } from "../BottomPanel";

import styles from "./styles.module.scss";

type ListTodoProps = {
  className?: string;
  todos: Todo[];
  filter: FilterType;
  onDelete: (id: string) => void;
  onChangeStatus: (id: string, status: TodoStatus) => void;
  onAdd: (title: string) => void;
  onClearCompleted: () => void;
  onChangeFilter: (filter: FilterType) => void;
};

export const ListTodo: FC<ListTodoProps> = ({
  className,
  todos,
  filter,
  onDelete,
  onChangeStatus,
  onAdd,
  onClearCompleted,
  onChangeFilter,
}) => {
  const filteredTodos = useMemo(() => {
    if (filter === "Active")
      return todos.filter((todo) => todo.status === TodoStatus.ACTIVE);
    if (filter === "Completed")
      return todos.filter((todo) => todo.status === TodoStatus.COMPLETED);
    return todos;
  }, [filter, todos]);

  const handleAddTodo = (title: string) => {
    if (filter === "Completed") {
      onChangeFilter("All");
    }
    onAdd(title);
  };

  const handleClearCompleted = () => {
    onClearCompleted();
    onChangeFilter("All");
  };

  return (
    <Box className={clsx(styles.root, className)}>
      <TodoCreator onAdd={handleAddTodo} />

      <Stack spacing={2} className={styles.todosWrapper}>
        {filteredTodos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              onChangeStatus={onChangeStatus}
              onDelete={onDelete}
              {...todo}
            />
          );
        })}
      </Stack>

      <BottomPanel
        filter={filter}
        todosCount={filteredTodos.length}
        onChangeFilter={onChangeFilter}
        onClearCompleted={handleClearCompleted}
      />
    </Box>
  );
};
