import { Box, Stack } from "@mui/material";
import React, { FC, useMemo } from "react";
import clsx from "clsx";

import { Todo, TodoStatus } from "../../types/common";
import { TodoItem } from "../TodoItem";
import { TodoCreator } from "../TodoCreator";

import styles from "./styles.module.scss";

type ListTodoProps = {
  className?: string;
  todos: Todo[];
  onDelete: (id: string) => void;
  onChangeStatus: (id: string, status: TodoStatus) => void;
  onAdd: (title: string) => void;
};

export const ListTodo: FC<ListTodoProps> = ({
  className,
  todos,
  onDelete,
  onChangeStatus,
  onAdd,
}) => {
  const completedTasks = useMemo(() => {
    return todos.filter((todo) => todo.status === TodoStatus.COMPLETED);
  }, [todos]);

  const todoTasks = useMemo(() => {
    return todos.filter((todo) => todo.status === TodoStatus.ACTIVE);
  }, [todos]);

  return (
    <Box className={clsx(styles.root, className)}>
      <TodoCreator onAdd={onAdd} />

      <Stack spacing={2}>
        <p>Tasks to do - {todoTasks.length}</p>

        {todoTasks.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              onChangeStatus={onChangeStatus}
              onDelete={onDelete}
              {...todo}
            />
          );
        })}

        <hr />

        <p>Completed - {completedTasks.length}</p>

        {completedTasks.map((todo) => {
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
    </Box>
  );
};
