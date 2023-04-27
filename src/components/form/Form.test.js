import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "./Form.js";

describe("test", () => {
  test("find elements", () => {
    render(<Form />);
    const linkElement = screen.getByText(/hello world/i);
    const btn = screen.getByRole("button");
    const input = screen.getByPlaceholderText(/type something/i);
    expect(linkElement).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  test("type new h1", () => {
    render(<Form />);
    const input = screen.getByPlaceholderText(/type something/i);
    const btn = screen.getByRole("button");
    fireEvent.input(input, { target: { value: "hello Anna" } });
    fireEvent.click(btn);
    expect(screen.queryByText(/hello world/i)).toBeNull();
    expect(screen.getByText(/hello Anna/i)).toBeInTheDocument();
  });

  test("form submit", () => {
    render(<Form />);
    const input = screen.getByPlaceholderText(/type something/i);
    const form = screen.getByTestId("form");
    fireEvent.input(input, { target: { value: "HEADER" } });
    fireEvent.submit(form);
    expect(screen.getByText(/HEADER/i)).toBeInTheDocument();
  });

  test("focus on input", () => {
    render(<Form />);
    const form = screen.getByTestId("form");
    const input = screen.getByPlaceholderText(/type something/i);
    userEvent.type(input, "header");
    fireEvent.submit(form);
    expect(screen.getByText(/header/i)).toBeInTheDocument();
  });
});
