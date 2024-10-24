import React from "react";
import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

describe("Header Component", () => {
  test("renders Header component and title", () => {
    render(<Header />);
    const title = screen.getByText(/Todos/i);
    expect(title).toBeInTheDocument();
  });
});
