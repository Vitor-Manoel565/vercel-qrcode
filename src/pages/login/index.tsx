import { Container } from "../../theme/layout";
import { COLORS } from "../../theme/colors";
import { Input } from "../../components/Input";
import { useState } from "react";
import { Button } from "../../components/Button";
import { useAuth } from "../../hooks/useAuth";
import { toast } from "react-toastify";

export default function Login() {
  const [userLogin, setUserLogin] = useState({
    user: "",
    password: "",
  });
  const { getAdminToken } = useAuth();
  return (
    <Container
      position="relative"
      display="flex"
      width="80%"
      height="60%"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      borderRadius="16px"
      minHeight="450px"
      minWidth="300px"
      backgroundColor={COLORS.light}
    >
      <Input
        value={userLogin.user}
        onChange={(e) => setUserLogin({ ...userLogin, user: e.target.value })}
        placeholder="Usuário:"
        type="text"
        width="80%"
      />
      <Input
        value={userLogin.password}
        onChange={(e) =>
          setUserLogin({ ...userLogin, password: e.target.value })
        }
        placeholder="Senha:"
        type="password"
        width="80%"
      />
      <Container
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        height="auto"
        width="100%"
        top="95%"
      >
        <Button
          width="60%"
          minWidth="0"
          onClick={async () => {
            try {
              await getAdminToken(userLogin.user, userLogin.password);
              toast.success("Login realizado com sucesso!");
            } catch (error) {
              toast.error("Erro ao realizar login!");
            }
          }}
          text="Entrar"
        />
      </Container>
    </Container>
  );
}
