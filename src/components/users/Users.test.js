import axios from "axios";
import { fireEvent, screen } from "@testing-library/react";
import renderWithRoute from "../../tests/helpers/renderWithRoute.js";

jest.mock("axios");

describe("test Users component", () => {
  let response;

  beforeEach(() => {
    response = {
      data: [
        {
          id: 1,
          name: "Leanne Graham",
        },
        {
          id: 2,
          name: "Ervin Howell",
        },
        {
          id: 3,
          name: "Clementine Bauch",
        },
        {
          id: 4,
          name: "Patricia Lebsack",
        },
      ],
    };
  });

  test("users in the document", async () => {
    axios.get.mockReturnValue(response);
    renderWithRoute(null, "/users");
    expect(axios.get).toBeCalledTimes(1);
    setTimeout(async () => {
      const users = await screen.findAllByTestId("user-item");
      expect(users.length).toBe(4);
      expect(users[0].textContent).toBe("Leanne Graham");
    }, 2000);
  });

  test("user in the document", async () => {
    axios.get.mockReturnValue(response);
    renderWithRoute(null, "/users");

    expect(axios.get).toBeCalledTimes(1);
    setTimeout(async () => {
      const users = await screen.findAllByTestId("user-item");
      fireEvent.click(users[0]);
      expect(screen.getByText("this is user details page")).toBeInTheDocument(); 
    }, 2000);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
