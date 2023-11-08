import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import TestComponents from "./pages/testecomponents";
import Login from "./pages/login";
import { Container, LogoUVP, Navbar } from "./theme/layout";
import { COLORS } from "./theme/colors";
import logo from "../src/assets/new-logo.png";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "./components/Button";
import Painel from "./pages/painel";
import { useUserData } from "./hooks/useUser";
import "@radix-ui/themes/styles.css";

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
  {
    path: "painel",
    element: <Painel />,
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
  {
    path: "/painel",
  },
];

function App() {
  const { getAllUsers } = useUserData();
  const token = localStorage.getItem("auvp@qrcodeapp");
  const _path = window.location.pathname;

  if (!token && privateRouter.some((route) => route.path === _path)) {
    router.navigate("/login");
  }

  if (_path === "/") {
    router.navigate("/home");
  }

  const getUsers = async () => {
    try {
      const users = await getAllUsers();
      return;
    } catch (error) {
      console.log(error);

      toast.error("Erro ao buscar usuários");
    }
  };

  useEffect(() => {
    getUsers();
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
      <Navbar>
        <Container width="fit-content" display="flex">
          <LogoUVP src={logo} />
        </Container>

        <Container width="fit-content" display="flex" gap="1rem">
          {token && (
            <>
              <Button
                width="fit-content"
                minWidth="100px"
                text="PAINEL"
                onClick={() => router.navigate("/painel")}
              />
              <Button
                width="fit-content"
                minWidth="120px"
                text="VALIDAR INGRESSO"
                onClick={() => router.navigate("/home")}
              />
            </>
          )}
        </Container>
      </Navbar>
      <RouterProvider router={router} />;
    </Container>
  );
}

export default App;
