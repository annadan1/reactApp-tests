import { screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithRoute from "../../tests/helpers/renderWithRoute.js";
import Counter from "./counter.js";

describe("test for counter", () => {
  test("increment", () => {
    renderWithRoute(<Counter />);
    const counterValue = screen.getByTestId("counter-value");
    expect(counterValue.textContent).toBe("0");
    const incrementButton = screen.getByTestId("plus");
    fireEvent.click(incrementButton);
    expect(screen.getByTestId("counter-value").textContent).toBe("1");
    fireEvent.click(incrementButton);
    expect(screen.getByTestId("counter-value").textContent).toBe("2");
  });
  test("decrement", () => {
    renderWithRoute(<Counter />);
    const counterValue = screen.getByTestId("counter-value");
    expect(counterValue.textContent).toBe("2");
    const decrementButton = screen.getByTestId("minus");
    fireEvent.click(decrementButton);
    expect(screen.getByTestId("counter-value").textContent).toBe("1");
    fireEvent.click(decrementButton);
    expect(screen.getByTestId("counter-value").textContent).toBe("0");
  });
  test("increment by amount", () => {
    renderWithRoute(<Counter />);
    const counterValue = screen.getByTestId("counter-value");
    expect(counterValue.textContent).toBe("0");

    const input = screen.getByTestId("input");
    userEvent.type(input, '10');
    const incrementButton = screen.getByTestId("plusByAmount");
    fireEvent.click(incrementButton);
    expect(screen.getByTestId("counter-value").textContent).toBe("10");

    //новое значение не введено, нажатие ничего не изменит
    fireEvent.click(incrementButton);
    expect(screen.getByTestId("counter-value").textContent).toBe("10");
  });
  test("decrement by amount", () => {
    renderWithRoute(<Counter />);
    const counterValue = screen.getByTestId("counter-value");
    expect(counterValue.textContent).toBe("10");

    const input = screen.getByTestId("input");
    userEvent.type(input, '10');
    const decrementButton = screen.getByTestId("minusByAmount");
    fireEvent.click(decrementButton);
    expect(screen.getByTestId("counter-value").textContent).toBe("0");

    //новое значение не введено, нажатие ничего не изменит
    fireEvent.click(decrementButton);
    expect(screen.getByTestId("counter-value").textContent).toBe("0");
  });
});
