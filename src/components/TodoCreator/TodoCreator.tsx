import { ChangeEvent, FC, useState } from "react";
import clsx from "clsx";
import { Box, IconButton, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import styles from "./styles.module.scss";

type TodoCreatorProps = {
  className?: string;
  onAdd: (title: string) => void;
};

export const TodoCreator: FC<TodoCreatorProps> = ({ className, onAdd }) => {
  const [value, setValue] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleAddTodo = () => {
    onAdd(value);
    setValue("");
  };

  return (
    <Box className={clsx(className, styles.root)}>
      <TextField
        className={styles.input}
        fullWidth
        color="secondary"
        value={value}
        onChange={handleChange}
        label="Add Todo"
        variant="outlined"
      />

      <IconButton
        className={styles.addButton}
        data-testid="addButton"
        classes={{
          disabled: styles.disabled,
          root: styles.red,
          colorPrimary: styles.blue,
        }}
        onClick={handleAddTodo}
        disabled={!value}
        aria-label="add"
        type="button"
      >
        <AddIcon />
      </IconButton>
    </Box>
  );
};
