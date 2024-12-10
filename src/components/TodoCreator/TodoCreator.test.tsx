import { render, screen, fireEvent } from "@testing-library/react";
import { TodoCreator } from "./TodoCreator";

describe("TodoCreator Component", () => {
  test("test: renders TodoCreator", () => {
    render(<TodoCreator onAdd={() => {}} />);
    const addButton = screen.getByTestId("addButton");
    expect(addButton).toBeInTheDocument();
  });

  test("test: renders input and changes value", () => {
    render(<TodoCreator onAdd={() => {}} />);

    const input = screen.getByLabelText("Add Todo");
    expect(input).toBeInTheDocument();

    fireEvent.change(input, {
      target: { value: "test input" },
    });

    expect(input).toHaveValue("test input");
  });

  test("test: changes input and clicks the button", () => {
    const mockOnAdd = jest.fn();

    render(<TodoCreator onAdd={mockOnAdd} />);

    const input = screen.getByLabelText("Add Todo");
    const addButton = screen.getByTestId("addButton");
    expect(addButton).toBeInTheDocument();

    fireEvent.change(input, {
      target: { value: "test input" },
    });

    fireEvent.click(addButton);

    expect(input).toHaveValue("");
    expect(mockOnAdd).toHaveBeenCalledTimes(1);
  });
});
