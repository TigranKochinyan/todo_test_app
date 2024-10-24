export enum TodoStatus {
  ACTIVE = "active",
  COMPLETED = "completed",
}

export type Todo = {
  id: string;
  title: string;
  status: TodoStatus;
};
