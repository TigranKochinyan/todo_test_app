import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { TodoStatus } from "../../types/common";
import { TodoItem } from "./TodoItem";

describe("TodoItem Component", () => {
  test("test: render todo item", () => {
    render(
      <TodoItem
        title={"Goals are dreams with deadlines"}
        id="0"
        status={TodoStatus.ACTIVE}
        onDelete={() => {}}
        onChangeStatus={() => {}}
      />,
    );

    const todoTitle = screen.getByText(/Goals are dreams with deadlines/i);

    expect(todoTitle).toBeInTheDocument();
  });

  test("test: change status to completed", () => {
    const mockOnChangeStatus = jest.fn();

    render(
      <TodoItem
        title={"Goals are dreams with deadlines"}
        id="1"
        status={TodoStatus.ACTIVE}
        onDelete={() => {}}
        onChangeStatus={mockOnChangeStatus}
      />,
    );

    const changeStatusButton = screen.getByTestId("checkButton");
    expect(changeStatusButton).toBeInTheDocument();

    fireEvent.click(changeStatusButton);
    expect(mockOnChangeStatus).toHaveBeenCalledTimes(1);
  });

  test("test: change status to active", () => {
    const mockOnChangeStatus = jest.fn();

    render(
      <TodoItem
        title={"Hulk SMASH!!!"}
        id="2"
        status={TodoStatus.COMPLETED}
        onDelete={() => {}}
        onChangeStatus={mockOnChangeStatus}
      />,
    );

    const changeStatusButton = screen.getByTestId("replayButton");
    expect(changeStatusButton).toBeInTheDocument();

    fireEvent.click(changeStatusButton);
    expect(mockOnChangeStatus).toHaveBeenCalledTimes(1);
  });
});
