import { Route, Routes } from "react-router-dom";
import AboutPage from "../pages/AboutPage.js";
import MainPage from "../pages/MainPage.js";
import FormPage from "../pages/FormPage.js";
import UsersPage from "../pages/UsersPage.js";
import ErrorPage from "../pages/ErrorPage.js";
import UserDetailsPage from "../pages/UserDetailsPage.js";
import CounterPage from "../pages/CounterPage.js";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/form" element={<FormPage />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/users/:id" element={<UserDetailsPage />} />
      <Route path="/*" element={<ErrorPage />} />
      <Route path="/counter" element={<CounterPage />} />
    </Routes>
  );
};

export default AppRouter;
