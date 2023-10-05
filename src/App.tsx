import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import TestComponents from "./pages/testecomponents";
import Login from "./pages/login";
import { Container, LogoUVP } from "./theme/layout";
import { COLORS } from "./theme/colors";
import logo from "../src/assets/LogoAUVP.svg";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "testecomponents",
    element: <TestComponents />,
  },
  {
    path: "login",
    element: <Login />,
  },
]);

function App() {
  return (
    <Container
      display="flex"
      width="100vw"
      height="100vh"
      flexDirection="column"
      justifyContent="flex-start"
      backgroundColor={COLORS.dark}
      padding="2rem 0 0 0"
      gap="4rem"
    >
      <LogoUVP src={logo} />
      <RouterProvider router={router} />;
    </Container>
  );
}

export default App;
