import AppRouter from "../../router/AppRouter.js";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import { store } from "../../store/store.js";
import { Provider } from "react-redux";

const renderWithRoute = (component, initialRourte = "/") => {
  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[initialRourte]}>
        <AppRouter />
        {component}
      </MemoryRouter>
    </Provider>
  );
};

export default renderWithRoute;
