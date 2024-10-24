import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("TodoItem Component", () => {
  test("test: add todo", () => {
    render(<App />);

    const addButton = screen.getByTestId("addButton");
    const input = screen.getByLabelText("Add Todo");

    expect(addButton).toBeInTheDocument();

    fireEvent.change(input, {
      target: { value: "Antonio Banderos" },
    });
    fireEvent.click(addButton); // try to add task

    const newTodo = screen.getByText(/Antonio Banderos/i); // find new item

    expect(newTodo).toBeInTheDocument();
  });

  test("test: change todo status to active", () => {
    render(<App />);

    const changeStatusButtons = screen.getAllByTestId("replayButton"); // checkButton

    expect(changeStatusButtons[0]).toBeInTheDocument();
    fireEvent.click(changeStatusButtons[0]);
  });

  test("test: change todo status to completed", () => {
    render(<App />);

    const changeStatusButton = screen.getAllByTestId("checkButton");

    expect(changeStatusButton[0]).toBeInTheDocument();
    fireEvent.click(changeStatusButton[0]);
  });

  test("test: delete todo", () => {
    render(<App />);

    const deleteButtons = screen.getAllByTestId("deleteButton");
    expect(deleteButtons).toHaveLength(3);

    fireEvent.click(deleteButtons[0]);
    const todos = screen.getAllByTestId("deleteButton");
    expect(todos).toHaveLength(2);
  });
});
