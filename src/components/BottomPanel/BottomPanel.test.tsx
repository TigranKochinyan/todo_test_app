import { render, screen, fireEvent } from "@testing-library/react";
import { BottomPanel } from "./BottomPanel";

describe("Bottom Panel Component", () => {
  test("renders Bottom Panel component with 0 todo", () => {
    render(
      <BottomPanel
        filter="All"
        onChangeFilter={() => {}}
        onClearCompleted={() => {}}
        todosCount={0}
      />
    );
    const leftText = screen.getByText(/0 items left/i);
    expect(leftText).toBeInTheDocument();
  });

  test("renders Bottom Panel component with Active filter", () => {
    render(
      <BottomPanel
        filter="Active"
        onChangeFilter={() => {}}
        onClearCompleted={() => {}}
        todosCount={0}
      />
    );
    const leftText = screen.getByText(/0 items left/i);
    expect(leftText).toBeInTheDocument();
  });


  test("renders Bottom Panel component with Completed filter and 2 todos", () => {
    render(
      <BottomPanel
        filter="Completed"
        onChangeFilter={() => {}}
        onClearCompleted={() => {}}
        todosCount={2}
      />
    );
    const leftText = screen.getByText(/2 items left/i);
    expect(leftText).toBeInTheDocument();
  });

  test("test: change filter", () => {
    const mockChangeFilter = jest.fn();

    render(
      <BottomPanel
        filter="Completed"
        onChangeFilter={mockChangeFilter}
        onClearCompleted={() => {}}
        todosCount={2}
      />
    );
    
    const filterAllButton = screen.getByTestId("allFilterButton");
    const filterActiveButton = screen.getByTestId("activeFilterButton");
    const filterCompletedButton = screen.getByTestId("completedFilterButton");
    
    fireEvent.click(filterActiveButton);
    fireEvent.click(filterAllButton);
    fireEvent.click(filterCompletedButton);

    expect(mockChangeFilter).toHaveBeenCalledTimes(3);

  });


});
