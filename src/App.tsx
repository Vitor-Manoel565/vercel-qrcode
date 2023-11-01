import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import TestComponents from "./pages/testecomponents";
import Login from "./pages/login";
import { Container, LogoUVP } from "./theme/layout";
import { COLORS } from "./theme/colors";
import logo from "../src/assets/new-logo.png";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "",
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

const privateRouter = [
  {
    path: "/testecomponents",
  },
  {
    path: "/home",
  },
  {
    path: "/",
  },
];

function App() {
  useEffect(() => {
    const _token = localStorage.getItem("auvp@qrcodeapp");
    const _path = window.location.pathname;
    const isMatch = privateRouter.find((route) => route.path === _path);

    if (!_token && isMatch) {
      router.navigate("/login");
    }
  }, []);

  return (
    <Container
      display="flex"
      width="100vw"
      height="100vh"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      backgroundColor={COLORS.dark}
      padding="2rem 0 0 0"
    >
      <ToastContainer />
      <LogoUVP src={logo} />
      <RouterProvider router={router} />;
    </Container>
  );
}

export default App;
