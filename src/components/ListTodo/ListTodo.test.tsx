import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { ListTodo } from "./ListTodo";
import { Todo, TodoStatus } from "../../types/common";

describe("TodoCreator Component", () => {
  const mockTodos: Todo[] = [
    { id: "test", status: TodoStatus.COMPLETED, title: "test todo" },
  ];

  test("test: renders ListTodo with empty todos", () => {
    render(
      <ListTodo
        todos={[]}
        filter="Completed"
        onAdd={() => {}}
        onDelete={() => {}}
        onChangeStatus={() => {}}
        onClearCompleted={() => {}}
        onChangeFilter={() => {}}
      />,
    );

    const emptyText = screen.getByText(/0 items left/i);

    expect(emptyText).toBeInTheDocument();
  });

  test("test: renders ListTodo with active filter", () => {
    render(
      <ListTodo
        todos={[]}
        filter="Active"
        onAdd={() => {}}
        onDelete={() => {}}
        onChangeStatus={() => {}}
        onClearCompleted={() => {}}
        onChangeFilter={() => {}}
      />,
    );

    const emptyText = screen.getByText(/0 items left/i);

    expect(emptyText).toBeInTheDocument();
  });

  test("test: clearCompleted function", () => {
    const mockClearCompleted = jest.fn();

    render(
      <ListTodo
        todos={[]}
        filter="Active"
        onAdd={() => {}}
        onDelete={() => {}}
        onChangeStatus={() => {}}
        onClearCompleted={mockClearCompleted}
        onChangeFilter={() => {}}
      />,
    );

    const clearCompletedButton = screen.getByTestId("clearCompletedButton");

    fireEvent.click(clearCompletedButton);

    expect(mockClearCompleted).toHaveBeenCalledTimes(1);
  });

  test("test: delete todo", () => {
    const mockOnDelete = jest.fn();

    render(
      <ListTodo
        todos={mockTodos}
        filter="Completed"
        onAdd={() => {}}
        onDelete={mockOnDelete}
        onChangeStatus={() => {}}
        onClearCompleted={() => {}}
        onChangeFilter={() => {}}
      />,
    );

    const deleteButton = screen.getByTestId("deleteButton");

    fireEvent.click(deleteButton);

    expect(mockOnDelete).toHaveBeenCalledTimes(1);
  });

  test("test: change todo status", () => {
    const mockOnChangeStatus = jest.fn();

    render(
      <ListTodo
        todos={mockTodos}
        filter="Completed"
        onAdd={() => {}}
        onDelete={() => {}}
        onChangeStatus={mockOnChangeStatus}
        onClearCompleted={() => {}}
        onChangeFilter={() => {}}
      />,
    );

    const changeStatusButton = screen.getByTestId("replayButton");

    expect(changeStatusButton).toBeInTheDocument();

    fireEvent.click(changeStatusButton);

    expect(mockOnChangeStatus).toHaveBeenCalledTimes(1);
  });

  test("test: add todo at first with empty input and with value", () => {
    const mockOnAdd = jest.fn();

    render(
      <ListTodo
        onAdd={mockOnAdd}
        filter="Completed"
        onDelete={() => {}}
        todos={mockTodos}
        onClearCompleted={() => {}}
        onChangeStatus={() => {}}
        onChangeFilter={() => {}}
      />,
    );

    const addButton = screen.getByTestId("addButton");
    expect(addButton).toBeInTheDocument(); // test if button is exist

    fireEvent.click(addButton); // try to add task with empty input (shuldn't called)
    expect(mockOnAdd).toHaveBeenCalledTimes(0);

    const input = screen.getByLabelText("Add Todo");

    fireEvent.change(input, {
      target: { value: "test input" },
    });
    fireEvent.click(addButton); // try to add task
    expect(mockOnAdd).toHaveBeenCalledTimes(1);
  });
});
