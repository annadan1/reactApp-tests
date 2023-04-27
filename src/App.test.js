import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App.js";
import { MemoryRouter } from "react-router-dom";
import renderWithRoute from "./tests/helpers/renderWithRoute.js";

describe("test for router", () => {
  test("link to about page and main page", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const mainLink = screen.getByTestId("main-link");
    const aboutLink = screen.getByTestId("about-link");
    expect(mainLink.classList.contains("active")).toBeTruthy();
    expect(aboutLink.classList.contains("active")).toBeFalsy();
    expect(screen.getByText("this is main page")).toBeInTheDocument();
    fireEvent.click(aboutLink);
    expect(
      screen.queryByTestId("main-link").classList.contains("active")
    ).toBeFalsy();
    expect(
      screen.getByTestId("about-link").classList.contains("active")
    ).toBeTruthy();
    expect(screen.getByText("this is about page")).toBeInTheDocument();

    fireEvent.click(mainLink);
    expect(
      screen.getByTestId("main-link").classList.contains("active")
    ).toBeTruthy();
    expect(
      screen.queryByTestId("about-link").classList.contains("active")
    ).toBeFalsy();
    expect(screen.getByText("this is main page")).toBeInTheDocument();
  });

  test("render error page", () => {
    renderWithRoute(null, "/asdf");

    expect(screen.getByText("this page is not found")).toBeInTheDocument();
  });
});
