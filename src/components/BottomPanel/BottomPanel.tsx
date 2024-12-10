import { FC } from "react";
import { clsx } from "clsx";
import { Button } from "@mui/material";
import { FilterType } from "../../types/common";
import styles from "./styles.module.scss";

type BottomPanelProps = {
  className?: string;
  filter: FilterType;
  todosCount: number;
  onChangeFilter: (filter: FilterType) => void;
  onClearCompleted: () => void;
};

export const BottomPanel: FC<BottomPanelProps> = ({
  onChangeFilter,
  onClearCompleted,
  filter,
  todosCount,
  className,
}) => {
  return (
    <div className={clsx(className, styles.root)}>
      <div>{todosCount} items left</div>
      <div className={styles.buttonsWrapper}>
        <Button
          className={clsx({
            [styles.active]: filter === "All",
          })}
          variant={filter === "All" ? "contained" : "outlined"}
          color="primary"
          onClick={() => onChangeFilter("All")}
          data-testid="allFilterButton"
        >
          All
        </Button>
        <Button
          variant={filter === "Active" ? "contained" : "outlined"}
          color="primary"
          className={clsx("filterButton", {
            [styles.active]: filter === "Active",
          })}
          onClick={() => onChangeFilter("Active")}
          data-testid="activeFilterButton"
        >
          Active
        </Button>
        <Button
          variant={filter === "Completed" ? "contained" : "outlined"}
          color="primary"
          className={clsx("filterButton", {
            [styles.active]: filter === "Completed",
          })}
          onClick={() => onChangeFilter("Completed")}
          data-testid="completedFilterButton"
        >
          Completed
        </Button>
      </div>
      <div>
        <Button
          variant="contained"
          color="warning"
          onClick={onClearCompleted}
          data-testid="clearCompletedButton"
        >
          Clear completed
        </Button>
      </div>
    </div>
  );
};
