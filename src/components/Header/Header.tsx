import { FC } from "react";
import styles from "./styles.module.scss";

export const Header: FC = () => {
  return (
    <header className={styles.root}>
      <h2>Todos</h2>
    </header>
  );
};
