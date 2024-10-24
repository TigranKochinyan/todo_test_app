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
        onAdd={() => {}}
        onDelete={() => {}}
        todos={[]}
        onChangeStatus={() => {}}
      />,
    );

    const emptyText = screen.getByText(/Tasks to do - 0/i);

    expect(emptyText).toBeInTheDocument();
  });

  test("test: delete todo", () => {
    const mockOnDelete = jest.fn();

    render(
      <ListTodo
        onAdd={() => {}}
        onDelete={mockOnDelete}
        todos={mockTodos}
        onChangeStatus={() => {}}
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
        onAdd={() => {}}
        onDelete={() => {}}
        todos={mockTodos}
        onChangeStatus={mockOnChangeStatus}
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
        onDelete={() => {}}
        todos={mockTodos}
        onChangeStatus={() => {}}
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
