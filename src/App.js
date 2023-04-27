import "./App.css";

import AppRouter from "./router/AppRouter.js";
import Navbar from "./components/navbar/Navbar.js";


function App() {
  return (
    <>
        <Navbar />
        <AppRouter />
    </>
  );
}

export default App;
