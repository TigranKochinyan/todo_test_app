import { FC } from "react";
import clsx from "clsx";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CheckIcon from "@mui/icons-material/Check";
import ReplayIcon from "@mui/icons-material/Replay";

import { Todo, TodoStatus } from "../../types/common";
import styles from "./styles.module.scss";

type TodoItemProps = Todo & {
  className?: string;
  onDelete: (id: string) => void;
  onChangeStatus: (id: string, status: TodoStatus) => void;
};

export const TodoItem: FC<TodoItemProps> = ({
  className,
  id,
  status,
  title,
  onChangeStatus,
  onDelete,
}) => {
  const handleChangeStatus = () => {
    const changedStatus =
      status === TodoStatus.COMPLETED
        ? TodoStatus.ACTIVE
        : TodoStatus.COMPLETED;
    onChangeStatus(id, changedStatus);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className={clsx(styles.root, className)}>
      {status === TodoStatus.COMPLETED ? <del>{title}</del> : <p>{title}</p>}

      <div className={styles.actions}>
        {status === TodoStatus.COMPLETED ? (
          <ReplayIcon
            data-testid="replayButton"
            className={styles.icon}
            onClick={handleChangeStatus}
          />
        ) : (
          <CheckIcon
            data-testid="checkButton"
            className={styles.icon}
            onClick={handleChangeStatus}
          />
        )}

        <DeleteOutlineIcon
          data-testid="deleteButton"
          className={styles.icon}
          onClick={handleDelete}
        />
      </div>
    </div>
  );
};
